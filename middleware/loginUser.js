const jwt = require('jsonwebtoken');
const util = require('../utils/messages');
const adminSecret = require('../constants/authConstant').JWT.ADMIN_SECRET;
const desktopSecret = require('../constants/authConstant').JWT.DESKTOP_SECRET;

/*
 * policy : only authentication policy for platform wise check, 
 *          whether user is authenticated or not
 */
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    let url = req.originalUrl;
    let secret = '';
    if (url.includes('admin')){
      secret = adminSecret;
    }
    else if (url.includes('desktop')){
      secret = desktopSecret;
    }
    jwt.verify(token,secret, (err, user) => {
      if (err) {
        return util.unAuthorizedRequest(err,res);
      }
      req.user = user;
      next();
    });
  } else {
    return util.unAuthorizedRequest(err,res);
  }
};
module.exports = authenticateJWT;