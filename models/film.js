const Sequelize = require("sequelize")
const {db} = require("../config")

const Films = db.define('film', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    film_rating: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    user_rating: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    directors: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    actors: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    review: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})

module.exports = Films