import axios  from "axios";
class buttonService {
    getData(){
        return axios.get("http://localhost:8059/api/getdata");

    }
    getAddData(data){
        return axios.get('http://localhost:8059/api/add',{params:data});

    }
    getSubData(data){
        return axios.get('http://localhost:8059/api/sub',{params:data});
    }
    getMulData(data){
        return axios.get('http://localhost:8059/api/mul',{params:data});
    }
    getDivData(data){
        return axios.get('http://localhost:8059/api/div',{params:data});
    }
    
}
export default new  buttonService;