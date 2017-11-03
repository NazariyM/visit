import { css } from '../modules/dev/helpers';

export function initContactMap() {

  let $mapBlock = $('.contact-map');
  if (!$mapBlock.length) return;

  ymaps.ready(init);

  function init() {
    const contactMap = new ymaps.Map('contact-map', {
        center: [53.199174071213186, 50.179136999999955],
        zoom: 17,
        controls: []
      }),
      BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="contact-map__data">
           <div class="contact-map__text">
            <address>Адрес: {{properties.address}}</address>
            <p>{{properties.workDays}}</p>
          </div>
          <div class="contact-map__text">
            <p>Как добраться:</p>
            <p>Автобус: {{properties.bus}}</p>
            <p>Маршрутное такси: {{properties.shuttleBus}}</p>
            <p>Метро: {{properties.metro}}</p>
           </div>
         </div>`);

    const streets = new ymaps.GeoObjectCollection({}, {
      hideIconOnBalloonOpen: false,
      balloonCloseButton: false,
      balloonContentLayout: BalloonContentLayout
    });

    const street1 = new ymaps.Placemark([53.199174071213186, 50.179136999999955], {
      iconCaption: 'Революционная улица, 126',
      address: 'ул. Революционная, 126',
      workDays: 'Пн-Пт: 9:00 - 20:00; Сб: 10:00 - 15:00',
      bus: '2, 24, 34, 35, 41, 53',
      shuttleBus: '99, 96, 210, 205, 240, 480',
      metro: 'Станция Гагаринская'
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '300'
    });

    const street2 = new ymaps.Placemark([53.206337071231616, 50.23361099999988], {
      iconCaption: 'ул. Победы, 16',
      address: 'ул. Победы, 16',
      workDays: 'Пн-Пт: 9:00 - 20:00; Сб: 10:00 - 15:00',
      bus: '2, 24, 34, 35, 41, 53',
      shuttleBus: '99, 96, 210, 205, 240, 480',
      metro: 'Станция Гагаринская'
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '300'
    });

    const street3 = new ymaps.Placemark([53.218637071205436, 50.2605155], {
      iconCaption: 'ул. Победы, 108',
      address: 'ул. Победы, 108',
      workDays: 'Пн-Пт: 9:00 - 20:00; Сб: 10:00 - 15:00',
      bus: '2, 24, 34, 35, 41, 53',
      shuttleBus: '99, 96, 210, 205, 240, 480',
      metro: 'Станция Гагаринская'
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '300'
    });

    const street4 = new ymaps.Placemark([53.22939807117525, 50.20904200000001], {
      iconCaption: 'ул. Стара-Загора, 53',
      address: 'ул. Стара-Загора, 53',
      workDays: 'Пн-Пт: 9:00 - 20:00; Сб: 10:00 - 15:00',
      bus: '2, 24, 34, 35, 41, 53',
      shuttleBus: '99, 96, 210, 205, 240, 480',
      metro: 'Станция Гагаринская'
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '300'
    });

    const street5 = new ymaps.Placemark([53.21202157121727, 50.157155499999945], {
      iconCaption: 'ул. Мичурина, 116',
      address: 'ул. Мичурина, 116',
      workDays: 'Пн-Пт: 9:00 - 20:00; Сб: 10:00 - 15:00',
      bus: '2, 24, 34, 35, 41, 53',
      shuttleBus: '99, 96, 210, 205, 240, 480',
      metro: 'Станция Гагаринская'
    }, {
      preset: 'islands#blueCircleDotIconWithCaption',
      iconCaptionMaxWidth: '300'
    });

    streets
      .add(street1)
      .add(street2)
      .add(street3)
      .add(street4)
      .add(street5);
    contactMap.geoObjects.add(streets);

    contactMap.events.add('click', (e) => {
      contactMap.balloon.close();
    });

    contactMap.behaviors.disable('scrollZoom');

    const $streetsList = $('.js-contact-streets');
    const $streetLink = $streetsList.find('a');

    $streetLink.on('click', function (e) {
      e.preventDefault();
      const $that = $(this);
      const $streetLinkCoord = $that.data('str-coords');
      const $parent = $that.parent();

      contactMap.panTo($streetLinkCoord, {
        duration: 1000
      });
      $parent.siblings().removeClass(css.active);
      $parent.addClass(css.active);
    });
  }
}