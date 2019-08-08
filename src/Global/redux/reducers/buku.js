const initialState = {
    listBuku: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const buku = (state = initialState, action) => {
    switch (action.type) {
      case "GET_BUKU_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_BUKU_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "GET_BUKU_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listBuku: action.payload.data
        };
        case "GET_DETAIL_BUKU_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_DETAIL_BUKUL_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "GET_DETAIL_BUKU_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listBuku: action.payload.data.result[0]
        };
        case "GET_BUKU_ACTIVE_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "GET_BUKU_ACTIVE_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "GET_BUKU_ACTIVE_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listBuku: action.payload.data
          };
      case "DELETE_BUKU_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "DELETE_BUKU_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "DELETE_BUKU_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listBuku: action.payload.data
        };
        case "POST_BUKU_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "POST_BUKU_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "POST_BUKU_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listBuku: action.payload.data
          };
      default:
        return state;
    }
  };
  
  export default buku;
  