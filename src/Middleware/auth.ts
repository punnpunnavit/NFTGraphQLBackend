const jwt = require("jsonwebtoken");
export const authenticate = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1] || "";
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = verified;
    console.log("Verification success!", verified);
    next();
  } catch (err) {
    console.log("Verification failed!",err);
    next();
  }
};

