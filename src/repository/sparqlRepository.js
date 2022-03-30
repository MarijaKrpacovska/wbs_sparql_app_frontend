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
    getQuery: (id) => {
        console.log("vleguva vo getMovie")
        return axios.get(`/queries/details/${id}`, {
            headers: {
                'Authorization': localStorage.jwtToken
            }
        }
            );
    },
    getResult: (id) => {
        console.log("vleguva vo getr")
        return axios.get(`/results/details/${id}`, {
                headers: {
                    'Authorization': localStorage.jwtToken
                }
            }
        );
    },
    fetchEndpoints: () =>{
        //authToken(localStorage.jwtToken);
        return axios.get("/endpoints", {
            headers: {
                'Authorization': localStorage.jwtToken
            }
        })
    },
    addQuery: (name, content, endpointId) => {
        authToken(localStorage.jwtToken);
        return axios.post("/queries/add", {
            "name" : name,
            "content" : content,
            "endpointId" : endpointId,
            "userEmail" : localStorage.email
        }, {
                headers: {
                    'Authorization': localStorage.jwtToken
                }
            }
        );
    },
    register: (username,name,lastname, email, password, repeatPass, role) => {
        authToken(localStorage.jwtToken);
        return axios.post("/auth/register", {
            "name": name,
            "username": username,
            "lastname": lastname,
            "email": email,
            "password": password,
            "repeatPass": repeatPass,
            "role": "ROLE_USER"
        });
    },

}
export default sparqlService;