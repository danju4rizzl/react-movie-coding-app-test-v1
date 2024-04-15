// Define types for the intervals object to improve code readability
type Intervals = {
  year: number
  month: number
  day: number
}

// Function to format the time difference between the current date and a given timestamp
export const formatDate = (timestamp: string): string => {
  // Get the current date and the date when the timestamp was created
  const currentDate = new Date()
  const createdAtDate = new Date(timestamp)

  // Check if the createdAtDate is a valid date
  if (isNaN(createdAtDate.getTime())) {
    return 'Invalid Date'
  }

  // Calculate the time difference in seconds
  const timeDifference = Math.floor(
    (currentDate.getTime() - createdAtDate.getTime()) / 1000
  )

  // Calculate the intervals in years, months, and days
  const intervals: Intervals = {
    year: Math.floor(timeDifference / (60 * 60 * 24 * 365)),
    month: Math.floor(timeDifference / (60 * 60 * 24 * 30)),
    day: Math.floor(timeDifference / (60 * 60 * 24))
  }

  // Return a formatted string based on the time intervals
  if (intervals.year > 1) {
    return `${intervals.year} years ago`
  } else if (intervals.month > 1) {
    return `${intervals.month} months ago`
  } else if (intervals.day < 1) {
    return `${intervals.day} yesterday`
  }

  return `${intervals.day} days ago`
}
