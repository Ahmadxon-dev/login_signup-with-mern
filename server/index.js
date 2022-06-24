const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require("./models/users")
const app = express()

mongoose.connect('mongodb+srv://Ahmadxon:parol@mini-project.5qauh.mongodb.net/mini-project', () => {
    console.log('mongo connected')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/signup", (req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            massage: "Hamma maydonlarni to'ldiring"
        })
    }

    User.findOne({email})
        .then(savedUser => {
            if (savedUser) {
                return res.status(400).json({error: "User already exists"})
            }
            bcrypt.hash(password, 10)
                .then(hash => {
                    const user = new User({
                        name,
                        email,
                        password: hash
                    })
                    user.save()
                        .then((user) => {
                            res.json({
                                message: "User created successfully",
                                user
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                })


})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        res.status(400).json({
            message: "Hamma maydonlarni to'ldiring"
        })
    }
    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(400).json({
                    error: "Foydalanuvchi topilmadi"
                })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch){
                        return res.status(400).json({
                            error: "Password is invalid"
                        })
                    }
                    else{
                        return res.json({
                            message: "Login successfully",user
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})


//password: parol
// clauster name: mini-project