import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from 'presentation/components/header';
import { Loading } from 'presentation/components/loading';

const styles = require('./styles.scss');

export enum PAGE_ROUTE {
  LANDING = '/',
  HOME = '/home',
}

const LandingRoutes = lazy(() => import('./landing'));
const HomeRoutes = lazy(() => import('./home'));

export const EntryRoute = () => (
  <BrowserRouter>
    <Header />
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={PAGE_ROUTE.LANDING} component={LandingRoutes} />
        <Route path={PAGE_ROUTE.HOME} component={HomeRoutes} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
