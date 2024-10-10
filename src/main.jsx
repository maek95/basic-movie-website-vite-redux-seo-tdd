import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import TagManager from 'react-gtm-module';


// https://www.npmjs.com/package/react-gtm-module
// npm install react-gtm-module --save
// npm install --save-dev @types/react-gtm-module 
// had to install the types because i dont know?
const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GTM_ID, // client-side so we use VITEs .env import
}

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
