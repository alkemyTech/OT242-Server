const express = require('express');
const router = express.Router();
const {usersList, userDetail, deleteUser, updateUser} = require('../../controllers/userControllers');


// Get users list 
// Middlewares of authentication and Admin user validation required

router.get('/', usersList);

router.delete('/:id', deleteUser);

router.get('/:id', userDetail);

router.put('/:id', updateUser);


module.exports = router;