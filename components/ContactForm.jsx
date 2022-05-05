import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="/send-data-here" method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label for="textarea" >Send me a Message</label>
            <textarea cols="30" rows="5" type="textarea" id="message" name="message" />
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default ContactForm