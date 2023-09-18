const $photoUrl = document.querySelector('input[name="photo"]');
$photoUrl.addEventListener('input', (event) => {
  const $imgCreate = document.querySelector('.create');
  $imgCreate.setAttribute('src', $photoUrl.value);
});
