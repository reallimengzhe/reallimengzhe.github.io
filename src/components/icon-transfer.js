export default function IconTransfer({ style = {}, fill = 'currentColor', width = '1em', height = '1em', className = '' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className}>
      <path d='M10 8L4 14L10 20' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M38 28L44 34L38 40' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M4 14H44' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M4 34H44' stroke={fill} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}
