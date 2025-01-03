export default function ({ fill = 'currentColor', width = '1em', height = '1em', className = '', style = {} }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
      <path d="M7.8,13l5.4,5.4-1.4,1.4-7.8-7.8,7.8-7.8,1.4,1.4-5.4,5.4h12.2v2H7.8Z"/>
    </svg>
  )
}
