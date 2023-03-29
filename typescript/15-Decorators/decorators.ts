@classDecorator
class Boat {
    @testDecorator
    color : string = 'red';

    @testDecorator
    get formattedColor() : string {
        return `This boats color is ${this.color}`;
    }

    @logError('Something bad!')
    pilot(@parameterDecorator speed: string,
          @parameterDecorator generatewake : boolean) : void {
        if (speed === 'fast') {
            console.log('swish');
        }
        else {
            console.log('nothing');
        }
    }
}

function classDecorator (constuctor : typeof Boat) {
    console.log(constuctor);
}

function parameterDecorator (target : any, key : string, index : number) {
    console.log(key, index);
}


function testDecorator (target :any, key : string) {
    console.log(key);
}

function logError (errorMessage : string) {
    return function (target : any, key : string , desc : PropertyDescriptor) : void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            }catch (e) {
                console.log(errorMessage);
            }
        }
    }
}
