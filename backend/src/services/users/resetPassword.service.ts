import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { hashSync } from "bcryptjs";


const resetPasswordService = async (
    password: string,
    resetToken: string
) =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({ where: { reset_token: resetToken } });

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const hashedPassword = hashSync(password, 10);

      user.password = hashedPassword;
      user.resetToken = null;

      await userRepository.save(user);

}

export default resetPasswordService