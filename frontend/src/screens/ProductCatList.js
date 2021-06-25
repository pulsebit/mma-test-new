import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const ProductCatList = () => {
    return (
        <>
            <div className="view-screen">
                <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Basic Information</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Date Created</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>321</td>
                                    <td>Category A</td>
                                    <td className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                                    <td>12/12/12</td>
                                    <td>
                                        <NavLink to='/admin/product-categories/view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                </DashboardContainer>
            </div>
        </>
    )
}
export default ProductCatList