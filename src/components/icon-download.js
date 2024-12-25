export default function ({ fill = 'currentColor', width = '1em', height = '1em', className = '', style = {} }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
      <path d="M5.4,9.4l1.4-1.4,4.7,4.7V3.5s2,0,2,0v9.2s4.7-4.7,4.7-4.7l1.4,1.4-7.1,7.1-7.1-7.1ZM19.5,20.5H5.5v-2h14v2Z"/>
    </svg>
  )
}
