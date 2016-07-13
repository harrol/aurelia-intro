import {EventAggregator, Subscription} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class Party {
  date = new Date();
  guests = ['Harro', 'Rob', 'Charles'];
  sub;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  attached() {
    this.sub = this.eventAggregator.subscribe('JavaSIG', (data) => {
      this.guests.push(data);
    })
  }

  detached() {
    this.sub.dispose();
  }
}
