import { iMailer } from './mailer.interface';
import nodemailer from 'nodemailer';

export class NodeMailer implements iMailer {
  constructor(private _senderID: string, private _senderPW: string) {}

  async sendMail(option: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.daum.net',
      port: 465,
      secure: true,
      auth: {
        user: this._senderID,
        pass: this._senderPW,
      },
    });

    await transporter.sendMail(option);
  }
}
