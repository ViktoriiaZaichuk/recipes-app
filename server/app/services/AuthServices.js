const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
  
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
  
const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
};
  
const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
  
module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
};