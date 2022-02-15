/* global data */
/* exported data */
var $photoUrlEl = document.querySelector('#photo-url');
$photoUrlEl.addEventListener('input', handleInput);

function handleInput(event) {
  var $photoUrlValue = event.target.value;
  var $image = document.querySelector('#preview');
  $image.setAttribute('src', $photoUrlValue);
}

var $formData = document.querySelector('#entry-form');

function handleSubmit(event) {
  event.preventDefault();
  var myObject = {};
  var $title = document.querySelector('#title').value;
  var $url = document.querySelector('#photo-url').value;
  var $notes = document.querySelector('#notes').value;
  myObject.title = $title;
  myObject.url = $url;
  myObject.notes = $notes;
  myObject.entryId = data.nextEntryId + 1;
  data.nextEntryId++;
  data.entries.unshift(myObject);
  $formData.reset();
}

$formData.addEventListener('submit', handleSubmit);
