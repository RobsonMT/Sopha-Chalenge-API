import * as yup from "yup";

const updateTaskSchema = yup.object().shape({
  title: yup.string().optional(),
  description: yup.string().optional(),
  dueDate: yup.string().optional(),
  priority: yup.string().optional(),
  status: yup.string().optional(),
});

export { updateTaskSchema };
