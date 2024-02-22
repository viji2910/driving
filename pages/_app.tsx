import { AppProps } from 'next/app'
import { useEffect } from 'react'

import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      ;(await import('tw-elements')).default
    }
    use()
  }, [])
  return <Component {...pageProps} />
}
