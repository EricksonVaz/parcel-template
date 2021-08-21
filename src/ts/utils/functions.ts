import CardStack from "../model/cardBuilder";
import { alterStyleClassComponent, renderComponent } from "./dom";

import logoParcel from "url:../../img/parcelLogo.png?width=223px&height=223px";
import logoBootstrap from "url:../../img/bootstrap-logo.svg?width=223px&height=223px";
import logoSass from "url:../../img/sass-logo.png?width=223px&height=223px";
import logoTS from "url:../../img/ts-logo.png?width=223px&height=223px";
import logoJQuery from "url:../../img/jquery-logo.png?width=223px&height=223px";
import logoFA from "url:../../img/fontawesome-logo.webp?width=223px&height=223px";

export function concatClassNames(arrayClass:string[],htmElement:HTMLElement){
    let newClassToAdd = arrayClass.join(" ");
    let oldClassName = htmElement.className;
    let newClassName = oldClassName+" "+newClassToAdd;

    htmElement.className = newClassName;
}

export function convertToStyleObj(objStyle:object):CSSStyleDeclaration{
    return {
        ...objStyle
    } as CSSStyleDeclaration
    
}

export function rederCardStack(cardObj:CardStack,parentElement:HTMLElement){
    renderComponent(cardObj.load(),parentElement,(cardBootstrap)=>{
        let style = convertToStyleObj({
            width:"300px",
            borderRadius:"30px"
        });
        let className = [
            "col-md-3",
            "col-sm-6", 
            "px-0", 
            "mb-3",
            "mx-2"
        ]
        alterStyleClassComponent(cardBootstrap,{style,className});

    });
}

export function loadCardStack(container:HTMLElement){
    let parcelCard = new CardStack(
        logoParcel,
        "This app use ParcelJs V2",
        "https://github.com/parcel-bundler/parcel",
        "https://github.com/parcel-bundler/parcel#readme"
    );
    let bootstrapCard = new CardStack(
        logoBootstrap,
        "This app use bootrap 4.6",
        "https://github.com/twbs",
        "https://getbootstrap.com/docs/4.6/"
    );
    let tsCard = new CardStack(
        logoTS,
        "This app use typescript 4.3.5",
        "https://github.com/Microsoft/TypeScript",
        "https://www.typescriptlang.org/docs/"
    );
    let sassCard = new CardStack(
        logoSass,
        "This app use Sass 3.7.4",
        "https://github.com/sass/node-sass",
        "https://github.com/sass/node-sass"
    );
    let jqueryCard = new CardStack(
        logoJQuery,
        "This app use JQuery 3.6.0",
        "https://github.com/jquery/jquery",
        "https://api.jquery.com/"
    );
    let faCard = new CardStack(
        logoFA,
        "This app use fontawesome 5.15.4",
        "https://github.com/FortAwesome/Font-Awesome",
        "https://fontawesome.com"
    );
    rederCardStack(parcelCard,container);
    rederCardStack(bootstrapCard,container);
    rederCardStack(sassCard,container);
    rederCardStack(tsCard,container);
    rederCardStack(jqueryCard,container);
    rederCardStack(faCard,container);
}