import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useFormik } from 'formik';
import { adduserSchema } from "../../Validations/Validations";

export function Addusermodal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);


    // Formic code
    const initialValues = {
        category: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        description: ""
    }
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: adduserSchema,
        onSubmit: async (values, { setSubmitting }) => {

            console.log(values);
            // values.category = category
            // try {
            //   const response = await axios.post(`${BaseUrl}token/`, values);
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
        <>
            <Button onClick={handleOpen} className="flex items-center gap-3 bg-pink-900" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Experts
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="text-indigo-900 font-serif">ADD EXPERTS</DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogBody className="">
                        <div className="w-full px-5">
                            <div>
                                <Select
                                    variant="standard"
                                    label="Select Version"
                                    name="category"
                                    onChange={(value) => {
                                        handleChange('category')(value);
                                    }}
                                    onBlur={handleBlur}
                                    value={values.category}
                                >
                                    <Option value="">Select a version</Option>
                                    <Option value="Material Tailwind HTML">Material Tailwind HTML</Option>
                                    <Option value="Material Tailwind React">Material Tailwind React</Option>
                                    <Option value="Material Tailwind Vue">Material Tailwind Vue</Option>
                                    <Option value="Material Tailwind Angular">Material Tailwind Angular</Option>
                                    <Option value="Material Tailwind Svelte">Material Tailwind Svelte</Option>
                                </Select>
                                {touched.category && errors.category && (
                                    <div className="text-red-500 text-sm ">{errors.category}</div>
                                )}
                            </div>
                            <div className="flex w-full gap-5 mb-2 mt-2">
                                <div className="w-full">
                                    <Input variant="standard" name="first_name" label="First name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.first_name}
                                    />
                                    {touched.first_name && errors.first_name && (
                                        <div className="text-red-500 text-sm ">{errors.first_name}</div>
                                    )}
                                </div>
                                <div className="w-full">
                                    <Input variant="standard" name="last_name" label="Last name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                    />
                                    {touched.last_name && errors.last_name && (
                                        <div className="text-red-500 text-sm ">{errors.last_name}</div>
                                    )}
                                </div>

                            </div>
                            <div className="w-full my-2">
                                <Input variant="standard" name="email" label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && (
                                    <div className="text-red-500 text-sm ">{errors.email}</div>
                                )}
                            </div>
                            <div className="w-full my-2">
                                <Input variant="standard" name="password" type="password" label="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {touched.password && errors.password && (
                                    <div className="text-red-500 text-sm ">{errors.password}</div>
                                )}
                            </div>
                            <div>
                                <Textarea variant="standard" label="Description" name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="gray"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button type="submit" className="bg-pink-900">
                            <span>Create user</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
}