const $photo = document.querySelector('#photo');
$photo.addEventListener('input', (event) => {
  const $imgCreate = document.querySelector('.create');
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
  values.deleteThis = 'BEFORE CONTINUING';
});
