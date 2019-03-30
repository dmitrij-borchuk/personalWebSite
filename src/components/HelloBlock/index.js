import React from "react"
import Rounded from "../Rounded"
import Avatar from "../avatar"

const HelloBlock = () => (
  <>
    <div style={{
      padding: 12,
    }}>
      <div
        style={{
          paddingTop: '10vh',
        }}
      >
        <div
          style={{
            width: '200px',
            margin: 'auto',
          }}
        >
          <Rounded>
            <Avatar />
          </Rounded>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 24,
          lineHeight: '40px',
          marginTop: 24,
        }}>
          Hi, I'm Dmytro Borchuk,<br /> a Front-end Engineer.
        </div>
      </div>
    </div>
  </>
)
export default HelloBlock
