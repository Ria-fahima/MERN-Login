const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
},  {
    writeConcern: {
       w: 'majority',
       j: true,
       wtimeout: 1000
    }
 })

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel