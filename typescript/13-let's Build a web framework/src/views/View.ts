import { Model } from "../models/Model";
import { UserProps } from "../models/User";

export abstract class View<T extends Model<K>, K> {
    regions : { [key : string] : Element} = {};

    constructor(public parent : Element, public model : T) {
        this.bindModel();
    }

    abstract template() : string;

    regionsMap() : { [key : string] :string} {
        return {};
    }

    eventsMap() : { [key : string] : () => void}{
        return {};
    }


    bindModel(): void {
        this.model.on('change', () =>  {
            this.render();
        });
    }

    bindEvents(fragment : DocumentFragment) : void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            }); 
        }
    }

    mapRegions(fragment : DocumentFragment) : void{
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if ( element) {
                this.regions[key] = element;
            }
        }
    }

    onRender() : void {
        
    }
    
    render() : void {
        this.parent.innerHTML = '';

        const templateElements = document.createElement('template');
        templateElements.innerHTML= this.template();

        this.bindEvents(templateElements.content);
        this.mapRegions(templateElements.content);

        this.onRender();

        this.parent.append(templateElements.content);
    } 
}