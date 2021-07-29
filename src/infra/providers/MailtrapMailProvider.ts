import { IMailProvider, IMessage } from "../../domain/providers/IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "e789f651737ef4",
              pass: "bee328b257258c"
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