import { createStore } from 'redux';
import rootReducer from 'redux/reducers';
import { loadState, saveState } from 'redux/store/localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
