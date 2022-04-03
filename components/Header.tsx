import Image from 'next/image'
import Link from 'next/link';

function Header() {
    return ( 
        <header className='px-4'>
            {/* company Logo */}
            <div className="flex items-center space-x-2 ">
                <div className="bg-slate-200 flex items-center p-3 pt-10 rounded-b-3xl">
                    <Image src="/images/logo.png" alt="logo" width={60} height={60}/>
                    <h1 className='font-semibold text-3xl'>GPV</h1>
                    <h1 className='font-bold text-3xl text-purple-700'>Group</h1>
                </div>
                {/* navigation */}
                <div className='pl-5 pt-10'>
                    <ul className='flex items-center space-x-5'>
                        <li className='navBtn'>
                            <Link href={"/"}>
                                <div className=''>
                                    <span className='navBtn-text'>Home</span>
                                </div>
                            </Link>
                        </li>
                        <li className='navBtn'>
                            <Link href={"/"}>
                                <div className=''>
                                    <span className='navBtn-text'>Services</span>
                                </div>
                            </Link>
                        </li>
                        <li className='navBtn'>
                            <Link href={"/"}>
                                <div className=''>
                                    <span className='navBtn-text'>About us</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
     );
}


export default Header;