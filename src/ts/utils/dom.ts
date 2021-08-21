import { displayErroOnBody } from "./errors";
import { concatClassNames } from "./functions";

type styleObj = CSSStyleDeclaration;
type className = string[];
type objStyled = {style?:styleObj,className?:className} | className;

function renderComponent(template:string,parentElement:HTMLElement,cb?:(el:HTMLElement)=>void):void{
    parentElement.insertAdjacentHTML("beforeend",template);

    let elementInserted = parentElement.lastElementChild as HTMLElement;

    if(cb)cb(elementInserted)
    
}

function alterStyleClassComponent(target:HTMLElement,objStyle:objStyled){
    if(Array.isArray(objStyle)){
        
        concatClassNames(objStyle,target);

    }else if(typeof objStyle == "object" ){
        if("className" in objStyle){

            concatClassNames(objStyle.className,target);
        }

        if("style" in objStyle){
            for(let styleKey in objStyle.style){
                if(!(styleKey in target.style)){
                    displayErroOnBody(`Invalid ${styleKey} css property in ${target.tagName} element`);
                    break;
                }
                target.style[styleKey] = objStyle.style[styleKey];
            }
            
        }
    }else{
        throw new Error("Invalid Params style");
    }
}


export {renderComponent,alterStyleClassComponent};