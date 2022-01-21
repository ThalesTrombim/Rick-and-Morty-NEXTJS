import 'tailwindcss/tailwind.css'
import '../src/components/Modal/style.css';
import { AuthProvider } from '../src/contexts/AuthContext'
import { ModalProvider } from '../src/contexts/ModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </AuthProvider>
  )
}

export default MyApp
