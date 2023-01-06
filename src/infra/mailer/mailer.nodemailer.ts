import { iMailer } from './mailer.interface';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export class NodeMailer implements iMailer {
  private static instance: NodeMailer;
  private _senderID: string;
  private _senderPW: string;

  private constructor() {
    this._senderID = process.env.ID || '';
    this._senderPW = process.env.PW || '';
  }

  public static getInstance() {
    return this.instance || (this.instance = new this());
  }

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
