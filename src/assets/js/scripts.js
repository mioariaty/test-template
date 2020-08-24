document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const btnToggle = document.querySelector('.navbar__toggler');
  const navCollapes = document.querySelector('.navbar-collapse');
  const btnClose = document.querySelector('.btn--close');

  if (navCollapes) {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        navCollapes.classList.add('hidden');
      } else {
        navCollapes.classList.remove('hidden');
      }
    };

    const handleClicked = (e) => {
      e.preventDefault();
      if (navCollapes.classList.contains('hidden')) {
        navCollapes.classList.remove('hidden');
      } else {
        navCollapes.classList.add('hidden');
      }
    };

    handleResize();
    btnToggle.addEventListener('click', handleClicked);
    btnClose.addEventListener('click', handleClicked);
    window.addEventListener('resize', handleResize);
  }

  // carousel
  // if (document.querySelector('.swiper.container')) {
  const demoVertical = new Swiper('.demo1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const demohorizontal = new Swiper('.demo2', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // }
});
