import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import React from "react";
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './app/home';
import Live from './app/live';

import Content from "./lib/components/Content"
import { store } from "./store";


function App() {

  return (

    <Provider store={store}>
      <MantineProvider  withGlobalStyles withNormalizeCSS  theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1600,
                xl: 1578,
              },
            },
          },
        },
      }} >
        <ModalsProvider>
          <Content>
            <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/live"} element={<Live/>}/>
            </Routes>
          </Content>
        </ModalsProvider>
      </MantineProvider>
    </Provider>


  );
}

export default App;
