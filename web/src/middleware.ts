import { NextRequest, NextResponse } from 'next/server'

const singInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(resquest: NextRequest) {
  const token = resquest.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(singInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${resquest.url}; Path=/; HttpOnly; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
