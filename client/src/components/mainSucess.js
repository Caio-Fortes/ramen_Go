import '../../styles.css';
import {order} from './order';

document.querySelector('#app').innerHTML = `
  <div>    
    <section>
      <div id="container_principal_sucess">
        <div class="logo"></div>
        <div id="container_capa_sucess"></div>
      </div>
    </section>
  </div>
`
order(document.querySelector('#container_capa_sucess'));

