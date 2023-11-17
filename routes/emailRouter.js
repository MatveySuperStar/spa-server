const Router = require("express");
const router = new Router();
const EmailController = require("../controllers/emailController");
const { check } = require("express-validator");

router.post(
  "/send",
  [
    check("phone", "Телефон не соответствует требованиям").isMobilePhone(),
    check("name", "Заполните Имя").notEmpty(),
  ],
  EmailController.send
);

module.exports = router;
