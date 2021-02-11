import * as Joi from "joi";

const supplierSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required().min(1),
});

export default supplierSchema;
