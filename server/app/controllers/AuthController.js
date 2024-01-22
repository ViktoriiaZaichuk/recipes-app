const { User } = require('../../models');
const { generateToken, hashPassword, comparePassword } = require('../services/AuthServices');

const AuthController = {
    register: async (req, res) => {
        try {
          const { username, email, password, avatar } = req.body;
          const hashedPassword = await hashPassword(password);
          
          const user = await User.create({
            username,
            email,
            password: hashedPassword,
            avatar: avatar,
          });
    
          const token = generateToken(user.id);

          return res.status(201).json({ token });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal Server Error LALAL' });
        }
    },

    login: async (req, res) => {
        try {
          const { email, password } = req.body;
          const user = await User.findOne({ where: { email } });
     
          if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
    
          const passwordMatch = await comparePassword(password, user.password);
    
          if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
    
          const token = generateToken(user.id);
    
          return res.status(200).json({ token });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
}

module.exports = AuthController;