import jwt from "jsonwebtoken";

export const sendToken = (user, res, message) => {
  // const token = user.getJWTToken();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  res.status(200).json({
    success: true,
    message,
    token,
    user,
  });
};
