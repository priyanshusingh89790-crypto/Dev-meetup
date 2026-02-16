const User = require('../model/User');

exports.signUp = async (req, res) => {
    try {
        console.log("Body: ", req.body);
        const {firstName, lastName, gender, phone, email, password} = req.body;
        
        if (!firstName || !lastName || !gender || !phone || !email || !password) {
            res.status(400).send({status: "failur", message: "Bad request!"})
        }
        
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400).send({status: 'failure', message: 'User is already exist.'})
        }
        const dbPayload = {
            firstName,
            lastName,
            gender,
            phone,
            email, 
            password
        }
        const user = await User.create(dbPayload);

        res.status(200).send({status: 'success', data: user })
    } catch (error) {
        console.log("Got an error while sing-up for the user, error: ", JSON.stringify(error))
        res.status(500).send({status: 'error', data: error});
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password || !emailRegex.test(email)) {
            res.status(400).send({status: 'failur', message: "Bad request!"});
        }

        const user = await User.findOne({email}).exec();

        if (!user) {
            res.status(401).send({status: 'failur', message: "Invalid email or password"});
        }

        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch) {
            res.status(401).send({status: 'failur', message: "Invalid email or password"});
        }

        const token = await user.generateAuthToken();

        // 🍪 Set cookie
        res.cookie("token", token, {
            httpOnly: true,        // JS can't access (XSS protection)
            secure: false,         // true in production (HTTPS)
            sameSite: "strict",    // CSRF protection
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        // 📩 Set header
        res.setHeader("Authorization", `Bearer ${token}`);
        

        res.status(200).send({ 
            status: "success", 
            data: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user. gender,
                email: user.email,
                phone: user.phone
            }, 
            token
        })
    } catch(error) {
        res.status(500).send({status: 'error', data: error});
    }
}


exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmNewPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            res.status(400).send({status: "failure", message: "Bad Request!"})
        }

        if (newPassword !== confirmNewPassword) {
            res.status(400).send({status: "failure", message: "Password not matched!"})
        }

        const user = req.user;
        if (!user) {
            res.status(401).send({status: "faliur", message: 'Unauthorized: User not found!'});
        }

        const isPasswordMatch = await req.user.comparePassword(password);
        console.log("isPasswordMatch : ", isPasswordMatch)

        if (!isPasswordMatch) {
            res.status(401).send({status: 'failur', message: "Invalid email or password"});
        }


    } catch (error) {
        res.status(500).send({status: 'error', data: error});
    }
}