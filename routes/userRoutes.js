const express = require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    updateUser,
    getAllUsers
} = require('../controllers/userControllers');

// get user by their id
router.get('/:id', getUser);

// create new user
router.post('/', createUser);

// update user by their id
router.put('/:id', updateUser);

// get all users (might not be needed?)
router.get('/', getAllUsers);

module.exports = router;