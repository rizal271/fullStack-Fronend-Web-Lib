const initialState = {
  listPeminjam: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const peminjam = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PEMINJAM_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PEMINJAM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PEMINJAM_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listPeminjam: action.payload.data
      };
    case "DELETE_PEMINJAM_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_PEMINJAM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_PEMINJAM_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        listPeminjam: action.payload.data
      };
      case "POST_PEMINJAM_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "POST_PEMINJAM_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "POST_PEMINJAM_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listPeminjam: action.payload.data
        };
        case "REGISTER_PEMINJAM_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "REGISTER_PEMINJAM_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "REGISTER_PEMINJAM_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listPeminjam: action.payload.data
        };
    default:
      return state;
  }
};

export default peminjam;