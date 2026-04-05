const nodemailer = require("nodemailer");

exports.sendMail = async (receiverEmail, subject, body) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.protonmail.ch",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: receiverEmail,
    subject,
    html: body,
  });
};
