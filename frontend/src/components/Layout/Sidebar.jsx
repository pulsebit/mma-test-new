import React from 'react';
import * as L from './styled';
import { MdDashboard, MdPayment } from 'react-icons/md';
import { BiSupport, BiCog } from 'react-icons/bi';
import { SiOpenaccess, SiProducthunt } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <L.Aside>
      <NavLink to="/admin/dashboard">
        <MdDashboard /> <span>Dashboard</span>
      </NavLink>
      <NavLink to="/admin/supports">
        <BiSupport /> <span>Supports</span>
      </NavLink>
      <NavLink to="/admin/users">
        <AiOutlineUser/> <span>User</span>
      </NavLink>
      <NavLink to="/admin/permissions">
        <SiOpenaccess/> <span>Permissions</span>
      </NavLink>
      <NavLink to="/admin/products">
        <SiProducthunt/> <span>Products</span>
      </NavLink>
      <NavLink to="/admin/plan">
        <MdPayment/> <span>Payment Plans</span>
      </NavLink>
      <NavLink to="/admin/settings">
        <BiCog/> <span>Settings</span>
      </NavLink>
    </L.Aside>
  );
}

export default Sidebar;
