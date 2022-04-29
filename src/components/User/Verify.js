import React from 'react';
import {useHistory} from 'react-router-dom';

const Verify = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        code: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const code = formData.code;

        props.onVerify(code);


        history.push("/login");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input type="text"
                               className="form-control"
                               id="code"
                               name="code"
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

export default Verify;
