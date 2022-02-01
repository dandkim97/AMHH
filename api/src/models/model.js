import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PetSchema = new Schema({
    animalType: {
        type: String,
        required: 'Enter an animal'
    },
    nickName: {
        type: String,
        required: 'Enter the nickname'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    imgUrl: {
        type: String,
        required: 'Provide an image url of the pet'
    }
});