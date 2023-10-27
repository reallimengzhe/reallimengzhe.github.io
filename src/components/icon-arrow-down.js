export default function IconTransfer({ style = {}, fill = 'currentColor', width = '1em', height = '1em', className = '' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className}>
      <path d='M24 42V6' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M36 30L24 42L12 30' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}
