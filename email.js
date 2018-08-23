(function ($) {
  Drupal.behaviors.emailResults = {
    attach: function(context, settings) {
      $('#send-results').on('click', function (e) {
        var ajaxUrl = $(this).attr('href');
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: ajaxUrl,
          data: {
            action: 'store',
            views: JSON.stringify(thsirtDesigner.getProduct())
          },

          success: function (data) {
            alert('ok');

          },
          error: function () {
            alert('some error has occured...');
          },
          start: function () {
            alert('ajax has been started...');
          }
        });
        return false;
      });

    }
  }
})(jQuery);
