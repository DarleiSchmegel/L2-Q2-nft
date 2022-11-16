import Image from 'next/image';
import Link from 'next/link';

export default function SectionIcons() {
  return (
    <>
      <section className="mx-auto flex max-w-screen-xl px-4 py-9  sm:px-6 lg:px-8 min-h-[400px] border-t border-t-gray-600">
        <ul className="flex justify-around items-center w-full md:flex-row flex-col gap-11">
          <li className="flex flex-col  justify-center items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32C11.7262 32 7.70831 30.3357 4.68625 27.3137C1.66431 24.2917 0 20.2738 0 16C0 11.7262 1.66431 7.70831 4.68625 4.68625C7.70831 1.66431 11.7262 0 16 0C20.2738 0 24.2917 1.66431 27.3137 4.68625C30.3357 7.70831 32 11.7262 32 16C32 20.2738 30.3357 24.2917 27.3137 27.3137C24.2917 30.3357 20.2738 32 16 32ZM16 2.5C8.55606 2.5 2.5 8.55606 2.5 16C2.5 23.4439 8.55606 29.5 16 29.5C23.4439 29.5 29.5 23.4439 29.5 16C29.5 8.55606 23.4439 2.5 16 2.5ZM15.9375 17.1875C12.6291 17.1875 9.9375 14.4959 9.9375 11.1875C9.9375 7.87906 12.6291 5.1875 15.9375 5.1875C19.2459 5.1875 21.9375 7.87906 21.9375 11.1875C21.9375 14.4959 19.2459 17.1875 15.9375 17.1875ZM15.9375 7.6875C14.0076 7.6875 12.4375 9.25762 12.4375 11.1875C12.4375 13.1174 14.0076 14.6875 15.9375 14.6875C17.8674 14.6875 19.4375 13.1174 19.4375 11.1875C19.4375 9.25762 17.8674 7.6875 15.9375 7.6875ZM23.857 24.467C24.3911 24.0296 24.4694 23.242 24.032 22.7079C22.2644 20.5501 19.6528 19.3125 16.8666 19.3125H15.3834C12.5972 19.3125 9.98556 20.5501 8.21806 22.7079C7.78062 23.242 7.85894 24.0296 8.39306 24.4671C8.92712 24.9046 9.71469 24.8261 10.1522 24.2921C11.4428 22.7163 13.3496 21.8125 15.3834 21.8125H16.8666C18.9004 21.8125 20.8072 22.7162 22.0979 24.2921C22.3451 24.5938 22.7038 24.75 23.0656 24.75C23.3443 24.75 23.6247 24.6573 23.857 24.467Z"
                fill="white"
              />
            </svg>
            <h3 className="font-bold text-6xl">300k</h3>
            <p className="text-gray-500">User Active</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 25.75C15 25.0596 14.4404 24.5 13.75 24.5H6.25C5.55963 24.5 5 25.0596 5 25.75C5 26.4404 5.55963 27 6.25 27H13.75C14.4404 27 15 26.4404 15 25.75Z"
                fill="white"
              />
              <path
                d="M25.75 7.5C26.4404 7.5 27 6.94036 27 6.25C27 5.55964 26.4404 5 25.75 5C25.0596 5 24.5 5.55964 24.5 6.25C24.5 6.94036 25.0596 7.5 25.75 7.5Z"
                fill="white"
              />
              <path
                d="M3.75 17.5H8.75C10.8177 17.5 12.5 15.8177 12.5 13.75V3.75C12.5 1.68225 10.8177 0 8.75 0H3.75C1.68225 0 0 1.68225 0 3.75V13.75C0 15.8177 1.68225 17.5 3.75 17.5ZM2.5 3.75C2.5 3.06075 3.06075 2.5 3.75 2.5H8.75C9.43925 2.5 10 3.06075 10 3.75V13.75C10 14.4392 9.43925 15 8.75 15H3.75C3.06075 15 2.5 14.4392 2.5 13.75V3.75Z"
                fill="white"
              />
              <path
                d="M28.25 0H18.25C16.1823 0 14.5 1.68225 14.5 3.75V13.75C14.5 15.8177 16.1823 17.5 18.25 17.5H28.25C30.3177 17.5 32 15.8177 32 13.75V3.75C32 1.68225 30.3177 0 28.25 0ZM29.5 13.75C29.5 14.4392 28.9392 15 28.25 15H18.25C17.5608 15 17 14.4392 17 13.75V12.0226L20.191 10.4271C20.541 10.252 20.9591 10.252 21.3091 10.4271L25.191 12.3681C25.8098 12.6774 26.56 12.4251 26.8681 11.8091C27.1768 11.1916 26.9266 10.4407 26.3091 10.132L22.4271 8.191C21.3769 7.666 20.1232 7.666 19.073 8.191L17 9.22744V3.75C17 3.06075 17.5608 2.5 18.25 2.5H28.25C28.9392 2.5 29.5 3.06075 29.5 3.75V13.75Z"
                fill="white"
              />
              <path
                d="M3.75 32H16.25C18.3177 32 20 30.3177 20 28.25V23.25C20 21.1823 18.3177 19.5 16.25 19.5H3.75C1.68225 19.5 0 21.1823 0 23.25V28.25C0 30.3177 1.68225 32 3.75 32ZM2.5 23.25C2.5 22.5608 3.06075 22 3.75 22H16.25C16.9392 22 17.5 22.5608 17.5 23.25V28.25C17.5 28.9392 16.9392 29.5 16.25 29.5H3.75C3.06075 29.5 2.5 28.9392 2.5 28.25V23.25Z"
                fill="white"
              />
              <path
                d="M28.25 19.5H25.75C23.6823 19.5 22 21.1823 22 23.25V28.25C22 30.3177 23.6823 32 25.75 32H28.25C30.3177 32 32 30.3177 32 28.25V23.25C32 21.1823 30.3177 19.5 28.25 19.5ZM29.5 28.25C29.5 28.9392 28.9392 29.5 28.25 29.5H25.75C25.0608 29.5 24.5 28.9392 24.5 28.25V23.25C24.5 22.5608 25.0608 22 25.75 22H28.25C28.9392 22 29.5 22.5608 29.5 23.25V28.25Z"
                fill="white"
              />
              <path
                d="M6.25 12.5C6.94037 12.5 7.5 11.9404 7.5 11.25V6.25C7.5 5.55963 6.94037 5 6.25 5C5.55963 5 5 5.55963 5 6.25V11.25C5 11.9404 5.55963 12.5 6.25 12.5Z"
                fill="white"
              />
            </svg>

            <h3 className="font-bold text-6xl">52,5k</h3>
            <p className="text-gray-500">Artworks</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5965 18.3172L20.4167 13.3892C20.8991 12.8962 21.6898 12.8876 22.1828 13.3698C22.6758 13.8521 22.6846 14.6428 22.2023 15.1359C22.2023 15.1359 17.3609 20.0853 17.3551 20.091C16.6124 20.8214 15.6444 21.1856 14.6768 21.1857C13.6878 21.1857 12.6994 20.8051 11.9528 20.0459C11.2373 19.3184 10.848 18.3557 10.8565 17.3354C10.865 16.315 11.2704 15.3591 11.9979 14.6436L16.9335 9.7536C17.4236 9.26816 18.2143 9.27191 18.6997 9.76185C19.1851 10.2518 19.1815 11.0426 18.6915 11.528L13.7525 16.4212C13.4974 16.6721 13.3571 17.003 13.3541 17.3563C13.3335 18.0669 13.9544 18.6983 14.6654 18.6896C15.0156 18.6901 15.3456 18.5603 15.5965 18.3172ZM16.0862 31.9965C16.0581 31.9966 16.1145 31.9965 16.0862 31.9965V31.9965ZM31.8308 13.7757C31.7344 13.0927 31.1021 12.6174 30.4196 12.7136C29.7365 12.8101 29.2611 13.4419 29.3575 14.1249C29.4485 14.7692 29.4929 15.4279 29.4895 16.0827C29.4859 16.7683 29.4303 17.4567 29.3242 18.1289C29.2619 18.5241 29.0399 18.8547 28.6992 19.0596C28.3523 19.2684 27.9298 19.3112 27.5398 19.1771C26.7778 18.9152 25.9795 18.7972 25.1659 18.825C21.7248 18.9447 18.9355 21.734 18.8157 25.1752C18.7875 25.9884 18.9059 26.787 19.1679 27.5491C19.3019 27.9391 19.259 28.3617 19.0503 28.7084C18.8454 29.0491 18.5148 29.2712 18.1197 29.3335C17.4474 29.4396 16.7589 29.4952 16.0733 29.4987C8.83158 29.6575 2.35342 23.2719 2.51397 16.0111C2.36385 8.76124 8.75209 2.37263 16.0022 2.52299C16.7493 2.52299 17.499 2.58519 18.2306 2.70789C18.911 2.82173 19.5548 2.36314 19.6688 1.68274C19.7829 1.00247 19.324 0.358611 18.6437 0.244526C9.0886 -1.4963 -0.129234 6.297 0.0161364 16.0113C-0.173444 24.6206 7.49846 32.1856 16.0863 31.9965C16.8975 31.9923 17.7127 31.9264 18.5091 31.8007C20.8309 31.4808 22.3352 28.9328 21.5301 26.7373C20.6146 24.2188 22.5667 21.3661 25.2528 21.3213C25.7592 21.3035 26.2558 21.377 26.7281 21.5392C27.8179 21.9136 29.0058 21.7901 29.9869 21.1998C30.9569 20.6162 31.6146 19.6388 31.7915 18.5182C31.9172 17.7219 31.983 16.9068 31.9873 16.0957C31.9913 15.3202 31.9387 14.5396 31.8308 13.7757ZM30.4717 8.57503C31.3924 6.96053 31.9874 4.84386 31.9874 3.18265C31.9874 2.05241 31.3733 0.960387 30.423 0.400449C29.5997 -0.0846807 28.6576 -0.10254 27.8383 0.351368C26.9337 0.852545 26.0871 1.13867 25.2684 1.41536C23.8946 1.87957 22.4741 2.35958 21.2926 3.77962C20.4245 4.82307 20.0172 6.14033 20.1459 7.4885C20.3426 10.0463 22.671 12.1192 25.2341 12.077C27.3238 12.077 29.1838 10.8333 30.4717 8.57503ZM29.1551 2.55247C29.3173 2.64801 29.4896 2.9014 29.4896 3.18265C29.4896 4.21423 29.1224 5.89904 28.3019 7.3377C27.4077 9.02438 25.4621 10.4366 23.5613 8.98804C23.0274 8.55055 22.6975 7.93373 22.6323 7.25115C22.5674 6.57069 22.7735 5.9051 23.2127 5.37726C23.9426 4.49992 24.8342 4.19862 26.0681 3.78168C26.9488 3.48401 27.947 3.14675 29.0488 2.53623C29.0615 2.52924 29.071 2.52399 29.0839 2.52399C29.0993 2.52393 29.1193 2.53142 29.1551 2.55247ZM17.3131 6.58187C17.3131 7.44404 16.6141 8.14298 15.752 8.14298C13.6834 8.06642 13.684 5.09701 15.752 5.02076C16.6141 5.02076 17.3131 5.7197 17.3131 6.58187ZM11.6931 9.0172C11.6931 9.87937 10.9941 10.5783 10.132 10.5783C8.06345 10.5017 8.06402 7.53234 10.132 7.45609C10.9941 7.45609 11.6931 8.15503 11.6931 9.0172ZM8.38354 13.9503C8.38354 14.8125 7.6846 15.5114 6.82243 15.5114C4.75391 15.4348 4.75447 12.4654 6.82243 12.3892C7.6846 12.3892 8.38354 13.0881 8.38354 13.9503ZM7.69665 18.259C8.55882 18.259 9.25776 18.9579 9.25776 19.8201C9.1812 21.8886 6.21179 21.888 6.13555 19.8201C6.13555 18.9579 6.83449 18.259 7.69665 18.259Z"
                fill="white"
              />
            </svg>

            <h3 className="font-bold text-6xl">17,5k</h3>
            <p className="text-gray-500">Artists</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.748 8.81594C31.4382 8.81594 31.9978 8.2564 31.9978 7.56613V6.25382C31.9978 2.80546 29.1923 0 25.7439 0C25.7439 0 6.15256 0.00293706 6.10425 0.00862372C4.45518 0.0662402 2.87111 0.773885 1.72927 1.97033C0.558886 3.19665 -0.0512738 4.79166 0.00615522 6.46985C0.00378057 6.50166 0.00253076 24.4964 0.00253076 24.4964C0.00253076 28.6339 3.36866 32 7.50617 32H25.744C29.1923 32 31.9978 29.1945 31.9978 25.7462V16.2571C31.9978 12.8087 29.1923 10.0033 25.744 10.0033H6.25154C4.2449 10.0033 2.59977 8.43487 2.50622 6.43267C2.45867 5.41457 2.82492 4.44272 3.53744 3.69608C4.26027 2.93869 5.27544 2.50438 6.32253 2.50438C6.35946 2.50438 25.7438 2.49963 25.7438 2.49963C27.8139 2.49963 29.498 4.18375 29.498 6.25382V7.56613C29.4982 8.2564 30.0577 8.81594 30.748 8.81594ZM6.25154 12.5029H25.7439C27.814 12.5029 29.4981 14.187 29.4981 16.2571V25.7462C29.4981 27.8162 27.814 29.5004 25.7439 29.5004H7.50617C4.74695 29.5004 2.50216 27.2556 2.50216 24.4964V11.2581C3.54751 12.0412 4.84638 12.5029 6.25154 12.5029ZM26.9985 21.0016C26.9985 21.8644 26.2991 22.5639 25.4363 22.5639C23.3639 22.4816 23.3645 19.5214 25.4363 19.4394C26.2991 19.4394 26.9985 20.1388 26.9985 21.0016ZM26.9985 6.25382C26.9985 5.56355 26.439 5.00401 25.7487 5.00401H6.2516C4.59335 5.07 4.5946 7.43821 6.2516 7.50364H25.7487C26.4389 7.50364 26.9985 6.94409 26.9985 6.25382Z"
                fill="white"
              />
            </svg>

            <h3 className="font-bold text-6xl">35.58</h3>
            <p className="text-gray-500">ETH Spent</p>
          </li>
        </ul>
      </section>
    </>
  );
}