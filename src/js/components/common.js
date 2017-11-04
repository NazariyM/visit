import './noTouch';
import CTabs from './c-tabs';
import Dot from './initDot';
import './popupInit';
import objectFitImages from 'object-fit-images';
import fancyBox from '@fancyapps/fancybox';
import { MobNav } from './mobNav';
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
   * Initialize Main page scripts.
   */
  static init() {
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
export default Common.init();