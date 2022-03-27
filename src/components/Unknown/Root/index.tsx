import React, { Suspense, useEffect, useState, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import AuthenticatedLayout from '../AuthenticatedLayout';
import GuestLayout from '../GuestLayout';
import Spinner from '../Spinner';
import SearchFlats from '../SearchFlats';
import AppBar from '../AppBar';

// lazy loading
const HomeScreen = lazy(() => import('../HomeScreen'));
const NotFoundScreen = lazy(() => import('../NotFoundScreen'));
const SignInScreen = lazy(() => import('../../Auth/SignInScreen'));
const SignUpScreen = lazy(() => import('../../Auth/SignUpScreen'));

const Root: React.FC = () => {
  const {
    data: user,
    // hasEmitted,
    firstValuePromise,
  } = useUser();

  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const isLogged = !!user;

  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);

  // doesn't always work, but suddenly works when subscribing to `firstValuePromise`
  // thus we use `isUserLoaded` below
  // if (!hasEmitted) {
  //   return null;
  // }
  if (!isUserLoaded) {
    return null;
  }

  if (isLogged) {
    return (
      <AuthenticatedLayout>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomeScreen}  />
            <Route path="/registration" component={() => <Redirect to="/" />} />
            <Route path="/login" component={() => <Redirect to="/" />} />
            <Route path="/flats" component={SearchFlats} />
            <Route component={NotFoundScreen} />
          </Switch>
        </Suspense>
      </AuthenticatedLayout>
    );
  }

  return (
    <GuestLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
             <Route exact path="/" component={() => <Redirect to="/login" />}  />
           <Route path="/login" component={SignInScreen} />
          <Route path="/flats" component={() => <Redirect to="/login" />} />
          <Route path="/registration" component={SignUpScreen} />
          <Route  component={NotFoundScreen} />
        </Switch>
      </Suspense>
    </GuestLayout>
  );
};

export default Root;
