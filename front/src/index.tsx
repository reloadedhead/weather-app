import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/error-boundary';
import LoadingPage from './components/loading';
import AppShell from './components/layout';
import { WeatherProvider } from './context/weather';
import axiosConfig from './axios-config';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { AlertProvider } from './context/alert';

const App = () => (
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingPage />}>
        <I18nextProvider i18n={i18n}>
          <AlertProvider>
            <WeatherProvider>
              <AppShell>
                <Router />
              </AppShell>
            </WeatherProvider>
          </AlertProvider>
        </I18nextProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

const root = document.getElementById('root');
if (root !== null) {
  axiosConfig();
  ReactDOM.render(<App />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
