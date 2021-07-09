import React from 'react'
import PermissionsLayout from '../components/PermissionsLayout'


const PerSuperAdmin = () => {
    return (
        <PermissionsLayout>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Access</th>
                    <th>Action</th>
                </tr>				
                <tr>
                    <td>John Smith</td>
                    <td>john@mma.com</td>
                    <td>Supper Admin</td>
                    <td>Full</td>
                    <td>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Edit" className='edit-btn'>Edit</button>
                            <button className='delete-btn'>Delete</button>  
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>john@mma.com</td>
                    <td>Supper Admin</td>
                    <td>Full</td>
                    <td>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Edit" className='edit-btn'>Edit</button>
                            <button className='delete-btn'>Delete</button>  
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>john@mma.com</td>
                    <td>Supper Admin</td>
                    <td>Full</td>
                    <td>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Edit" className='edit-btn'>Edit</button>
                            <button className='delete-btn'>Delete</button>  
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>john@mma.com</td>
                    <td>Supper Admin</td>
                    <td>Full</td>
                    <td>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Edit" className='edit-btn'>Edit</button>
                            <button className='delete-btn'>Delete</button>  
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>john@mma.com</td>
                    <td>Supper Admin</td>
                    <td>Full</td>
                    <td>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Edit" className='edit-btn'>Edit</button>
                            <button className='delete-btn'>Delete</button>  
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </PermissionsLayout>)
}
export default PerSuperAdmin