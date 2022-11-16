import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
