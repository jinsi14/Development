interface Reportable {
    //name:string;
    //year : Date;
    //broken : boolean;
    summary(): string;
}

const oldCivic = {
    name : 'civic',
    year : new Date(),
    broken : true,
    summary(): string{
        return `Name : ${this.name}`;
    }
};

const drink = {
    color : 'brown',
    carbonated : true,
    suger : 40,
    summary() : string {
        return `My drink has ${this.suger} grams of suger`;
    }
};


const printSummary = (item : Reportable): void  => {
    console.log(item.summary()); 
};

printSummary(oldCivic);
printSummary(drink);