export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
}

export type LoginRequest = {
  email: string,
  password: string
}

export type RegisterRequest = {
  email: string,
  name: string,
  password: string
}
