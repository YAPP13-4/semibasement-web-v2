import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { LandingEntry } from './entry';

export default ({ match }: RouteComponentProps<any>) => <Route path={`${match.url}`} component={LandingEntry} />;
