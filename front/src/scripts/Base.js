const anime = require('../../node_modules/animejs/lib/anime.js');
class Base {

  constructor() {
    this.bind();
  }

  bind() {

    (function($) {

      var home = document.querySelector('body');

       if (home) {
        // Wrap every letter in a span
      $('.ml9 .letters').each(function() {
          $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        var animeletter = anime.timeline({
            loop: false
          })
          .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 2000,
            elasticity: 600,
            delay: function(el, i) {
              return 60 * (i + 1)
            }
          });
      } else {
        $('.ml9').css('display', 'none');
        $('.wrapper').css('opacity', '1');
        $('.wrapper').css('display', 'block');
      }

    })(jQuery);
  }
}
export default Base;
