import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import defaultImage from '../assets/images/user.png'

const PlanViewScreen = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Payment Information</span>
                        </div>

                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <div className="inner-img-wrapper ">
                                        <img className="" src={defaultImage} alt='' />
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Ticket ID:</label>
                                                <span>01</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span>Gold</span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span>20 AUD</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span>20 AUD</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        <ul>
                                            <li>Proin ac ipsum non lectus blandit tristique.</li>
                                            <li>Duis ut nisi tempus, varius quam sit amet, convallis tortor.</li>
                                            <li>Duis rutrum velit et aliquam vestibulum.</li>
                                            <li>Proin rhoncus ante nec erat egestas luctus.</li>
                                            <li>Morbi quis eros vel eros pellentesque volutpat.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Products Included</span>
                            <button type="submit" value="Add" className='add-btn'>Add New</button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Short Description</th>
                                                <th>Price</th>
                                                <th>Date Added</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td>Seo</td>
                                                <td><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p></td>
                                                <td>20 AUD</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Seo</td>
                                                <td><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p></td>
                                                <td>20 AUD</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Seo</td>
                                                <td><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p></td>
                                                <td>20 AUD</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Seo</td>
                                                <td><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p></td>
                                                <td>20 AUD</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Subcribers</span>
                            <button type="submit" value="Add" className='add-btn'>Add New</button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>Date Added</th>
                                                <th>Date Due</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>
            </DashboardContainer>
        </div>
    )
}
export default PlanViewScreen
