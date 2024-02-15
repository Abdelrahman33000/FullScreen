export const sliderSettings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

export const sliderBusinessSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,

  arrows: true,
};

export const sliderOpinionsSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

export const sliderSponsorsSettings = {
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  rows: 3,
  slidesPerRow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

export const sliderPackagesSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
