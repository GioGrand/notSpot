import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'

const store = createStore(rootReducer, 
    composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
        useFirestoreForProfile: true,
        userProfile: 'users',
        attachAuthIsReady: true})
    )
    );

    store.firebaseAuthIsReady.then(() => {
        ReactDOM.render(
            <Provider store={store}>
            <div>
            <ReduxToastr 
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            />
            <App /></div>
            </Provider>   
            , document.getElementById('root'));
        
    })
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
