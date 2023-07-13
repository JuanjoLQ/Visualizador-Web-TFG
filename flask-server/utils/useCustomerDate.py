import mysql.connector
import json
from datetime import datetime

def format_datetime(dt):
    return dt.strftime("%Y-%m-%d")

def useCustomersDate():
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
    cursor.execute('SELECT DATE(date) AS name, COUNT(*) AS Clientes FROM Customer GROUP BY DATE(date) ORDER BY DATE(date) ASC;')

    # Se obtienen los resultados de la consulta
    results = cursor.fetchall()

    # Convertir los resultados en un objeto JSON
    json_results = json.dumps([{
        'name': format_datetime(row[0]),
        'Clientes': row[1]
    } for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()
    # print(json_results)

    return json_results
# useCustomersxType()