import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    name: String,
    done: Boolean
});

export default mongoose.model('todo', todoSchema);
