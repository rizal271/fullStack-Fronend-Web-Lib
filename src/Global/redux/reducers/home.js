const initialState = {
  listBuku: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_HOME_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
            case 'GET_HOME_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
                }
                case 'GET_HOME_FULFILLED':
                    return{
                        ...state,
                        isLoading: false,
                        isFulfilled: true,
                        listBuku: action.payload.data
                    }
        default:
            return state
    }
}

export default home