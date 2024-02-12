import mongoose from "mongoose";

const BuisnessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    address: {
        street: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        zipcode: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true
        }
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
      type: String,
      required: true
    },
    website: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Buisness = new mongoose.model('Buisness', BuisnessSchema);

module.exports(Buisness); 