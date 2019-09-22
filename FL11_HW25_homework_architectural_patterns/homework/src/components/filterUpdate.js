import actions from '../actions';

const filter = document.getElementById('filter');

export default function filterUpdate(state, dispatch) {
    filter.addEventListener('input', (e) => {
        dispatch(actions.changeFilter(e.target.value));
    });
}
