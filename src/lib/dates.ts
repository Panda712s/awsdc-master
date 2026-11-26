const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function parts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  // Noon UTC avoids any timezone drift when deriving the weekday.
  const weekday = new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay()
  return { y, m: m - 1, d, weekday }
}

/** "27 March 2026" */
export function formatDate(iso: string) {
  const { y, m, d } = parts(iso)
  return `${d} ${MONTHS[m]} ${y}`
}

/** "27 March to 2 April 2026" (handles cross-year ranges too) */
export function formatDateRange(start: string, end: string) {
  const a = parts(start)
  const b = parts(end)
  const left = a.y === b.y ? `${a.d} ${MONTHS[a.m]}` : formatDate(start)
  return `${left} to ${formatDate(end)}`
}

export function formatDayHeading(iso: string) {
  const { d, m, weekday } = parts(iso)
  return {
    weekday: WEEKDAYS[weekday],
    weekdayShort: WEEKDAYS[weekday].slice(0, 3),
    day: d,
    month: MONTHS[m],
    monthShort: MONTHS[m].slice(0, 3),
  }
}
