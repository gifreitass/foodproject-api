import { Router } from "express";
import { RestaurantesController } from "../controllers/restaurantes";

const router = Router()

router.get('/', (_, res) => {
    res.send('Hello')
})

//adicionar middleware e controllers
router.post('/restaurantes', RestaurantesController.create)
router.get('/restaurantes', RestaurantesController.getAll)
router.get('/restaurantes/:id', RestaurantesController.getById)
router.put('/restaurantes/:id')
router.delete('/restaurantes/:id', RestaurantesController.deleteById)

router.post('/produtos')
router.get('/produtos')
router.get('/produtos/:id')
router.put('/produtos/:id')
router.delete('/produtos/:id')

export { router }