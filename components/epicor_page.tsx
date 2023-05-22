
import epicorBackground from '../public/images/image1.png';
import Link from 'next/link'

const EpicorPage = () => {
  return (
    <div className='w-full pt-24 p-10 lg:py-24 lg:px-56'>
        <div className="flex flex-col md:flex-row justify-between">
            <div className='m-2 flex-auto md:w-2/3'>
                <img 
                    src="./images/epicor_page.webp"
                    alt=""
                    width={100}
                    height={100}
                    className="h-full w-full object-cover p-2"
                />
            </div>
            <div className='bg-[#204E62] text-white p-5 m-2 flex-auto rounded-md md:w-1/3'>
                <h1 className='text-lg md:text-3xl lg:text-5xl'>Epicor Kinetik</h1>
                <p className='text-xs md:text-sm lg:text-md pt-4 text-left'>Epicor is an ERP system for automating & integrating workflows with strong points in Manufacturing. Epicor helps companies to calculate daily production costs in every workers. So that effectiveness can be done.</p>
                <div className='pt-4'>
                    <Link href="#kontak" className="bg-yellow-300 hover:bg-yellow-200 text-black font-extrabold py-2 rounded lg:my-5 my-2 w-2/3 px-4 shadow-lg">
                        Start Your Journey
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EpicorPage