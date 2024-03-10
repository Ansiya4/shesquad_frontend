import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().trim().email().required("Please enter your email id"),
    password: Yup.string().trim().min(4).required("Please enter password"),
  });

export const RegisterSchema = Yup.object({
  first_name: Yup.string().trim().min(4).required("Please enter First name"),
  last_name: Yup.string().trim().min(4).required("Please enter Last name"),
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});

export const ProfileSchema = Yup.object({
  first_name: Yup.string().trim().min(4).required("Please enter First name"),
  last_name: Yup.string().trim().min(4).required("Please enter Last name"),
  description: Yup.string().trim().min(4).required("Please enter Description"),
});

export const PasswordSchema = Yup.object({
old_password: Yup.string().trim().min(4).required("Please enter Old password"),
new_password: Yup.string().trim().min(4).required("Please enter New password"),
});

export const adduserSchema = Yup.object({
  category: Yup.string().trim().required("Please select a category"),
  first_name: Yup.string().trim().min(4).required("Please enter First name"),
  last_name: Yup.string().trim().min(4).required("Please enter Last name"),
  email: Yup.string().trim().email().required("Please enter your email id"),
  password: Yup.string().trim().min(4).required("Please enter password"),
});
export const cateorySchema = Yup.object({
  cat_name: Yup.string().trim().required("Please select a category name"),
  cat_image: Yup.string().trim().min(4).required("Please enter an image URL"),
  cat_description: Yup.string().trim().required("Please enter your description"),
});