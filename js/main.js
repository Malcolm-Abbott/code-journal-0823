const $photo = document.querySelector('#photo');
const $imgCreate = document.querySelector('.create');
$photo.addEventListener('input', (event) => {
  $imgCreate.setAttribute('src', $photo.value);
});

const $ul = document.querySelector('ul');
const $form = document.querySelector('form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $title = document.querySelector('#title');
  const $notes = document.querySelector('#notes');
  const values = {
    title: $title.value,
    photo: $photo.value,
    notes: $notes.value,
  };
  values.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(values);
  $imgCreate.setAttribute('src', './images/placeholder-image-square.jpg');
  $ul.prepend(renderEntry(values));
  viewSwap('entries');
  if (data.entries.length > 0 && $noEntries.className !== 'no-entries hidden')
    toggleNoEntries();
  $form.reset();
});

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);
  const $row = document.createElement('div');
  $row.className = 'row';
  $li.append($row);
  const $half = document.createElement('div');
  $half.className = 'column-half';
  $row.append($half);
  const $imgWrapper = document.createElement('div');
  $imgWrapper.className = 'img-wrapper';
  $half.append($imgWrapper);
  const $imgEntries = document.createElement('img');
  $imgEntries.setAttribute('src', entry.photo);
  $imgWrapper.append($imgEntries);
  const $half2 = document.createElement('div');
  $half2.className = 'column-half';
  $row.append($half2);
  const $h3PencilContainer = document.createElement('div');
  $h3PencilContainer.className = 'h3-pencil-container';
  $half2.append($h3PencilContainer);
  const $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $h3PencilContainer.append($h3);
  const $iPencil = document.createElement('i');
  $iPencil.className = 'fa-solid fa-pencil';
  $h3PencilContainer.append($iPencil);
  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $half2.append($p);
  return $li;
}

const $noEntries = document.querySelector('.no-entries');

document.addEventListener('DOMContentLoaded', (event) => {
  data.entries.forEach((element) => {
    $ul.append(renderEntry(element));
  });
  viewSwap(data.view);
  if (data.entries.length > 0 && $noEntries.className !== 'no-entries hidden')
    toggleNoEntries();
});

function toggleNoEntries() {
  $noEntries.classList.toggle('hidden');
}

function viewSwap(view) {
  const $entry = document.querySelector('div[data-view="entry-form"]');
  const $entries = document.querySelector('div[data-view="entries"]');
  switch (view) {
    case 'entries':
      $entries.classList.remove('hidden');
      $entry.classList.add('hidden');
      data.view = 'entries';
      break;
    case 'entry-form':
      $entry.classList.remove('hidden');
      $entries.classList.add('hidden');
      data.view = 'entry-form';
      break;
  }
}

const $entriesTab = document.querySelector('.entries-tab');
$entriesTab.addEventListener('click', (event) => {
  viewSwap('entries');
});

const $entryFormTab = document.querySelector('.entry-form-tab');
$entryFormTab.addEventListener('click', (event) => {
  viewSwap('entry-form');
});
