export default {
  changeUser: (state, payload) => {
    return {
      ...state,
      error: null,
      ready: true,
      currentUser: payload
    }
  },
  passwordChange: (state, payload) => ({
    ...state,
    error: null,
    passwordChange: true
  }),
  passwordReset: (state, payload) => ({
    ...state,
    error: null,
    passwordReset: true
  }),
  serverError: (state, payload) => ({
    ...state,
    error: payload
  })
}
