import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';

import { ModalsProvider } from '@mantine/modals';
// import { useHotkeys } from '@mantine/hooks';

import { Notifications } from '@mantine/notifications';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';

import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from '@vercel/analytics/react';

import MainPage from "./pages/MainPage"
import ErrorComp from './components/common/ErrorComp';

function App() {

    // const { toggleColorScheme } = useMantineColorScheme();

    // useHotkeys([
    //     ['mod+J', () => toggleColorScheme()],
    // ]);

    return (
        <>
        <Analytics />
        {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}> */}
            <MantineProvider defaultColorScheme="dark">
            <ModalsProvider> 
            <Notifications />
                <ErrorBoundary fallback={<ErrorComp/>}>
                    <MainPage/>
                </ErrorBoundary>
            </ModalsProvider>
            </MantineProvider>
        {/* </ColorSchemeProvider> */}
        </>
    )
}

export default App
