import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../assets/Constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

function Footer() {
    return (
        <footer className={'max-container'}>
            <div className={'flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'}>
                <div className={'flex flex-col items-start'}>
                    <a href="/">
                        <img src={footerLogo} width={150} height={46} alt=""/>
                    </a>
                    <p className={'mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'}>Get your shoes ready for the new term ay your nearest Nike store. Find Your Perfect Size In Store. Get Rewards.</p>
                    <div className={'flex items-center gap-5 mt-8'}>
                        {socialMedia.map((item, index) => (
                            <div className={'flex justify-center items-center w-12 h-12 bg-white rounded-full'} key={index}>
                                <img src={item.src} alt={item.alt}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'}>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title}>
                            <h4 className={'text-white-400 font-montserrat text-2xl leading-normal font-medium mb-6'}>{footerLink?.title}</h4>
                            <ul>
                                {footerLink.links.map((link) => (
                                    <li key={link.name} className={'mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer'}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'}>
                <div className={'flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'}>
                    <img src={copyrightSign} alt="copy-right" width={20} height={20} className={'m-0 rounded-full'}/>
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className={'font-montserrat cursor-pointer hover:text-coral-red'}>Terms & Conditions</p>
            </div>
        </footer>
    );
}

export default Footer;
