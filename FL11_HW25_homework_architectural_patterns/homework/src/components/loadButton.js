import actions from '../actions';

const button = document.getElementById('load-button');

export default function loadButton(dispatch) {
    button.addEventListener('click', ()=>{
        dispatch(actions.loadUsers());
    });
}
