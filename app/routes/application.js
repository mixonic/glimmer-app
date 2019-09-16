import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @action click() {
    console.log('clicked');
  }
}
