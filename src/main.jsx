import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4' 
import { HelmetProvider } from 'react-helmet-async'


// https://www.npmjs.com/package/react-gtm-module
// npm install react-gtm-module --save
// npm install --save-dev @types/react-gtm-module 
// had to install the types because i dont know?
// Check if environment variables are set
const gtmId = import.meta.env.VITE_GTM_ID;
const gaId = import.meta.env.VITE_GA_ID;

if (gtmId) { //
  // Initialize Google Tag Manager
  const tagManagerArgs = { gtmId };
  TagManager.initialize(tagManagerArgs); //
} else {
  console.warn('Google Tag Manager ID (VITE_GTM_ID) is not set in environment variables.');
}

if (gaId) {
  // Initialize Google Analytics 4
  ReactGA.initialize(gaId);
} else {
  console.warn('Google Analytics ID (VITE_GA_ID) is not set in environment variables.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App /> 
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
