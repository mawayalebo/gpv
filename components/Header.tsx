import Image from 'next/image'

function Header() {
    return ( 
        <div>
            <div className="flex p-5 items-center">
                <div className="relative">
                    <Image src="/images/logo.png" alt="logo" width={80} height={80}/>
                    <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl'>GPV</h1>
                    <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl'>Group</h1>
                </div>

            </div>
        </div>
     );
}


export default Header;