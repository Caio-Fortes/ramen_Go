import PostService from "../PostService";

export async function listProteins(element) {
    //datas
    let proteins = [];
    let proteinSelected = null;

    //methods
    async function get(){
        try{
            proteins = await PostService.getPosts('http://localhost:3000/proteins');
        } catch(err){
            console.log(err)
        }
    }

    function selecionarProtein(card){
        proteinSelected = card.id;
    }
   
    //template
    const setTemplateCards = () => {
        for(let i = 0; i < proteins.length; i++){
            let cardPrincipal = document.createElement('div');
            cardPrincipal.classList.add('card');
            
            let imgCard = document.createElement('div');
            imgCard.classList.add('image-card');
            let imgElement = document.createElement('img');
            imgElement.src = proteins[i].imageInactive;

            let titleCard = document.createElement('div');
            titleCard.classList.add('title-card');
            titleCard.innerHTML = proteins[i].name

            let descriptionCard = document.createElement('div');
            descriptionCard.classList.add('description-card');
            descriptionCard.innerHTML = proteins[i].description

            let priceCard = document.createElement('div');
            priceCard.classList.add('price-card');
            priceCard.innerHTML = `US$ ${proteins[i].price}`

            cardPrincipal.appendChild(imgCard);
            imgCard.appendChild(imgElement)
            cardPrincipal.appendChild(titleCard);
            cardPrincipal.appendChild(descriptionCard);
            cardPrincipal.appendChild(priceCard);
            element.appendChild(cardPrincipal);

            let selectCard = {
                id: proteins[i].id,
                imageActive: proteins[i].ImageActive,
                imgElement: imgElement,
                titleCard: titleCard,
                descriptionCard: descriptionCard,
                priceCard: priceCard
            }
            cardPrincipal.addEventListener('click', () => selecionarProtein(selectCard))
        }
    }

    //mounted
    await get();
    setTemplateCards();
    console.log(proteins)
}
  