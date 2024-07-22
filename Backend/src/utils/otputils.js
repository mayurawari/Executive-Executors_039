import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const generateOtp = () => {
    return uuidv4().slice(0, 6);
};

const sendOtp = async (email, otp) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}`
    };

    await transporter.sendMail(mailOptions);
};

export { generateOtp, sendOtp };
