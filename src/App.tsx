
import React, { useCallback, useEffect, useState } from 'react';
import { appTheme } from "./Theme";
import { ApplicationRouter } from "./Router";
import { ThemeProvider } from "styled-components";
import './App.css';
const App = () => {
   return (

     <ThemeProvider theme={appTheme}>

        <ApplicationRouter/>

  {/* <Normalize />
   <GlobalStyles />

          */}
     </ThemeProvider>
   );
};

export default App ;

