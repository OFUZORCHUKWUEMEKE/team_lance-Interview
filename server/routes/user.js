const { getUsers }  = require('../controllers/user')

const router = require('express').Router()

router.get('/',getUsers)

module.exports = router