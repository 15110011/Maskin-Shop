var sequelize = require('./db').connection
var Sequelize = require('sequelize')

var Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    oldprice:{
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    detail: {
        type: Sequelize.STRING,
        allowNull: true
    },
    manufacturer:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
Product.sync()
    .then(() => console.log("Product database has been synced"))
    .catch((err) => console.log("Error creating Product database"))

module.exports = Product
