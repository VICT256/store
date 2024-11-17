import axios from "axios";
import Cookies from 'js-cookie';
import constants from "../Components/Utils/Constants";

let serverUrl = constants.serverURL;

export default class ApiServices {

  static async rawGetRequest(path) {
    axios.defaults.withCredentials = true;

    try {
      const { res } = await axios.get(path);
      return res;
      } catch (error) {
        await this.handleError(error);
      }
  }

  static async getRequestNoAuth(path) {
    try {
      const { res } = await axios.get(`${serverUrl}${path}`);
      console.log(serverUrl);
      return res;
    } catch (error) {
      await this.handleError(error);
    }
  }

  static async postRequestNoAuth(path, postData) {
    axios.defaults.withCredentials = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${serverUrl}${path}`, postData, config);
      return res.data;
    } catch (error) {
         return await this.handleError(error);
    }
  }


  static async postRequest(url, data) {
    axios.defaults.withCredentials = true;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.getCookie("access-token")
        },
      };

      let response = await axios.post(`${serverUrl}${url}`, data, config);

      return response.data;
    } catch (error) {
      return await this.handleError(error);
    }
  }

  static async deleteRequest(url, data) {
    axios.defaults.withCredentials = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.getCookie("access-token")
        },
      };

      let response = await axios.delete(`${serverUrl}${url}`, data, config);

      return response.data;
    } catch (error) {
      return await this.handleError(error);
    }
  }


  static async getRequest(url) {
    axios.defaults.withCredentials = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: this.getCookie("access-token")
        },
      };

      let response = await axios.get(`${serverUrl}${url}`, config);

      return response.data;
    } catch (error) {
      // return await this.handleError(error);
    }
  }

  static getUserCookie = (name) => {
    const cookieValue = Cookies.get(name);
    if (cookieValue === undefined) return null
    // console.log("cookieValue=", cookieValue);
    return JSON.parse(cookieValue)
  };

  static async  checkLoginStatus () {
    try {
       const user = this.getCookie("user");
       if(!user) return null

        if (user) {
          // User is logged in, you can set the state or perform necessary actions
          // console.log('User info:', JSON.parse(user));
          return JSON.parse( user)
        } 
    } catch (error) {
       return await this.handleError(error);
    }
   
  };
  
  static async checkAuth(query = 0) {
    try {
      let token = sessionStorage.getItem("accessToken");
      if (!token) return null;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: query,
      };

      let response = await axios.get(`${serverUrl}/auth/checkauth`, config);
      return response.data;
    } catch (error) {
      await this.handleError(error);
    }
  }

  static setCookie = (key, item, period) => {
    Cookies.set(key, JSON.stringify(item), { expires: period })
   
  };

  static getCookie = (name) => {
    const cookieValue = Cookies.get(name);
    if (cookieValue === undefined) return null
    // console.log("cookieValue=", cookieValue);
    return cookieValue
  };

  static removeCookie = (name) => {
    Cookies.clear(name)
  };

  static clearCookie = (name) => {
    document.cookie.clear(name)
  };

  static setLocalStorage(key, item) {
    try {
      const result = localStorage.setItem(key, JSON.stringify(item));
      return result;
    } catch (error) {
      this.handleError(error);
    }
  }

  static getLocalStorage(key) {
    try {
      const result = JSON.parse(localStorage.getItem(key));
      return result;
    } catch (error) {}
  }

  static removeLocalStorage(key) {
    try {
      const result = localStorage.removeItem(key);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static setSessionStorage(key, item) {
    try {
      const result = sessionStorage.setItem(key, JSON.stringify(item));
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static getSessionStorage(key) {
    try {
      const result = JSON.parse(sessionStorage.getItem(key));
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static removeSessionStorage(key) {
    try {
      const result = sessionStorage.removeItem(key);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

 

  static handleLogout(){
      // Cookies.remove("access-token", {path: '/', domain:"example.com", sameSite:"None", secure:true})
      Cookies.remove("access-token")
      Cookies.remove("authenticated")
      Cookies.remove('user')
      localStorage.clear();
      sessionStorage.clear();
      window.location.replace(`${constants.clientURL}/`);

  } 

  static handleError(error) {
    // console.log(error);
    if (error.response) {
        const {status} = error.response
        if (status === 401) {
          this.handleLogout()
        }else{
          return error.response.data 
        }
          
    } else {
      return error.message;
    }
  }
}

// import {QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// const queryClient = new QueryClient()


//  export function  getRequest (path){

//         const { isLoading, error, data, isFetching } = useQuery({
//             queryKey: ['repoData'],
//             queryFn: () =>
//               axios
//                 .get(`${serverUrl}${path}`)
//                 .then((res) => res.data),
//           })

//           if (isLoading) return 'Loading...'

//           if (error) return 'An error has occurred: ' + error.message

//           return  data;

//     }

// export function  postRequest(path,postData){

//         const { isLoading, error, data, isFetching } = useQuery({
//             queryKey: ['repoData'],
//             queryFn: () =>
//               axios
//                 .post(`${serverUrl}${path}`, postData)
//                 .then((res) => res.data),
//           })

//           if (isLoading) return 'Loading...'

//           if (error) return 'An error has occurred: ' + error.message

//           return data;

//     }

//  export function storeToken (key,obj) {
//         try {
//             const result =   localStorage.setItem(key,JSON.stringify(obj))
//             return  result
//         } catch (error) {
//              console.log(error);
//         }

//     }

//  export function getToken (key) {
//         try {
//             const result =   localStorage.getItem(key)
//             return  result
//         } catch (error) {
//              console.log(error);
//         }
//     }
