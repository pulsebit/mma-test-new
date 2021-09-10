import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import ClientLayout from '../../components/ClientLayout'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createEmailSupport } from '../../actions/emailSupportAction';

const ClientEmailSupportAdd = () => {
    const dispatch = useDispatch()
    const emailId = 'service_yih9uzg'
    const templateId = 'template_01wdg27'
    const uId = 'user_Qz5iRJprqwtmZUZtnFTTG'

    
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [department, setDepartment] = useState('')
    const [emailContent, setEmailContent] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const senderId = userInfo._id

    useEffect(() => {
        setSenderName(userInfo.name)
        setSenderEmail(userInfo.email)
         
    }, [userInfo] )

    function sendEmail(e) {
    e.preventDefault();

        emailjs.sendForm(emailId, templateId, e.target, uId)
            .then((result) => {
                toast.success('Submitted successfully.',{
                    position: "bottom-right",});
            }, (error) => {
                console.log(error.text);
        });
        e.target.reset()
        dispatch(createEmailSupport(senderId, senderName, senderEmail, subject, department, emailContent))
    }
    
    return (
        <div>
            <ClientLayout>
                <div className="email-form-wrapper">
                    <div className="title">
                        Email us
                        <div className="line"></div>
                    </div>
                    <form className="email-form" onSubmit={sendEmail}>
                        <div className="input-hide">
                            <input type="text" name="name" value={userInfo.name}/>
                            <input type="text" name="email" value={userInfo.email}/>
                        </div>
                        <div className="input-wrapper">
                            <label>Subject</label>
                            <input type="text" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label>Department</label>
                            <select value={department} name="department" onChange={(e)=>setDepartment(e.target.value)}>
                                <option value="N/A">Select Department</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Accounting">Accounting</option>
                            </select>
                        </div>
                        <div className="input-wrapper">
                            <label>Message</label>
                            <textarea name="message" value={emailContent} onChange={(e)=>setEmailContent(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </ClientLayout>
        </div>
    )
}
export default ClientEmailSupportAdd
