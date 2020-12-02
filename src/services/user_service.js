import Axios from 'axios'


class usersService{
    domain = "https://nice-url-backend.herokuapp.com/api"
    config = {
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
        }
    }
    getAll(){
        return Axios.get(this.domain + "/users");
    }

    get(id){
        return Axios.get(`/users/${id}`);
    }
    
    getEmail(email){
        return Axios.get(this.domain + `/users/email/${email}`);
    }
    signUp(data){
        return Axios.post(this.domain + "/users",data,this.config)
    }
    login(data){
        return Axios.post(this.domain + `/users/login/`,data,this.config);
    }
    update(id,data){
        return Axios.put(this.domain + `/users/${id}`,data,this.config)
    }

    delete(id){
        return Axios.delete(this.domain + `/users/${id}`)
    }
}

export default new usersService()