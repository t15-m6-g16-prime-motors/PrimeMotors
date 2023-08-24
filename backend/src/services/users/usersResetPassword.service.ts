import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { randomUUID } from "crypto";
import { emailservice } from "../../utils/sendEmail.utils";
  
    const sendResetEmailPasswordService = async (
        email: string
    ) => {
        const userRepository: Repository<User> = AppDataSource.getRepository(User)
        const user = await userRepository.findOne({ where: { email: email } });

        if(!user){
            throw new AppError('User not found', 404)
        }

        const resetToken = randomUUID()

        user.reset_token = resetToken
        await userRepository.save(user)

       const resetPasswordTemplate = emailservice.resetPasswordTemplate(user.email, user.full_name, resetToken)

       await emailservice.sendEmail(resetPasswordTemplate)
    }



export default sendResetEmailPasswordService