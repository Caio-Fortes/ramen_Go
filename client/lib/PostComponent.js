import PostService from "../PostService";

export function setupPostComponent(element) {
    //datas
    let counter = 0
    let posts = [];

    const getBroths = () => {
        async function get(){
            try{
                await PostService.getPosts('http://localhost:3000/broths');
            } catch(err){
                console.log(err)
            }
        }
        return get();
    }

    const getProteins = () => {
        async function get(){
            try{
                await PostService.getPosts('http://localhost:3000/proteins');
            } catch(err){
                console.log(err)
            }
        }
        return get();
    }

    //mounted
    getBroths();
    getProteins();
}
  