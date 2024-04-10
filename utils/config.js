require('dotenv').config()

const PORT = process.env.PORT || 3001
// const MONGODB_URI = process.env.NODE_ENV === 'test'
//     ? process.env.TEST_MONGODB_URI
//     : process.env.MONGODB_URI


//const MONGODB_URI = process.env.TEST_MONGODB_URI
//const MONGODB_URI = 'mongodb://localhost:27017/backend_test'
const MONGODB_URI = 'mongodb+srv://liqingming6:P14svrNNLBlS19gf@cluster0.7wq3bqi.mongodb.net/?retryWrites=true&w=majority'
module.exports = {
    MONGODB_URI,
    PORT
}