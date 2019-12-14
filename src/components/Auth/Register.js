import React, { useState, useEffect } from 'react';
import { Card, Button } from 'reactstrap';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = ({values, errors, touched, status}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
  },[isLoggedIn]);

  return (
    <div>
        <Card className="login-card" body>
            <Form>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                {touched.email && errors.email && <p className='form-error'>{errors.email}</p>}
                <label htmlFor='name'>Name: </label>
                <br/>
                <Field name='name' type="text" />
                {touched.name && errors.name && <p className='form-error'>{errors.name}</p>}
                <label htmlFor='password'>Password: </label>
                <Field type="password" name='password' autoComplete="off" />
                {touched.password && errors.password && <p className='form-error'>{errors.password}</p>}
                <label htmlFor='password'>Confirm Password: </label>
                <Field type="password" name='confirmPassword' autoComplete="off" />
                {touched.confirmPassword && errors.confirmPassword && <p className='form-error'>{errors.confirmPassword}</p>}
            <Button className="button-style" type='submit'>Register</Button>
            </Form>
            <hr />
            <p><a href='/login'>Login</a> instead.</p>
            </Card>
    </div>
  );
}

const FormikRegister = withFormik({

    mapPropsToValues({email, name, password, confirmPassword}) {
        return {
            email: email || '',
            name: name || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Required.').email(),
        name: Yup.string().required('Username Required.'),
        password: Yup.string().required('No Password Provided.').min(5, 'Password must be 5 characters.'),
        confirmPassword: Yup.string().required('Required.').label('Confirm Password').test('passwords-match', 'Passwords must match.', function(e) {return this.parent.password === e;}),
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        const loginVals = {
            "name": values.name, 
            "email": values.email,
            "password": values.password};
        axios.post("http://127.0.0.1:3000/register", loginVals)
        .then(response => {
            console.log(response)
            localStorage.setItem('token', response.body.access_token);
            localStorage.setItem('user_email', values.email);
            setStatus(response.data);
        })
        .catch(err => console.log(err.response));
        resetForm();
    }
})(Register)


export default FormikRegister;