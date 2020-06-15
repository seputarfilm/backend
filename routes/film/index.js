const express = require('express')
const router = express.Router()

const {getAllFilm, getPopulerFilm, getNewFilm} = require('./controller')

router.get('/',getAllFilm)
router.get('/populer',getPopulerFilm)
router.get('/new', getNewFilm)

module.exports = router