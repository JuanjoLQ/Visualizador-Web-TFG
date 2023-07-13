import mysql.connector
import json
from datetime import datetime

def bd():
    # Crea una conexión con la base de datos
    conn = mysql.connector.connect(
        user="root",
        password="TFG_ERP_C#",
        port="3306",
        database="mydb"
    )

    # Se crea un cursor para realizar la consulta
    cursor = conn.cursor()

    # Lista de tablas
    table_list = ['User', 'Department', 'Sales','Customer','Warehouses', 'Role']

    # Conexión a la base de datos
    # db = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    # Consulta para obtener el número de filas de cada tabla
    result = {}
    for table_name in table_list:
        cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
        row_count = cursor.fetchone()[0]
        result[table_name] = row_count

    # Cerrar la conexión a la base de datos
    cursor.close()

    # Imprimir resultado
    result_json = json.dumps(result, indent=4)
    # print(result_json)
    return result_json

def productsxwarehouses():
    # Crea una conexión con la base de datos
    conn = mysql.connector.connect(
        user="root",
        password="TFG_ERP_C#",
        port="3306",
        database="mydb"
    )

    # Se crea un cursor para realizar la consulta
    cursor = conn.cursor()

    # Se realiza la consulta SELECT
    cursor.execute('SELECT w.Name as name, '
    'COUNT(p.Warehouses_idWarehouses) AS value '
    'FROM Warehouses w LEFT JOIN Product p ON w.idWarehouses = p.Warehouses_idWarehouses '
    'GROUP BY w.idWarehouses, w.Name;')

    # Se obtienen los resultados de la consulta
    results = cursor.fetchall()

    # Convertir los resultados en un objeto JSON
    json_results = json.dumps([{
        column[0]: format_datetime(row[i]) if isinstance(row[i], datetime) else row[i]
        for i, column in enumerate(cursor.description)
    } for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()

    return json_results

def productsvaluexwarehouses():
    # Crea una conexión con la base de datos
    conn = mysql.connector.connect(
        user="root",
        password="TFG_ERP_C#",
        port="3306",
        database="mydb"
    )

    # Se crea un cursor para realizar la consulta
    cursor = conn.cursor()

    # Se realiza la consulta SELECT
    cursor.execute('SELECT w.Name as name, '
    'SUM(CASE WHEN p.State = "Stored" THEN p.PricePerUnit * p.Amount ELSE 0 END) '
    'AS Store, SUM(CASE WHEN p.State = "Sold" '
    'THEN p.PricePerUnit * p.Amount ELSE 0 END) AS Sold FROM Warehouses w '
    'LEFT JOIN Product p ON w.idWarehouses = p.Warehouses_idWarehouses '
    'GROUP BY w.idWarehouses, w.Name;')

    # Se obtienen los resultados de la consulta
    results = cursor.fetchall()

    # Convertir los resultados en un objeto JSON
    json_results = json.dumps([{
        column[0]: format_datetime(row[i]) if isinstance(row[i], datetime) else row[i]
        for i, column in enumerate(cursor.description)
    } for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()
    # print(json_results)

    return json_results