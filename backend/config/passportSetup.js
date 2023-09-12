import passport from 'passport';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

// to use .env variables in this file
dotenv.config();
const backendURL = process.env.BACKEND_BASE_URL;

// Funtion to send a flash message depending on which social account the user had originally registered with
const handleAuthError = (err, done) => {
	// we get the email from the option the user is currently trying to login with, and find the corresponding User obj
	User.findOne({
		email: err.keyValue.email, // err obj returned from mongoose has the keyValue key
	}).then((user) => {
		// done(null, false, {flash message}) -> which tells passport not to serialise this user
		if (user)
			return done(null, false, {
				message: 'User was registered successfully.',
			});
	});
};

// Include all passport strategies' setup in this function itself
const setupPassport = () => {
	// setup a session with the logged in user, by serialising this user is
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	// end the current login session after deserialising the user
	passport.deserializeUser((id, done) => {
		User.findById(id)
			.then((user) => done(null, user))
			.catch((err) => console.log(`${err}`.bgRed.bold));
	});
};

export default setupPassport;
