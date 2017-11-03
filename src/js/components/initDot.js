import 'dotdotdot';
import { $window, throttle } from '../modules/dev/helpers';

export class Dot {

  constructor() {
    this.$el = $('.js-dot');
  }

  initDot() {
    this.$el.dotdotdot();
  }

  onResize() {
    // reinit dotdotdot
    const reinitDot = throttle(() => {
      this.initDot();
    }, 250, this);

    // reinit dotdotdot on resize
    $window.on('resize orientationchange', reinitDot);
  }

  init() {
    $window.on('load', () => {
      this.initDot();
      this.onResize();
    });
  }

}

export default new Dot();