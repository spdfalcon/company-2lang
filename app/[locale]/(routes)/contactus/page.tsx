import React from 'react'
import Breadcrumb from '@/app/_components/modules/Breadcrumb/Breadcrumb'
import ContactDetail from '@/app/_components/templates/contactus/ContactDetail/ContactDetail'
import ContactForm from '@/app/_components/templates/contactus/ContactForm/ContactForm'
import SocialMedias from '@/app/_components/templates/home/SocialMedias'

export default function page() {
    return (
        <>
            <Breadcrumb />
            <ContactForm />
            <ContactDetail />
            <SocialMedias />
        </>
    )
}
