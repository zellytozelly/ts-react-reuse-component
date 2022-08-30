import { useEffect, useMemo, useState } from 'react'

const today = new Date()

const formatDay = (date: Date) => {
  return new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(date)
}

const formatCompactDateKR = (date: Date) => {
  return new Intl.DateTimeFormat('ko-KR').format(date)
}

const formatCompactDateUS = (date: Date) => {
  return new Intl.DateTimeFormat('en-US').format(date)
}

const formatTimeShort = (time: number) => {
  return new Intl.DateTimeFormat('ko-KR', { timeStyle: 'short' }).format(time)
}

const formatTimeMedium = (time: number) => {
  return new Intl.DateTimeFormat('ko-KR', { timeStyle: 'medium' }).format(time)
}

const Time = () => {
  const now = Date.now()
  const [time, setTime] = useState(0)

  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(now)
    }, 1000)
    return () => clearInterval(currentTime)
  }, [now])

  return (
    <section>
      <p>오늘은 {formatDay(today)}!</p>
      <p>한국식 날짜 / {formatCompactDateKR(today)}</p>
      <p>미국식 날짜 / {formatCompactDateUS(today)}</p>
      <p>현재 시간분 / {formatTimeShort(time)}</p>
      <p>현재 시간과 1~2초의 오차 / {formatTimeMedium(time)}</p>
    </section>
  )
}

export default Time
