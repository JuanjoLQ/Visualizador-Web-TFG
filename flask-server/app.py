from flask import Flask, request
from flask_cors import CORS

from utils import useSales
from utils import counts
from utils import useMileagexSubcategory
from utils import useCustomersxType
from utils import useCustomerDate

app = Flask(__name__)
CORS(app)

# Members API Route

@app.route('/Sales/filter=useSales')
def UseSales():
    print("get useSales")
    return useSales.useSales()

@app.route('/Warehouses/filter=useProductsValuexWarehouses')
def Productsvaluexwarehouses():
    print("get productsvaluexwarehouses")
    return counts.productsvaluexwarehouses()

@app.route('/Mileage/filter=useMileagexSubcategoryMileage')
def UseMileagexSubcategoryMileage():
    print("get useMileagexSubcategoryMileage")
    return useMileagexSubcategory.mileagesxsubcategory()

@app.route('/Customer/filter=useCustomersxType')
def UseCustomersxType():
    print("get useCustomersxType")
    return useCustomersxType.useCustomersxType()

@app.route('/Customer/filter=useCustomersDate')
def UseCustomersDate():
    print("get useCustomersDate")
    return useCustomerDate.useCustomersDate()

@app.route('/countBD')
def countBD():
    print("get countBD")
    return counts.bd()

@app.route("/")
def index():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=True)
