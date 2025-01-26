import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { sendToken } from "../utils/generateToken.js";

const userSignUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password < 6 || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 character" });
    }

    const oldUser = await User.findOne({ email }).select("-password");

    if (oldUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    // generate token
    sendToken(newUser, res, "User registered successfully");
  } catch (error) {
    console.log(`error in user register ${error}`);
    res.status(201).json({ message: `error in user register ${error}` });
  }
};

// login user
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const decoded = await bcrypt.compare(password, user.password);
    if (!decoded) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token
    sendToken(user, res, "User logged in successfully");
  } catch (error) {
    res.status(400).json({ message: `error in user logging in ${error}` });
  }
};

// user logout
const userLogout = (_, res) => {
  try {
    // const options = {
    //   expires: new Date(Date.now()), // Set cookie to expire immediately
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: process.env.NODE_ENV === "production",
    // };

    res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "User Logged Out!", success: true });
  } catch (error) {
    console.error("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { userSignUp, userLogin, userLogout };
