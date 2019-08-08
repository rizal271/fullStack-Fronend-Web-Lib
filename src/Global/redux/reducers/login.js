const initialState = {
    currentLogin: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };

  
  const login = (state = initialState, action) => {
      switch (action.type) {
          case 'LOGIN_USER_PENDING':
              return{
                  ...state,
                  isLoading: true,
                  isRejected: false,
                  isFulfilled: false
              }
              case 'LOGIN_USER_REJECTED':
                  return{
                      ...state,
                      isLoading: false,
                      isRejected: true,
                      error: action.payload.data
                  }
                  case 'LOGIN_USER_FULFILLED':
                      console.log('ini console', action.payload.data)
                      localStorage.setItem('token', 'bearer '+ action.payload.data.result.token )
                      localStorage.setItem('id', action.payload.data.result.id_ktp)
                      localStorage.setItem('level', action.payload.data.result.level_user)
                      return{
                          ...state,
                          isLoading: false,
                          isFulfilled: true,
                          currentLogin: action.payload.data,
                          token: action.payload.data.result.token,

                      }
          default:
              return state
      }
  }
  
  export default login