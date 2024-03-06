import * as yup from "yup";

const createTaskSchema = yup.object().shape({
  title: yup
    .string()
    .transform((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .required(),
  description: yup.string().required(),
  dueDate: yup.string().required(),
  priority: yup.string().required(),
  status: yup.string().required(),
});

export { createTaskSchema };
