import React from 'react'
import Navbar from 'components/Navbar/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <p>This is the footer</p>
      </footer>
    </div>
  )
}

export default Layout
