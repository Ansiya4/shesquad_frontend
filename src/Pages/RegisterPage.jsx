import React, { useEffect, useState } from 'react'
import BgImage from '../assets/Image/mailimage.jpg'
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from 'react-router-dom';
import { RegisterSchema } from '../Validations/Validations';
import { ToastError, ToastSuccess } from '../Components/Toast/Toasts';
import { useFormik } from 'formik';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './LoginPage.css'
import { BACKEND_BASE_URL } from '../api/api';

function RegisterPage() {
  const navigate = useNavigate()
  // Formic code
  const initialValues = {
    first_name:"",
    last_name:"",
    email: "",
    password: ""
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
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(`${BACKEND_BASE_URL}/accounts/register/`, values);
        if (response.status === 201) {
          ToastSuccess(response.data.message || 'Registraion successfully completed');
          navigate('/login')
        }
      } catch (error) {
        ToastError(error.response.data.email[0] || 'An error occurred');
      } finally {
        setSubmitting(false);
      }
    },
  });
  // Google Login Function
  const [guser, setgUser] = useState([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setgUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });



  useEffect(() => {
    if (guser && guser.access_token) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [guser]);
  return (
    <div className="bg-cover bg-fixed  h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}>
      <Card shadow={true} className="border bg-opacity-90  px-10 py-20 sm:py-10">
        <Typography variant="h4" color="blue-gray">
          Connect To SheSquad{" "}
        </Typography>
        <div className='mt-8 mb-3 w-full'>
          <button className="gsi-material-button w-full" onClick={login}>
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block' }}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="gsi-material-button-contents">Sign in with Google</span>
              <span style={{ display: 'none' }}>Sign in with Google</span>
            </div>
          </button>
        </div>
        <div className='flex justify-center items-center w-full'>
          <hr className='w-full border-t-2 border-gray-300' />
          <p className='mx-4'>or</p>
          <hr className='w-full border-t-2 border-gray-300' />
        </div>

        <form className=" mb-2 w-full max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <div className='flex'>
              <div>
                <Input
                  variant="standard"
                  label="First name"
                  name='first_name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {touched.first_name && errors.first_name && (
                  <div className="text-red-500 text-sm ">{errors.first_name}</div>
                )}
              </div>
              <div>
                <Input
                  variant="standard"
                  label="Last name"
                  name='last_name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {touched.last_name && errors.last_name && (
                  <div className="text-red-500 text-sm ">{errors.last_name}</div>
                )}
              </div>
            </div>
            <div>
              <Input
                variant="standard"
                label="Email"
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm ">{errors.email}</div>
              )}
            </div>
            <div>
              <Input
                type="password"
                variant="standard"
                label="Password"
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-sm ">{errors.password}</div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8 items-center">
            <button type='submit' className="font-bold text border border-gray-600 rounded-full px-4 py-1">
              Sign Up
            </button>
          </div>
          <Typography color="gray" className="mt-4 text-center text-sm italic font-normal">
            Don't have an account?
            <Link to='/login' href="#" className="ps-1 text-sm font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
          <Typography color="gray" className="text-center text-sm italic font-normal">
            <Link href="#" className="ps-2 font-medium text-sm text-gray-900">
              Forgot Password?
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default RegisterPage