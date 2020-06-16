const {Films} = require('../../models')
const { Op } = require("sequelize")

module.exports = {
    getAllFilm: async (req,res) => {
        try {
            const result = await Films.findAll({})
            res.status(200).json({
                message: "Get all data from table film",
                data: result
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    getPopulerFilm: async (req,res) => {
        try {
            const result = await Films.findAll({
                where: { 
                    user_rating: {
                        [Op.gt]: 6.9 
                    } 
                }
            })
            res.status(200).json({
                message: "Get Film data by popularity",
                data: result
            })
        } catch (error) {
            console.log(error);
        }
    },
    getNewFilm: async (req,res) => {
        const date = new Date()
        console.log(date.getFullYear() + 1, "ini log date")
        
        try {
            const result = await Films.findAll({
                where: {
                    year: { 
                        [Op.gte]: date.getFullYear(),
                        [Op.lt]: date.getFullYear() + 1
                    }
                }
            })
            res.status(200).json({
                message: "Get New Film",
                data: result
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    getSoonFilm: async (req,res) => {
        const date = new Date()
        try {
            const result = await Films.findAll({
                where: {
                    year: {
                        [Op.gt]: date.getFullYear() 
                    }
                }
            })
            res.status(200).json({
                message: "Get Comming Soon Film",
                data: result
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    
}