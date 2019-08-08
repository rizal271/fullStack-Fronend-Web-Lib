const initialState = {
    listKategori: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const kategori = (state = initialState, action) => {
    switch (action.type) {
      case "GET_KATEGORI_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_KATEGORI_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "GET_KATEGORI_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listKategori: action.payload.data
        };
      case "DELETE_KATEGORI_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "DELETE_KATEGORI_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
      case "DELETE_KATEGORI_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          listKategori: action.payload.data
        };
        case "POST_KATEGORI_PENDING":
          return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "POST_KATEGORI_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
        case "POST_KATEGORI_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            listKategori: action.payload.data
          };
      default:
        return state;
    }
  };
  
  export default kategori;
  