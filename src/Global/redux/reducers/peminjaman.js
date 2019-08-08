const initialState = {
    listPeminjaman: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const peminjaman = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PEMINJAMAN_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_PEMINJAMAN_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "GET_PEMINJAMAN_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listPeminjaman: action.payload.data
        };
        case "GET_BY_ID_USER_PEMINJAMAN_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_BY_ID_USER_PEMINJAMAN_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "GET_BY_ID_USER_PEMINJAMAN_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listPeminjaman: action.payload.data
        };
        case "DETAIL_PEMINJAMAN_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "DETAIL_PEMINJAMAN_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "DETAIL_PEMINJAMAN_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listPeminjaman: action.payload.data
          };
          case "KEMBALI_PEMINJAMAN_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "KEMBALI_PEMINJAMAN_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "KEMBALI_PEMINJAMAN_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listPeminjaman: action.payload.data
          };
      case "DELETE_PEMINJAMAN_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "DELETE_PEMINJAMAN_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "DELETE_PEMINJAMAN_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listPeminjaman: action.payload.data
        };
        case "POST_PEMINJAMAN_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "POST_PEMINJAMAN_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "POST_PEMINJAMAN_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listPeminjaman: action.payload.data
          };
      default:
        return state;
    }
  };
  
  export default peminjaman;
  