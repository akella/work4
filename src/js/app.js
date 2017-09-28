import sayHello from './lib/sayHello.js';
import $ from 'jquery';

import {TimelineMax} from 'gsap';

import 'slick-carousel';

$('.js-gallery').slick();

$('body').on('click',function() {
  var tl = new TimelineMax();

  tl.to('body',2,{rotation: 180,scale: 0.1})
    .to('body',3,{scale:2,onComplete: function() {
  	alert('Bye');
    }});
});


$('.js-gallery-two').slick({
  slidesToShow: 3
});
sayHello();


