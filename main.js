const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="emoji celebrando"'
const imgDisapproved = '<img src="./images/reprovado.png" alt="emoji decepcionado"'

let lines = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputActivityName = document.getElementById('activity-name');
    const inputActivityNote = document.getElementById('activity-note');


    let theLine = '<tr>';
    theLine += `<td>${inputActivityName.value}</td>`;
    theLine += `<td>${inputActivityNote.value}</td>`;
    theLine += `<td>${inputActivityNote.value >= 7 ? imgApproved : imgDisapproved}</td>`;
    theLine += `<tr>`;

    lines += theLine;

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;

    inputActivityName.value = '';
    inputActivityNote.value = '';
});