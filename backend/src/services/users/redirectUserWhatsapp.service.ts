import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";


const redirectUserWhatsappService = async (userId: number): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
        throw new AppError("user not found", 404);
    }

    const phoneNumberDigitsOnly = user.phone_number.replace(/\D/g, '');

    const whatsappLink = `https://wa.me/${phoneNumberDigitsOnly}`;
    
    return whatsappLink
}

export default redirectUserWhatsappService;