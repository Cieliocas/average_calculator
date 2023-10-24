const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="emoji celebrando"'
const imgDisapproved = '<img src="./images/reprovado.png" alt="emoji decepcionado"'
const activity = [];
const notes = [];

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addLine();
    attTable();
    attFinalAverage();
});

function addLine() {
    const inputActivityName = document.getElementById('activity-name');
    const inputActivityNote = document.getElementById('activity-note');

    activity.push(inputActivityName.value);
    notes.push(parseFloat(inputActivityNote.value));

    let theLine = '<tr>';
    theLine += `<td>${inputActivityName.value}</td>`;
    theLine += `<td>${inputActivityNote.value}</td>`;
    theLine += `<td>${inputActivityNote.value >= 7 ? imgApproved : imgDisapproved}</td>`;
    theLine += `<tr>`;
    lines += theLine;
    inputActivityName.value = '';
    inputActivityNote.value = '';
}

function attTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}

function attFinalAverage() {
    const finalAverage = calculateAverage();
    console.log(averages);

}

function calculateAverage() {
    let notesSum = 0;
    for (let i = 0; i < notes.length; i++) {
        notesSum += notes[i];
    }
    return notesSum / notes.length;
    
}