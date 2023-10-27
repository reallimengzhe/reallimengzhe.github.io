export default function ({ fill = 'currentColor', width = '1em', height = '1em', className = '', style = {} }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
      <path d='M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z'></path>
    </svg>
  )
}
