const mongoose = require('mongoose')

//const url = 'mongodb://localhost:27017/backend_test'
const url = 'mongodb+srv://liqingming6:P14svrNNLBlS19gf@cluster0.7wq3bqi.mongodb.net/?retryWrites=true&w=majority/dbWithToken'

mongoose.set('strictQuery', false)
mongoose.connect(url)
.then(() => {
    console.log('connected to MongoDB test.')
    const noteSchema = new mongoose.Schema({
        content: String,
        important: Boolean,
    })
    const Note = mongoose.model('Note', noteSchema)
    Note.find({}).then(result => {
        result.forEach(note => {
            console.log(note)
        })
        mongoose.connection.close()
    })
    
})
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})
