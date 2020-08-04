$('.hideSaveStg').click(function() {
  // $('.toggleSave').toggleSave('none');
  $('.hideSaveStg').hide();
  $('.showSaveStg').show();
  console.log("Cookie STG entfernt");
});
$('.showSaveStg').click(function() {
  // $('.toggleSave').toggleSave('inline');
  $('.hideSaveStg').show();
  $('.showSaveStg').hide();
  console.log("Cookie STG hinzugefügt");
});

// $('.merken').click(function() {
//   // $('.toggleSave').toggleSave('none');
//   $('.merken').hide();
//   $('.loeschen').show();
//   console.log("Cookie STG entfernt");
// });
// $('.loeschen').click(function() {
//   // $('.toggleSave').toggleSave('inline');
//   $('.merken').show();
//   $('.loeschen').hide();
//   console.log("Cookie STG hinzugefügt");
});
