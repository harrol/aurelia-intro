import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Home {

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }
  
  message = 'Hello Qualogy';
  
  firstName = 'Harro';
  lastName = 'Lissenberg';


  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  clicked() {
    this.eventAggregator.publish("JavaSIG", this.fullName);
  }
  
}
