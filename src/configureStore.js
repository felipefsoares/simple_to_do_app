import { createStore} from 'redux'
import appReducer from './store/reducers/app'

const configureStore = () => {
    const store = createStore(appReducer)
    return store   
}
export default configureStore