const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});

module.exports = router;