import React from 'react'
import Navbar from '@components/Navbar/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>
        <p>This is the footer</p>
      </footer>
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
