import React, { FC } from 'react';
import StorageList from '../StorageList/StorageList';
import './styles.scss';

const Main: FC = () => {
  return (
    <main className="storage">
      <h1 className="storage__title title">Storage</h1>
      <div className="container">
        <StorageList />
      </div>
    </main>
  );
};

export default Main;
