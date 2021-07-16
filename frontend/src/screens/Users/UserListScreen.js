import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLists } from "store/actions/userActions";
import { PageTitle } from "style/global";
import { Table, TableWrapper } from './style';
import Pagination from 'components/Pagination';
import { PaginationWrapper } from 'components/Pagination/style';

const UserListScreen = ({ history }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    userLists()
  }, [])

  return (
    <div className="p-4">
      <PageTitle>Users</PageTitle>
      <TableList>
          {user && user.userDocs && user.userDocs.docs && user.userDocs.docs.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Active</td>
              <td>Basic</td>
              <td></td>
              <td>
                <NavLink className="btn btn-sm btn-success" to={`/admin/users/${user._id}`}>
                  View
                </NavLink>
                <NavLink className="btn btn-sm btn-primary" to={`/admin/users/${user._id}`}>
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
      </TableList>
      <PaginationWrapper>
        <Pagination 
          path="?page" 
          current={2} 
          totalPages={30} 
          prevPage={2} 
          nextPage={1} 
        />
      </PaginationWrapper>
    </div>
  )
};

export default UserListScreen;

function TableList({ children }) {
  return (
    <TableWrapper className="table-responsive">
        <Table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Plan</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </Table>
      </TableWrapper>
  )
}
