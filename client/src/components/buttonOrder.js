import PostService from "../lib/PostService";
import { BrothState } from '../lib/StateDatas';

export async function buttonPlaceNewOrder(element){
     //datas
    let orderSelected = {};
    
    //methods
    function teste() {
        console.log('Broth selecionado:', BrothState.brothSelected);
        console.log('protein selecionado:', BrothState.brothSelected);

    }

    async function postOrder(){
        orderSelected = {
            brothId: BrothState.brothSelected,
            proteinId: 2
        }

        try{
            broths = await PostService.getPosts('http://localhost:3000/broths');
        } catch(err){
            console.log(err)
        }
    }
 
     //template
     const setTemplate = () => {
        element.innerHTML = '<button>Place New Order</button>'
        element.addEventListener('click', () => {
            teste();
        });
     }
 
     //mounted
     setTemplate();
}
