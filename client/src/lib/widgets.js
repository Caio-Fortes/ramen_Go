export async function scrollWidget(element) {
    //datas
    let proteins = [];

    //methods
    function scrollBroths(indiceSelected, scrollTo, idContainerScroll, widgetsClass) {
        const elemento = document.getElementById(idContainerScroll);
        elemento.scrollTo(scrollTo, 0);
    
        let allElements = document.getElementsByClassName(widgetsClass);
        for (let i = 0; i < allElements.length; i++) {
            let elementStyle = allElements[i].style;
            if (i === indiceSelected) {
                elementStyle.backgroundColor = '#FF4E42'
                elementStyle.height = '12px';
                elementStyle.width = '36px';
                elementStyle.borderRadius = '8px';
            }
            else {
                elementStyle.backgroundColor = '#E0DBBF'
                elementStyle.height = '12px';
                elementStyle.width = '12px';
                elementStyle.borderRadius = '50%';
            }
        }
    }
   
    function setClickWidget(){
        const elements = document.querySelectorAll('.widget-circle-select-broths');
        elements.forEach(element => {
            element.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                const scrollTo = event.target.getAttribute('data-scroll');
                scrollBroths(parseInt(index), parseInt(scrollTo), 'container_select_broth', 'widget-circle-select-broths');
            });
        });
        return elements;
    }

    //template
    function setTemplateWidget(){
        document.querySelector('#select-widget-container').innerHTML = `
        <ul class="widget-scroll-cards">
          <li 
            class="widget-circle-select-broths" 
            data-index="0" 
            data-scroll="0"
          ></li>
          <li 
            class="widget-circle-select-broths" 
            data-index="1" 
            data-scroll="300"
          ></li>
          <li 
            class="widget-circle-select-broths" 
            data-index="2" 
            data-scroll="600"
          ></li>
        </ul>`
    }

    //mounted
    setTemplateWidget();
    setClickWidget();
    scrollBroths(0, 0, 'container_select_broth', 'widget-circle-select-broths');
}
