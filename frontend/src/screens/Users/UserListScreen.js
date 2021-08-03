import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { userLists } from "store/actions/userActions";
import { PageTitle } from "style/global";
import { Table, TableWrapper, TopTable } from './style';
import Pagination from 'components/Pagination';
import { PaginationWrapper } from 'components/Pagination/style';
import { Input } from 'components/Form';
import useAuth from 'hooks/useAuth'
import moment from 'moment'
import { useQuery } from 'helpers/useQuery';
import { useDebouncedCallback } from 'use-debounce';

const UserListScreen = ({ history }) => {
  const user = useSelector((state) => state.user);
  const { access_token } = useAuth();
  const query = useQuery();

  const queries = query.toString();

  useEffect(() => {
    userLists(queries)
  }, [access_token, queries])

  function dateCreated(date) {
    return date ? moment(date).format('MM-DD-YYYY, h:mm:ss a') : '';
  }

  return (
    <div className="p-4">
      <PageTitle>Users</PageTitle>
      <TableList>
          {user && user.userDocs && user.userDocs.docs && user.userDocs.docs.map((user, key) => (
            <tr key={key}>
              <td>
                <NavLink to={`/admin/users/${user._id}`}>{user.name}</NavLink>
              </td>
              <td>{user.email}</td>
              <td>Active</td>
              <td>Basic</td>
              <td>{dateCreated(user.createdAt)}</td>
              <td>
                <NavLink className="btn btn-sm btn-outline-primary" to={`/admin/users/${user._id}`}>
                  View
                </NavLink>
              </td>
            </tr>
          ))}
      </TableList>
      {user && user.userDocs && (
        <Paging 
          current={user.userDocs.page}
          totalPages={user.userDocs.totalPages}
          limit={user.userDocs.limit}
          totalDocs={user.userDocs.totalDocs}
        />
      )}
    </div>
  )
};

export default UserListScreen;

function Paging({ current, totalPages, limit, totalDocs }) {
  return totalDocs > limit && (
    <PaginationWrapper>
      <Pagination 
        current={current} 
        totalPages={totalPages} 
      />
    </PaginationWrapper>
  );
}

function TableList({ children }) {
  const [search, setSearch] = useState('');
  const history = useHistory();
  const query = useQuery();

  const debounceInputSearch = useDebouncedCallback(() => {
    history.push(`?search=${search}`);
  }, 1000);

  const onSearch = React.useCallback((e) => {
    setSearch(e.target.value);
    debounceInputSearch();
  }, [debounceInputSearch]);

  useEffect(() => {
    const _search = query.get('search');
    if (_search) setSearch(_search);
  }, []);

  return (
    <TableWrapper className="table-responsive">
        <TopTable>
          <Input placeholder="Search" 
            value={search} 
            onChange={onSearch} 
          />
          <button className="btn btn-primary">Add User</button>
        </TopTable>
        <Table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Plan</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </Table>
      </TableWrapper>
  )
}
