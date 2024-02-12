import express, { Router } from "express"

const router = Router(); 
router.post("/api/businessSignUp", async (req, res) => {
    try{

    } catch (err) {
        res.status(500).json({ message: "error in backend file, signup failed." })
    }
})