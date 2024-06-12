import PostService from "../lib/PostService";
import { BrothState } from '../lib/StateDatas';
import { ProteinState } from '../lib/StateDatas';

export async function buttonPlaceNewOrder(element){
     //datas
    let orderSelected = {};
    
    //methods
    async function postOrder(){
        orderSelected = {
            brothId: BrothState.brothSelected,
            proteinId: ProteinState.proteinSelected
        }
        console.log(orderSelected)

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
            postOrder();
        });
     }
 
     //mounted
     setTemplate();
}
