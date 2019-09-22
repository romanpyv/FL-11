import usersList from './components/usersList';
import loadButton from './components/loadButton';
import filterUpdate from './components/filterUpdate';
import hideLoadButton from './components/hideLoadButton';

export function init(state, dispatch) {
    usersList(state, dispatch);
    loadButton(dispatch);
    filterUpdate(state, dispatch);
    hideLoadButton(state);
}

export function update(state, dispatch) {
    filterUpdate(state, dispatch);
    usersList(state, dispatch);
    hideLoadButton(state);
}
