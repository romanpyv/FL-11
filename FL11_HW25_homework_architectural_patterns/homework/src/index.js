import "./style.scss";
import store from './store';
import { init, update } from './app';
import loadButton from "./components/loadButton";

store.subscribe(() => update(store.getState(), store.dispatch));

init(store.getState(), store.dispatch);
