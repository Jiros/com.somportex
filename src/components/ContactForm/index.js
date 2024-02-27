import React from 'react'
import "./ContactForm.css"
import HubspotForm from 'react-hubspot-form'

function ContactForm() {
    return (
        <div >
            {/* <section class="container"> */}
            <div class="form">
            <h1 class="form-header fell">Contact Us [info@somportextravel.com]</h1>
            {/* <h2 class="fell"><a style={{color: 'white'}}href="mailto:info@somportextravel.com">info@somportextravel.com</a></h2> */}
                <HubspotForm
                portalId='144190766'
                formId='a0b89973-6929-4682-b04d-f84dbebdcf53'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
                />
            </div>
            {/* </section> */}
        </div>
    )
}

export default ContactForm


