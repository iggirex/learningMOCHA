const express = require('express')
const router = express.Router()

//refactoring by making middleware
//this middleware validates the route inputs
router.post('/add', (req, es, next) => {
  if(!req.body.num1 && !req.body.num2) return res.status(432).json({message: 'No data fool'})
    next()
})

router.post('/subtract', (req, res, next) => {
  res.json({result: req.body.num1 - req.body.num2})
})



// router.post('/add', (req, res, next) => {
//   if(!req.body.num1 && !req.body.num2) return res.status(432).json({message: 'No data fool'})
//
//   res.json({result: req.body.num1 + req.body.num2})
// })

//separated routes for calclation
router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2})
})

module.exports = router
