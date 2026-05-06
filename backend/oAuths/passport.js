import dotenv from 'dotenv'
dotenv.config()
import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github2'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as FacebookStrategy } from "passport-facebook";
import Users from '../models/Users.js'


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `https://www.globaltravel-holdings.com/auth/google/callback`
},
    async (accessToken, refreshToken, profile, done) => {

        try {

            let email = profile.emails?.[0]?.value

            if (!email) {
                return done(new Error("google email not found"), null)
            }

            let user = await Users.findOne({ email });

            if (!user) {
                user = await Users.create({
                    name: `${profile.name?.givenName || ""} ${profile.name?.familyName || ""}`.trim()
                        || profile.displayName
                        || "google",
                    email: email,
                    googleId: profile.id,
                    avatar: profile.photos?.[0]?.value,
                    provider: "google",
                    emailVerified: true
                })
            }
            else {
                if (!user.googleId) {
                    user.googleId = profile.id
                }
                if (!user.avatar && profile.photos?.[0]?.value) {
                    user.avatar = profile.photos?.[0]?.value
                }
                user.provider = "google"
                user.emailVerified = true
                await user.save()
            }
            return done(null, user)


        } catch (error) {
            return done(error, null)

        }

    }

))

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://www.globaltravel-holdings.com/auth/github/callback",
    scope: ["user:email"]
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            let email = profile.emails?.[0]?.value
            if (!email) {
                email = `${profile.username || profile.id}@github-oauth.local`
            }
            let user = await Users.findOne({ email })

            if (!user) {
                user = await Users.create({
                    name: profile.username || profile.displayName || "GitHub",
                    email: email,
                    githubId: profile.id,
                    avatar: profile.photos?.[0]?.value || "",
                    provider: "github",
                    emailVerified: true
                })
            } else {
                if (!user.githubId) {
                    user.githubId = profile.id
                }

                if (!user.avatar && profile.photos?.[0]?.value) {
                    user.avatar = profile.photos[0].value
                }
                user.provider = "github";
                user.emailVerified = true
                await user.save()
            }

            return done(null, user)
        } catch (error) {
            done(error, null)
        }
    }

))



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://www.globaltravel-holdings.com/auth/facebook/callback",
    profileFields: ["id", "displayName", "emails", "photos"],
    authorizationURL: "https://www.facebook.com/dialog/oauth",
    tokenURL: "https://graph.facebook.com/oauth/access_token"
},
    async (accessToken, refreshToken, profile, done) => {
        try {

            let email = profile.emails?.[0]?.value;


            if (!email) {
                email = `${profile.id}@facebook-oauth.local`;
            }

            let user = await Users.findOne({ email });

            if (!user) {
                user = await Users.create({
                    name: profile.displayName || "Facebook",
                    email: email,
                    facebookId: profile.id,
                    avatar: profile.photos?.[0]?.value || "",
                    provider: "facebook",
                    emailVerified: true
                });
            }
            else {


                if (!user.facebookId) {
                    user.facebookId = profile.id;
                }

                if (!user.avatar && profile.photos?.[0]?.value) {
                    user.avatar = profile.photos[0].value;
                }
                user.provider = "facebook";
                user.emailVerified = true;
                await user.save();
            }
            console.log(user)
            return done(null, user);

        } catch (error) {
            return done(error, null);
        }
    }));