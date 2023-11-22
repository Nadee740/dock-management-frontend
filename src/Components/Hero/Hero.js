import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heroimage from "../../images/warehouselandingpageimg/landingpageimg.jpg"
import Heroimage_New from "../../images/dock_new_123.jpg"
import Dockimage from "../../images/dock2/15923.jpg"
import Dockimage3 from "../../images/dock3/17113.jpg"
import {faUserGroup } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="" >
        <div class="h-1/2  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-2">
  <div class="col-span-3 md:col-span-3 lg:col-span-3 bg-white-300 p-8">
  <div className="lg:mt-5 md:mt-5 ">
  <div className="flex pl-2 ">
    <FontAwesomeIcon className="pt-1 text-slate-600" icon={faUserGroup}></FontAwesomeIcon>
    <p className="pl-2 text-slate-600">100+ subscribers</p>
  </div>
    <h1 class="mt-4 text-6xl font-semibold tracking-wide">Dock <br></br>Management <br></br>
    Made Simple</h1>
    <p className="tracking-wide mt-4 text-xl text-slate-600">Effortlessly streamline dock operation with our cutting edge Management software unleash productivity at your warehouse</p>
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex space-y-0">
                  <div class="relative w-full mt-4">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
            
                      <input class="block p-3 pl-10 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 sm:w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-violet-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</section>
    </div>
  </div>
  
  <div class="col-span-7 md:col-span-7 lg:col-span-7  pl-8 pr-8 ">
  <div className="w-full h-3/4 flex items-center justify-center">
  <img src={Heroimage_New} alt="Image" class="h-full w-full sm:h-5/6"/>
  </div>
  </div>
</div>
    <section class="container mx-auto px-6">
      {/* <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2> */}
            <div class="flex items-center flex-wrap">
        <div class="w-full md:w-2/5 lg:w-2/5">
          <img  src={Dockimage}  alt="Reporting" />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Efficient</h4>
          <p className="tracking-wide mt-4 text-xl text-slate-600">Effortlessly streamline dock operation with our cutting edge Management software unleash productivity at your warehouse</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Automised</h4>
          <p className="tracking-wide mt-4 text-xl text-slate-600">Effortlessly streamline dock operation with our cutting edge Management software unleash productivity at your warehouse</p>
        </div>
        <div class="w-full md:w-1/2">
          <img  src={Dockimage3}  alt="Syncing" />
        </div>
      </div>
    </section>


    </div>
  );
};
export default Hero;