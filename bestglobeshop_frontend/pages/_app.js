import { SessionProvider } from "next-auth/react"
import React from "react"
import '../public/css/core-style.css'
export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}