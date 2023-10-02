const table = document.querySelector('table');

table.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'TH') {
    const column = target.cellIndex;

    // Sort the table by the clicked column
    table.sort(column);
  }
});