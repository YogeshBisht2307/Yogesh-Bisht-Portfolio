import React from 'react'
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [popupBar, setpopupBar] = React.useState(false);
    const [popupErrorBar, setpopupErrorBar] = React.useState(false);

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_ksn0sow','template_06zrmar',e.target,'user_5LYtOoCt2zfXAFHsPgxTh').then( () => {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.subject.value = "";
            e.target.message.value = "";
            setpopupBar(!popupBar);
            setTimeout(() => {
                setpopupBar(popupBar => !popupBar)
            }, 4000);
        },
        () =>{
            setpopupErrorBar(!popupErrorBar);
            setTimeout(() => {
                setpopupErrorBar(popupErrorBar => !popupErrorBar)
            }, 4000);
        });
    }
    return (
        <section id="contact">
            <div className={styles.contact_container}>
                <div className={styles.contact_header}>
                    <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Get in Touch &#x227B;'}}/>
                </div>
                <article>
                    <p>
                    Don’t ignore the effort of a person who tries to keep in touch. It’s not all the time someone cares. 
                    </p>
                </article>
                <label htmlFor={styles.check_contact} className={styles.contact_button}>
                    <div className={styles.mail}></div>
                </label>
                <input id={styles.check_contact}type="checkbox"/>
                <form id={styles.contact_form} className={styles.contact_form} onSubmit={sendEmail}>
                    <p className={styles.input_wrapper}>
                        <input type="text" name="name" defaultValue="" id ={styles.contact_num}/>
                        <label htmlFor={styles.contact_num}>NAME</label>
                    </p>
                    <p className={styles.input_wrapper}>
                        <input type="text" name="email" defaultValue=""  id ={styles.contact_email}/>
                            <label htmlFor={styles.contact_email}>EMAIL</label>
                    </p>
                    <p className={styles.input_wrapper}>
                        <input type="text" name="subject" defaultValue=""  id ={styles.contact_subject}/>
                        <label htmlFor={styles.contact_subject}>SUBJECT</label>
                    </p>
                    <p className={styles.textarea_wrapper}>
                        <textarea name="message" id={styles.contact_message}></textarea>
                    </p>
                    <p className={styles.submit_wrapper}>
                        <input type="submit" value="Send"/>
                        </p>
                </form>
            </div>
            <div className={styles.popup_window} id={popupBar ? styles.show_popup : ""} style={{ background: popupErrorBar ? "#E07C24" : "" }}>
                <p>{popupErrorBar ? "Error": "Email has been Sent"}</p>
            </div>
        </section>
    )
}

export default Contact
