import './styles.css';
import { setupPostComponent } from './lib/PostComponent.js';
import  {listBroths}  from './lib/broths.js';

document.querySelector('#app').innerHTML = `
  <body>
    <div id="PostComponent"></div>
    
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
      </div>
    </section>
  </body>
`

setupPostComponent(document.querySelector('#PostComponent'))
listBroths(document.querySelector('#container_select_broth'))
