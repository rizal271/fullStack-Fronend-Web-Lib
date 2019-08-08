const initialState = {
  listDonasi: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const donasi = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DONASI_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_DONASI_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_DONASI_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listDonasi: action.payload.data
      };
    case "POST_DONASI_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_DONASI_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
      case "POST_DONASI_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listDonasi: [state.listDonasi, action.payload.data]
        };
    default:
      return state;
  }
};

export default donasi;
