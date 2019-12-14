import React, { useState, useEffect } from 'react';
import { Card, Button } from 'reactstrap';
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

// Needs a redirect and check why catch is firing, though token is set.
const Login = ({values, errors, touched, status}) => {

    let history = useHistory();

    // const LoginToken = localStorage.getItem('token') || '';
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
    if (isLoggedIn) {
        history.push("/")
    }
  },[history, isLoggedIn]);

  return (
    <>
    <div>
        <Card className="login-card" body>
            <Form>
                <label htmlFor='username'>Email: </label>
                <br/>
                <Field name="email" type="email" />
                {touched.email && errors.email && <p className='form-error'>{errors.email}</p>}
                <label htmlFor='password'>Password: </label>
                <Field type="password" name='password' autoComplete="off" />
                {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}

            <Button className="button-style" type='submit'>Login</Button>
            </Form>
            <hr />
            <p><a href='/register'>Create</a> new account.</p>
            </Card>
    </div>
    </>
  );
}

const FormikLogin = withFormik({

    mapPropsToValues({email, password}) {
        return {
            email: email || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email Required.').email(),
        password: Yup.string().required('No Password Provided.').min(5, 'Password must be 5 characters.'),
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        axios.post("http://127.0.0.1:3000/login/", values)
        .then(response => {
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user_email', values.email);
            setStatus(response.data);
        })
        .catch(err => console.log('Error: ' + err.response));
        resetForm();
    }
})(Login)


export default FormikLogin;