import axios from"axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"f58645fb4a468c9f57f1b12c81ed6fcf",
    language:"ko-KR"
  }
});

export default instance