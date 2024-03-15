const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(StatusCodes.UNAUTHORIZED).json({msg : "Authontication invalid"});
  }
  const token = authHeader.split(' ')[1]
  // console.log(authHeader)
  // console.log(token)

  try {
    const {username ,userid} = jwt.verify(token , process.env.JWT_SECRETE );
    req.user = {username ,userid}
    next()
    // const {username ,userid} = jwt.verify(authHeader , "secrete");
    // req.user = {username ,userid}
    // next()
      // const data = jwt.verify(authHeader , "secrete");
    //  return res.status(StatusCodes.OK).json({data})
    
  } catch(error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({msg : "Authontication invalid ...."});
  }
}
module.exports= authMiddleware 


