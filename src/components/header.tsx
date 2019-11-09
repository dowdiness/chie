import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import loadable from "@loadable/component"

const Scroll = loadable(() => import(`react-scroll-to-element`))

const Header = () => {
  return (
    <Headroom>
      <nav className="w-screen h-16 bg-white flex justify-between items-center shadow-md">
        <Link to="/">
          <h1 className="ml-8 text-4xl">Header</h1>
        </Link>
        <ul className="w-2/3 mx-8 flex justify-between items-center">
          <li>
            <Scroll type="id" element="works">
              <button className="hover:text-gray-600 text-lg hover:text-2xl transition-all transition-300">
                Works
              </button>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="profile">
              <button className="hover:text-gray-600 text-lg hover:text-2xl transition-all transition-300">
                Profile
              </button>
            </Scroll>
          </li>
          <li>
            <Scroll type="id" element="contact">
              <button className="hover:text-gray-600 text-lg hover:text-2xl transition-all transition-300">
                Contact
              </button>
            </Scroll>
          </li>
        </ul>
      </nav>
    </Headroom>
  )
}

export default Header
