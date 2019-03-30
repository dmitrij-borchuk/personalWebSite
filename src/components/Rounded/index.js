import React from "react"

const Rounded = ({ children }) => (
  <div
    style={{
      borderRadius: '50%',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
)

export default Rounded
