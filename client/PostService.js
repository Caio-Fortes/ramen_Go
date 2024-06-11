import axios from 'axios';

const url = "http://localhost:3000/"
//const url = "api/"

class PostService{
    static getPosts(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                   console.log(data)
                )
            } catch(err){
                reject(err)
            }
        })
    }

    static insertPost(text){
        return axios.post(url, { text });
    }

    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
