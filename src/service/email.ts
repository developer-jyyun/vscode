import nodemailer from "nodemailer";

export type EmailData = { from: string; subject: string; message: string };

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ from, subject, message }: EmailData) {
  return transporter.sendMail({
    to: process.env.AUTH_USER, // 내가 받을 주소
    from: `"Portfolio Contact" <${process.env.AUTH_USER}>`, // 인증 계정으로 발신
    replyTo: from, // 회신은 사용자 메일
    subject: `[PORTFOLIO] ${subject}`,
    text: `From: ${from}\n\n${message}`,
    html: `<h1>${subject}</h1><div>${message.replace(
      /\n/g,
      "<br/>"
    )}</div><br/><p>From: ${from}</p>`,
  });
}
