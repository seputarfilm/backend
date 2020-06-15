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
    }
    
}