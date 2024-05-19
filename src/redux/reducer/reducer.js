export const setSearchNow = (searchNow) => ({
  type: "SEARCH_WORD",
  payload: searchNow
});

export const removeList = (id)=>({
  type:"REMOVE_LIST",
  payload: id
});

export const editContact = (id, name, phoneNumber) => ({
  type: "EDIT_CONTACT",
  payload: { id, name, phoneNumber }
});

let initialState = {
  contactList: [],
  searchNow : ''
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {...state,contactList: [...state.contactList,
          {
            id: state.contactList.length + 1,
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            gender: payload.gender,
            imageURL: payload.imageURL
          }
        ]
      };

    case "SEARCH_WORD":
      return { ...state, searchNow: payload };

    case "REMOVE_LIST":
      const updatedList = state.contactList.filter((contact) => contact.id !== payload);
      return { ...state, contactList: updatedList };

    case "EDIT_CONTACT":
      return {...state, contactList: state.contactList.map((contact) =>
          contact.id === payload.id
            ? { ...contact, name: payload.name, phoneNumber: payload.phoneNumber }
            : contact
        )
      };

    default:
      return { ...state };
  }
}

export default reducer;
