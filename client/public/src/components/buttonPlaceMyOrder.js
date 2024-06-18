import PostService from "../lib/PostService";
import { onBrothChange, onProteinChange } from '../lib/StateDatas';

export async function buttonPlaceMyOrder(element){
     //datas
    let orderSelected = {
        brothId: null,
        proteinId: null
    };
    let order = {};
    
    //watchers
    onBrothChange((newState, prevState) => {
        orderSelected.brothId = newState.brothSelected;
        activeDisableButton();
    });
    onProteinChange((newState, prevState) => {
        orderSelected.proteinId = newState.proteinSelected;
        activeDisableButton();
    });

    //methods
    function activeDisableButton(){
        const button = document.getElementById("button_order");
        if(orderSelected.brothId && orderSelected.proteinId){
            button.classList.remove('button-disabled');
            button.classList.add('button-active');

            const arrow = document.getElementById("arrow");
            arrow.setAttribute('fill', '#FFC024');

        }
        else {
            button.classList.add('button-disabled');
        }
    }

    async function postOrder(){
        try{
            let linkApi = '/api/orders'
            let linkLocal = 'http://localhost:3000/api/orders'
            order = await PostService.insertPost(linkLocal, orderSelected);
            console.log(order);

            sessionStorage.setItem('orderData', JSON.stringify(order));
            window.location.href = '/pages/Sucess.html';

        } catch(err){
            console.log(err)
        }
    }
 
     //template
     const setTemplate = () => {
        element.innerHTML = `
            <button id="button_order">
                <div class="text-button-place-order">PLACE MY ORDER</div>
                <div>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="arrow" fill-rule="evenodd" clip-rule="evenodd" d="M19.7115 7.23199L13.3586 0.298656C12.9845 -0.11041 12.3878 -0.0976104 12.0278 0.326923C11.6673 0.751457 11.6786 1.42666 12.0532 1.83519L16.7247 6.93333H0.941176C0.421176 6.93333 0 7.41119 0 7.99999C0 8.58933 0.421176 9.06666 0.941176 9.06666H16.7247L12.0532 14.1653C11.6786 14.5739 11.6673 15.2491 12.0278 15.6736C12.2127 15.8907 12.4588 16 12.7059 16C12.9407 16 13.176 15.9013 13.3586 15.7019L19.7115 8.76853C19.896 8.56746 20 8.29013 20 7.99999C20 7.71039 19.896 7.43306 19.7115 7.23199Z" fill="white"/>
                    </svg>
                </div>
            </button>
        `

        element.addEventListener('click', () => {
            if(orderSelected.brothId && orderSelected.proteinId){
                postOrder();
            }
        });
     }
 
     //mounted
     setTemplate();
     activeDisableButton();
}