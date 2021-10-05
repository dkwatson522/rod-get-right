import React, { useState } from 'react';
import Exercise from './Exercise';
import Button from '../ui/Button';
import AddExerciseForm from './AddExerciseForm';
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'

const Segment = ({ segment, day, days, setDays, handleSegmentAdd }) => {

  const [addExercise, setAddExercise] = useState(true);

  const handleExerciseFormToggle = () => {
    setAddExercise(!addExercise)
  }

  const handleSegmentChange = (updatedSegment) => {
    const segmentsofDay = day.segments.map((seg) => {
      if (seg.id !== segment.id) return seg;
      return updatedSegment
    })

    const updatedDay = {...day, segments: segmentsofDay}
    // console.log(updatedDay)
    const updatedWeek = days.map((currentDay) => {
      if (currentDay.id !== day.id) return currentDay;
      return updatedDay;
    })
    // console.log(updatedWeek)

    setDays(updatedWeek);
  }

  const handleExerciseAdd = (newExercise) => {
    const updatedSegment = {id: segment.id, exercises: [...segment.exercises, newExercise]};
    handleSegmentChange(updatedSegment);
    setAddExercise(!addExercise);
  }

  return (
    <div>
      <div
        className="p-5 flex justify-around items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        {segment.exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            segment={segment}
            handleSegmentChange={handleSegmentChange}
          />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        {
          addExercise && <Button
            handleAction={handleExerciseFormToggle}
            text={'Exercise'}
            buttonAttributes={'text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
            icon={<PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />}
          />
        }
        {
          !addExercise && <AddExerciseForm
          handleExerciseFormToggle={handleExerciseFormToggle}
          handleExerciseAdd={handleExerciseAdd}
          />
      }

      </div>
    </div>
  );
}

export default Segment;
