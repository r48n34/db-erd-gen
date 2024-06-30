import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';

import { Loader, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from '@vercel/analytics/react';

import MainPage from "./pages/MainPage"
import ErrorComp from './components/common/ErrorComp';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from 'react';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
]);

function App() {

    return (
        <>
        <Analytics />
            <MantineProvider defaultColorScheme="dark">
            <ModalsProvider> 
            <Notifications />
                <ErrorBoundary fallback={<ErrorComp/>}>
                <Suspense fallback={<Loader />}>
                    <RouterProvider router={router} />
                </Suspense>
                </ErrorBoundary>
            </ModalsProvider>
            </MantineProvider>
        </>
    )
}

export default App
