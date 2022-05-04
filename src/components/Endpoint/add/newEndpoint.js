import React from 'react';
import {useHistory} from 'react-router-dom';
import CodeMirror from "codemirror/codemirror-5.65.3/lib/codemirror.js";
import "codemirror/codemirror-5.65.3/lib/codemirror.css";
import "codemirror/codemirror-5.65.3/mode/sparql/sparql";
import "codemirror/codemirror-5.65.3/theme/dracula.css";
import {useEffect} from "react";

const NewEndpoint = (props) => {

  const history = useHistory();
  const [formData, updateFormData] = React.useState({
    name: "",
    url: "",
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
    const url = formData.url;

    props.onAddEndpoint(name, url);
    history.push("/new-query");
  }

  return(
      <div className="row mt-5">
        <div style={{width: "100%"}} className="col-md-5">

          <form style={{width: "100%"}} onSubmit={onFormSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="name">Name</label>
              <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     required
                     placeholder="Enter endpoint name"
                     onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="url">Url</label>
              <input type="text"
                     className="form-control"
                     id="url"
                     name="url"
                     required
                     placeholder="Enter endpoint url"
                     onChange={handleChange}
              />
            </div>


            <div className={"row"}>
              <div className={"col-11"}>

              </div>
              <div className={"col-1"}>
                <button id="submit" type="submit" className="btn btn-primary mt-4">Execute</button>
              </div>
            </div>

          </form>
        </div>
      </div>
  )
}

export default NewEndpoint;
