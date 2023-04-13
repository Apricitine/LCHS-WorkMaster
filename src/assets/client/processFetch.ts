import type { TodoEntry } from '../types/types'

export default function initialProcessFetch(): TodoEntry {
  

  return {
    name: "default",
    longDesc: "default",
    dueDate: { minute: 0, hour: 12, day: "1 - 1 - 2000" },
    hide: false,
    completed: false
  }
}