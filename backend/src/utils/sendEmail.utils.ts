import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/userResetPassword.interfaces";
import "dotenv/config"
import Mailgen from "mailgen";

class EmailService {
    async sendEmail({to, subject, text}: IEmailRequest){

        const transporter = createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            } 
        })

        await transporter.sendMail({
            from: "primemotorskenzie@gmail.com",
            to,
            subject,
            html: text
        }). then(() => {
            console.log('email send')
        }).catch((err) =>{
            console.log(err)
        })
    }

    resetPasswordTemplate(userEmail: string, full_name: string, resetToken: string){
        
        const mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Prime Motors',
                link: 'http://localhost:3000/users' // link clicável no header do email "Prime Motors"
            }
        });

        const email = {
            body: {
                name: full_name.split(" ")[0],
                intro: 'You have received this email because a password reset request for your account was received.',
                action: {
                    instructions: 'Click the button below to reset your password:',
                    button: {
                        color: '#DC4D2F',
                        text: 'Reset your password',
                        link: `http://localhost:3000/resetPassword?${resetToken}` // link para redefinir senha "Prime Motors"
                    }
                },
                outro: 'If you did not request a password reset, no further action is required on your part.'
            }
    }

        const emailBody = mailGenerator.generate(email)

        const emailtemplate = {
            to: userEmail,
            subject: "Reset Password",
            text: emailBody
        }
        return emailtemplate
    }

}

const emailservice = new EmailService()

export { emailservice }