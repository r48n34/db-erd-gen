import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';

import 'reactflow/dist/style.css';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from '@vercel/analytics/react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react';

import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';

// Shiki requires async code to load the highlighter
async function loadShiki() {
    const { createHighlighter } = await import('shiki');
    const shiki = await createHighlighter({
        langs: ['tsx', 'ts', 'json', 'sql'],
        themes: [],
    });

    return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

import ErrorComp from './components/common/ErrorComp';
import LoadingPage from './components/common/LoadingPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
]);

function App() {

    return (
        <>
            <Analytics />
            <MantineProvider defaultColorScheme="dark">
                <CodeHighlightAdapterProvider adapter={shikiAdapter}>
                    <ModalsProvider>
                        <Notifications />
                        <ErrorBoundary fallback={<ErrorComp />}>
                            <Suspense fallback={<LoadingPage />}>
                                <RouterProvider router={router} />
                            </Suspense>
                        </ErrorBoundary>
                    </ModalsProvider>
                </CodeHighlightAdapterProvider>
            </MantineProvider>
        </>
    )
}

export default App
