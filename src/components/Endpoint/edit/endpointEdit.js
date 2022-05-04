import React from 'react';
import {useHistory} from 'react-router-dom';

const EndpointEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        url: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.endpoint.name;
        const url = formData.url !== "" ? formData.url : props.endpoint.url;

        props.onEditEndpoint(props.endpoint.id, name, url);
        history.push("/manage-endpoints");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Endpoint name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.endpoint.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Url</label>
                        <input type="text"
                               className="form-control"
                               id="url"
                               name="url"
                               placeholder={props.endpoint.url}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EndpointEdit;
