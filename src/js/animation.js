import {TimelineMax} from 'gsap';
$('body').on('click',function() {
  var tl = new TimelineMax();

  tl.to('body',2,{rotation: 180,scale: 0.1})
    .to('body',3,{scale:2,onComplete: function() {
  	alert('Bye');
    }});
});


// document.querySelectorAll('body').addEventListener('click',function(){
// })

