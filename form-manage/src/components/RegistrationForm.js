import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup';
import axiosWithAuth from "./authConfig"


 const RegistrationForm = ({ touched, errors, values }) => {
    return (
        <Form>
        <div className="input-group">
            <div className="login-group" >
               {touched.name && errors.name && <p>{errors.username}</p>}
               <label htmlFor="username">Username: </label>
                <Field 
                    type="text"
                    name="username"
                    placeholder="Username" 
                    
                />
            </div>
            <div className="login-group">
            {touched.password && errors.password && <p>{errors.password}</p>}
                <label htmlFor="password">Password: </label>
                <Field 
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                
                />
            </div>
            
        </div>
        <div>
                {/* {isSubmitting && <p>Loading...</p>} */}
            <button
                // disabled={isSubmitting}
                className="submit-button"
                type="submit"
            >
                Register &rarr;
            </button>
        </div>
        </Form>
    )
}

const FormikRegistrationForm = withFormik({
    mapPropsToValues() {
       return{
        username: "Your name",
        password: "password"
       }; 
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password Required')
    }),

    handleSubmit(values,formikBag){
        const url = "/register"
        return axiosWithAuth().post(url,values).then(res => {
            localStorage.setItem("token", res.data.token)
            alert('This is the server response: ' + res.data.message)
            
            formikBag.resetForm()
        })

    },

})(RegistrationForm);
export default FormikRegistrationForm;    