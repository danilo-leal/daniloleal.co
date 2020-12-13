import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/atoms/NavBar';
import AppBar from '../components/atoms/AppBar';
import DarkModeButton from '../components/atoms/DarkModeButton';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
