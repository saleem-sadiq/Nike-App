import Image from "next/image"
import { navLinks } from "@/constants"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <Image
                    src={'/assets/images/header-logo.svg'}
                    alt="logo"
                    width={130}
                    height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item)=>(
                <li key={item.label}>
                    <a                     
                    href={item.href}
                    className="font-monserrat leading-normal text-lg text-slate-grey"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
            </ul>
            <div className="lg:hidden">
                <Image 
                    src={'/assets/icons/hamburger.svg'}
                    alt="Hamburger"
                    width={24}
                    height={24}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav