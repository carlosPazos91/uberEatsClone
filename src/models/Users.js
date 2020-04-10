const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    
    first_name: {
        type: String,
        require : true,
    },    
    last_name:{
        type: String,
        require : true,
    },   
    email: {
        type: String,
        require : true,
    },
    birth_date: Date,
    profile_pic: String,
    phone_number: String,
    is_active: {
        type: Boolean,
        default: true,

    }
},
{
    timestamps: true 
});

module.exports = mongoose.model('users', UserSchema);