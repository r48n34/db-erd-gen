import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import 'reactflow/dist/style.css';

import {MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { ErrorBoundary } from "react-error-boundary";
import { Analytics } from '@vercel/analytics/react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react';

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
            <ModalsProvider> 
            <Notifications />
                <ErrorBoundary fallback={<ErrorComp/>}>
                <Suspense fallback={<LoadingPage />}>
                    <RouterProvider router={router} />
                </Suspense>
                </ErrorBoundary>
            </ModalsProvider>
            </MantineProvider>
        </>
    )
}

export default App
