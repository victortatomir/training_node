import * as Joi from "joi";

const productSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required().min(1),
  description: Joi.string().required().min(1),
  price: Joi.number().required(),
  weight: Joi.number().required(),
  category: Joi.number().required(),
  supplier: {
    id: Joi.number().required(),
    name: Joi.string().required(),
  },
  imageUrl: Joi.string().required()
});

export default productSchema;
