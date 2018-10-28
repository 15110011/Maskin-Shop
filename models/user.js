var sequelize = require('./db').connection
var Sequelize = require('sequelize')

var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
User.sync()
    .then(() => console.log("User database has been synced"))
    .catch((err) => console.log("Error creating User database"))

module.exports = User
