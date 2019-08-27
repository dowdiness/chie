import React from 'react'
import Headroom from 'react-headroom'
import Scroll from 'react-scroll-to-element'

export default () => (
  <Headroom>
    <nav className="w-screen h-16 bg-white flex justify-between items-center">
      <h1 className="ml-8 text-4xl">Header</h1>
      <ul className="w-2/3 mx-8 flex justify-between">
        <li>
          <Scroll type="id" element="works" >
            <button>Works</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="profile">
            <button>Profile</button>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="contact">
            <button>Contact</button>
          </Scroll>
        </li>
      </ul>
    </nav>
  </Headroom>
)