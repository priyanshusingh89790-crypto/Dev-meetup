const User = require('../model/User');

exports.signUp = async (req, res) => {
  try {
    console.log("Body:", req.body);

    const { firstName, lastName, gender, phoneNumber, email, password } = req.body;

    if (!firstName || !lastName || !gender || !phoneNumber || !email || !password) {
      return res.status(400).send({
        status: "failure",
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({
        status: "failure",
        message: "User already exists"
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      gender,
      phone: phoneNumber,
      email,
      password
    });

    return res.status(201).send({
      status: "success",
      data: user
    });

  } catch (error) {
    console.log("Signup error:", error);
    return res.status(500).send({
      status: "error",
      message: "Server error"
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        status: "failure",
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).send({
        status: "failure",
        message: "Invalid email or password"
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).send({
        status: "failure",
        message: "Invalid email or password"
      });
    }

    const token = await user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000
    });

    return res.status(200).send({
      status: "success",
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      status: "error",
      message: "Server error"
    });
  }
};


exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return res.status(400).send({
        status: "failure",
        message: "All fields are required"
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).send({
        status: "failure",
        message: "New passwords do not match"
      });
    }

    const user = req.user;

    if (!user) {
      return res.status(401).send({
        status: "failure",
        message: "Unauthorized"
      });
    }

    const dbUser = await User.findById(user._id).select("+password");

    const isMatch = await dbUser.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(401).send({
        status: "failure",
        message: "Current password is incorrect"
      });
    }

    dbUser.password = newPassword;
    await dbUser.save();

    return res.status(200).send({
      status: "success",
      message: "Password updated successfully"
    });

  } catch (error) {
    console.error("Change password error:", error);
    return res.status(500).send({
      status: "error",
      message: "Server error"
    });
  }
};