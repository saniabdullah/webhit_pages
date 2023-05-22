import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#204E62] text-white text-center dark:bg-neutral-600 dark:text-neutral-200 lg:text-left w-full">
            <div className="mx-16 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 lg:grid-cols-2">
                    
                    <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
                        <div className="mx-auto">
                            <h6
                            className="mb-4 flex justify-center md:justify-start font-bold uppercase">
                                Solutions
                            </h6>
                            <p className="mb-2">
                                <Link href="/sap" className="dark:text-neutral-200">SAP</Link>
                            </p>
                            <p className="mb-2">
                                <Link href="/odoo" className="dark:text-neutral-200">Odoo</Link>
                            </p>
                            <p className="mb-2">
                            <Link href="/epicor" className="dark:text-neutral-200"
                                >Epicor</Link>
                            </p>
                            <p className="mb-2">
                            <Link href="/microstrategy" className="dark:text-neutral-200"
                                >Microstrategy</Link>
                            </p>
                            <p className="mb-2">
                            <Link href="/kissflow" className="dark:text-neutral-200"
                                >Kissflow</Link>
                            </p>
                            <p className="mb-2">
                            <a href="#our_products" className="dark:text-neutral-200"
                                >Weighbridge</a>
                            </p>
                            <p className="mb-2">
                            <a href="#our_products" className="dark:text-neutral-200"
                                >Coal Monitoring System</a>
                            </p>
                            <p className="mb-2">
                            <a href="#our_products" className="dark:text-neutral-200"
                                >E-BKM</a>
                            </p>
                            <p className="mb-2">
                            <a href="#our_products" className="dark:text-neutral-200"
                                >HG Attendance</a>
                            </p>
                            <p className="mb-2">
                            <a href="#our_products" className="dark:text-neutral-200"
                                >HARP</a>
                            </p>
                            <p>
                            <a href="#our_products" className="dark:text-neutral-200"
                                >EIS</a>
                            </p>
                        </div>
                        <div className="mx-auto">
                            <h6
                            className="mb-4 flex justify-center md:justify-start font-bold uppercase">
                                Industry
                            </h6>
                            <p className="mb-2">
                            <a href="#!" className="dark:text-neutral-200"
                                >Mining</a>
                            </p>
                            <p className="mb-2">
                            <a href="#!" className="dark:text-neutral-200"
                                >Manufacturing</a>
                            </p>
                            <p className="mb-2">
                            <a href="#!" className="dark:text-neutral-200"
                                >Palm Oil</a>
                            </p>
                            <p className="mb-2">
                            <a href="#!" className="dark:text-neutral-200"
                                >Shipping</a>
                            </p>
                        </div>
                        <div className="mx-auto">
                            <h6
                            className="mb-4 flex justify-center md:justify-start font-bold uppercase">
                                Pages
                            </h6>
                            <p className="mb-2">
                            <a href="#home" className="dark:text-neutral-200"
                                >Home</a>
                            </p>
                            <p className="mb-2">
                            <a href="#partnership" className="dark:text-neutral-200"
                                >About Us</a>
                            </p>
                            <p className="mb-2">
                            <a href="#product" className="dark:text-neutral-200"
                                >Product</a>
                            </p>
                            <p className="mb-2">
                            <a href="#kontak" className="dark:text-neutral-200"
                                >Career</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                            <div>
                                <img src="./images/logo_besar.png" alt="" className="py-2"/>
                            </div>
                            <div>
                                <div>
                                    <h6 className="mb-2 flex justify-center font-extrabold uppercase md:justify-start">
                                        HIT Digital Indonesia 
                                    </h6>
                                    <h6 className="mb-2 flex justify-center font-extrabold uppercase md:justify-start">
                                        Head Office 
                                    </h6>
                                    <p className="mb-4 flex items-center justify-center md:justify-start">
                                        Office 8 Building, 10th Floor 8B Senopati
                                        South of Jakarta, 1290 
                                        DKI Jakarta, Indonesia
                                    </p>
                                </div>
                                <div>
                                    <h6 className="mb-2 flex justify-center font-extrabold uppercase md:justify-start">
                                        HIT Digital Indonesia 
                                    </h6>
                                    <h6 className="mb-2 flex justify-center font-extrabold uppercase md:justify-start">
                                        Banjarbaru Office
                                    </h6>
                                    <p className="mb-4 flex items-center justify-center md:justify-start">
                                        88 Ahmad Yani 27th Kilometer Banjarbaru, Landasan Ulin, South of Kalimantan, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex px-4 py-2 justify-between bg-black text-white rounded">
                            <p>www.hitdigital.id</p>
                            <p>+(62)(21) 2934 3888</p>
                            <p>Marketing.HIT@hasnurgroup.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-20">
                <div className=" text-center border-t-2 py-2">2023 PT HIT. All rights reserved</div>
            </div>
        </footer>
    );
}