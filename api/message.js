// import {dbo} from '../../database'
// import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const Message = require('../model/Message')

const uri = process.env.mongodb_uri
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

module.exports = async (req, res) => {
    if (req.type == 'GET') {
        Message.find({}, function (err, message) {
            if (err) throw err;

            console.log(message);
            res.json(message)
        })
    } else if (req.type == 'POST') {
        const headers = req.headers
        const data = req.body
    }
    
}