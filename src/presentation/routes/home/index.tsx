import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { HomeEntry } from './entry';

export default ({ match }: RouteComponentProps<any>) => (
	<Route path={`${match.url}`} component={HomeEntry} />
);
