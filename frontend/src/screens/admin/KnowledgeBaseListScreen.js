import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import DashboardContainer from '../../components/DashboardContainer'
import date from 'date-and-time'
<<<<<<< HEAD:frontend/src/screens/admin/KnowledgeBaseListScreen.js
import { listKnowledgeBase } from '../../actions/knowlegeBaseAction'
=======
import { listKnowledgeBase } from '../actions/knowlegeBaseAction'
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/KnowledgeBaseListScreen.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const KnowledgeBaseListScreen = () => {
    const dispatch = useDispatch()
    
    const {loading, error, knowledgeBaseList } = useSelector( state => state.knowledgeBaseList)

    useEffect(() => {
        dispatch(listKnowledgeBase())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer >
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Knowledge Base</div>
                        <div className="button-wrapper">
                            <NavLink to="/admin/knowledge-base-add/" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add New</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Issue</th>
                                    <th>Solution</th>
                                    <th>Category</th>
                                    <th>Resolved By</th>
                                    <th>Created By</th>
                                    <th>Date Created</th>
                                    <th>Action</th>
                                </tr>	
                                { loading ? (
                                     <Loader2 />
                                ) : error ? (
                                    <Message variant='danger'>{error}</Message>
                                ) : ( 		   
                                    knowledgeBaseList.map((knowledgeBase) => (
                                        <tr key={knowledgeBase._id}>
                                            <td><p>{knowledgeBase.problem_description}</p></td>
                                            <td><p>{knowledgeBase.solution}</p></td>
                                            <td>{knowledgeBase.category}</td>
                                            <td>{knowledgeBase.resolve_by.name}</td>
                                            <td>{knowledgeBase.created_by.name}</td>
                                            <td>{date.format(new Date(knowledgeBase.createdAt), 'ddd, MMM DD YYYY')}</td>
                                            
                                            <td>
                                                <NavLink to={`/admin/knowledge-base/${knowledgeBase._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                            </td>
                                        </tr>
                                    ))     
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default KnowledgeBaseListScreen
