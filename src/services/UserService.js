const Users = require ('../models/Users');

const getAllUsers = () => Users
    .find ({is_active : true})

;
        

const createOneUser = (data) => Users.create (data);


module.exports = {
    getAllUsers,
    createOneUser,

};