import { useState, useEffect } from 'react';
import Day from './Day';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STRAGE_KEY = 'fitnessTracker.days'

const DayList = () => {
  const sampleDays = [
    {
      id: uuidv4(),
      dayOfWeek: 'Monday',
      segments: [
        {
          id: uuidv4(),
          exercises: [
            {
              id: uuidv4(),
              name: 'pullup',
              workout: '5 sets of 20'
            },
            {
              id: uuidv4(),
              name: 'push up',
              workout: '5 sets of 20'
            }
          ]
        },
        {
          id: uuidv4(),
          exercises: [
            {
              id: uuidv4(),
              name: 'dips',
              workout: '5 sets of 20'
            },
          ]
        }
      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Tuesday',
      segments: [

      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Wednesday',
      segments: [

      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Thursday',
      segments: [

      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Friday',
      segments: [
        {
          id: uuidv4(),
          exercises: [
            {
              id: uuidv4(),
              name: 'stretch',
              workout: '20 mins'
            },
          ]
        }
      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Saturday',
      segments: [
        {
          id: uuidv4(),
          exercises: [
            {
              id: uuidv4(),
              name: 'stretch',
              workout: '20 mins'
            },
          ]
        }
      ]
    },
    {
      id: uuidv4(),
      dayOfWeek: 'Sunday',
      segments: [
        {
          id: uuidv4(),
          exercises: [
            {
              id: uuidv4(),
              name: 'rest',
              workout: ''
            },
          ]
        }
      ]
    },
  ];

  const [days, setDays] = useState(sampleDays);

  useEffect(() => {
    const dayJSON = localStorage.getItem(LOCAL_STRAGE_KEY)
    if (dayJSON != null) setDays(JSON.parse(dayJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STRAGE_KEY, JSON.stringify(days))
  }, [days])

  const handleDayChange = (id, day) => {
    const newDays = [...days]
    const index = newDays.findIndex(r => r.id === id)
    newDays[index] = day
    setDays(newDays)
  }

  return (
    <section
      className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-y-20">
        {days.map((day) => (
          <Day
            key={day.id}
            day={day}
            days={days}
            setDays={setDays}
            className="relative rounded-lg border border-gray-300 bg-blue-200 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            handleDayChange={handleDayChange}
          />
        ))}
      </div>
    </section>
  );
}

export default DayList;
