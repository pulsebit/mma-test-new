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

        dispatch(createEmailSupport(senderId, senderName, senderEmail, emailContent))
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
                        
                        <div className="left-part">
                        
                            <div className="input-wrapper">
                                <label>Name</label>
                                <input type="text" name="user_name" value={senderName} readOnly />
                            </div>
                            <div className="input-wrapper">
                                <label>Email</label>
                                <input type="email" name="user_email" value={senderEmail} readOnly />
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="input-wrapper">
                                <label>Message</label>
                                <textarea name="message" onChange={(e)=>setEmailContent(e.target.value)}/>
                            </div>
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
