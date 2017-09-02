const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/teste', (req, res, next) => {
  const data = { title: 'TESTE', course: 'Pos Alfa' }
  res.render('index', data )
})


module.exports = router
