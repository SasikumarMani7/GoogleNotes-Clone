import React from 'react'


const Footer = () => {
     const date = new Date();
     const year = date.getFullYear();

  return (
    <div class="footer">
        <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;
