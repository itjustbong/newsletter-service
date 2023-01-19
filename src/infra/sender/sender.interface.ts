export interface iSender {
  send(option: {
    from: string;
    bcc: string;
    subject: string;
    html: string;
  }): void;
}
