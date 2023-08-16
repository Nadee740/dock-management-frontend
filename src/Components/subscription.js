const SubscriptionAdminDashboard = () => {
    return (  
        <body>
    <div class="flex items-center justify-center flex-col min-h-screen">
        <div class="bg-[#F4F5FA] p-10 rounded-xl">

            <div class="flex flex-col justify-center items-center text-center">
                <div class="max-w-sm font-bold font-sans">
                    Get the most out of with the right subscription
                </div>
                <div class="font-light max-w-lg mt-5 text-sm">
                    We provide 3 different subscription to Users
                </div>
            </div>
            <div
                class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div class="bg-[#FFFBEC] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" class="w-8"/> */}
                        <div class="mt-3 font-semibold text-lg">1st subscription</div>
                        <div class="text-sm font-light">Up to 1 hour</div>
                        <div class="my-4">
                            <span class="font-bold text-base">299,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>

                <div class="bg-[#F9ECFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        {/* <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" class="w-12"/> */}
                        <div class="mt-3 font-semibold text-lg">2nd subscription</div>
                        <div class="text-sm font-light w-60 md:w-auto">3-4 hours</div>
                        <div class="my-4">
                            <span class="font-bold text-base">953,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>


                <div class="bg-[#ECEEFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">

                        <div class="mt-3 font-semibold text-lg">3 rd subscription</div>
                        <div class="text-sm font-light w-60 md:w-auto">8-9 hours</div>
                        <div class="my-4">
                            <span class="font-bold text-base">1028,-</span>
                            <span class="font-light text-sm">/month</span>
                        </div>

                        <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    );
}
 
export default SubscriptionAdminDashboard;