import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import MainPage from "./pages/MainPage"
import { useState } from 'react';

function App() {
  
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <MainPage/>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default App
