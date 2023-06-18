import type { TodoEntryProcessed, TodoEntryGCResponse } from '../types/types'

export default function initialGCProcessFetch(entry: TodoEntryGCResponse): TodoEntryProcessed {
  return {
    name: entry.title,
    longDesc: entry.description,
    dueDate: `${entry.dueDate} at ${entry.dueTime}`,
    hide: false,
    completed: false,
    isGCAssignment: true
  }
}