import { TweenMax } from 'gsap';

export function showReasons() {
  const $moreBtn = $('.js-more-reason');

  if (!$moreBtn.length) return;

  $moreBtn.on('click', function (e) {
    const _this = $(this);
    const $btnWrapper = _this.parent();
    const speed = 0.3;

    e.preventDefault();
    $btnWrapper.nextAll().slideDown().css('display', 'inline-block');
    TweenMax.to($btnWrapper, 0.5, { height: '0', autoAlpha: 0 });
    TweenMax.staggerFromTo($btnWrapper.nextAll(), speed, {
      autoAlpha: 0,
      y: -50
    }, {
      autoAlpha: 1,
      y: 0
    }, speed / 2);
  });
}