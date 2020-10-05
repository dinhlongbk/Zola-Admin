import React from 'react';

import SignInPage from '../pages/SignInPage';
import PageNotFound from '../pages/PageNorFound';
import AdminPage from '../pages/AdminPage';
import Layout from '../layout';
import UsersPage from '../pages/UsersPage';
import AddUserPage from '../pages/AddUserPage';
import AdminAuth from '../components/common/HOC/Auth/AdminAuth';
export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <SignInPage />
  },

  {
    path: '/admin',
    exact: true,
    main: () => (
      <Layout>
        <AdminAuth component={AdminPage}></AdminAuth>
      </Layout>
    )
  },

  {
    path: '/admin/users',
    exact: false,
    main: () => (
      <Layout>
        <AdminAuth component={UsersPage}></AdminAuth>
      </Layout>
    )
  },
  {
    path: '/admin/addUser',
    exact: false,
    main: () => (
      <Layout>
        <AdminAuth component={AddUserPage}></AdminAuth>
      </Layout>
    )
  },
  {
    path: '',
    exact: false,
    main: () => <PageNotFound />
  }
];
