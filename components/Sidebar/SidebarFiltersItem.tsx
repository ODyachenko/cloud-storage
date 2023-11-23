import React, { FC } from 'react';
import { ListType } from '@/@types';

const SidebarFiltersItem: FC<ListType> = ({ value, icon }) => {
  return (
    <li className="sidebar__filters-item">
      {icon}
      {value}
    </li>
  );
};

export default SidebarFiltersItem;
