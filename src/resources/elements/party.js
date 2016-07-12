export class Party {
  date = new Date();
  guests = ['Harro', 'Rob', 'Charles'];

  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
}
