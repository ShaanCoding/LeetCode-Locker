import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppProvider from './providers/app';

const Hello = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div>
        <div className="mb-10">
          <h1 className="text-white text-center text-9xl font-bold">
            THIS PC IS LOCKED
          </h1>
          <h1 className="text-white text-center text-6xl font-bold">
            PLEASE DO A LEETCODE QUESTION
            <br />
            TO UNLOCK YOUR COMPUTER
          </h1>
        </div>

        <div className="text-center mb-10">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-14 rounded-lg inline-flex items-center">
            <span>LeetCode</span>
          </button>
        </div>
        <div className="text-center mb-10">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-10 rounded-lg inline-flex items-center">
            <span>Override</span>
          </button>
        </div>

        <div className="flex">
        <div style={{ backgroundColor: '#1a1a1a' }} className="w-1/2 m-10">
          <div className="shadow-dark-level3 bg-dark-layer-1 rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]">
            <div className="px-[13px] text-xs font-medium text-dark-label-3">
              Solved Problems
            </div>
            <div className="mx-3 flex items-center lc-xl:mx-8">
              <div className="mr-8 mt-6 flex min-w-[100px] justify-center">
                <div className="shrink-1 relative max-h-[100px] max-w-[100px] z-base">
                  <svg
                    className="h-full w-full origin-center -rotate-90 transform"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      fill="none"
                      cx="50px"
                      cy="50px"
                      r="46"
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      className="w-[100px] text-dark-gray-4"
                    ></circle>
                    <circle
                      fill="none"
                      cx="50px"
                      cy="50px"
                      r="46"
                      strokeWidth="5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                      strokeDasharray="2.1015615527007854 286.92496257756017"
                      strokeDashoffset="0"
                      data-difficulty="ALL"
                    ></circle>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                    <div>
                      <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                        17
                      </div>
                      <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                        Solved
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
                <div className="space-y-2">
                  <div className="flex w-full items-end text-xs">
                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                      Easy
                    </div>
                    <div className="flex flex-1 items-center">
                      <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                        15
                      </span>
                      <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                        /579
                      </span>
                    </div>
                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                      <span className="space-x-1.5">
                        <span>Beats</span>
                        <span className="font-medium text-label-2 dark:text-dark-label-2">
                          42.1%
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div className="absolute h-full w-full bg-green-1 dark:bg-dark-green-1"></div>
                    <div
                      className="absolute h-full rounded-full transition-all duration-300 ease-out bg-olive dark:bg-dark-olive"
                      style={{ width: '2.59067%' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex w-full items-end text-xs">
                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                      Medium
                    </div>
                    <div className="flex flex-1 items-center">
                      <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                        2
                      </span>
                      <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                        /1247
                      </span>
                    </div>
                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                      <span className="text-label-4 dark:text-dark-label-4">
                        Not enough data
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div className="absolute h-full w-full bg-yellow-1 dark:bg-dark-yellow-1"></div>
                    <div
                      className="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow dark:bg-dark-yellow"
                      style={{ width: '0.160385%' }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex w-full items-end text-xs">
                    <div className="w-[53px] text-label-3 dark:text-dark-label-3">
                      Hard
                    </div>
                    <div className="flex flex-1 items-center">
                      <span className="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                        0
                      </span>
                      <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">
                        /512
                      </span>
                    </div>
                    <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                      <span className="text-label-4 dark:text-dark-label-4">
                        Not enough data
                      </span>
                    </div>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                    <div className="absolute h-full w-full bg-red-1 dark:bg-dark-red-1"></div>
                    <div
                      className="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-s dark:bg-dark-red-s"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1a1a1a' }} className="w-1/2 m-10">
          <div class="shadow-level3 dark:shadow-dark-level3 bg-layer-1 dark:bg-dark-layer-1 rounded-lg flex h-auto flex-col space-y-4 p-4 pb-0 lc-md:h-[185px] lc-md:pb-4">
            <div class="flex flex-col flex-wrap space-y-2 lc-md:flex-row lc-md:items-center lc-md:space-y-0">
              <div class="flex flex-1 items-center">
                <span class="mr-[5px] text-base font-medium lc-md:text-xl">
                  42
                </span>
                <span class="whitespace-nowrap lc-md:text-base text-label-2 dark:text-dark-label-2">
                  submissions in the last year
                </span>
                <div class="ml-1 mr-2 text-gray-5 dark:text-dark-gray-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2zm0 14C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="flex items-center text-xs">
                <div class="mr-4.5 space-x-1">
                  <span class="text-label-3 dark:text-dark-label-3">
                    Total active days:
                  </span>
                  <span class="font-medium text-label-2 dark:text-dark-label-2">
                    6
                  </span>
                </div>
                <div class="space-x-1">
                  <span class="text-label-3 dark:text-dark-label-3">
                    Max streak:
                  </span>
                  <span class="font-medium text-label-2 dark:text-dark-label-2">
                    1
                  </span>
                </div>
                <div class="ml-[21px]">
                  <div class="relative">
                    <button
                      class="flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg-fill-3 dark:bg-dark-fill-3 text-label-2 dark:text-dark-label-2 hover:bg-fill-2 dark:hover:bg-dark-fill-2 active:bg-fill-3 dark:active:bg-dark-fill-3"
                      id="headlessui-listbox-button-18"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Current
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        class="pointer-events-none ml-3"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden h-auto w-full flex-1 items-center justify-center lc-md:flex">
              <svg viewBox="0 0 799.3 104.64" width="658">
                <g x="0" y="0" class="month 1">
                  <g x="0" y="0" class="week 1">
                    <rect
                      x="0"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="0"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="0"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="0"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="0"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="0"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="0"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="11.52" y="0" class="week 2">
                    <rect
                      x="11.52"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="11.52"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="23.04" y="0" class="week 3">
                    <rect
                      x="23.04"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="23.04"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="34.56" y="0" class="week 4"></g>
                </g>
                <g x="50.51" y="0" class="month 2">
                  <g x="50.51" y="0" class="week 1">
                    <rect
                      x="50.51"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="50.51"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="62.03" y="0" class="week 2">
                    <rect
                      x="62.03"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="62.03"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="73.55" y="0" class="week 3">
                    <rect
                      x="73.55"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="73.55"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="85.07" y="0" class="week 4">
                    <rect
                      x="85.07"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="85.07"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="96.58999999999999" y="0" class="week 5">
                    <rect
                      x="96.58999999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="96.58999999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="96.58999999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="#2CBB5D"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="112.53999999999999" y="0" class="month 3">
                  <g x="112.53999999999999" y="0" class="week 1">
                    <rect
                      x="112.53999999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="112.53999999999999"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="124.05999999999999" y="0" class="week 2">
                    <rect
                      x="124.05999999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="124.05999999999999"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="135.57999999999998" y="0" class="week 3">
                    <rect
                      x="135.57999999999998"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="#4CC575"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="135.57999999999998"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="147.1" y="0" class="week 4">
                    <rect
                      x="147.1"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="147.1"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="158.62" y="0" class="week 5">
                    <rect
                      x="158.62"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="158.62"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="158.62"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="158.62"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="158.62"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="174.57000000000002" y="0" class="month 4">
                  <g x="174.57000000000002" y="0" class="week 1">
                    <rect
                      x="174.57000000000002"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="174.57000000000002"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="186.09000000000003" y="0" class="week 2">
                    <rect
                      x="186.09000000000003"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="186.09000000000003"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="197.61000000000004" y="0" class="week 3">
                    <rect
                      x="197.61000000000004"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="197.61000000000004"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="209.13000000000005" y="0" class="week 4">
                    <rect
                      x="209.13000000000005"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="209.13000000000005"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="220.65000000000006" y="0" class="week 5">
                    <rect
                      x="220.65000000000006"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="220.65000000000006"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="232.17000000000007" y="0" class="week 6">
                    <rect
                      x="232.17000000000007"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="248.1200000000001" y="0" class="month 5">
                  <g x="248.1200000000001" y="0" class="week 1">
                    <rect
                      x="248.1200000000001"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="248.1200000000001"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="259.6400000000001" y="0" class="week 2">
                    <rect
                      x="259.6400000000001"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="259.6400000000001"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="271.1600000000001" y="0" class="week 3">
                    <rect
                      x="271.1600000000001"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="271.1600000000001"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="282.68000000000006" y="0" class="week 4">
                    <rect
                      x="282.68000000000006"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="282.68000000000006"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="294.20000000000005" y="0" class="week 5">
                    <rect
                      x="294.20000000000005"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="294.20000000000005"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="294.20000000000005"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="310.15000000000003" y="0" class="month 6">
                  <g x="310.15000000000003" y="0" class="week 1">
                    <rect
                      x="310.15000000000003"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="310.15000000000003"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="321.67" y="0" class="week 2">
                    <rect
                      x="321.67"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="321.67"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="333.19" y="0" class="week 3">
                    <rect
                      x="333.19"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="333.19"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="344.71" y="0" class="week 4">
                    <rect
                      x="344.71"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="344.71"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="356.22999999999996" y="0" class="week 5">
                    <rect
                      x="356.22999999999996"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="356.22999999999996"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="356.22999999999996"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="356.22999999999996"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="356.22999999999996"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="356.22999999999996"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="372.17999999999995" y="0" class="month 7">
                  <g x="372.17999999999995" y="0" class="week 1">
                    <rect
                      x="372.17999999999995"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="372.17999999999995"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="383.69999999999993" y="0" class="week 2">
                    <rect
                      x="383.69999999999993"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="383.69999999999993"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="395.2199999999999" y="0" class="week 3">
                    <rect
                      x="395.2199999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="395.2199999999999"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="406.7399999999999" y="0" class="week 4">
                    <rect
                      x="406.7399999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="406.7399999999999"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="418.2599999999999" y="0" class="week 5">
                    <rect
                      x="418.2599999999999"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="418.2599999999999"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="429.77999999999986" y="0" class="week 6">
                    <rect
                      x="429.77999999999986"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="429.77999999999986"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="445.72999999999985" y="0" class="month 8">
                  <g x="445.72999999999985" y="0" class="week 1">
                    <rect
                      x="445.72999999999985"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="445.72999999999985"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="457.24999999999983" y="0" class="week 2">
                    <rect
                      x="457.24999999999983"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="457.24999999999983"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="468.7699999999998" y="0" class="week 3">
                    <rect
                      x="468.7699999999998"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="468.7699999999998"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="480.2899999999998" y="0" class="week 4">
                    <rect
                      x="480.2899999999998"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="480.2899999999998"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="491.8099999999998" y="0" class="week 5">
                    <rect
                      x="491.8099999999998"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="491.8099999999998"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="507.75999999999976" y="0" class="month 9">
                  <g x="507.75999999999976" y="0" class="week 1">
                    <rect
                      x="507.75999999999976"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="507.75999999999976"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="519.2799999999997" y="0" class="week 2">
                    <rect
                      x="519.2799999999997"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="519.2799999999997"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="530.7999999999997" y="0" class="week 3">
                    <rect
                      x="530.7999999999997"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="530.7999999999997"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="542.3199999999997" y="0" class="week 4">
                    <rect
                      x="542.3199999999997"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="542.3199999999997"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="553.8399999999997" y="0" class="week 5">
                    <rect
                      x="553.8399999999997"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="553.8399999999997"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="553.8399999999997"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="553.8399999999997"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="553.8399999999997"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="569.7899999999996" y="0" class="month 10">
                  <g x="569.7899999999996" y="0" class="week 1">
                    <rect
                      x="569.7899999999996"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="569.7899999999996"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="581.3099999999996" y="0" class="week 2">
                    <rect
                      x="581.3099999999996"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="581.3099999999996"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="592.8299999999996" y="0" class="week 3">
                    <rect
                      x="592.8299999999996"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="592.8299999999996"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="604.3499999999996" y="0" class="week 4">
                    <rect
                      x="604.3499999999996"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="604.3499999999996"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="615.8699999999995" y="0" class="week 5">
                    <rect
                      x="615.8699999999995"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="615.8699999999995"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="627.3899999999995" y="0" class="week 6"></g>
                </g>
                <g x="643.3399999999995" y="0" class="month 11">
                  <g x="643.3399999999995" y="0" class="week 1">
                    <rect
                      x="643.3399999999995"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="643.3399999999995"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="654.8599999999994" y="0" class="week 2">
                    <rect
                      x="654.8599999999994"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="654.8599999999994"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="666.3799999999994" y="0" class="week 3">
                    <rect
                      x="666.3799999999994"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="666.3799999999994"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="677.8999999999994" y="0" class="week 4">
                    <rect
                      x="677.8999999999994"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="#4CC575"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="677.8999999999994"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="689.4199999999994" y="0" class="week 5">
                    <rect
                      x="689.4199999999994"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="#6BCF8E"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="689.4199999999994"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="689.4199999999994"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(44, 181, 93, 0.5)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="705.3699999999993" y="0" class="month 12">
                  <g x="705.3699999999993" y="0" class="week 1">
                    <rect
                      x="705.3699999999993"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="705.3699999999993"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="716.8899999999993" y="0" class="week 2">
                    <rect
                      x="716.8899999999993"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="716.8899999999993"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="728.4099999999993" y="0" class="week 3">
                    <rect
                      x="728.4099999999993"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="728.4099999999993"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="739.9299999999993" y="0" class="week 4">
                    <rect
                      x="739.9299999999993"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="#2CBB5D"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="739.9299999999993"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="751.4499999999992" y="0" class="week 5">
                    <rect
                      x="751.4499999999992"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="751.4499999999992"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="751.4499999999992"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="751.4499999999992"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="751.4499999999992"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <g x="767.3999999999992" y="0" class="month 13">
                  <g x="767.3999999999992" y="0" class="week 1">
                    <rect
                      x="767.3999999999992"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="transparent"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="767.3999999999992"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="778.9199999999992" y="0" class="week 2">
                    <rect
                      x="778.9199999999992"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="46.08"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="57.599999999999994"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="778.9199999999992"
                      y="69.12"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                  <g x="790.4399999999991" y="0" class="week 3">
                    <rect
                      x="790.4399999999991"
                      y="0"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="790.4399999999991"
                      y="11.52"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="790.4399999999991"
                      y="23.04"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                    <rect
                      x="790.4399999999991"
                      y="34.56"
                      width="8.86"
                      height="8.86"
                      fill="rgba(255, 255, 255, 0.1)"
                      rx="2"
                      ry="2"
                      class="cursor-pointer"
                    ></rect>
                  </g>
                </g>
                <text x="64.91" y="97.14" fill="#AFB4BD" class="font-xs">
                  Aug
                </text>
                <text x="126.94" y="97.14" fill="#AFB4BD" class="font-xs">
                  Sep
                </text>
                <text
                  x="194.73000000000002"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Oct
                </text>
                <text
                  x="262.5200000000001"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Nov
                </text>
                <text x="324.55" y="97.14" fill="#AFB4BD" class="font-xs">
                  Dec
                </text>
                <text x="392.34" y="97.14" fill="#AFB4BD" class="font-xs">
                  Jan
                </text>
                <text
                  x="460.1299999999998"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Feb
                </text>
                <text
                  x="522.1599999999997"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Mar
                </text>
                <text
                  x="589.9499999999996"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Apr
                </text>
                <text
                  x="657.7399999999994"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  May
                </text>
                <text
                  x="719.7699999999993"
                  y="97.14"
                  fill="#AFB4BD"
                  class="font-xs"
                >
                  Jun
                </text>
              </svg>
            </div>
            <div class="flex h-auto w-full flex-1 items-center overflow-x-auto overflow-y-visible lc-md:hidden">
              <div class="pb-4">
                <svg viewBox="0 0 799.3 104.64" width="800">
                  <g x="0" y="0" class="month 1">
                    <g x="0" y="0" class="week 1">
                      <rect
                        x="0"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="0"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="0"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="0"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="0"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="0"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="0"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="11.52" y="0" class="week 2">
                      <rect
                        x="11.52"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="11.52"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="23.04" y="0" class="week 3">
                      <rect
                        x="23.04"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="23.04"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="34.56" y="0" class="week 4"></g>
                  </g>
                  <g x="50.51" y="0" class="month 2">
                    <g x="50.51" y="0" class="week 1">
                      <rect
                        x="50.51"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="50.51"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="62.03" y="0" class="week 2">
                      <rect
                        x="62.03"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="62.03"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="73.55" y="0" class="week 3">
                      <rect
                        x="73.55"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="73.55"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="85.07" y="0" class="week 4">
                      <rect
                        x="85.07"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="85.07"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="96.58999999999999" y="0" class="week 5">
                      <rect
                        x="96.58999999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="96.58999999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="96.58999999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="#2CBB5D"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="112.53999999999999" y="0" class="month 3">
                    <g x="112.53999999999999" y="0" class="week 1">
                      <rect
                        x="112.53999999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="112.53999999999999"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="124.05999999999999" y="0" class="week 2">
                      <rect
                        x="124.05999999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="124.05999999999999"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="135.57999999999998" y="0" class="week 3">
                      <rect
                        x="135.57999999999998"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="#4CC575"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="135.57999999999998"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="147.1" y="0" class="week 4">
                      <rect
                        x="147.1"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="147.1"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="158.62" y="0" class="week 5">
                      <rect
                        x="158.62"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="158.62"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="158.62"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="158.62"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="158.62"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="174.57000000000002" y="0" class="month 4">
                    <g x="174.57000000000002" y="0" class="week 1">
                      <rect
                        x="174.57000000000002"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="174.57000000000002"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="186.09000000000003" y="0" class="week 2">
                      <rect
                        x="186.09000000000003"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="186.09000000000003"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="197.61000000000004" y="0" class="week 3">
                      <rect
                        x="197.61000000000004"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="197.61000000000004"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="209.13000000000005" y="0" class="week 4">
                      <rect
                        x="209.13000000000005"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="209.13000000000005"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="220.65000000000006" y="0" class="week 5">
                      <rect
                        x="220.65000000000006"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="220.65000000000006"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="232.17000000000007" y="0" class="week 6">
                      <rect
                        x="232.17000000000007"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="248.1200000000001" y="0" class="month 5">
                    <g x="248.1200000000001" y="0" class="week 1">
                      <rect
                        x="248.1200000000001"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="248.1200000000001"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="259.6400000000001" y="0" class="week 2">
                      <rect
                        x="259.6400000000001"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="259.6400000000001"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="271.1600000000001" y="0" class="week 3">
                      <rect
                        x="271.1600000000001"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="271.1600000000001"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="282.68000000000006" y="0" class="week 4">
                      <rect
                        x="282.68000000000006"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="282.68000000000006"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="294.20000000000005" y="0" class="week 5">
                      <rect
                        x="294.20000000000005"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="294.20000000000005"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="294.20000000000005"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="310.15000000000003" y="0" class="month 6">
                    <g x="310.15000000000003" y="0" class="week 1">
                      <rect
                        x="310.15000000000003"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="310.15000000000003"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="321.67" y="0" class="week 2">
                      <rect
                        x="321.67"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="321.67"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="333.19" y="0" class="week 3">
                      <rect
                        x="333.19"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="333.19"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="344.71" y="0" class="week 4">
                      <rect
                        x="344.71"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="344.71"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="356.22999999999996" y="0" class="week 5">
                      <rect
                        x="356.22999999999996"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="356.22999999999996"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="356.22999999999996"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="356.22999999999996"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="356.22999999999996"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="356.22999999999996"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="372.17999999999995" y="0" class="month 7">
                    <g x="372.17999999999995" y="0" class="week 1">
                      <rect
                        x="372.17999999999995"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="372.17999999999995"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="383.69999999999993" y="0" class="week 2">
                      <rect
                        x="383.69999999999993"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="383.69999999999993"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="395.2199999999999" y="0" class="week 3">
                      <rect
                        x="395.2199999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="395.2199999999999"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="406.7399999999999" y="0" class="week 4">
                      <rect
                        x="406.7399999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="406.7399999999999"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="418.2599999999999" y="0" class="week 5">
                      <rect
                        x="418.2599999999999"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="418.2599999999999"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="429.77999999999986" y="0" class="week 6">
                      <rect
                        x="429.77999999999986"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="429.77999999999986"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="445.72999999999985" y="0" class="month 8">
                    <g x="445.72999999999985" y="0" class="week 1">
                      <rect
                        x="445.72999999999985"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="445.72999999999985"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="457.24999999999983" y="0" class="week 2">
                      <rect
                        x="457.24999999999983"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="457.24999999999983"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="468.7699999999998" y="0" class="week 3">
                      <rect
                        x="468.7699999999998"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="468.7699999999998"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="480.2899999999998" y="0" class="week 4">
                      <rect
                        x="480.2899999999998"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="480.2899999999998"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="491.8099999999998" y="0" class="week 5">
                      <rect
                        x="491.8099999999998"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="491.8099999999998"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="507.75999999999976" y="0" class="month 9">
                    <g x="507.75999999999976" y="0" class="week 1">
                      <rect
                        x="507.75999999999976"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="507.75999999999976"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="519.2799999999997" y="0" class="week 2">
                      <rect
                        x="519.2799999999997"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="519.2799999999997"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="530.7999999999997" y="0" class="week 3">
                      <rect
                        x="530.7999999999997"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="530.7999999999997"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="542.3199999999997" y="0" class="week 4">
                      <rect
                        x="542.3199999999997"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="542.3199999999997"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="553.8399999999997" y="0" class="week 5">
                      <rect
                        x="553.8399999999997"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="553.8399999999997"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="553.8399999999997"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="553.8399999999997"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="553.8399999999997"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="569.7899999999996" y="0" class="month 10">
                    <g x="569.7899999999996" y="0" class="week 1">
                      <rect
                        x="569.7899999999996"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="569.7899999999996"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="581.3099999999996" y="0" class="week 2">
                      <rect
                        x="581.3099999999996"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="581.3099999999996"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="592.8299999999996" y="0" class="week 3">
                      <rect
                        x="592.8299999999996"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="592.8299999999996"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="604.3499999999996" y="0" class="week 4">
                      <rect
                        x="604.3499999999996"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="604.3499999999996"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="615.8699999999995" y="0" class="week 5">
                      <rect
                        x="615.8699999999995"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="615.8699999999995"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="627.3899999999995" y="0" class="week 6"></g>
                  </g>
                  <g x="643.3399999999995" y="0" class="month 11">
                    <g x="643.3399999999995" y="0" class="week 1">
                      <rect
                        x="643.3399999999995"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="643.3399999999995"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="654.8599999999994" y="0" class="week 2">
                      <rect
                        x="654.8599999999994"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="654.8599999999994"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="666.3799999999994" y="0" class="week 3">
                      <rect
                        x="666.3799999999994"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="666.3799999999994"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="677.8999999999994" y="0" class="week 4">
                      <rect
                        x="677.8999999999994"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="#4CC575"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="677.8999999999994"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="689.4199999999994" y="0" class="week 5">
                      <rect
                        x="689.4199999999994"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="#6BCF8E"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="689.4199999999994"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="689.4199999999994"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(44, 181, 93, 0.5)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="705.3699999999993" y="0" class="month 12">
                    <g x="705.3699999999993" y="0" class="week 1">
                      <rect
                        x="705.3699999999993"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="705.3699999999993"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="716.8899999999993" y="0" class="week 2">
                      <rect
                        x="716.8899999999993"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="716.8899999999993"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="728.4099999999993" y="0" class="week 3">
                      <rect
                        x="728.4099999999993"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="728.4099999999993"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="739.9299999999993" y="0" class="week 4">
                      <rect
                        x="739.9299999999993"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="#2CBB5D"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="739.9299999999993"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="751.4499999999992" y="0" class="week 5">
                      <rect
                        x="751.4499999999992"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="751.4499999999992"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="751.4499999999992"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="751.4499999999992"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="751.4499999999992"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <g x="767.3999999999992" y="0" class="month 13">
                    <g x="767.3999999999992" y="0" class="week 1">
                      <rect
                        x="767.3999999999992"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="transparent"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="767.3999999999992"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="778.9199999999992" y="0" class="week 2">
                      <rect
                        x="778.9199999999992"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="46.08"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="57.599999999999994"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="778.9199999999992"
                        y="69.12"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                    <g x="790.4399999999991" y="0" class="week 3">
                      <rect
                        x="790.4399999999991"
                        y="0"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="790.4399999999991"
                        y="11.52"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="790.4399999999991"
                        y="23.04"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                      <rect
                        x="790.4399999999991"
                        y="34.56"
                        width="8.86"
                        height="8.86"
                        fill="rgba(255, 255, 255, 0.1)"
                        rx="2"
                        ry="2"
                        class="cursor-pointer"
                      ></rect>
                    </g>
                  </g>
                  <text x="64.91" y="97.14" fill="#AFB4BD" class="font-xs">
                    Aug
                  </text>
                  <text x="126.94" y="97.14" fill="#AFB4BD" class="font-xs">
                    Sep
                  </text>
                  <text
                    x="194.73000000000002"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Oct
                  </text>
                  <text
                    x="262.5200000000001"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Nov
                  </text>
                  <text x="324.55" y="97.14" fill="#AFB4BD" class="font-xs">
                    Dec
                  </text>
                  <text x="392.34" y="97.14" fill="#AFB4BD" class="font-xs">
                    Jan
                  </text>
                  <text
                    x="460.1299999999998"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Feb
                  </text>
                  <text
                    x="522.1599999999997"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Mar
                  </text>
                  <text
                    x="589.9499999999996"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Apr
                  </text>
                  <text
                    x="657.7399999999994"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    May
                  </text>
                  <text
                    x="719.7699999999993"
                    y="97.14"
                    fill="#AFB4BD"
                    class="font-xs"
                  >
                    Jun
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
