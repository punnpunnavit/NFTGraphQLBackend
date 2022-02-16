const jwt = require("jsonwebtoken");
export const createJWTToken = (user:Object) => {
    console.log(user)
    return jwt.sign({user},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}
