import express from 'express'
import TodoController from '../controllers/TodoController'

const router = express.Router()

router.get('/todos',TodoController.getAll)

router.post('/addtodo',TodoController.create)

export default router;