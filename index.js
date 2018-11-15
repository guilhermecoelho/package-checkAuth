
var responseModels = require('httpstatusresponse');
var jwt = require('jsonwebtoken');


require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decode;
        next();
    }  catch(err){
        return responseModels.authFail(res);
    }
};