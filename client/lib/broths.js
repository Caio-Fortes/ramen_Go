import PostService from "../PostService";

export async function listBroths(element) {
    //datas
    let broths = [];
    let brothSelected = null;

    //methods
    async function get(){
        try{
            broths = await PostService.getPosts('http://localhost:3000/broths');
        } catch(err){
            console.log(err)
        }
    }

    function selecionarBroth(card){
        brothSelected = card.id;
    }
   
    //template
    const setTemplateCards = () => {
        for(let i = 0; i < broths.length; i++){
            let cardPrincipal = document.createElement('div');
            cardPrincipal.classList.add('card');
            
            let imgCard = document.createElement('div');
            imgCard.classList.add('image-card');
            let imgElement = document.createElement('img');
            imgElement.src = broths[i].imageInactive;

            let titleCard = document.createElement('div');
            titleCard.classList.add('title-card');
            titleCard.innerHTML = broths[i].name

            let descriptionCard = document.createElement('div');
            descriptionCard.classList.add('description-card');
            descriptionCard.innerHTML = broths[i].description

            let priceCard = document.createElement('div');
            priceCard.classList.add('price-card');
            priceCard.innerHTML = `US$ ${broths[i].price}`

            cardPrincipal.appendChild(imgCard);
            imgCard.appendChild(imgElement)
            cardPrincipal.appendChild(titleCard);
            cardPrincipal.appendChild(descriptionCard);
            cardPrincipal.appendChild(priceCard);
            element.appendChild(cardPrincipal);

            let selectCard = {
                id: broths[i].id,
                imageActive: broths[i].ImageActive,
                imgElement: imgElement,
                titleCard: titleCard,
                descriptionCard: descriptionCard,
                priceCard: priceCard
            }
            cardPrincipal.addEventListener('click', () => selecionarBroth(selectCard))
        }
    }

    //mounted
    await get();
    setTemplateCards();
    //console.log(broths)
}
  