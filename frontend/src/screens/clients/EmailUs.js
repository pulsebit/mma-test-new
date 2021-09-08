import React, { useEffect } from 'react'
import emailjs from 'emailjs-com'
import ClientLayout from '../../components/ClientLayout'

const EmailUs = () => {
    const emailId = 'service_yih9uzg'
    const templateId = 'template_01wdg27'
    const uId = 'user_Qz5iRJprqwtmZUZtnFTTG'
    
    function sendEmail(e) {
    e.preventDefault();

        emailjs.sendForm(emailId, templateId, e.target, uId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
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
                                <input type="text" name="user_name" />
                            </div>
                            <div className="input-wrapper">
                                <label>Email</label>
                                <input type="email" name="user_email" />
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="input-wrapper">
                                <label>Message</label>
                                <textarea name="message" />
                            </div>
                            <button type="submit">Send</button>
                        </div>  
                    </form>
                </div>
            </ClientLayout>
        </div>
    )
}
export default EmailUs
