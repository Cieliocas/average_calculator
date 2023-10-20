const form = document.getElementById('form-activity');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputActivityName = document.getElementById('activity-name');
    const inputActivityNote = document.getElementById('activity-note');

    alert(`Atividade ${inputActivityName.value} - Nota ${inputActivityNote.value}`);
})