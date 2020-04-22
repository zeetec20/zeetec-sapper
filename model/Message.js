import mongoose from 'mongoose'

const Schema = mongoose.Schema

let message = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        collection: "message"
    }
)

module.exports = mongoose.model("message", message)