/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import Nav from '../components/header.jsx';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme} >
            <div sx={{ 'max-width': '700px', margin: 'auto', }}>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider > 
    )
}

