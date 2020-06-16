const express = require('express')
const router = express.Router()

const {getAllFilm, getPopulerFilm, getNewFilm, getSoonFilm} = require('./controller')

router.get('/',getAllFilm)
router.get('/populer',getPopulerFilm)
router.get('/new', getNewFilm)
router.get('/soon',getSoonFilm)

module.exports = router