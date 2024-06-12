import PostService from "../lib/PostService";

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

    function selecionarBroth(cardSelected) {
        console.log(cardSelected);
        brothSelected = cardSelected.id;

        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('selected-card');
        });
        document.querySelectorAll('.title-card').forEach(titleCard => {
            titleCard.classList.remove('selected-title-card');
        });
        document.querySelectorAll('.description-card').forEach(titleCard => {
            titleCard.classList.remove('selected-description-card');
        });
        document.querySelectorAll('.price-card').forEach(titleCard => {
            titleCard.classList.remove('selected-price-card');
        });
        broths.forEach(broth => {
            const imgElement = document.querySelector(`img[src="${broth.ImageActive}"]`);
            if (imgElement) {
                imgElement.src = broth.imageInactive;
            }
        });

        cardSelected.cardPrincipal.classList.add('selected-card');
        cardSelected.titleCard.classList.add('selected-title-card');
        cardSelected.descriptionCard.classList.add('selected-description-card');
        cardSelected.priceCard.classList.add('selected-price-card');
        cardSelected.imgElement.src = cardSelected.imageActive;
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
                cardPrincipal: cardPrincipal,
                imageActive: broths[i].ImageActive,
                imageInactive: broths[i].imageInactive,
                imgElement: imgElement,
                titleCard: titleCard,
                descriptionCard: descriptionCard,
                priceCard: priceCard
            }
            cardPrincipal.addEventListener('click', 
                () => selecionarBroth(selectCard)
            )
        }
    }

    //mounted
    await get();
    setTemplateCards();
    console.log(broths)
}
  