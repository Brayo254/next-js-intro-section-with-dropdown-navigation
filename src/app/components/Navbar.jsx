import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaChevronUp, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Button from "@/app/components/Button";

const Navbar = ({
  onFeaturesToggle,
  onCompanyToggle,
  isFeaturesOpen,
  isCompanyOpen,
  onMenuToggle,
  isMenuOpen,
}) => {
  return (
    <>
      {/*desktop navigation*/}
      <nav className="relative justify-between py-5 px-7 hidden md:flex">
        <div className="inline-flex h-full py-3 px-3">
          <div className="mr-15">
            <Image src="./logo.svg" height={80} width={80} alt="logo" />
          </div>
          <div className="relative flex justify-between">
            <h5 className="items-center gap-2 inline-flex mr-3">
              Features
              <button onClick={onFeaturesToggle} className="cursor-pointer">
                {isFeaturesOpen ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </h5>
            {isFeaturesOpen && (
              <div className="px-2 py-2 flex flex-col bg-primary1 w-30 rounded items-center shadow-md absolute left-10 mt-5">
                <div className="items-center gap-2 inline-flex mb-1">
                  <Image
                    src="./icon-todo.svg"
                    width={20}
                    height={20}
                    alt="todo-icon"
                  />
                  <p>Todo List</p>
                </div>
                <div className="items-center gap-2 inline-flex mt-2">
                  <Image
                    src="./icon-calendar.svg"
                    width={20}
                    height={20}
                    alt="calendar-icon"
                  />
                  <p>Calendar</p>
                </div>
                <div className="items-center gap-2 inline-flex mt-2">
                  <Image
                    src="./icon-reminders.svg"
                    width={20}
                    height={20}
                    alt="reminders-icon"
                  />
                  <p>Reminders</p>
                </div>
                <div className="items-center gap-2 inline-flex mt-2">
                  <Image
                    src="./icon-planning.svg"
                    width={20}
                    height={20}
                    alt="planning-icon"
                  />
                  <p>Planning</p>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <p className="items-center gap-2 inline-flex mr-3">
              Company
              <button onClick={onCompanyToggle} className="cursor-pointer">
                {isCompanyOpen ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </p>
            {isCompanyOpen && (
              <div className="px-2 py-2 flex flex-col bg-primary1 w-20 rounded items-center shadow-md mt-7 absolute right-4">
                <Link href="#">History</Link>
                <Link href="#">Team</Link>
                <Link href="#">Blog</Link>
              </div>
            )}
          </div>
          <div>
            <Link className="mr-3" href="#">
              Careers
            </Link>
            <Link href="#">About</Link>
          </div>
        </div>
        <div className="flex flex-row space-y-2 ">
          <div className="mr-4">
            <Button text="Login" />
          </div>
          <div className="mr-4">
            <Button text="Register" />
          </div>
        </div>
      </nav>

      {/*mobile navigation*/}
      <div className="cursor-pointer text-2xl md:hidden" onClick={onMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={onMenuToggle}
          ></div>
          <nav className="flex flex-col md:hidden bg-white p-4 absolute w-full z-50 shadow-lg">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <h5 className="items-center gap-2 inline-flex mr-3">
                  Features
                  <button onClick={onFeaturesToggle} className="cursor-pointer">
                    {isFeaturesOpen ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                </h5>
                {isFeaturesOpen && (
                  <div className="px-2 py-2 flex flex-col bg-gray-100 w-full rounded items-start shadow-md mt-2 ml-4">
                    <div className="items-center gap-2 inline-flex mb-1">
                      <Image
                        src="./icon-todo.svg"
                        width={20}
                        height={20}
                        alt="todo-icon"
                      />
                      <p>Todo List</p>
                    </div>
                    <div className="items-center gap-2 inline-flex mt-2">
                      <Image
                        src="./icon-calendar.svg"
                        width={20}
                        height={20}
                        alt="calendar-icon"
                      />
                      <p>Calendar</p>
                    </div>
                    <div className="items-center gap-2 inline-flex mt-2">
                      <Image
                        src="./icon-reminders.svg"
                        width={20}
                        height={20}
                        alt="reminders-icon"
                      />
                      <p>Reminders</p>
                    </div>
                    <div className="items-center gap-2 inline-flex mt-2">
                      <Image
                        src="./icon-planning.svg"
                        width={20}
                        height={20}
                        alt="planning-icon"
                      />
                      <p>Planning</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <p className="items-center gap-2 flex justify-between mr-3 p-2">
                  Company
                  <button onClick={onCompanyToggle} className="cursor-pointer">
                    {isCompanyOpen ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                </p>
                {isCompanyOpen && (
                  <div className="px-2 py-2 flex flex-col bg-gray-100 w-full rounded items-start shadow-md mt-2 ml-4">
                    <Link href="#">History</Link>
                    <Link href="#">Team</Link>
                    <Link href="#">Blog</Link>
                  </div>
                )}
              </div>
              <div>
                <Link className="p-2" href="#">
                  Careers
                </Link>
                <Link className="p-2" href="#">
                  About
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <Button text="Login" className="w-full text-center" />
              <Button text="Register" className="w-full text-center" />
            </div>
          </nav>
        </>
      )}
    </>
  );
};
export default Navbar;
