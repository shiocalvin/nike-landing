import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../assets/Constants/index.js";
import {hamburger} from "../assets/icons/index.js";

function Nav() {
    return (
        // always use semantic tags
        <header className={"padding-x py-8 absolute z-10 w-full"}>
            <nav className={"flex justify-between items-center max-container"}>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29}/>
                </a>
                <ul className={"flex-1 flex justify-center items-center gap-16 max-lg:hidden"}>
                    {navLinks.map((item) => (
                        <li key={item?.label}>
                            <a href={item?.href}
                               className={"font-montserrat leading-normal text-lg text-slate-gray"}
                            >
                                {item?.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={"lg:hidden block"}>
                    <img src={hamburger} height={25} width={25} alt="hamburger"/>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
