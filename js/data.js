/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', (event) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-code-journal', dataJSON);
});

const localData = JSON.parse(localStorage.getItem('data-code-journal'));

if (localData) data = localData;
