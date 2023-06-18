export interface TodoEntryGCResponse {
  courseId: string
  id: string
  title: string
  description: string
  materials: object[]
  state: object
  alternateLink: string
  creationTime: string
  updateTime: string
  dueDate: Date | object
  dueTime: Date | object
  scheduledTime: string
  maxPoints: number
  workType: object
  associatedWithDeveloper: boolean
  assigneeMode: object
  individualStudentsOptions: object
  submissionModificationMode: object
  creatorUserId: string
  topicId: string
  gradeCategory: object
  assignment: object
  multipleChoiceQuestion: object
}

export interface TodoEntryProcessed {
  name: string
  longDesc?: string
  dueDate?: MinuteHourDayDate<string> | string
  hide: boolean
  completed: boolean
  isGCAssignment: boolean
}

export interface MinuteHourDayDate<DayDateFormat> {
  minute: number
  hour: number
  day: DayDateFormat
}

export interface GAPIGCResponseStructure {
  // idk
}

export interface GAPIGCResponseStructure {
  // idk
}