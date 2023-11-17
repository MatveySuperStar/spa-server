const EmailService = require("../service/emailService");
const { validationResult } = require("express-validator");

class EmailController {
  async send(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Ошибка", errors });
      }

      const { phone, name } = req.body;

      const answer = await EmailService.sendMessageMail(name, phone);

      return res.status(200).json(answer);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new EmailController();
