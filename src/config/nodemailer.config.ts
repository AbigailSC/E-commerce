import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (
  email: string,
  subject: string,
  html: string
): Promise<void> => {
  try {
    console.log('sendmail');
    await transporter.sendMail({
      from: `E-commerce <${process.env.EMAIL_ADDRESS as string}>`,
      to: email,
      subject,
      html
    });
  } catch (error) {
    console.log({ message: (error as Error).message });
  }
};
