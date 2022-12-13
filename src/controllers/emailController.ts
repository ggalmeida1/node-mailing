import { Request, Response } from 'express';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const contato = async (req: Request, res: Response) => {
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASSWORD
        }
      });


      let message = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.html,
        text: req.body.text
      }


      let info = await transport.sendMail(message)

      console.log("INFO", info)


    res.json({success: true});
}
