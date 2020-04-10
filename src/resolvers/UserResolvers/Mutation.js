const { createOneUser } = require ('../../services/UserService.js');

const createUser = async (_, {data}) => {
    const user = await createOneUser (data); //Database service
    return user;
};


module.exports = {
    createUser,
};

