
export const settings = {
  key: 'storage',
  storage: window.localStorage
}

export const getJWT = () => {
  return settings.storage.getItem(`${settings.key}-jwt`)
}

export const getUser = () => {
  const user = settings.storage.getItem(`${settings.key}-user`)
  if (!user) return null
  return JSON.parse(user)
}

export const clear = () => {
  settings.storage.removeItem(`${settings.key}-jwt`)
  settings.storage.removeItem(`${settings.key}-user`)
}

export default {
  settings,
  getJWT,
  getUser
}
