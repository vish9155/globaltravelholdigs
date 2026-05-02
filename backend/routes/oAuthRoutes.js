import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
let router = express.Router()


router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get("/google/callback", passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login"
}),
    async (req, resp) => {
        try {

            let token = jwt.sign(
                {
                    id: req.user._id,
                    role: req.user.role,
                    email: req.user.email
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "5d" }
            )

            resp.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 5 * 24 * 60 * 60 * 1000
            })

            resp.redirect("http://localhost:5173/google-success")

        } catch (error) {
            resp.redirect("http://localhost:5173/login")
        }
    }

)

router.get("/github",passport.authenticate("github",{scope:["user:email"]}))

router.get("/github/callback",passport.authenticate("github",{
    session:false,
    failureRedirect:"http://localhost:5173/login"
}),
 async (req, resp) => {
        try {
            let token = jwt.sign(
                {
                    id: req.user._id,
                    role: req.user.role,
                    email: req.user.email
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "5d" }
            )

            resp.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 5 * 24 * 60 * 60 * 1000
            })

            resp.redirect("http://localhost:5173/github-success")
        } catch (error) {
            resp.redirect("http://localhost:5173/login")
        }
    }
)
router.get("/facebook",passport.authenticate("facebook",{scope:["email"]}))

router.get("/facebook/callback",passport.authenticate("facebook",{
    session:false,
    failureRedirect:"http://localhost:5173/login"
}),
 async (req, resp) => {
        try {
            let token = jwt.sign(
                {
                    id: req.user._id,
                    role: req.user.role,
                    email: req.user.email
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "5d" }
            )

            resp.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 5 * 24 * 60 * 60 * 1000
            })

            resp.redirect("http://localhost:5173/facebook-success")
        } catch (error) {
            resp.redirect("http://localhost:5173/login")
        }
    }
)



export default router
