import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { AppState } from './store/store';
import { GetDataAction } from './store/actions';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

interface Props {
    store: Store<AppState>;
}

const Root: React.SFC<Props> = props => {
    return (
        <Provider store={props.store}>
            <App />
        </Provider>
    );
};

const store = configureStore();
store.dispatch(GetDataAction());

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
