export { default } from "next-auth/middleware"

export const config = { matcher: ['/todo-list/:id*',"/todo-list", "/todo-board/:id*","/todo-board"] }