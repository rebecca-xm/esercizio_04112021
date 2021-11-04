// /**
//  * Wraps the document.querySelector method
//  */
// const q = (selector) => document.querySelector(selector);


// const render = (container, items) => {
//     const elements = items.map((element) =>
//         `<li>
//         <h3>${element.name}</h3>
//         <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
//         <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
//       </li>`
//     );

//     const content = elements.join('');

//     container.innerHTML = content;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const form = q('form');
//     const input = q('form input');
//     const list = q('ul');

//     render(list, data);

//     // VERSIONE ORIGINALE CON SUBMIT

//     //   form.addEventListener('submit', (event) => {
//     //     event.preventDefault(); // blocca il comportamento di default di un evento (per aggiungere logica custom es. submit o link a)
//     //     const value = input.value; // permette di leggere o scrivere il valore di un input

//     //     const results = data.filter((element) => {
//     //       return element.name.toLowerCase().search(value) > -1    // <- attenzione al case sensitive
//     //     });

//     //     console.log(results);

//     //     render(list, results);  // renderizza in pagina solo l'elemento sottoposto a ricerca
//     //   });
//     // });

//     // VARIAZIONE SUL TEMA CON INPUT E KEYUP

//     input.addEventListener('keyup', (event) => {
//         event.preventDefault(); // blocca il comportamento di default di un evento (per aggiungere logica custom es. submit o link a)
//         const value = input.value; // permette di leggere o scrivere il valore di un input

//         const results = data.filter((element) => {
//             return element.name.toLowerCase().search(value) > -1 || element.email.toLowerCase().search(value) > -1    // <- attenzione al case sensitive
//         });

//         console.log(results);

//         render(list, results);  // renderizza in pagina solo l'elemento sottoposto a ricerca
//     });
// });

//   // SEARCH

//   // Il search è meno intuitivo perché non mi restituisce true o false
//   // ma mi dice se trova la sottostringa nella stringa ed in che posizione
//   // se non trova niente mi ritorna -1

//  //---------------------------------------------------------------------------//

//   // APPUNTI RIGUARDANTI ESERCIZIO 03/11

//   // const li = `<li>
//   // <input type="checkbox" ${element.completed ? 'checked' : ''} /> 
//   // </li>`                                                           operatore ternario per soluzione alternativa esercizio 03/11

//   // truthy -> true, 'stringa', 55432 (numeri positivi e negativi)
//   // falsy -> false, undefined, NaN, 'stringa vuota', 0