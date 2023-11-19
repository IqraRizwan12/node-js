const mongoose = require('mongoose')

const mongoURI =  'mongodb+srv://iqrarizwan607:m.umer111@cluster0.o4yqvtw.mongodb.net/project'

mongoose.connect(mongoURI)

module.exports = mongoose