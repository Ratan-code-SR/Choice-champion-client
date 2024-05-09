import logo from '../../assets/logo.png'
import facebook from '../../assets/social-logo/facebook.png'
import email from '../../assets/social-logo/email.jpeg'
import instagram from '../../assets/social-logo/instagram.jpeg'
import twitter from '../../assets/social-logo/twitter.png'
import youtube from '../../assets/social-logo/youtube.png'
import phone from '../../assets/social-logo/phone.png'

const Footer = () => {
    return (
        <div className='bg-[#85b581] text-base-content p-10'>
            <footer className="footer  ">
                <aside>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <p>ChoiceChampion Ltd.</p>
                    <div className='flex justify-center items-center gap-3'>
                    <h6 className="">Follow Us-</h6>
                        <a href=""><img className='w-5 h-5 rounded-full' src={facebook} alt="" /></a>
                        <a href=""><img className='w-5 h-5 rounded-full' src={youtube} alt="" /></a>
                        <a href=""><img className='w-5 h-5 rounded-full' src={instagram} alt="" /></a>
                        <a href=""><img className='w-5 h-5 rounded-full' src={twitter} alt="" /></a>
                    </div>
                </aside>

                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Helps&Support</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                <h6 className="footer-title">Communication</h6>
                    <p className='flex items-center gap-2 '><img className='w-5 h-5 rounded-full' src={email} alt="" />choicechampion@gmail.com</p>
                    <p className='flex items-center gap-2'>
                        <img className='w-5 h-5 rounded-full' src={phone} alt="" />
                        0145-5767-3575</p>
                </nav>
            </footer>
            <h6 className='text-center my-10 text-sm'>&copy;2024-All right reserved </h6>
        </div>

    );
};

export default Footer;