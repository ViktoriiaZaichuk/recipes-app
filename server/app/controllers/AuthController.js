const { User } = require('../../models');
const { generateToken, hashPassword, comparePassword } = require('../services/AuthServices');

const AuthController = {
    register: async (req, res) => {
        try {
            const { username, email, password, avatar } = req.body;
            const hashedPassword = await hashPassword(password);
          
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'Please provide all required fields.' });
            }

            if (password.length < 8) {
                return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
            }

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists.' });
            }

            const user = await User.create({
                username,
                email,
                password: hashedPassword,
                avatar: avatar,
            });
        
            const token = generateToken(user.id);

            return res.status(201).json({ user: user, token, message: 'User created successfully and validation email sent successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
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

            // Generate JWT
            const token = generateToken(user.id);

            // Set JWT in HTTP-only cookie
            res.cookie('jwt', token, { httpOnly: true });
    
            return res.status(200).json({ user: user, token, message: 'User logged in successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    },
}

module.exports = AuthController;