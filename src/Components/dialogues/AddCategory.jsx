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
import { AddCategoryUrl } from "../../services/services";

export function AddCategory(getCategorylistFunc) {
  const [open, setOpen] = useState(false);
  const [cat_image, setimage] = useState('');
  const [is_listed, setislisted] = useState(false);

  const initialValues = {
    cat_image: "",
    cat_name: "",
    cat_description: "",
    is_listed: ""
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
        formData.append('cat_image', cat_image);
        formData.append('cat_name', values.cat_name);
        formData.append('cat_description', values.cat_description);
        formData.append('is_listed', is_listed);
        const response = await AddCategoryUrl(formData)
        if (response.status === 201) {
            ToastSuccess(`Category ${values.cat_name}  added`);
          getCategorylistFunc();
          handleOpen()
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

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="flex items-center gap-3" size="sm">
        Add Category
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <DialogHeader>Create category</DialogHeader>
          <div className="mx-5">
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
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" type="submit" >
              <span>Add Category</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}