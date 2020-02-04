$('.hidebadges').click(function() {
  // $('.collapse').collapse('hide');
  $('.toggle').toggle('none');
  $('.hidebadges').hide();
  $('.showbadges').show();
});
$('.showbadges').click(function() {
  // $('.collapse').collapse('show');
  $('.toggle').toggle('inline');
  $('.hidebadges').show();
  $('.showbadges').hide();
});
