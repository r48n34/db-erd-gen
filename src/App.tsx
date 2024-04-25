import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from '@vercel/analytics/react';

import MainPage from "./pages/MainPage"
import ErrorComp from './components/common/ErrorComp';

function App() {

    return (
        <>
        <Analytics />
            <MantineProvider defaultColorScheme="dark">
            <ModalsProvider> 
            <Notifications />
                <ErrorBoundary fallback={<ErrorComp/>}>
                    <MainPage/>
                </ErrorBoundary>
            </ModalsProvider>
            </MantineProvider>
        </>
    )
}

export default App
