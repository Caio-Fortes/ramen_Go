import './styles.css';
import  {listBroths}  from './src/components/broths.js';
import {listProteins} from './src/components/proteins.js';
import {scrollWidgetBroth} from './src/components/widgetbroth.js';
import {scrollWidgetProtein} from './src/components/widgetprotein.js';
import {buttonPlaceNewOrder} from './src/components/buttonOrder.js';

document.querySelector('#app').innerHTML = `
  <body>    
    <section>
      <div id="container_principal">
          <div class="logo"></div>
          <div id="container_capa">
            <div class="circulo-marrom">
              <div class="entregadora"></div>
            </div>
            <div class="balaoAzul"></div>
            <div class="balaoAmarelo"></div>
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

