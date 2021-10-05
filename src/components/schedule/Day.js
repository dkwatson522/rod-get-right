import Segment from './Segment';
import Button from '../ui/Button';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'
import { v4 as uuidv4 } from 'uuid';

// can change with : in props
const Day = ({ day, days, setDays }) => {
  const handleSegmentAdd = () => {
    const newSegment = {
      id: uuidv4(),
      exercises: []
    }

    const updatedDay = days.map((currentDay) => {
      if (currentDay.id !== day.id) return currentDay;
      return {...currentDay, segments: [...currentDay.segments, newSegment]}
    })
    console.log(updatedDay)
    setDays(updatedDay)
  }

  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl shadow-xl">
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <div className="absolute top-0 p-5 inline-block bg-yellow-600 rounded-xl shadow-lg transform -translate-y-1/2">
          <GiWeightLiftingUp className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <p className="mb-4 text-base text-gray-500">{day.dayOfWeek}</p>
        <h3 className="divide-y divide-gray-400 grid grid-cols-1 sm:grid-cols-1">
          {day.segments.map((segment) => (
            <Segment
              key={segment.id}
              segment={segment}
              handleSegmentAdd={handleSegmentAdd}
              day={day}
              days={days}
              setDays={setDays}
            />
          ))}
        </h3>
        <div className="flex justify-center">
          <Button
            handleAction={handleSegmentAdd}
            text={'Segment'}
            icon={<PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />}
            buttonAttributes={'text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
          />
        </div>
      </div>
    </div>
  );
}

export default Day;
