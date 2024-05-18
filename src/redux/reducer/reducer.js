export const setSearchNow = (searchNow) => ({
  type: "SEARCH_WORD",
  payload: searchNow
});

let initialState = {
  contactList: [],
  searchNow : ''
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {...state, contactList: [...state.contactList,{ name: payload.name, phoneNumber: payload.phoneNumber },], };
  
    case "SEARCH_WORD":
      return{...state, searchNow:payload};

  default:
      return { ...state };
    }
}

export default reducer;
