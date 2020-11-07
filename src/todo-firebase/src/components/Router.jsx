import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../contexts/auth';

export default ({ renderLoading, renderLogin, renderTodos }) => {
  const { currentUser, loading } = useContext(AuthContext)

  return (
    <Fragment>
      {loading ? renderLoading() : currentUser ? renderTodos() : renderLogin()}
    </Fragment>
  )
}