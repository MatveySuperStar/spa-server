const nodemailer = require("nodemailer");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendMessageMail(name, phone) {
    const response = await this.transporter.sendMail({
      from: "matvey@mail.ru",
      to: process.env.SMTP_USER,
      subject: `Клиент с именем: ${name} и номером телефона: ${phone}, хочет с нами связаться`,
    });

    return response;
  }
}

module.exports = new EmailService();
