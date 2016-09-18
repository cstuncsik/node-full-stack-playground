import express from 'express';
import Todo from '../models/todo.js';

const router = express.Router();

router.get('/', function (req, res) {
    Todo.find()
        .then(data => res.json(data))
        .catch(err => res.json({error: err}));
});

router.post('/', function (req, res) {

    // Create
    if (req.body.name) {
        const todo = new Todo({
            name: req.body.name,
            done: false
        });
        todo.save()
            .then(data => res.json({added: data}))
            .catch(err => res.json({error: err}));
    }

    // Remove
    if (req.body.id && req.body.done === undefined) {
        Todo.findByIdAndRemove(req.body.id).exec()
            .then(data => res.json({removed: data}))
            .catch(err => res.json({error: err}));
    }

    // Update
    if (req.body.id && req.body.done !== undefined) {
        Todo.findByIdAndUpdate(req.body.id, {done: req.body.done}).exec()
            .then(data => res.json({changed: data}))
            .catch(err => res.json({error: err}));
    }

});

export default router;
