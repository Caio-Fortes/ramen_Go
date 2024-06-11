import './styles.css';
import { setupPostComponent } from './lib/PostComponent.js';

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
    <id id="PostComponent"></id>
  </body>
`

setupPostComponent(document.querySelector('#PostComponent'))
