import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
     
      const user = {
        _id: '1',
        firstname: 'John',
        lastname: 'Doe',
        email: values.email,
        mobile: '1234567890',
        token: 'abc123',
      };

      dispatch(login(user));

      
      setLoginSuccess(true);
    },
  });

  return (
    <div className="py-5" style={{ background: '#131921', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto py-5">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>

        {loginSuccess && <p className="text-center text-success">Login successful!</p>}

        <form className="text-center align-items-center px-3" onSubmit={formik.handleSubmit}>
          <CustomInput
            name="email"
            type="text"
            className="form-control mx-auto"
            label="Email Address"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="error small">{formik.errors.email}</div>
          ) : null}

          <CustomInput
            name="password"
            type="password"
            className="form-control mx-auto"
            label="Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error small">{formik.errors.password}</div>
          ) : null}

          <div className="mb-3 text-end">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>

          <Link
            to="/admin"
            className="w-100 btn btn-primary text-center text-decoration-none fs-5"
            style={{ background: '#131921' }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;