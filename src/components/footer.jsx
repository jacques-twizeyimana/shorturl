import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkSharpIcon from '@material-ui/icons/PhoneInTalkSharp';
import IconButton from '@material-ui/core/IconButton'

import React from 'react';
export default function Footer() {
    return <div class="appFooter mt-2">
<footer class="page-footer font-small special-color-dark pt-5">
  <div class="container">
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
          <IconButton style={{color:'white'}}>
            <EmailIcon fontSize="large" style={{borderRadius:'20px'}}/>
          </IconButton>
      </li>
      <li class="list-inline-item">
        <IconButton color="primary">
          <FacebookIcon fontSize="large"/>
        </IconButton>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <TwitterIcon fontSize="large"/>
        </a>
      </li>
      <li class="list-inline-item">
        <IconButton color='secondary'>
          <InstagramIcon fontSize="large"/>
        </IconButton>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <LinkedInIcon fontSize="large"/>
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3">
      <h6>© {new Date().getFullYear()} Copyright:
    <a href="https://shorturl.netlify.com/" className="color-white"> ShortURL.com</a>
    </h6> 
  </div>

</footer>
    </div>
}
