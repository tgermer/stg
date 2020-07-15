$('.hideSaveStg').click(function() {
  // $('.toggleSave').toggleSave('none');
  $('.hideSaveStg').hide();
  $('.showSaveStg').show();
  // document.cookie = stg=WW-M;expires=Wed, 18 Dec 2050 12:00:00 GMT;
});
$('.showSaveStg').click(function() {
  // $('.toggleSave').toggleSave('inline');
  $('.hideSaveStg').show();
  $('.showSaveStg').hide();
  // document.cookie = stg=WW-M;expires=Wed, 18 Dec 2000 12:00:00 GMT;
});
