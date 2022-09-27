const express = require('express')
const router = express.Router()
const Rahul = require('../models/movie')

router.post('/', (req, res) => {
    try {
        const user = new Rahul(req.body)
        user.save().then(() => {
            res.send(user)
        })
    } catch (err) {
        res.send(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const rahul = await Rahul.find()
        res.json(rahul)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const rahul = new Rahul({
        name: req.body.name,
        price: req.body.price,
        location: req.body.location
    })
    try {
        const r1 = await rahul.save()
        res.json(r1)
    } catch (err) {
        res.send('Error')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const rahul = await Rahul.findById(req.params.id)
        res.json(rahul)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const rahul = await Rahul.findById(req.params.id)
        rahul.name = req.body.name
        rahul.price = req.body.price
        rahul.location = req.body.location
        const r2 = await rahul.save()
        res.json(r2)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const rahul = await Rahul.findByIdAndRemove(req.params.id)
        rahul.name = req.body.name
        rahul.price = req.body.price
        rahul.location = req.body.location
        const r3 = await rahul.save()
        res.json(r3)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router