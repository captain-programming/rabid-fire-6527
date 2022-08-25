import { ChakraProvider } from '@chakra-ui/react';
import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
     <BrowserRouter>
      <ChakraProvider>
        <App />
       </ChakraProvider>
     </BrowserRouter>
    </StrictMode>
);

reportWebVitals();