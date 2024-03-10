import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from "@material-tailwind/react";

import { cateorySchema } from "../../Validations/Validations";
import { ToastError, ToastSuccess } from '../Toast/Toasts';
import { useFormik } from 'formik';
import {  EditCategoryUrl } from "../../services/services";
import { PencilIcon } from "@heroicons/react/24/outline";

export function EditCategory({open,handleOpen,afterEdit,showtabledata}) {
    const [cat_image, setimage] = useState('');
    const [is_listed, setislisted] = useState(showtabledata.is_listed);

    const initialValues = {
        cat_image: showtabledata.cat_image,
        cat_name: showtabledata.cat_name,
        cat_description: showtabledata.cat_description,
        is_listed: showtabledata.is_listed,
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
        validationSchema: cateorySchema,
        onSubmit: async (values, { setSubmitting }) => {

            try {
                const formData = new FormData();

                // Append other form fields to the FormData object
                if (cat_image){
                    formData.append('cat_image', cat_image);
                }
                formData.append('cat_name', values.cat_name);
                formData.append('cat_description', values.cat_description);
                formData.append('is_listed', is_listed);
                const response = await EditCategoryUrl(formData,showtabledata.id)
                if (response.status === 200) {
                    ToastSuccess(`Category ${values.cat_name}  Edited`);
                    afterEdit();
                    handleOpen();
                }
            } catch (error) {
                console.log(error);
                ToastError('Something wrong');
                handleOpen()
            } finally {
                setSubmitting(false);
            }
        },
    });


    return (
        <>

            <Dialog open={open} handler={handleOpen}>
                
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <DialogHeader className="text-indigo-900 font-serif">EDIT CATEGORY</DialogHeader>
                    <div className="mx-5">
                        <div className="w-full overflow-auto h-36 mb-5">
                            <img src={cat_image ? URL.createObjectURL(cat_image): showtabledata.cat_image} alt="" className="" />
                        </div>
                        <div className="flex gap-5 mb-2">
                            <div className="w-full">
                                <Input type="file" accept="image/*" name="cat_image" variant="standard" label="Image"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setimage(e.target.files[0]);
                                    }} onBlur={handleBlur}
                                />
                                {touched.cat_image && errors.cat_image && (
                                    <div className="text-red-500 text-sm ">{errors.cat_image}</div>
                                )}
                            </div>
                            <div className="w-full">
                                <Input variant="standard" name="cat_name" label="Category Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cat_name}
                                />
                                {touched.cat_name && errors.cat_name && (
                                    <div className="text-red-500 text-sm ">{errors.cat_name}</div>
                                )}
                            </div>
                        </div>
                        <Textarea variant="standard" label="Description" name="cat_description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cat_description}
                        />
                        {touched.cat_description && errors.cat_description && (
                            <div className="text-red-500 text-sm ">{errors.cat_description}</div>
                        )}
                        <label htmlFor="">Listed </label>
                        <input type="checkbox"
                            name="is_listed"
                            checked={is_listed}
                            onChange={(e) => {
                                setislisted(e.target.checked);
                            }}
                        />


                    </div>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="gray"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button className="bg-pink-900" type="submit" >
                            <span>Edit Category</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
}