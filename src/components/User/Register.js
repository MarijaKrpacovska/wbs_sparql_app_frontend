import React from 'react';
import {useHistory} from 'react-router-dom';

const Register = (props) => {

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    };

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        mobile:""
    })

    const [errors, updateErrors] = React.useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })

        const { name, value } = e.target;
        let errors = errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        updateErrors({
            ...errors,
            errors, [name]: value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const email = formData.email;
        const password = formData.password;
        const repeatPassword = formData.repeatPassword;
        const mobile = formData.mobile;

        if(validateForm(errors)) {
            console.info('Valid Form')
        }else{
            console.error('Invalid Form')
        }

        props.onRegister(name, email, password, repeatPassword, mobile);
        history.push("/verify-email");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               required
                               onChange={handleChange}
                        />
                        {errors.email.length > 0 &&
                        <span className='error'>{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               required
                               onChange={handleChange}
                        />
                        {errors.password.length > 0 &&
                        <span className='error'>{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type="password"
                               className="form-control"
                               id="repeatPassword"
                               name="repeatPassword"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text"
                               className="form-control"
                               id="mobile"
                               name="mobile"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
