/* global data */
/* exported data */
var $photoUrl = document.querySelector('.entry-image');
var $photoPreview = document.querySelector('#preview');
var placeholder = 'images/placeholder-image-square.jpg';
$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $photoPreview.setAttribute('src', placeholder);
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
