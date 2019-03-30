import React from "react"
import Rounded from "../Rounded"
import Avatar from "../avatar"

const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'CSS' },
  { name: 'Preprocessors' },
  { name: 'React' },
  { name: 'Angular' },
  { name: 'SQL' },
  { name: 'MongoDB' },
  { name: 'Node.js' },
  { name: 'Webpack' },
]

const AboutBlock = () => (
  <>
    <div
      style={{
        fontSize: 36,
        paddingTop: 24,
      }}
      className="text-center"
    >
      Skills
    </div>
    {skills.map(skill => (
      <div
        key={skill.name}
        className="text-center"
        style={{
          background: '#FB9D46',
          margin: 'auto',
          marginTop: '12px',
          width: '200px',
          padding: '4px',
        }}
      >
        {skill.name}
      </div>
    ))}
  </>
)
export default AboutBlock
