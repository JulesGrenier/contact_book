import {
  FETCH_CONTACTS,
  FETCH_SELECTED_CONTACT,
  GET_SELECTED_CONTACT
} from '../constants/actionTypes';

const initialState = {
  list: [],
  selected: {}
};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACTS:
      return{
        ...state,
        list: action.content
      }
      
      case FETCH_SELECTED_CONTACT:
        return {
          ...state,
          item: action.content
        }
      
      case GET_SELECTED_CONTACT:
        return {
          ...state
        }

    default:
      return state;
  }
}