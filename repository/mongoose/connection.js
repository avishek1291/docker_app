const mongoose  =  require('mongoose');

mongoose.connect(url, (err, resposne) => {

})

const userSchema =  mongoose.Schema({
    userName : {
        type: String
    }
})

const userModel = mongoose.model(userSchema);

const user =  new userModel({
    userName: 'avi123'
})

user.save((err, cb)=> {
    cb(response);
})