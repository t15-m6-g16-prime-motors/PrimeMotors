import { z } from 'zod';

export const registerUserSchema = z
  .object({
    full_name: z
      .string()
      .nonempty('Nome obrigatório')
      .regex(/^[A-Za-z ]+$/, 'Apenas letras são permitidas'),
    email: z.string().nonempty('Email obrigatório').email('Email inválido'),
    cpf: z
      .string()
      .nonempty('CPF obrigatório')
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido (000.000.000-00)'),
    phone_number: z
      .string()
      .nonempty('Número de celular obrigatório')
      .regex(
        /^(\([1-9][0-9]\)\s?9?[0-9]{4}-[0-9]{4}|\([1-9][0-9]\)\s?[0-9]{4}-[0-9]{4}|[1-9][0-9]\s?9?[0-9]{4}-[0-9]{4}|[1-9][0-9]\s?[0-9]{4}-[0-9]{4})$/,
        'Telefone inválido ((00)00000-0000)'
      ),
    birthdate: z
      .string()
      .nonempty('Data de nascimento obrigatória')
      .regex(
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        'Data inválida (DD/MM/YYYY)'
      ),
    description: z.string().nonempty('Descrição obrigatória'),
    is_seller: z.boolean().default(false),
    password: z
      .string()
      .nonempty('Senha obrigatória')
      .min(8, 'É necessário ao menos 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'É necessário ao menos um número')
      .regex(
        /(?=.*?[#?!@$%^&*-_])/,
        'É necessário ao menos um caracter especial'
      ),
    confirm_password: z.string().nonempty('Confirmação de senha obrigatória'),

    postal_code: z
      .string()
      .nonempty('CEP obrigatório')
      .regex(/^\d{5}-\d{3}$|^\d{5}$/, 'CEP inválido (00000 ou 00000-000)'),
    state: z.string().nonempty('Estado obrigatório'),
    city: z.string().nonempty('Cidade obrigatória'),
    street: z.string().nonempty('Rua obrigatória'),
    number: z.string().nonempty('Número obrigatório'),
    complement: z.string().nonempty('Complemento obrigatório')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Senha e confirmação não compatíveis.',
    path: ['confirm_password']
  });

export const loginUserSchema = z.object({
  email: z.string().nonempty('Email obrigatório').email('Email inválido'),
  password: z.string().nonempty('Senha obrigatória')
});

export const editUserSchema = z.object({
  full_name: z
    .string()
    .nonempty('Nome obrigatório')
    .regex(/^[A-Za-z ]+$/, 'Apenas letras são permitidas'),
  email: z.string().nonempty('Email obrigatório').email('Email inválido'),
  cpf: z
    .string()
    .nonempty('CPF obrigatório')
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido (000.000.000-00)'),
  phone_number: z
    .string()
    .nonempty('Número de celular obrigatório')
    .regex(
      /^(\([1-9][0-9]\)\s?9?[0-9]{4}-[0-9]{4}|\([1-9][0-9]\)\s?[0-9]{4}-[0-9]{4}|[1-9][0-9]\s?9?[0-9]{4}-[0-9]{4}|[1-9][0-9]\s?[0-9]{4}-[0-9]{4})$/,
      'Telefone inválido ((00)00000-0000)'
    ),
  birthdate: z
    .string()
    .nonempty('Data de nascimento obrigatória')
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida (DD/MM/YYYY)'
    ),
  description: z.string().nonempty('Descrição obrigatória')
});

export const sendEmailSchema = z.object({
  email: z.string().nonempty('Email obrigatório').email('Email inválido')
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty('Senha obrigatória')
      .min(8, 'É necessário ao menos 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'É necessário ao menos um número')
      .regex(
        /(?=.*?[#?!@$%^&*-_])/,
        'É necessário ao menos um caracter especial'
      ),
    confirm_password: z.string().nonempty('Confirmação de senha obrigatória')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Senha e confirmação não compatíveis.',
    path: ['confirm_password']
  });
