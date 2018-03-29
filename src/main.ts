import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import "jstree"; // <------------ MAKE SURE TO IMPORT JSTREE

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

 aurelia.use.plugin("aurelia-jstree");  // <----- REGISTER THE PLUGIN

  aurelia.start().then(() => aurelia.setRoot());
}
