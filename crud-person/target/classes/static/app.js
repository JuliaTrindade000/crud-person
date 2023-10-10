const form = document.getElementById('person-form');
const idInput = document.getElementById('person-id');
const nameInput = document.getElementById('person-name');
const emailInput = document.getElementById('person-email');
const table = document.getElementById('person-table');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const person = {
        name: nameInput.value,
        email: emailInput.value
    };
    if (idInput.value) {
        axios.put('http://localhost:8080/api/people/' + idInput.value, person).then(loadPeople);
    } else {
        axios.post('http://localhost:8080/api/people', person).then(loadPeople);
    }
    form.reset();
    idInput.value = '';
});

table.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button')) {
        const id = event.target.dataset.id;
        axios.get('http://localhost:8080/api/people/' + id).then(function(response) {
            idInput.value = response.data.id;
            nameInput.value = response.data.name;
            emailInput.value = response.data.email;
        });
    } else if (event.target.classList.contains('delete-button')) {
        const id = event.target.dataset.id;
        axios.delete('http://localhost:8080/api/people/' + id).then(loadPeople);
    }
});

function loadPeople() {
    axios.get('/api/people').then(function(response) {
        const people = response.data;
        let rows = '';
        for (let i = 0; i < people.length; i++) {
            rows += `
                <tr>
                    <td>${people[i].name}</td>
                    <td>${people[i].email}</td>
                    <td>
                        <button class="edit-button" data-id="${people[i].id}">Editar</button>
                        <button class="delete-button" data-id="${people[i].id}">Excluir</button>
                    </td>
                </tr>
            `;
        }
        table.tBodies[0].innerHTML = rows;
    });
}

loadPeople();