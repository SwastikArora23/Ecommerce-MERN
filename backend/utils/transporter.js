import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// configure the transporter for nodemailer to use gmail account to send mails
const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: 2525,
	auth: {
	  user: process.env.MAIL_USER,
	  pass: process.env.MAIL_PASS
	}
});

export default transporter;
