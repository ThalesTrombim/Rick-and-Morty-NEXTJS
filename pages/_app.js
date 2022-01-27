import { Header } from '../src/components/Header';
import { AuthProvider } from '../src/contexts/AuthContext'
import { ModalProvider } from '../src/contexts/ModalContext'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Header position={'absolute'}/>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  )
}

export default MyApp
