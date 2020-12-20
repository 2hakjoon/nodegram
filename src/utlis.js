import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.resolve(__dirname,'.env')});

import {adjectives, nouns} from "./words";
import nodemailer from "nodemailer";
import sGtransport from "nodemailer-sendgrid-transport";
import sGmail from "@sendgrid/mail"



export const generateSecret = () =>{
    const randomNumber = Math.floor(Math.random()*adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
}

const sendMail = (email) => {
    sGmail.setApiKey(process.env.SENDGRID_APIKEY)
    sGmail.send(email).then(()=>{
        console.log('Email sent')
    }).catch((error) => {
        console.log(error)
    })
};

export const sendSecretMail = (address, secret) => {
    const email = {
        from: "2hakjoon@gmail.com",
        to: address,
        subject: "Login Secret for prismagram",
        html: `Hello! Your login secret is ${secret}. <br/> Copy paste on the app or website to login`
    };
    return sendMail(email);
};