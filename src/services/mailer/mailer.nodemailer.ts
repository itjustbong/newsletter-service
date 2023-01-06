import { iMailer } from './mailer.interface';
import nodemailer from 'nodemailer';

export class NodeMailer implements iMailer {
  constructor(private _senderID: string, private _senderPW: string) {}

  sendMail(option: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }) {
    const transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: this._senderID,
        pass: this._senderPW,
      },
  }
}
