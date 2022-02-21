/* global data */
/* exported data */
var $photoUrlEl = document.querySelector('#photo-url');
$photoUrlEl.addEventListener('input', handleInput);

function handleInput(event) {
  var $photoUrlValue = event.target.value;
  var $image = document.querySelector('#preview');
  $image.setAttribute('src', $photoUrlValue);
}

var $entryForm = document.querySelector('#entry-form');

function handleSubmit(event) {
  event.preventDefault();
  var $noEntryMessage = document.querySelector('.no-entry-message');
  var $image = document.querySelector('#preview');
  var myObject = {};
  var $title = document.querySelector('#title').value;
  var $url = document.querySelector('#photo-url').value;
  var $notes = document.querySelector('#notes').value;
  myObject.title = $title;
  myObject.url = $url;
  myObject.notes = $notes;
  myObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(myObject);
  $entryForm.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $noEntryMessage.className = 'hidden no-entry-message';

}
$entryForm.addEventListener('submit', handleSubmit);

function renderEntry(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');
  var halfDiv = document.createElement('div');
  halfDiv.setAttribute('class', 'column-half');
  li.appendChild(halfDiv);
  var entryImage = document.createElement('img');
  entryImage.setAttribute('src', entry.url);
  halfDiv.appendChild(entryImage);
  var halfDiv2 = document.createElement('div');
  halfDiv2.setAttribute('class', 'column-half');
  li.appendChild(halfDiv2);
  var h3 = document.createElement('h3');
  h3.setAttribute('class', 'entry-name');
  h3.textContent = entry.title;
  halfDiv2.appendChild(h3);
  var icon = document.createElement('i');
  h3.appendChild(icon);
  icon.setAttribute('class', 'fas fa-pencil-alt');

  var paragraph = document.createElement('p');
  paragraph.textContent = entry.notes;
  halfDiv2.appendChild(paragraph);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  var $ul = document.querySelector('ul');
  var $noEntryMessage = document.querySelector('.no-entry-message');
  for (var i = 0; i < data.entries.length; i++) {
    var entryIdNumber = renderEntry(data.entries[i]);
    $ul.appendChild(entryIdNumber);
    if (data.entries.length !== 0) {
      $noEntryMessage.className = 'hidden no-entry-message';
    }
    handleViewChange(data.view);
  }
});

var $navItem = document.querySelector('a');
$navItem.addEventListener('click', viewCheck);

var $newButton = document.querySelector('.new');
$newButton.addEventListener('click', viewCheck);

function viewCheck() {
  handleViewChange(event.target.getAttribute('data-view'));
}

var $views = document.querySelectorAll('.view');
function handleViewChange(viewName) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') !== viewName) {
      $views[i].className = 'view hidden';
    } else {
      $views[i].className = 'view';
    }
  }
  data.view = viewName;
}
