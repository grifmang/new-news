import React, { useState, useEffect } from 'react';
import { Card, Button } from 'reactstrap';
import axios from 'axios';
import { connect } from "react-redux";
import { login, logout } from "../../actions";
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

// Needs a redirect and check why catch is firing, though token is set.
const Login = ({values, errors, touched, status}) => {
  //   let history = useHistory();

  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   // useEffect for redirect from login if user is logged in
  // useEffect(() => {
  //   localStorage.getItem('token') ? setIsLoggedIn(true) : setIsLoggedIn(false);
  //   if (isLoggedIn) {
  //       history.push("/")
  //   }
  // },[history, isLoggedIn]);

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
    handleSubmit(values, {setStatus, resetForm, props}) {
        axios.post("http://127.0.0.1:3000/login/", values)
        .then(response => {
            setStatus(response.data);
            // localStorage.setItem('token', response.access_token)
            props.login(values.email, response.data.access_token);
            alert('Click News in the top left to now see your news.');
        })
        .catch(err => console.log('Error: ' + err.response));
        resetForm();
    }
})(Login)


const mapStateToProps = state => {
    return {
      email: state.users.email,
      token: state.users.token,
      isLoggedIn: state.users.isLoggedIn,
      error: state.users.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {login, logout}
  )(FormikLogin);