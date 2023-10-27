export default function IconTransfer({ fill = 'currentColor', width = '1em', height = '1em', className = '', style = {} }) {
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
      <path d='M41.9999 24H5.99994' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M30 12L42 24L30 36' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}
