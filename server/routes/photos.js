import express from 'express';
import Photo from '../models/photo.js';

const router = express.Router();

router.get('/', (req, res) => {
    Photo.find().then(data => res.json(data)).catch(err => res.json({error: err}));
});

export default router;
