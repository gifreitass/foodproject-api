import { Router } from "express";
import { RestaurantesController } from "../controllers/restaurantes";
import { ProdutosController } from "../controllers/produtos";

const router = Router()

router.get('/', (_, res) => {
    res.send('Hello')
})

//adicionar middleware e controllers
router.post('/restaurantes', RestaurantesController.create)
router.get('/restaurantes', RestaurantesController.getAll)
router.get('/restaurantes/:id', RestaurantesController.getById)
router.put('/restaurantes/:id', RestaurantesController.updateById)
router.delete('/restaurantes/:id', RestaurantesController.deleteById)

router.post('/produtos', ProdutosController.create)
router.get('/produtos', ProdutosController.getAll)
router.get('/produtos/:id', ProdutosController.getById)
router.put('/produtos/:id', ProdutosController.updateById)
router.delete('/produtos/:id', ProdutosController.deleteById)

export { router }