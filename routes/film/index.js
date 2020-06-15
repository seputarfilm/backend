const express = require('express')
const router = express.Router()

const {getAllFilm, getPopulerFilm} = require('./controller')

router.get('/',getAllFilm)
router.get('/populer',getPopulerFilm)

module.exports = router