import { ModalsProvider } from '@mantine/modals';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ErrorBoundary } from "react-error-boundary";

import MainPage from "./pages/MainPage"
import ErrorComp from './components/common/ErrorComp';

function App() {
  
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([
        ['mod+J', () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')],
    ]);

    return (
        <>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <ModalsProvider>
            <NotificationsProvider>
                <ErrorBoundary fallback={<ErrorComp/>}>
                    <MainPage/>
                </ErrorBoundary>
            </NotificationsProvider>
            </ModalsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
        </>
    )
}

export default App
