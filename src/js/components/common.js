import './noTouch';
import CTabs from './c-tabs';
import Dot from './initDot';
import './popupInit';
import objectFitImages from 'object-fit-images';
import fancyBox from '@fancyapps/fancybox';
import { showReasons } from './showReasons';
import { initSliders } from './initSliders';
import { initContactMap } from './initContactMap';

/**
 * Website's common scripts.
 *
 * @module Common
 */

export class Common {
  /**
   * Cache data etc.
   */
  constructor() {
    this.messages = {
      constructor: 'COMMON: constructing...',
      init: 'COMMON: initializing...',
      test: 'COMMON: Test message!'
    };

    console.log(this.messages.constructor);
  }

  /**
   * Test method.
   */
  test() {
    console.log(this.messages.test);
  };

  /**
   * Initialize Main page scripts.
   */
  init() {
    console.log(this.messages.init);

    this.test();
    Dot.init();
    objectFitImages();
    showReasons();
    initSliders();
    initContactMap();
  }
}

/** tabs init */
const $tabs = $('.c-tabs');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});

/** image zoom */
$('[data-fancybox]').fancybox();

/** Export initialized common scripts by default */
export default new Common().init();