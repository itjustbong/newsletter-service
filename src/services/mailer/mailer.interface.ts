export interface iMailer {
  sendMail(option: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }): void;
}
