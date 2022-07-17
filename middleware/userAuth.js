import { verify } from "jsonwebtoken";


function isAuthenticated(req, res, next) {

    const authHeader = req.headers['authorization'];
  
    if (authHeader && req.headers.authorization.startsWith('Bearer')){
  
        try {
  
            const token = authHeader.split(' ')[1];
  
            const decoded = jwt.verify(token, 'secretKey')
  
            req.users = decoded.id;
    
            return next();
    
        } catch (err) {
    
            return res.status(403).json({ message: 'Invalid JWT Token' });
        }
  
    } if (!authHeader){
  
        return res.status(403).json({ message: 'JWT Token no encontrado!'});
    }
  };
  

export default isAuthenticated;