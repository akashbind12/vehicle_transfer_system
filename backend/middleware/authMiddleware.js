// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Assuming your User model is imported correctly

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'secret', async (err, decodedToken) => {
    if (err) {
      return res.sendStatus(403);
    }

    try {
      // Fetch user details from the database using the decoded token
      const user = await User.findByPk(decodedToken.userId);
      if (!user) {
        return res.sendStatus(403); // User not found
      }
      
      // Attach user details to the request object
      req.user = user;
      next();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

module.exports = authenticateToken;
