import mongoose from "mongoose";
import { PetSchema } from "../models/model";

const Pet = mongoose.model('Pet', PetSchema);

export const addNewPet = (req, res) => {
    let newPet = new Pet(req.body);

    newPet.save((err, pet) => {
        if (err) {
            res.send(err);
        }
        res.json(pet);
    });
}

export const getPets = (req, res) => {
    Pet.find({}, (err, pet) => {
        if (err) {
            res.send(err);
        }
        res.json(pet);
    });
}