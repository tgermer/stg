// Ein- und Ausblenden aller FK-Programme. Gleichzeitig wird immer nur ein Button angezeigt.

$('.closeall').click(function() {
  // $('.collapse').collapse('hide');
  $('.collapse').hide();
  $('.closeall').hide();
  $('.openall').show();
});
$('.openall').click(function() {
  // $('.collapse').collapse('show');
  $('.collapse').show();
  $('.closeall').show();
  $('.openall').hide();
});

// $(function() {
//   $('.closeall').hide();
// });
