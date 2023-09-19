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
