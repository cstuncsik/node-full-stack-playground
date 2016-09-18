import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    author: {
        firstname: String,
        lastname: String
    },
    created: { type: Date, default: Date.now }
});

export default mongoose.model('photo', photoSchema);
