import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {ChakraProvider, theme} from "@chakra-ui/react";
import {Store} from "./redux/Store";
import {AppRouter} from "./router/AppRouter";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={Store}>
        <ChakraProvider theme={theme}>
            <AppRouter/>
        </ChakraProvider>
    </Provider>
);

