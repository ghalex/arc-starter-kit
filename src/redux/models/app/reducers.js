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
  addNotification: (state, payload) => {
    return {
      ...state,
      notifications: [...state.notifications, payload]
    }
  },
  removeNotification: (state, payload) => {
    return {
      ...state,
      notifications: state.notifications.filter(
        notification => notification.key !== payload.key
      )
    }
  },
  serverError: (state, payload) => ({
    ...state,
    error: payload
  })
}
