import mysql.connector
import json
from datetime import datetime

def format_datetime(dt):
    return dt.strftime("%Y-%m-%d")

def useSales():
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
    cursor.execute("SELECT DATE_FORMAT(Sales.Date, '%Y-%m-%d') AS name, SUM(Product.PricePerUnit * Product.Amount) AS Ventas FROM Sales INNER JOIN Product ON Sales.idSale = Product.Sales_idSale1 WHERE Product.State = 'Sold' GROUP BY name")

# SELECT DATE_FORMAT(Sales.Date, '%Y-%m-%d') AS name, SUM(Product.PricePerUnit * Product.Amount) AS Ventas
# FROM Sales
# INNER JOIN Product ON Sales.idSale = Product.Sales_idSale1
# WHERE Product.State = 'Sold'
# GROUP BY name
    # Se obtienen los resultados de la consulta
    results = cursor.fetchall()

    # Convertir los resultados en un objeto JSON
    json_results = json.dumps([{
        'name': row[0],
        'Ventas': row[1]
    } for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()

    return json_results
