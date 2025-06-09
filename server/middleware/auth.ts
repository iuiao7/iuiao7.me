import type { H3Event } from 'h3'

export default defineEventHandler((event) => {
  const isAllowed = protectAuthRoute(event)
  if (!isAllowed) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    )
  }
})

function protectAuthRoute(event: H3Event): boolean {
  const protectedRoutes = ['/api/posts/']
  const path = getRequestURL(event).pathname
  return !protectedRoutes.some((route) => path.startsWith(route)) || authCheck(event)
}

function authCheck(event: H3Event): boolean {
  const token = getHeader(event, 'Authorization')
  return !!token
}
