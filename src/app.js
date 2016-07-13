export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: 'home', title: 'Home', nav: true},
      {route: 'away', name: 'away', moduleId: 'away', title: 'Away', nav: true}
    ]);
  };

}
