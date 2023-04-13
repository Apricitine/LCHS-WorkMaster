export interface TodoEntry {
  name: string
  longDesc?: string
  dueDate?: MinuteHourDayDate<string>
  hide: boolean
  completed: boolean
}

export interface MinuteHourDayDate<DayDateFormat> {
  minute: number
  hour: number
  day: DayDateFormat
}

export interface GAPIGCResponseStructure {

}

export interface GAPIGCResponseStructure {

}