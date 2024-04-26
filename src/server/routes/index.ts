import { Router } from "express";

const router = Router()

router.get('/', (_, res) => {
    res.send('Hello')
})

//adicionar middleware e controllers
router.post('/restaurantes')
router.get('/restaurantes')
router.get('/restaurantes/:id')
router.put('/restaurantes/:id')
router.delete('/restaurantes/:id')

router.post('/produtos')
router.get('/produtos')
router.get('/produtos/:id')
router.put('/produtos/:id')
router.delete('/produtos/:id')

export { router }