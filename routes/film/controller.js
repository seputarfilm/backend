const {Films} = require('../../models')

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
    
}