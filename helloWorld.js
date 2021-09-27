import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
greeting='Guru';
changeHandler(event) {
    this.greeting=event.target.value;
}
}