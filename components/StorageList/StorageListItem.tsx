import React, { FC } from 'react';
import { ListType } from '@/@types';

const StorageListItem: FC<ListType> = ({ value, icon }) => {
  return (
    <li className="storage__list-item">
      {icon}
      {value}
    </li>
  );
};

export default StorageListItem;
