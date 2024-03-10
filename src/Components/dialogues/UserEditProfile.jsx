import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { UserProfileSchema } from "../../Validations/Validations";
import { ToastError, ToastSuccess } from "../Toast/Toasts";
import { useFormik } from "formik";


function UserEditProfile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    // Formic code
  const initialValues = {
    first_name: "",
    last_name: "",
    };
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserProfileSchema,
      onSubmit: async (values, { setSubmitting }) => {
        // try {
        //   const response = await axios.post(${BaseUrl}token/, values);
        //   if (response.status === 200) {
        //     const token = JSON.stringify(response.data);
        //     localStorage.setItem("token", token);
        //     ToastSuccess('Login completed successfully!');
        //     navigate('/')
        //   }
        // } catch (error) {
        //   ToastError(error.response?.data?.detail || 'An error occurred');
        // } finally {
        //   setSubmitting(false);
        // }
      },
    });

  return (
    <div>
        <Button className='w-28 bg-pink-900' onClick={handleOpen}>Edit</Button>
        <Dialog open={open} size="xs" handler={handleOpen}>
        <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1 font-serif text-indigo-900" variant="h4">
              EDIT PROFILE
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <div>
            <Input variant="standard" name="first_name" label="First name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_name}/>
            {touched.first_name && errors.first_name && (
                  <div className="text-red-500 text-sm ">
                    {errors.first_name}
                  </div>
                )}
                </div>
            <div>
            <Input variant="standard" name="last_name" label="Last name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last_name}
          />
          {touched.last_name && errors.last_name && (
                  <div className="text-red-500 text-sm ">
                    {errors.last_name}
                  </div>
                )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button className='bg-pink-900' onClick={handleOpen}>
            submit
          </Button>
        </DialogFooter>
        </form>
      </Dialog>
    </div>
  )
}

export default UserEditProfile