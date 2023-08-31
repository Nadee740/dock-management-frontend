import SupplierImage from "../../images/supplier.png"
import QRCodeImage from "../../images/qr-code.png"
import dockImage from "../../images/trucks.png"
import PriceImage from "../../images/price.png"
const Features = () => {
    return (  
        
        <section class="max-w-8xl mx-auto container bg-white dark:bg-gray-900 pt-1">
        <div>
            {/* <div role="contentinfo" class="flex items-center flex-col px-4">
                <hh1 tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 dark:text-white lg:w-5/12 md:w-9/12 pt-4">Create Beautiful Landing Pages & Web Apps in a Jiffy</hh1>
            </div> */}
            <div tabindex="0" aria-label="group of cards" class="focus:outline-none  flex flex-wrap justify-center gap-10 px-4">
                <div tabindex="0" aria-label="card 1" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div class="w-20 h-20 relative mr-5">
                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <img src={SupplierImage} alt="drawer"/>
                        </div>
                    </div>
                    <div class="w-10/12">
                        <h2 tabindex="0" class="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-white">Manage Suppliers</h2>
                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2">Easily add and remove suppliers. Approve signed up supplier in a instant</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 2" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div class="w-20 h-20 relative mr-5">
                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <img src={QRCodeImage} alt="check"/>
                        </div>
                    </div>
                    <div class="w-10/12">
                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white">Easy QR Code</h2>
                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2">Use QR Code to scan and approve entry for Vehicles.</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 3" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div class="w-20 h-20 relative mr-5">
                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <img src={dockImage} alt="html tag"/>
                        </div>
                    </div>
                    <div class="w-10/12">
                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white">Dock Status</h2>
                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2">Know the dock status instantly on dashboard.</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 4" class="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div class="w-20 h-20 relative mr-5">
                        <div class="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div class="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <img src={PriceImage} alt="monitor"/>
                        </div>
                    </div>
                    <div class="w-10/12">
                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white">Flexible Pricing</h2>
                        <p tabindex="0" class="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2">Choose what suits . Don't pay more for what you don't need</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}
 
export default Features;