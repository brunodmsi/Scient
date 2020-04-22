import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      options: Yup.array(
        Yup.object().shape({
          name: Yup.string().required(),
          icon: Yup.string().required(),
          color: Yup.string().required(),
        })
      ).required(),
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
