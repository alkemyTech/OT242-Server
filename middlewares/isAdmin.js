const {User} = require('../models');

async function isAdmin (req, res, next) {
    const userLogged = await User.findByPk(req.users);
    if(userLogged.roleId == 1){
        return next();
    }

    return res.status(403).json({ message: "Admin role required"});
}

module.exports = isAdmin