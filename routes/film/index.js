const express = require('express')
const router = express.Router()

const {getAllFilm} = require('./controller')

router.get('/',getAllFilm)

module.exports = router