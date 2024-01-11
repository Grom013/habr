import ReactDOM from 'react-dom/client';
import React from 'react';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
