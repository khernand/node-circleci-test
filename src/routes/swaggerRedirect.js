import express from 'express';

const router = new express.Router();

router.get('/', async (req, res) => (res.redirect('/swagger')));

export default router;
