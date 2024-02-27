import Link from "next/link"
import Logo from './download.jpeg'
import Image from "next/image"

export default function Navbar(){
    return(
        <nav>
            <Image 
             src={Logo}
             alt='Beault Logo'
             width={70}
             height={100}
            />
            <h1>My Blog App</h1>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/categories'>Categories</Link>
            <Link href='/contacts'>Contacts</Link>
        </nav>
    )
}