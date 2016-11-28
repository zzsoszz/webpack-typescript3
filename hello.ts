import {Say} from "./say"
export class Hello extends Say{
    constructor() {
        super();
    }
    name:string;
    say(){
        console.log("hello");
    }
}
