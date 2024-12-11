import { FC, Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

export const App: FC = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={'app'}>
      <Suspense fallback={''}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          {inited ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  );
};
