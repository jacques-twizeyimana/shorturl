import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import React from 'react';
export default function Footer() {
    return <div class="appFooter mt-2">
<footer class="page-footer font-small special-color-dark pt-5">
  <div class="container">
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
          <a href="mailto:sandbergjacques500@gmail.com" style={{color:'white'}}>
            <EmailIcon fontSize="large" style={{borderRadius:'20px'}}/>
          </a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.facebook.com/jacquessmith.sandber.5" color="primary">
          <FacebookIcon fontSize="large"/>
        </a>
      </li>
      <li class="list-inline-item">
        <a href="https://twitter.com/JacquesSandberg" class="btn-floating btn-tw mx-1">
          <TwitterIcon fontSize="large"/>
        </a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.instagram.com/sandberg_smith/" className='text-secondary'>
          <InstagramIcon fontSize="large"/>
        </a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.linkedin.com/in/jacques-twizeyimana-063a29181/" class="btn-floating btn-li mx-1">
          <LinkedInIcon fontSize="large"/>
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3">
      <h6>© {new Date().getFullYear()} Copyright:
    <a href="https://niceurl.tk" className="color-white"> Niceurl.tk</a>
    </h6> 
  </div>

</footer>
    </div>
}
