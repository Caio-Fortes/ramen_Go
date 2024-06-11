import axios from 'axios';

//const url = "http://localhost:3000/proteins"
//const url = "api/"

class PostService{
    static getPosts(url){
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
}

export default PostService;
