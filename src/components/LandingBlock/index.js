import React from "react"

const LandingBlock = (props) => {
  const styles = {
    background: props.color,
    position: 'relative',
  };
  const deg = 5;
  const rad = (90 - deg) * Math.PI / 180;
  const bottomBlockWidth = 100 / Math.sin(rad);
  const bottomBlocHeight = Math.sqrt(Math.pow(bottomBlockWidth, 2) - Math.pow(100, 2));
  if (props.fullHeight) {
    styles.height = '100vh';
  }

  return (
    <div style={styles}>
      <div
        style={{
          background: props.color,
          position: 'absolute',
          right: 0,
          width: `${bottomBlockWidth}vw`,
          height: `${bottomBlocHeight}vw`,
          transform: `rotate(${deg}deg)`,
          transformOrigin: 'right top',
        }}
      />
      Block
    </div>
  )
}

export default LandingBlock
