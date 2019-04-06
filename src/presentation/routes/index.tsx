import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from 'presentation/components/header';
import { Loading } from 'presentation/components/loading';

export enum PAGE_ROUTE {
	HOME = '/',
}

const HomeRoutes = lazy(() => import('./home'));

export const EntryRoute = () => (
	<BrowserRouter>
		<Header>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path={PAGE_ROUTE.HOME} component={HomeRoutes} />
				</Switch>
			</Suspense>
		</Header>
	</BrowserRouter>
);
