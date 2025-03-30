'use client'

import { useState } from 'react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { CheckIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const initialItems = [
  { id: '1', name: 'Communication', status: 'Done', department: 'Table of contents', target: 12, reviewer: 'Eddie Lake' },
  { id: '2', name: 'Requirement Gathering', status: 'In Process', department: 'Narrative', target: 12, reviewer: 'Eddie Lake' },
  { id: '3', name: 'Feasibility Study', status: 'In Process', department: 'Narrative', target: 12, reviewer: 'Jamik Tashpulatov' },
  { id: '4', name: 'System Analysis', status: 'Done', department: 'Cover page', target: 12, reviewer: 'Jamik Tashpulatov' },
  { id: '5', name: 'Design', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
  // { id: '6', name: 'Coding', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
  // { id: '7', name: 'Testing', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
  // { id: '8', name: 'Integration', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
  // { id: '9', name: 'Implementation', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
  // { id: '10', name: 'Operation and Maintenance', status: 'In Process', department: 'Table of contents', target: 12, reviewer: 'Jamik Tashpulatov' },
]

function SortableRow({ item, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`flex hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${index < 4 && 'border-b'}`}
    >
      <div className='w-10 p-2 cursor-move' {...listeners}>
        <div className='flex'>
          <EllipsisVerticalIcon className='w-4' />
          <EllipsisVerticalIcon className='w-4' style={{ marginLeft: '-12px' }} />
        </div>
      </div>
      <div className='p-2 flex-1 truncate'>{item.name}</div>
      <div className='p-2 w-24'>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            item.status === 'Done'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
          }`}
        >
          {item.status}
        </span>
      </div>
      {/* <div className='p-2'>{item.reviewer}</div> */}
    </div>
  )
}

export default function DraggableTable({ className }) {
  const [items, setItems] = useState(initialItems)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className={className}>
      <h3 className='font-bold'>Draggable Table</h3>
      <p className='text-sm text-slate-400 truncate'>Try dragging and dropping rows to reorder the table.</p>
      <div className='overflow-auto border rounded-md mt-3 text-sm'>
        <div className='flex border-b bg-slate-100 dark:bg-slate-800 text-slate-500'>
          <div className='p-2 w-10'></div>
          <div className='p-2 flex-1'>Task</div>
          <div className='p-2 w-24'>Status</div>
          {/* <div className='p-2'>Reviewer</div> */}
        </div>
        <div>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((item, index) => (
                <SortableRow key={item.id} item={item} index={index} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  )
}
