$(document).ready(function() {

    $('input[type=number][max]:not([max=""])').on('input', function(ev) {
      var $this = $(this);
      var maxlength = $this.attr('max').length;
      var value = $this.val();
      if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
      }
    });
  
  });