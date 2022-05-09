import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import CodeMirror from "codemirror/codemirror-5.65.3/lib/codemirror.js";
import "codemirror/codemirror-5.65.3/lib/codemirror.css";
import "codemirror/codemirror-5.65.3/mode/sparql/sparql";
import "codemirror/codemirror-5.65.3/theme/dracula.css";
import {useEffect} from "react";

const NewQuery = (props) => {

  let addEndpoint
  if (localStorage?.roles?.includes("ROLE_ADMIN") || localStorage?.roles?.includes("ROLE_USER")) {
    addEndpoint = (<Link className={"btn btn-block btn-dark btn-sm"} to="/add-endpoint" >Add Endpoint</Link>);
  } else {
  }

  const history = useHistory();
  const [formData, updateFormData] = React.useState({
    name: "",
    content: "",
    endpoint: 1
  })

  // let editor = null
  // if(document?.getElementById("content")){
  //   if(document.getElementsByClassName("CodeMirror").length === 0) {
  //     editor = CodeMirror.fromTextArea(
  //         document.getElementById("content")
  //     )
  //     // updateFormData({
  //     //   ...formData,
  //     //   ["content"]: editor.getValue()
  //     // } )
  //   }
  // }

  /*useEffect(() => {
    const editor = CodeMirror.fromTextArea(
        document.getElementById("uniqueContent")
    )
      }
  )*/


  const handleChange = (e) => {
    // if(e.target.name === "content" && editor!=null){
    //   updateFormData({
    //       ...formData,
    //       ["content"]: editor.getValue()
    //     } )
    // }
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
    history.push("/query-executed-success");
  }

  return(
      <div className="row mt-5">
        <h3>Execute Query</h3>
        <div style={{width: "100%"}} className="col-md-5">

          <form style={{width: "100%"}} onSubmit={onFormSubmit}>
            <div className="form-group mb-2">
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
            <div className="form-group mb-2">
              <label>Endpoint</label>
              <select name="endpoint" className="form-control" onChange={handleChange}>
                {props.endpoints.map((term) =>
                    <option key={term.id} value={term.id}>{term.name}</option>
                )}
              </select>

            </div>
            <div className="form-group mb-2 row">
              <div className={"col-lg-10"}> </div>
              <div className={"col-lg-2"}>
                {addEndpoint}
            </div>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="content">Query text:</label>
              <div style={{border: "solid", borderColor: "lightgray", borderWidth: "0.2px"}}>
              <textarea
                     className="form-control code_text_area"
                     id="content"
                     name="content"
                     required
                     style={{height: "260px"}}
                     onChange={handleChange}
              />
              </div>
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

export default NewQuery;
