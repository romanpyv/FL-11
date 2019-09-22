import {selectFilteredDisplayed, selectData} from '../selectors';
import actions from '../actions';

const tbody = document.getElementById('tbody');
const counter = document.getElementById('displayed-count');

function td(innerHTML) {
    let td = document.createElement('td');
    if (typeof innerHTML === 'string') {
        td.innerText = innerHTML;
    } else {
        td.appendChild(innerHTML);
    }
    return td;
}

export default function usersList(state, dispatch) {
    const users = selectFilteredDisplayed(state, state.search);

    counter.innerText = `Displayed ${users.length} users out of ${selectData(state).length} users`;

    while (tbody.children.length > 0) {
        tbody.children[0].remove();
    }

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let img = document.createElement('img');
        img.src = users[i].picture;
        tr.appendChild(td(img));

        tr.appendChild(td(users[i].name));
        tr.appendChild(td(users[i].location));
        tr.appendChild(td(users[i].email));
        tr.appendChild(td(users[i].phone));
        tr.appendChild(td(users[i].timezone));

        let button = document.createElement('button');
        button.className = 'remove';
        button.innerText = 'Remove';
        button.onclick = () => {
            dispatch(actions.deleteUser(users[i].id));
        };
        tr.appendChild(td(button));
        tbody.appendChild(tr);
    }
}
