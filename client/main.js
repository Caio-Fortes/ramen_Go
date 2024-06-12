import './styles.css';
import  {listBroths}  from './src/components/broths.js';
import {listProteins} from './src/components/proteins.js';
import {scrollWidgetBroth} from './src/components/widgetbroth.js';
import {scrollWidgetProtein} from './src/components/widgetprotein.js';
import {buttonPlaceNewOrder} from './src/components/buttonOrder.js';
import logoImg from './public/images/logo.png'
import entregadoraImg from './public/images/entregadora.png'
import balaoAzulImg from './public/images/BalaoAzul.png'
import balaoAmareloImg from './public/images/BalaoAmarelo.png'

const logo = document.createElement('img');
logo.src = logoImg
const entregadora = document.createElement('img');
entregadora.src = entregadoraImg
const balaoAzul = document.createElement('img');
balaoAzul.src = balaoAzulImg
const balaoAmarelo = document.createElement('img');
balaoAmarelo.src = balaoAmareloImg

document.querySelector('#app').innerHTML = `
  <body>    
    <section>
      <div id="container_principal">
          <div class="logo">
            <img logo>
          </div>
          <div id="container_capa">
            <div class="circulo-marrom">
              <div class="entregadora">
                <entregadora>
              </div>
            </div>
            <div class="balaoAzul">
              <balaoAzul>
            </div>
            <div class="balaoAmarelo">
              <balaoAmarelo>
            </div>
          </div>
          <div class="letras-amarelas"> ラーメン </div>
          <div class="title-go">GO!</div>
          <div class="description"></div>
          <div class="button-blue"></div>
      </div>
    </section>
    <section>
      <div id="container_body">
        <section>
          <div id="title_select_broth">
            First things first: select your favorite broth.
          </div>
          <div id="subtitle_select_broth">
            It will give the whole flavor on your ramen soup. 
          </div>
        </section>
        <section>
          <div id="container_select_broth"></div>
        </section>
        <section>
          <div class="container-widget">
            <div id="select-broth-widget-container"></div>
          </div>
        </section>
        <section>
          <div id="title_select_broth">
            It’s time to choose (or not) your meat!
          </div>
          <div id="subtitle_select_broth">
            Some people love, some don’t. We have options for all tastes. 
          </div>
        </section>
        <section>
          <div id="container_select_protein"></div>
        </section>
        <section>
          <div class="container-widget">
            <div id="select-protein-widget-container"></div>
          </div>
        </section>
        <section>
          <div id="button_new_order_container"></div>
        </section>
      </div>
    </section>
  </body>
`

listBroths(document.querySelector('#container_select_broth'));
listProteins(document.querySelector('#container_select_protein'));
scrollWidgetBroth(document.querySelector('#select-broth-widget-container'));
scrollWidgetProtein(document.querySelector('#select-protein-widget-container'));
buttonPlaceNewOrder(document.querySelector('#button_new_order_container'))

