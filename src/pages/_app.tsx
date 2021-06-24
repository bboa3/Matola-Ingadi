import { AppProps } from 'next/app'
import '../styles/fonts/trajan-pro/styles.css'
import '../styles/fonts/crimson/styles.css'
import '../assets/glider/styles.css';
import DataProvider from '../contexts'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      <GlobalStyles />
    </>
  )
}

export default MyApp
