import { Collection } from "../models/Collection";
import { UserProps } from "../models/User";

export abstract class CollectionView<T, K> {
    constructor(public parent : Element, public collection : Collection<T, K>) {}

    abstract renderItem(model : T, itrmOarent : Element) : void ;

    render() : void {
        this.parent.innerHTML='';

        const templateElements = document.createElement('template');

        for (let model of this.collection.models) {
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElements.content.append(itemParent);
        }

        this.parent.append(templateElements.content);
    }
}   