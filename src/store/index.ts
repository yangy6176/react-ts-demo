/**
 * @author 江南小魏晨
 * @todo redux状态管理
 */
import { createStore } from 'redux'
import appReducer from './reducer/reducer'

const store = createStore(appReducer)
export default store
