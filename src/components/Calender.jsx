"use client"

import { useState } from "react"

export default function SchoolCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const startDayOfWeek = firstDayOfMonth.getDay()
  const startDateForGrid = new Date(currentYear, currentMonth, 1 - startDayOfWeek)

  const days = []
  const currentDate = new Date(startDateForGrid)

  for (let i = 0; i < 42; i++) {
    const day = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const isCurrentMonth = month === currentMonth && year === currentYear
    const isSunday = currentDate.getDay() === 0

    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()

    days.push({
      date: day,
      isCurrentMonth,
      isSunday,
      isToday,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  const handleMonthChange = (event) => {
    setCurrentMonth(Number(event.target.value))
  }

  const handlePrevYear = () => {
    setCurrentYear((prev) => prev - 1)
  }

  const handleNextYear = () => {
    setCurrentYear((prev) => prev + 1)
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden bg-white">
      <div className="flex flex-row items-center justify-between p-4">
        <h2 className="text-xl font-bold text-gray-900">School Calendar</h2>
        <div className="flex items-center text-gray-600 space-x-2">
          <select
            value={currentMonth}
            onChange={handleMonthChange}
            className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {monthNames.map((name, index) => (
              <option key={index} value={index}>
                {name}
              </option>
            ))}
          </select>
          <button
            onClick={handlePrevYear}
            className="px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            &lt;
          </button>
          <span className="font-medium">{currentYear}</span>
          <button
            onClick={handleNextYear}
            className="px-2 py-1 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
          {dayNames.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {days.map((day, index) => (
            <div
  key={index}
  className={`
    flex items-center justify-center w-10 h-10 text-base font-medium
    ${!day.isCurrentMonth ? "text-gray-400" : "text-gray-900"}
    ${day.isSunday && day.isCurrentMonth ? "text-red-500" : ""}
    ${day.isToday ? "bg-blue-500 text-white rounded-full" : "rounded-md"}
  `}
>
  {day.date}
</div>

          ))}
        </div>
      </div>
    </div>
  )
}
