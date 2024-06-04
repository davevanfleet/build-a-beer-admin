'use server'

import { Resend } from "resend";

export const handleSubmitContactFormServerAction = async (formData: FormData) => {
    'use server';

    const name = formData.get("name")
    const email = formData.get("email")
    const comment = formData.get("comment")

    const resend = new Resend(process.env.RESEND_API_KEY)
    resend.emails.send({
        from: 'support@buildabeer.app',
        to: 'davidvanfleet@icloud.com',
        subject: 'Contact Form - Build-a-Beer',
        html: `<p>Contact Form Submission</p><p>From ${name} - ${email}</p><p>${comment}</p>`
    })

    return
}