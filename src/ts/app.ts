import $ from "jquery";
import headerElement from "./components/header";
import mainElement from "./components/main";
import footerElement from "./components/footer";
import centralElement from "./components/central-banner";
import mainTitleElement from "./components/main-title";
import {renderComponent,alterStyleClassComponent} from "./utils/dom";
import { convertToStyleObj, loadCardStack } from "./utils/functions";

(function(appElement:HTMLDivElement){

    function main(){

        loadPageHome();

    }

    function loadPageHome(){
        
        renderComponent(headerElement(),appElement);

        renderComponent(mainElement(),appElement,(main)=>{

            alterStyleClassComponent(main,[
                "pt-5",
                "d-flex",
                "flex-column",
                "justify-content-between",
                "align-items-center"
            ]);

            renderComponent(mainTitleElement(),main);

            renderComponent(centralElement(),main,(central)=>{
                let style = convertToStyleObj({
                    width:"90%",
                });
                let className = [
                    "justify-content-center"
                ]
                alterStyleClassComponent(central,{style,className});

                loadCardStack(central);

            });
        });

        renderComponent(footerElement(),appElement);
    }

    window.addEventListener("load",main);

})(document.querySelector("#app"));
