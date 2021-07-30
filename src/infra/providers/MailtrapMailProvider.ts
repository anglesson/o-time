import { IMailProvider, IMessage } from "../../domain/providers/IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import dotenv from 'dotenv'
dotenv.config();

class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        console.log(process.env.MAIL_PROVIDER_USER)
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAIL_PROVIDER_USER,
              pass: process.env.MAIL_PROVIDER_PASS
            }
        });
    }
    
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}

export { MailtrapMailProvider }