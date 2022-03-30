import React from 'react';
import {useHistory} from 'react-router-dom';

const NewQuery = (props) => {

  const history = useHistory();
  const [formData, updateFormData] = React.useState({
    name: "",
    content: "",
    endpoint: 1
  })

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const content = formData.content;
    const endpoint = formData.endpoint;

    console.log("In newQuery.js - onFormSubmit, endpoint: "+endpoint)
    props.onAddQuery(name, content, endpoint);
    history.push("/result");
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
                     placeholder="Enter query name"
                     onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Query text:</label>
              <textarea
                     className="form-control"
                     id="content"
                     name="content"
                     required
                     onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Endpoint</label>
              <select name="endpoint" className="form-control" onChange={handleChange}>
                {props.endpoints.map((term) =>
                    <option key={term.id} value={term.id}>{term.name}</option>
                )}
              </select>
            </div>
            <button id="submit" type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default NewQuery;
