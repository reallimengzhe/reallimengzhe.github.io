'use client'

import IconDownload from '@/components/icon-download'
import printJS from '@/utils/print.min.js'

export default function ResumePrintButton() {
  const handleExport = () => {
    typeof window !== 'undefined' &&
      printJS({
        printable: 'the_resume-main',
        type: 'html',
        scanStyles: true,
        targetStyles: ['*'],
        documentTitle: '高级前端开发工程师_前端架构师_李孟哲_15538077068',
      })
  }

  return (
    <button
      className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors text-sm rounded-lg items-center px-4 py-2 mx-auto mb-20 hidden lg:flex'
      onClick={handleExport}
    >
      <span className='mr-2'>打印或另存为</span>
      <IconDownload />
    </button>
  )
}
