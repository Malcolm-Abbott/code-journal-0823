const $photo = document.querySelector('#photo');
const $imgCreate = document.querySelector('.create');
$photo.addEventListener('input', (event) => {
  $imgCreate.setAttribute('src', $photo.value);
});

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
  $form.reset();
});

const $entry = document.querySelector('div[data-view="entry-form"]');
const $entries = document.querySelector('div[data-view="entries"]');
$entry.classList.add('hidden');
$entries.classList.remove('hidden');

function renderEntry(entry) {
  const $li = document.createElement('li');
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
  const $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $half2.append($h3);
  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $half2.append($p);
  return $li;
}

renderEntry(data.entries[0]);
