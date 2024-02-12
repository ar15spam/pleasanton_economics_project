import express from "express"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router(); 
import User from "../../models/User.js"

router.post('/api/signup', async (req, res) => {
    try{
        console.log("signup route called!")
        const { name, email, password, phoneNumber } = req.body;   
        if(await User.findOne({ name })){
            return res.status(400).json({ message: "Username is taken. " }); 
        }
        if(await User.findOne({ email })){
            return res.status(400).json({ message: "Email already in database. Please enter a new one. "}); 
        }
        if(await User.findOne({ phoneNumber })){
            return res.status(400).json({ message: "Phone number already in database. Please enter a new one. "}); 
        }

        const hashedPassword = await bcrypt.hash(password, 10); 
        
        const newUser = new User({ name, email, password: hashedPassword, phoneNumber }); 
        await newUser.save(); 
        console.log(newUser); 

        const token = jwt.sign({ name: newUser.name }, process.env.JWT_SECRET_KEY); 
        console.log(token); 

        return res.status(201).json(token); 

    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Signup failed' });
    }
})

export default router; 