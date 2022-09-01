const config = require('config.json');
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test' }];

module.exports = {
    authenticate,
    getAll,
    register
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: 3600 });

    return {
        ...omitPassword(user),
        token,
        expiresIn: Date.now() + 3600 * 1000,
        message: 'Login Successful'
    };
}

async function register({ username, password }) {
    if (users.find(u => u.username === username))
        throw 'User already exists';
    const user = { id: 2, username, password }
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: 30 });
    users.push(user)
    return {
        ...omitPassword(user),
        token,
        expiresIn: Date.now() + 3600 * 1000,
        message: 'Registration Successful'
    };
}


async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}