export interface iMailer {
  senderID: string;
  senderPW: string;

  constructor(id: string, pw: string): void;
  sendMail(option: {
    from: string;
    to: string;
    subject: string;
    html: string;
  }): void;
}
