import React from "react"
//import Header from '../components/header'

const Layout = ({ children }) => (
  <>
    <div>
      <main>{children}</main>
      <footer className="font-sans mt-8 mb-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          className="hover:text-gray-600 transition-color transition-300"
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </footer>
    </div>
  </>
)

export default Layout
