import { openEditModal } from "./editModal";

export const addMatch = function(data: any) {
  const matchContainer = document.getElementById('matches-container');
  if (matchContainer) {
    const matchHTML = `
      <div class="fixed-grid">
        <div class="grid">
          <div class="cell match-info is-col-span-3 is-inline is-size-5">
            <p class="is-inline is-size-4">${data.SchoolA} -</p>
            <p class="is-inline is-size-4">${data.SchoolB} -</p>
            <p class="is-inline is-size-4"> ${data.Match} -</p>
            <p class="is-inline is-size-4"> ${data.MatchType}</p>
          </div>
          <div class="cell is-col-start-1">
            <div>
              <p class="is-inline-block">${data.SchoolA}</p>
              ${data.winner === data.SchoolA ? '<p class="is-inline-block">✔</p>' : ''}
            </div>
            <div>
              <p class="is-inline">${data.PlayerA1}</p>
              ${data.PlayerA2 === '' ? '' : '<p class="is-inline"> / </p>'+'<p class="is-inline-block">'+data.PlayerA2+'</p>'}
            </div>
          </div>
          <div class="cell columns is-gapless is-flex ">
            <p class="column is-size-3">${data.Game1A}</p>
            <p class="column is-size-3">${data.Game2A}</p>
            ${data.Game3A === '0' && data.Game3B === '0' ? '' : '<h3 class="column is-size-3">' + data.Game3A+'</h3>'}
          </div>
          <button id="${data._id}" name="edit" class="cell is-1-one-fifth button is-warning">Edit</button>
          <div class="cell is-col-start-1">
            <div>
              <p class="is-inline-block">${data.SchoolB}</p>
              ${data.winner === data.SchoolB ? '<p class="is-inline-block">✔</p>' : ''}
            </div>
            <div>
              <p class="is-inline">${data.PlayerB1}</p>
              ${data.PlayerB2 === '' ? '' : '<p class="is-inline"> / </p>'+'<p class="is-inline-block">'+data.PlayerB2+'</p>'}
            </div>
          </div>
          <div class="cell columns is-gapless is-flex is-justify-content-space-between">
            <h3 class="column is-size-3">${data.Game1B}</h3>
            <h3 class="column is-size-3">${data.Game2B}</h3>
            ${data.Game3A === '0' && data.Game3B === '0' ? '' : '<h3 class="column is-size-3">' + data.Game3B+'</h3>'}
          </div>
          <button id="${data._id}" name="delete" class="cell is-1-one-fifth button is-danger">Delete</button>
        </div>
      </div>
    `;
    matchContainer.insertAdjacentHTML('beforeend', matchHTML);
  }
};

export const deleteMatch = async function(event: MouseEvent) {
  event.preventDefault();
  const matchId = (event.target as HTMLButtonElement).id;
  const body = JSON.stringify({ _id: matchId });

  const response = await fetch('/remove', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body
  });

  const result = await response.json();
  console.log(result);

  await generateMatches();
};

export const generateMatches = async function() {
  const matchContainer = document.getElementById('matches-container');
  if (matchContainer) {
    matchContainer.innerHTML = '';
    const response = await fetch('/userMatches', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonData = await response.json();
    jsonData.forEach((match: any) => {
      addMatch(match);
    });

    document.querySelectorAll('button[name="delete"]').forEach(button => {
      button.addEventListener('click', () => deleteMatch);
    });

    document.querySelectorAll('button[name="edit"]').forEach(button => {
      button.addEventListener('click', () => openEditModal);
    });
  }
};