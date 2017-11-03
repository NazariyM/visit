import slick from 'slick-carousel';
import { svgIcon } from '../modules/dev/helpers';

export function initSliders() {
  const iconLeft = svgIcon('arr-l');
  const iconRight = svgIcon('arr-r');

  let defaultOptions = {
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $successSld = $('.js-success-slider');
  $successSld.slick($.extend({}, defaultOptions, {
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }));

  // const $mobileSlider = $('.js-mobile-slider');
  // $mobileSlider.slick($.extend({}, defaultOptions, {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: false,
  //   adaptiveHeight: true,
  //   mobileFirst: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: 'unslick'
  //     }
  //   ]
  // }));
}