"use client"
import { motion } from 'framer-motion';

const website_apps_data = [
    {imgurl: "./images/finance.png", title: "Website Builder"},
    {imgurl: "./images/finance.png", title: "eCommerce"},
    {imgurl: "./images/finance.png", title: "Blogs"},
    {imgurl: "./images/finance.png", title: "Forum"},
    {imgurl: "./images/finance.png", title: "eLearning"},
    {imgurl: "./images/finance.png", title: "Live chat"}
]

const sales_apps_data = [
    {imgurl: "./images/finance.png", title: "CRM"},
    {imgurl: "./images/finance.png", title: "Sales"},
    {imgurl: "./images/finance.png", title: "Point of Sale"},
    {imgurl: "./images/finance.png", title: "Subscriptions"},
    {imgurl: "./images/finance.png", title: "Rental"},
]

const finance_data = [
    {imgurl: "./images/finance.png", title: "Acounting"},
    {imgurl: "./images/finance.png", title: "Invoicing"},
    {imgurl: "./images/finance.png", title: "Expenses"},
    {imgurl: "./images/finance.png", title: "Documents"},
    {imgurl: "./images/finance.png", title: "Sign"}
]

const inventory_data = [
    {imgurl: "./images/finance.png", title: "Inventory"},
    {imgurl: "./images/finance.png", title: "Manufacturing (MRP)"},
    {imgurl: "./images/finance.png", title: "PLM"},
    {imgurl: "./images/finance.png", title: "Purchase"},
    {imgurl: "./images/finance.png", title: "Maintenance"},
    {imgurl: "./images/finance.png", title: "Quality"},
]

const human_resource_data = [
    {imgurl: "./images/finance.png", title: "Employees"},
    {imgurl: "./images/finance.png", title: "Recruitment"},
    {imgurl: "./images/finance.png", title: "Time Off"},
    {imgurl: "./images/finance.png", title: "Appraisals"},
    {imgurl: "./images/finance.png", title: "Referrals"},
    {imgurl: "./images/finance.png", title: "Fleet"}
]

const marketing_data = [
    {imgurl: "./images/finance.png", title: "Marketing Automation"},
    {imgurl: "./images/finance.png", title: "Email Marketing"},
    {imgurl: "./images/finance.png", title: "SMS Marketing"},
    {imgurl: "./images/finance.png", title: "Social Marketing"},
    {imgurl: "./images/finance.png", title: "Events"},
    {imgurl: "./images/finance.png", title: "Surveys"},
]

const services_data = [
    {imgurl: "./images/finance.png", title: "Project"},
    {imgurl: "./images/finance.png", title: "Timesheet"},
    {imgurl: "./images/finance.png", title: "Field Servece"},
    {imgurl: "./images/finance.png", title: "Helpdesk"},
    {imgurl: "./images/finance.png", title: "Planning"},
    {imgurl: "./images/finance.png", title: "Appointments"}
]

const productivity_data = [
    {imgurl: "./images/finance.png", title: "Discuss"},
    {imgurl: "./images/finance.png", title: "Approvals"},
    {imgurl: "./images/finance.png", title: "VoiIP"},
    {imgurl: "./images/finance.png", title: "Knowledge"},
]

const customization_data = [
    {imgurl: "./images/finance.png", title: "Odoo Studio"},
]

const OdooSecondPage = () => {
  return (
    <div className="w-full lg:px-20 px-4 pb-10 md:pb-10 bg-[#EFF2F5]">
        <div className='flex flex-col md:flex-row md:my-10 py-5'>
            <div className='flex-auto w-full md:w-1/4'>
                <img 
                    src="./images/odoo.png"
                    alt=""
                    className="h-[200px] object-cover p-2 m-auto"
                />
            </div>
            <div className='flex-auto w-full md:w-3/4 md:my-10 text-justify'>
                <p>Odoo is a new coomer ERP with a fresh and user fiendly look. Odoo is suitable to be implemented from MSME businesses to multinational businesses.</p>
            </div>
        </div>
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.6 }}
        >
            <div id='website-apps'>
                <h1 className='my-4 text-md mx-2 md:text-lg lg:text-xl'>Website Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {website_apps_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='sales-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Sales Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {sales_apps_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='finance-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Finance Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {finance_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='inventory-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Inventory and Manufacturing Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {inventory_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='human-resource-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Human Resource Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {human_resource_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='marketing-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Marketing Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {marketing_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='services-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Services Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {services_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='productivity-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Productivity Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {productivity_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div id='customization-apps'>
                <h1 className='mb-4 mt-10 mx-2 text-md md:text-lg lg:text-xl'>Customization Apps</h1>
                <div className='w-full flex md:flex-wrap md:justify-start overflow-x-scroll scroll-smooth'>
                    {customization_data.map((item, index) => (
                        <div className='flex bg-white shadow-lg rounded-md md:w-1/4 lg:w-1/5 p-2 m-2' key={index}>
                            <div className='w-[60px]'>
                                <img 
                                    src={item.imgurl}
                                    alt=""
                                    className="h-[50px] w-[50px] object-cover p-2 mx-2"
                                />
                            </div>
                            <p className='m-2 py-1 px-2 rounded-sm text-start'>{item.title}</p>
                        </div> 
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default OdooSecondPage