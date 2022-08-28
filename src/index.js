import { ChakraProvider } from '@chakra-ui/react';
import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from './context/AuthContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
     <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
       </ChakraProvider>
     </BrowserRouter>
    </StrictMode>
);

reportWebVitals();