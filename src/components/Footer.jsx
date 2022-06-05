import Logo from './Logo';
import socialIcon from '../socialIcons';
import InviteButton from './InviteButton';

const Footer = () => {
  return (
    <div className='bg-dark-blue'>
      <footer className='text-center py-10 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:container'>
        <div className='flex flex-col items-center space-y-6 md:space-y-12'>
          <Logo />
          <div className='flex items-center gap-4'>
            {
              socialIcon.map((icon) => {
                return <img src={icon.img} alt="" className='w-5 h-5 cursor-pointer' />
              })
            }
          </div>
        </div>
        <div className='text-white text-sm space-y-6 md:space-y-0 md:grid md:grid-cols-2'>
          <ul className='space-y-6 md:space-y-4'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className='space-y-6 md:space-y-4'>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='space-y-6 md:space-y-6 md:text-right'>
          <InviteButton />
          <h4 className='text-grayish-blue'>© Easybank. All Rights Reserved</h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer