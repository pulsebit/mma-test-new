import React, { useRef } from 'react';
import * as L from './styled';
import { MdDashboard, MdPayment } from 'react-icons/md';
import { BiSupport, BiCog } from 'react-icons/bi';
import { SiOpenaccess, SiProducthunt } from 'react-icons/si';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <L.Aside>
      <NavLink to="/admin/dashboard">
        <span className="title">
          <MdDashboard /> <span>Dashboard</span>
        </span>
      </NavLink>

      <NavDropdown
        parentTo="/admin/supports"
        title={<><BiSupport /> <span>Supports</span></>}
      >
        <a href="#facebook.com">Acounting</a>
        <a href="#facebook.com">Technical Support</a>
        <a href="#facebook.com">Billing Support</a>
        <a href="#facebook.com">Integration</a>
      </NavDropdown>

      <NavLink to="/admin/users">
        <span className="title">
          <AiOutlineUser/> <span>Users</span>
        </span>
      </NavLink>
      <NavLink to="/admin/permissions">
        <span className="title">
          <SiOpenaccess/> <span>Permissions</span>
        </span>
      </NavLink>
      <NavDropdown 
        parentTo="/admin/products"
        title={<><SiProducthunt/> <span>Products</span></>}
      >
        <a href="#facebn">Categories</a>
      </NavDropdown>

      <NavLink to="/admin/plan">
        <span className="title">
          <MdPayment/> <span>Payment Plans</span>
        </span>
      </NavLink>
      <NavLink to="/admin/settings">
        <span className="title">
          <BiCog/> <span>Settings</span>
        </span>
      </NavLink>
    </L.Aside>
  );
}

export default Sidebar;

function NavDropdown({ parentTo, title, children }) {
  const [open, setOpen] = React.useState(false);
  const sub = useRef(null);
  const [subHeight, setSubHeight] = React.useState(0);


  React.useEffect(() => {
    const { length } = sub.current.children;
    if (open) {
      setSubHeight((length * 40) + 4);
    } else {
      setSubHeight(0);
    }
  }, [open, sub]);

  React.useEffect(() => {
    let isOpen = false;
    const elem = sub.current.children;
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] && elem[i].classList.contains('active')) {
        isOpen = true;
      }
    }
    setOpen(isOpen);
  }, [sub]);

  return <>
    <div className="parent-item">
      <NavLink to={parentTo} className="title">{title}</NavLink>
      <span className="caret" onClick={() => setOpen(!open)}>
        {open ? <FaChevronUp/> : <FaChevronDown/> }
      </span>
    </div>
    <L.SubLink ref={sub} style={{ height: subHeight + 'px' }}>
      {children}
    </L.SubLink>
  </>;
}