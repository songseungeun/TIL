const date = new Date();

export const initialState = {
  bookState: [
    {
      _id: date.getTime(),
      name: "송승은",
      phone: "01027585830",
    },
  ],
  inputState: {
    name: "",
    phone: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
        bookState: [...state.bookState],
      };
    case "ADD_PHONE":
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.concat(action.newPhone),
      };
    case "DELETE_PHONE":
      return {
        inputState: state.inputState,
        bookState: state.bookState.filter((p) => p._id !== action._id),
      };
    default:
      return;
  }
};
