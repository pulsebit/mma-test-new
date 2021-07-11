import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DashboardContainer from "components/DashboardContainer";
import { userLists } from "store/actions/userActions";
import Error from 'components/Alert'

const UserListScreen = ({ history }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    userLists()
  }, [])

  return (
    <>
      <DashboardContainer>
        <div className="section-wrapper">
          {user && user.error ? (
            <Error 
              onRetry={() => userLists()} 
              type="Error"
              message={user.error}  
            />
          ) : (
            <>
              <div className="blue-bkg-title def-padding">
                <span>User List</span>
              </div>
              <div className="table-wrapper def-padding">
                <table>
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Plan</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user && user.userDocs && user.userDocs.docs && user.userDocs.docs.map((user, key) => (
                      <tr key={key}>
                        <td className="fullname">{user.name}</td>
                        <td className="email">{user.email}</td>
                        <td className="status">Active</td>
                        <td className="plan">Basic</td>
                        <td className="date"></td>
                        <td>
                          <NavLink
                            to={`/admin/users/${user._id}`}
                            className="btn btn-primary"
                          >
                            View
                          </NavLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </DashboardContainer>
    </>
  );
};

export default UserListScreen;
