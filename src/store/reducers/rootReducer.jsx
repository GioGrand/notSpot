import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from  'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import todos from '../reducers/basicReducers'

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    form: formReducer,
    toastr: toastrReducer,
    todos: todos
});

export default rootReducer

