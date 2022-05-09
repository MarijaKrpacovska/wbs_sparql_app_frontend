import axios from "../custom-axios/axios";
import authToken from "../services/utils/authToken";

const sparqlService = {
    fetchMyQueries: () =>{
      //authToken(localStorage.jwtToken);
      return axios.get("/queries/myQueries", {
          headers: {
              'Authorization': localStorage.jwtToken
          },
          params: { userEmail: localStorage.email }
      })
  },
    fetchQueries: () =>{
        //authToken(localStorage.jwtToken);
        return axios.get("/queries", {
            headers: {
                'Authorization': localStorage.jwtToken
            }
        })
    },
    deleteQuery: (id) => {
        return axios.delete(`/queries/delete/${id}`, {
            headers: {
                'Authorization': localStorage.jwtToken
            }
        });
    },
    deleteEndpoint: (id) => {
        return axios.delete(`/endpoints/delete/${id}`);
    },

    getQuery: (id) => {
        console.log("vleguva vo getMovie")
        return axios.get(`/queries/details/${id}` );
    },
    getEndpoint: (id) => {
        console.log("vleguva vo getEndp")
        return axios.get(`/endpoints/details/${id}`, {
                headers: {
                    'Authorization': localStorage.jwtToken
                }
            }
        );
    },
    getResult: (id) => {
        console.log("vleguva vo getr")
        return axios.get(`/results/details/${id}`
        );
    },

    getJsonResult: (id) => {
        console.log("vleguva vo getr")
        return axios.get(`/results/select-result-details/${id}`
        );
    },
    fetchEndpoints: () =>{
        //authToken(localStorage.jwtToken);
        return axios.get("/endpoints")
    },
    addQuery: (name, content, endpointId) => {
        authToken(localStorage.jwtToken);
        return axios.post("/queries/add", {
            "name" : name,
            "content" : content,
            "endpointId" : endpointId,
            "userEmail" : localStorage.email
        }
        );
    },
    addEndpoint: (name, url) => {
        authToken(localStorage.jwtToken);
        return axios.post("/endpoints/add", {
                "name" : name,
                "url" : url
            }, {
                headers: {
                    'Authorization': localStorage.jwtToken
                }
            }
        );
    },
    editEndpoint: (id, name, url) => {
        authToken(localStorage.jwtToken);
        return axios.post(`/endpoints/edit/${id}`, {
                "name" : name,
                "url" : url
            }, {
                headers: {
                    'Authorization': localStorage.jwtToken
                }
            }
        );
    }

}
export default sparqlService;