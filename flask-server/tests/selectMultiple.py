import pyodbc
from flask import jsonify

# Fecha tiene formato YYYY-MM-DD
def selectMultiple(fecha, cerradora):
    # Establecer conexión a la BBDD
    conn = pyodbc.connect('Driver={SQL Server};'
                          'Server=localhost\SQLEXPRESS;'
                          'Database=hida;'
                          'Trusted_Connection=yes;'
                          )

    # Crear un objeto cursor para ejecutar consultas
    cursor = conn.cursor()
    # En este caso filtramos según fecha
    # date = '2023-01-27'

    # Campos a rellenar por la query SQL

    # Nombre del producto
    producto = ""
    # Formato del producto
    formato = ""
    # Id de la orden de fabricación
    Of = 0
    # Fecha
    fechas = []
    # Hora
    horas = []
    # Unidades totales de OF a fabricar
    udsOF = 0
    # Unidades reales fabricadas
    udsReales = []
    # BPM (Botes por minuto) OF
    bpmOF = 0
    # BPM (Botes por minuto) Real
    bpmReal = []
    # Hora teórica de inicio de producción
    horaInicioOF = []
    # Hora de inicio real de producción
    horaInicioReal = []
    # Hora teórica de final de producción
    horaFinalOF = []
    # Hora final real de producción
    horaFinalReal = []
    # Porcentaje de paradas reales
    porcentajeParadasTotales = []
    # Porcentaje paradas sin producto
    porcentajeParadasSinProducto = []
    porcentajeParadasEntradas = []
    porcentajeParadasSalidas = []    
    porcentajeParadasTapas = []    
    porcentajeParadasTemperatura = []    
    porcentajeParadasCerradoras = []    
    porcentajeParadasTotalesExceptoProducto = []    
    porcentajeParadasObjetivoOF = []

    # Campos a calcular a partir de los valores obtenidos de la query SQL
    diferenciaHoraInicio = []
    diferenciaHoraFin = []
    BPHReal = []
    BPHOF = 0

    # nombre_columna = re.sub(r'(\d+)', r'_\1', cerradora)
    nombre_columna = cerradora
    print("Nombre columna: " + str(nombre_columna)) # Cerradora_2

    # nombre_columna = 'Cerradora_2'
    
    # date = '2022-03-15'
    # Ejecutar una consulta SELECT 25 datos de la base de datos
    query = "SELECT Fecha, Hora, {0}_Producto, {0}_Formato, {0}_OF, {0}_Unidades_OF, {0}_Unidades_Reales, " \
        "{0}_BPM_OF, {0}_BPM_Reales, {0}_Hora_Inicio_OF, {0}_Hora_Inicio_Real, {0}_Hora_Fin_OF, {0}_Hora_Fin_Real, " \
        "{0}_Porcentaje_Paradas_Totales, {0}_Porcentaje_Paradas_Sin_producto, {0}_Porcentaje_Paradas_Entrada, " \
        "{0}_Porcentaje_Paradas_Salida, {0}_Porcentaje_Paradas_Tapas, {0}_Porcentaje_Paradas_Temperatura, " \
        "{0}_Porcentaje_Paradas_Cerradora, {0}_Porcentaje_Paradas_Totales_Excepto_Producto, {0}_Porcentaje_Paradas_Objetivo_OF " \
        "FROM Query WHERE Fecha = '{1}' AND {0}_Producto IS NOT NULL ORDER BY Hora ASC;".format(nombre_columna, fecha)

    cursor.execute(query)
    
    for row in cursor:
        # print("Fecha: " + str(row.Hora) + ", Uds. reales: " + str(row.Cerradora_2_Unidades_Reales))
        fechas.append(str(row.Fecha))
        horas.append(str(row.Hora))
        producto = getattr(row, f"{nombre_columna}_Producto")
        formato = getattr(row, f"{nombre_columna}_Formato")
        Of = getattr(row, f"{nombre_columna}_OF")
        udsOF = getattr(row, f"{nombre_columna}_Unidades_OF")
        udsReales.append(getattr(row, f"{nombre_columna}_Unidades_Reales"))
        bpmOF = getattr(row, f"{nombre_columna}_BPM_OF")
        bpmReal.append(getattr(row, f"{nombre_columna}_BPM_Reales"))
        horaInicioOF.append(getattr(row, f"{nombre_columna}_Hora_Inicio_OF"))
        horaInicioReal.append(getattr(row, f"{nombre_columna}_Hora_Inicio_Real"))
        horaFinalOF.append(getattr(row, f"{nombre_columna}_Hora_Fin_OF"))
        horaFinalReal.append(getattr(row, f"{nombre_columna}_Hora_Fin_Real"))

        porcentajeParadasTotales.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Totales"))
        porcentajeParadasSinProducto.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Sin_producto"))
        porcentajeParadasEntradas.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Entrada"))

        porcentajeParadasSalidas.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Salida"))
        porcentajeParadasTapas.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Tapas"))
        porcentajeParadasTemperatura.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Temperatura"))
        porcentajeParadasCerradoras.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Cerradora"))
        porcentajeParadasTotalesExceptoProducto.append(
            getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Totales_Excepto_Producto"))
        porcentajeParadasObjetivoOF.append(getattr(row, f"{nombre_columna}_Porcentaje_Paradas_Objetivo_OF"))

    # Cerrar conexión
    conn.close()

    # Manipulación de datos

    # Se guardan los valores en un JSON
    case_list = []
    for i in range(0, len(fechas)):
        case = {'Fecha': fechas[i], 'Hora': horas[i], nombre_columna + '_Producto': producto, nombre_columna + '_Formato': formato,
            nombre_columna + '_OF': Of, nombre_columna + '_Unidades_OF': udsOF, nombre_columna + '_Unidades_Reales': udsReales[i],
            nombre_columna + '_Porcentaje_Unidades': "calcular", nombre_columna + '_BPM_OF':  bpmOF, nombre_columna + '_BPM_Reales': bpmReal[i], 
            nombre_columna + '_Hora_Inicio_OF': horaInicioOF[i], nombre_columna + '_Hora_Inicio_Real': horaInicioReal[i],
            nombre_columna + '_Diferencia_Hora_Inicio': "calcular", nombre_columna + '_Hora_Fin_OF': horaFinalOF[i],
            nombre_columna + '_Hora_Fin_Real': horaFinalReal[i], nombre_columna + '_Diferencia_Hora_Fin': "calcular", 
            nombre_columna + '_Porcentaje_Paradas_Totales': porcentajeParadasTotales[i], 
            nombre_columna + '_Porcentaje_Paradas_Sin_producto': porcentajeParadasSinProducto[i], 
            nombre_columna + '_Porcentaje_Paradas_Entrada': porcentajeParadasEntradas[i],
            nombre_columna + '_Porcentaje_Paradas_Salida': porcentajeParadasSalidas[i], 
            nombre_columna + '_Porcentaje_Paradas_Tapas': porcentajeParadasTapas[i], 
            nombre_columna + '_Porcentaje_Paradas_Temperatura': porcentajeParadasTemperatura[i],
            nombre_columna + '_Porcentaje_Paradas_Cerradora': porcentajeParadasCerradoras[i],
            nombre_columna + '_Porcentaje_Paradas_Totales_Excepto_Producto': porcentajeParadasTotalesExceptoProducto[i],
            nombre_columna + '_Porcentaje_Paradas_Objetivo_OF': porcentajeParadasObjetivoOF[i],
        }
        case_list.append(case)
    if len(case_list) > 0:
        print("Longitud de registros encontrados: " + str(len(case_list)))
        return jsonify(case_list)
    else:
        response = {'mensaje': 'No se encontraron resultados para la fecha especificada'}
        return jsonify(response)
