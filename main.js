const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="emoji celebrando"'
const imgDisapproved = '<img src="./images/reprovado.png" alt="emoji decepcionado"'
const activity = [];
const notes = [];
const spanAproved = '<span class ="approved">Aprovado</span';
const spanDisapproved = '<span class ="disapproved">Reprovado</span>';
const lowestNote = prompt("Digite a nota mínima para aprovação");
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
    if (activity.includes(inputActivityName.value)) {
        alert(`A atividade: "${inputActivityName.value}" ja foi inserida`);
    } else {
    activity.push(inputActivityName.value);
    notes.push(parseFloat(inputActivityNote.value));
    let theLine = '<tr>';
    theLine += `<td>${inputActivityName.value}</td>`;
    theLine += `<td>${inputActivityNote.value}</td>`;
    theLine += `<td>${inputActivityNote.value >= 7 ? imgApproved : imgDisapproved}</td>`;
    theLine += `<tr>`;
    lines += theLine;
    }
    inputActivityName.value = '';
    inputActivityNote.value = '';
}

function attTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}

function attFinalAverage() {
    const finalAverage = calculateAverage();
    document.getElementById('final-average').innerHTML = finalAverage.toFixed(2);
    document.getElementById('final-result').innerHTML = finalAverage >= lowestNote ? spanAproved : spanDisapproved;
}

function calculateAverage() {
    let notesSum = 0;
    for (let i = 0; i < notes.length; i++) {
        notesSum += notes[i];
    }
    return notesSum / notes.length;
}