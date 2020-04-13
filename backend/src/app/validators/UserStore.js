import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      name: Yup.string().required(),
      password: Yup.string().min(6).required(),
      rg: Yup.string().required(),
      cpf: Yup.string().length(11).required(),

      street: Yup.string().required(),
      compliment: Yup.string().required(),
      number: Yup.string().required(),
      cep: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res.status(400).json({
      message: 'Validação falhou',
      messages: err.inner,
    });
  }
};
