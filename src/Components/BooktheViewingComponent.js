import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BooktheViewingComponent = () => {
    return (
        <div class="calendar">
  <div class="days">
    <div class="day mon">
      <div class="date">
        <p class="date-num">9</p>
        <br/>
        <p class="date-day">Mon</p>
      </div>

    </div>
    <div class="day tues">
      <div class="date">
        <p class="date-num">12</p>
        <p class="date-day">Tues</p>
      </div>
      <div class="events">
        <div class="event start-9 end-10 corp-fi">
        <div class="flex">
            <div class="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-2 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
                      <div c>
                        <p class="flex mb-0 font-sans font-semibold leading-normal text-sm">
                         09:00-10:00
                        </p>
                        <h5 class="flex mb-0 text-sm">
                          Dock&nbsp;number
                          {/* <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            Book
                          </span> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="day wed">
      <div class="date">
        <p class="date-num">11</p>
        <p class="date-day">Wed</p>
      </div>
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
        <div class="flex">
            <div class="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-2 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
                      <div c>
                        <p class="flex mb-0 font-sans font-semibold leading-normal text-sm">
                         09:00-10:00
                        </p>
                        <h5 class="flex mb-0 text-sm">
                          Dock&nbsp;number
                          {/* <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            Book
                          </span> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
    );
}
 
export default BooktheViewingComponent;