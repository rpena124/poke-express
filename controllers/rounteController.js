const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

//IDEX
router.get('/',dataController.index , viewController.index)
//NEW
router.get('/new', viewController.newView)
//DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//UPDATE
router.put('/:id', dataController.update, viewController.show)
//CREATE
router.post('/', dataController.create, viewController.redirectShow)
//EDIT
router.get('/:id/edit',dataController.show,viewController.edit)
//SHOW
router.get('/:id', dataController.show, viewController.show)

module.exports = router