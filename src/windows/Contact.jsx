import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
      <>
          <div id="window-header">
              <WindowControls target="contact" />
              <h2>Contact Me</h2>
          </div>
          <div className="p-5 space-y-5">
              <img src="/images/karthik.png" alt="Karthik Vinod" className='w-30 border  rounded-full ' />
              <h3>Let's Connect</h3>
              <p>Got an idea? A bug to squash? Or just want to say hello? Feel free to reach out!</p>
              <p>karthivinu1122@gmail.com</p>
              <ul>
                  {socials.map(({id,bg,link,icon,text}) => (
                      <li key={id} style={{backgroundColor: bg}}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                              <img src={icon} alt={text}  className='w-6 h-6 text-gray-50' />
                              <p>{text}</p>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </>
  )
}

const ContactWindow = WindowWrapper(Contact,'contact')

export default ContactWindow