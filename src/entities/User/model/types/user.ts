export type User = {
  id: number,
  username: string
  avatar?: string
}

export type UserSchema = {
  authData?: User

  _inited: boolean
}
