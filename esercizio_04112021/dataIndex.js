/**
 * Wraps the document.querySelector method
 */
const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    const elements = items.map((element) =>
        `<li>
         <h3>${element.name}</h3>
         <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
         <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
       </li>`
    );

    const content = elements.join('');

    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    const input = q('form input');
    const list = q('ul');
    const addForm = q('#formContact');
    const addName = q('#yourName');
    const addPhone = q('#yourPhone');
    const addEmail = q('#yourEmail');
    const sortAZ = q('#az');
    const sortZA = q('#za');

    render(list, data);

    input.addEventListener('keyup', (event) => {
        event.preventDefault(); // blocca il comportamento di default di un evento (per aggiungere logica custom es. submit o link a)
        const value = input.value; // permette di leggere o scrivere il valore di un input

        const results = data.filter((element) => {
            return element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1    // <- attenzione al case sensitive
        });

        console.log(results);

        render(list, results);  // renderizza in pagina solo l'elemento sottoposto a ricerca
    });

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const addContact = {
            name: addName.value,
            phone: addPhone.value,
            email: addEmail.value
        }

        data.push(addContact);
        render(list, data);
    });

    az.addEventListener('click', (event) => {
        const result = data.sort((a, b) => (a.name > b.name) ? 1 : -1)

        render(list, result);
    });

    za.addEventListener('click', (event) => {
        const result = data.sort((a, b) => (a.name < b.name) ? 1 : -1)

        render(list, result);
    });
});