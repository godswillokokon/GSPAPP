import { combineReducers } from 'redux';
import User from './User';
import Misc from './Misc';
// import Library from './Library';
export default combineReducers({
  user: User,
  misc: Misc,
  // library: Library
});
