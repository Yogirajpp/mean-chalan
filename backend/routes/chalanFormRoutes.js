const express = require('express')
const { getAllChalanForm, addChalanForm } = require('../controllers/chalanFormControllers')


const router = express.Router()

// GET all forms
router.get('/', getAllChalanForm)

//GET a single form
router.get('/:id', addChalanForm)

// // POST a new form
// router.post('/', createChalanForm)

// // DELETE a form
// router.delete('/:id', deleteChalanForm)

// // UPDATE a form
// router.patch('/:id', updateChalanForm)

module.exports = router