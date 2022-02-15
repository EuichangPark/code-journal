/* global data */
/* exported data */
var $photoUrl = document.querySelector('.entry-image');
var $photoPreview = document.querySelector('#preveiw');
var placeholder = 'images/placeholder-image-square.jpg';
$photoUrl.addEventListener('input', srcUpdate);

function srcUpdate(event) {
  $photoPreview.setAttribute('src', placeholder);
}
