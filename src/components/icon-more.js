export default function IconTransfer({ style = {}, fill = 'currentColor', width = '1em', height = '1em', className = '' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className}>
      <circle cx='12' cy='24' r='3' fill={fill} />
      <circle cx='24' cy='24' r='3' fill={fill} />
      <circle cx='36' cy='24' r='3' fill={fill} />
    </svg>
  )
}
