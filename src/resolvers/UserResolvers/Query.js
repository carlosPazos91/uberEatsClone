const { getAllUsers  } = require ('../../Services/UserService');

const getUsers = async () => {
    const users = await getAllUsers ();
    return users;

};


module.exports =  {
    getUsers,


};

