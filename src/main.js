export function configure(aurelia) {
  aurelia.use
    .standardConfiguration();

  aurelia.use.plugin('aurelia-polymer');
  aurelia.use.plugin('aurelia-html-import-template-loader');

  aurelia.start().then(() => aurelia.setRoot());
}
