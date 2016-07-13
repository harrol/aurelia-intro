export class Home {
  
  message = 'Hello Qualogy';
  
  firstName = 'Harro';
  lastName = 'Lissenberg';


  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  clicked() {
    alert(`Do not click me, ${this.firstName}`);
  }
  
}
