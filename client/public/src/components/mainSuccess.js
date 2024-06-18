import {order} from '/src/components/order.js';
import {setSVG} from '/svg/bowing.js';
import {buttonPlaceNewOrder} from '/src/components/buttonNewOrder.js';

document.querySelector('#app').innerHTML = `
  <div id="container">
    <div id="box">
      <div id="container_body_sucess_one">
        <div id="logo_sucess"> ramenGo! </div>
        <div id="container_capa_sucess"></div>
      </div>
    </div>
    
    <div id="box2">
      <div id="container_body_sucess">
        <div id="svg_bowing_men"></div>
        <div id="title_icon_client">
          どもありがとうございます。
        </div>
        <div id="resp_title_message_order">
          Your order is being prepared
        </div>
        <div id="resp_description_message_order">
          Hold on, when you least expect you will be eating your rámen.
        </div>
        <section>
          <div id="button_order_container"></div>
        </section>
      </div>
    </div>
  </div>
`
order(document.querySelector('#container_capa_sucess'));
setSVG(document.querySelector('#svg_bowing_men'));
buttonPlaceNewOrder(document.querySelector('#button_order_container'))

