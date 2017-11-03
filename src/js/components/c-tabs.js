import { TweenMax } from 'gsap';
import { $window, $body, css } from '../modules/dev/helpers';

export default class CTabs {
  constructor(el) {
    this.$tabNav = el.find('.c-tabs__tabs-nav').find('.c-tabs__tabs-el');
    this.$tabItemContainer = el.find('.c-tabs__tabs-for');
    this.$tabItem = this.$tabItemContainer.find('.c-tabs__tab');
    this.$infoBlock = el.find('.c-tabs__more-info');
    this.$closeBtn = el.find('.c-tabs__close');
  }

  init() {
    this.bindEvents();
    this.openMoreInfo();
    this.closeMoreInfo();
  }

  bindEvents() {
    if (!this.$tabNav.hasClass('js-disabled') && this.getActiveIndex() !== 0) {
      this.$tabItem.hide()
        .eq(this.getActiveIndex()).show().css('display', 'flex');
    }

    this.$tabNav.on('click', (ev) => {
      const currentIndex = this.getActiveIndex();
      const targetIndex = $(ev.currentTarget).index();

      this.changeTab(currentIndex, targetIndex);
      this.$infoBlock.slideUp();
    });
  }

  getActiveIndex() {
    let activeIndex = 0;

    this.$tabNav.each(function () {
      if ($(this).hasClass(css.active)) {
        activeIndex = $(this).index();
      }
    });

    return activeIndex;
  }

  changeTab(currentIndex, nextIndex) {
    const _this = this;
    const speed = 0.3;
    const $currentTabNav = this.$tabNav.eq(currentIndex);
    const $nextTabNav = this.$tabNav.eq(nextIndex);
    const $currentTab = this.$tabItem.eq(currentIndex);
    const $nextTab = this.$tabItem.eq(nextIndex);

    $currentTabNav.removeClass(css.active);
    $nextTabNav.removeClass(css.disabled).addClass(css.active);
    TweenMax.to($currentTab, speed, {
      autoAlpha: 0,
      y: 15,
      clearProps: 'transform',
      onComplete() {
        const currentHeight = _this.$tabItemContainer.outerHeight();
        TweenMax.set(_this.$tabItemContainer, { height: currentHeight });
        $(this.target).hide();
        TweenMax.set($nextTab, { autoAlpha: 1 });
        $nextTab.show().css('display', 'flex');
        TweenMax.staggerFromTo($nextTab.children().children(), speed, {
          autoAlpha: 0,
          y: -50
        }, {
          autoAlpha: 1,
          y: 0
        }, speed / 2);
        TweenMax.from(_this.$tabItemContainer, speed, { height: currentHeight });
      }
    });

  }

  openMoreInfo() {
    const $moreLink = $('.js-career-more');

    $moreLink.on('click', function (ev) {
      ev.preventDefault();

      const $that = $(this);
      const $tabs = $('.c-tabs');
      const $infoBlock = $that.next('.c-tabs__more-info');

      $tabs.addClass(css.active);
      $infoBlock.slideDown();
    });
  }

  closeMoreInfo () {
    const $tabs = $('.c-tabs');
    const infoBlock = this.$infoBlock;
    const $overlay = $tabs.find('.c-tabs__overlay');

    this.$closeBtn.on('click', function (e) {
      e.preventDefault();

      $tabs.removeClass(css.active);
      infoBlock.fadeOut();
    });

    $overlay.on('click', function () {
      $tabs.removeClass(css.active);
      infoBlock.fadeOut();
    });

  }
}
