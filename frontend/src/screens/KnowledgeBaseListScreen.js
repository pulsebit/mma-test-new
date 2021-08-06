import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import DashboardContainer from '../components/DashboardContainer'
import date from 'date-and-time'
import { listKnowledgeBase } from '../actions/knowlegeBaseAction'


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
                    <div className="blue-bkg-title def-padding">
                        <span>Knowledge Base</span>
                        <NavLink to="/admin/knowledge-base-add/">Add</NavLink>
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
                                            <td>{knowledgeBase.problem_description}</td>
                                            <td>{knowledgeBase.solution}</td>
                                            <td>{knowledgeBase.category}</td>
                                            <td>{knowledgeBase.resolve_by.name}</td>
                                            <td>{knowledgeBase.created_by.name}</td>
                                            <td>{date.format(new Date(knowledgeBase.createdAt), 'ddd, MMM DD YYYY')}</td>
                                            
                                            <td>
                                                <NavLink to={`/admin/knowledge-base/${knowledgeBase._id}`} className="view-btn">View</NavLink>
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
