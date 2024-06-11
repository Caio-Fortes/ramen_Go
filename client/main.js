import { setupPostComponent } from './lib/PostComponent.js';
//import { containerWidget } from './lib/widgets.js';

import './styles.css';
import  {listBroths}  from './lib/broths.js';
import {listProteins} from './lib/proteins.js';

document.querySelector('#app').innerHTML = `
  <body>    
    <section>
      <div id="container_principal">
          <div class="logo">
            <img src="./public/logo.png">
          </div>
          <div id="container_capa">
            <div class="circulo-marrom">
              <div class="entregadora">
                <img src="./public/entregadora.png">
              </div>
            </div>
            <div class="balaoAzul">
              <img src="./public/BalaoAzul.png">
            </div>
            <div class="balaoAmarelo">
              <img src="./public/BalaoAmarelo.png">
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
          <div id="button_new_order_sucess">Place new order</div>
        </section>
      </div>
    </section>
  </body>
`

listBroths(document.querySelector('#container_select_broth'));
listProteins(document.querySelector('#container_select_protein'))
//containerWidget(document.querySelector('#widget-scroll-cards'))
