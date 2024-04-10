const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async(request, response) => {
    console.log(request.body)
    const {username, name, password} = request.body

    console.log(username)
    console.log(name)
    console.log(password)

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()
    console.log(savedUser)

    response.status(201).json(savedUser)
    return
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
    return
})

module.exports = usersRouter