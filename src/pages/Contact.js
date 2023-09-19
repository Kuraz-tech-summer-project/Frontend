import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Contact = () => {
  return (
   <>
    <Meta title={"Contact-us"} />
    <BreadCrumb title="Contact Us" />
    <div className="content-wrapper py-5 home-wrapper-2">
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12 mt-5'>
        <div className="contact-inner-wrapper d-flex justify-content-between">
          <div>
            <h3 className='contact-title mb-4'>Contact</h3>
            <form action="" className="d-flex flex-column gap-20">
  <div>
    <input type="text" className="form-control" placeholder="Name" />
  </div>
  <div>
    <input type="text" className="form-control" placeholder="Email" />
  </div>
  <div>
    <input type="tel" className="form-control" placeholder="Mobile Phone" />
  </div>
  <div>
    <textarea className="form-control" id="message" rows="5" cols="30" placeholder="Enter your message"></textarea>
  </div>
  <div className="mt-auto">
    <button className="button">Submit</button>
  </div>
</form>
          </div>
          <div>
            <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
          </div>
          
        </div>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Contact