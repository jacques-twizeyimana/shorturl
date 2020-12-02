import Axios from 'axios'


class UrlService{
    domain = "https://nice-url-backend.herokuapp.com/api"
    config = {
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
        }
    }

    getAll(){
        if(localStorage.getItem('user')){
            this.config.headers.token = localStorage.getItem('token')
        }

        return Axios.get(this.domain + "/urls");
    }

    get(id){
        return Axios.get(`/urls/${id}`);
    }

    getByCode(code){
        return Axios.get(this.domain + `/urls/code/${code}`);
    }
    shorten(data){
        return Axios.post(this.domain + "/urls",data,this.config)
    }

    update(id,data){
        return Axios.put(this.domain + `/urls/${id}`,data,this.config)
    }

    delete(id){
        return Axios.delete(this.domain + `/urls/${id}`)
    }
}

export default new UrlService()