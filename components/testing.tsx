"use client"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
initTE({ Ripple });

const Testing = () => {
    const scrollLeft = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
            if (contentElement) {
            contentElement.scrollLeft -= 400;
            console.log("success", contentElement)
            }
        };
        
    const scrollRight = (): void => {
        const contentElement: HTMLElement | null = document.getElementById("content");
        if (contentElement) {
        contentElement.scrollLeft += 400;
        }
    };
      


    return (
        <div className="App bg-gray-100 w-[100vw]">
            <div className="relative">
                <div className="text-center py-4  text-xl font-bold">Carousel</div>
                <div className="absolute left-0 top-5 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronLeft />
                    </button>
                </div>
                <div className="absolute right-0 top-5 ">
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <FiChevronRight />
                    </button>
                </div>
                <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
                            <div className="top">
                            <img
                                className="w-[200px] h-[200px] object-cover  p-2"
                                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                                alt="img"
                            />
                            </div>
                            <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                            <div className="title font-semibold text-xs my-1">
                                Apple iPhone 13 (128GB) - Midnight
                            </div>
                            <div className="category text-xs font-light my-1">
                                5.4 cm (6.1-inch) display1
                            </div>

                            <div className="pricing flex items-center">
                                {" "}
                                <div className="price ">$1000</div>
                                <div className="ml-2 text-xs ">
                                $<del>1320</del>
                                </div>
                            </div>
                            <div className="flex items-center my-2">
                                <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                                Buy Now
                                </button>
                                <button className="border px-3 py-1 text-xs rounded-lg ">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


//         <div>
//             <button
//   type="button"
//   className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//   data-te-toggle="tooltip"
//   data-te-placement="top"
//   data-te-ripple-init
//   data-te-ripple-color="light"
//   title="Tooltip on top">
//   Tooltip on top
// </button>
//         </div>
    )
}

export default Testing