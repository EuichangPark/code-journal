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
  myObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(myObject);
  $formData.reset();
}
$formData.addEventListener('submit', handleSubmit);

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
  var paragraph = document.createElement('p');
  paragraph.textContent = entry.notes;
  halfDiv2.appendChild(paragraph);
  return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
  var $ul = document.querySelector('ul');
  var $noEntryMessage = document.querySelector('.no-entry-message');
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries.length !== 0) {
      var entryIdNumber = renderEntry(data.entries[i]);
      $ul.appendChild(entryIdNumber);
    } else {
      $noEntryMessage.className = 'no-entry-message';
    }
  }
});

/*
        <li class="row">
          <div class="column-half">
            <img class="entry-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIecSW4smYKnkySK-C7HrZKCP4KkBcLo8-Q&usqp=CAU" alt="lovelace">
          </div>
          <div class="column-half">
            <h3 class="entry-name">Ada Lovelace</h3>
            <p>Augusta Ada king, Countess of Lovelace was
              and English mathematician and writer,
              chiefly known for her work on Charles
              babbage's proposed mechanical
              general-purpose computer, the Analytical
              Engine.
            </p>
            <p>She was the first to recognize that the
              machine ahd applications beyond pure
              calculation, and to have published the first
              algorithm intended to be carried out by
              such a machine.
            </p>
          </div>
        </li> */
