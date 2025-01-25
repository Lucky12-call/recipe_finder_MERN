import jwt from "jsonwebtoken";

export const sendToken = (user, res, message) => {
  // const token = user.getJWTToken();
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    sameSite: "none", // Necessary for cross-origin requests
    secure: process.env.NODE_ENV === "production", // Only secure in production
  };

  res.status(200).cookie("token", token, options).json({
    success: true,
    message,
    token,
    user,
  });
};
