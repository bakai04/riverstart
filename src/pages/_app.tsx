import '@/shared/styles/app.scss'
import type { AppProps } from 'next/app'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
