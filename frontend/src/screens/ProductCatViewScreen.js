import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'


const ProductCatViewScreen = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Category Information</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>ID:</label>
                                    <span>321</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Name:</label>
                                    <span>Category A</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Date Created:</label>
                                    <span>11/22/2021</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Description:</label>
                                    <span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Other Information</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Other Information</span>
                    </div>
                    
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Head</th>
                                    <th>Head</th>
                                    <th>Head</th>
                                    <th>Head</th>
                                    <th>Head</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem </td>
                                    <td>Ipsum dolor</td>
                                    <td>Consectetur adipiscing</td>
                                    <td>Commodo consequat</td>
                                    <td>Duis aute</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="button-wrapper def-padding">
                    <NavLink to="/admin/product/edit" className="edit-btn">Edit Category</NavLink>
                    <input type="submit" value="Delete" className="delete-btn"/>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default ProductCatViewScreen