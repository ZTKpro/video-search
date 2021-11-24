const INITIAL_STATE = {
  listName: "Favourite",
  list: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        list: [...state.list, action.item],
      };
    default:
      return state;
  }
};

export default moviesReducer;
