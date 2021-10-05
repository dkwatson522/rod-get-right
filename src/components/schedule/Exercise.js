import React, { useState } from 'react';
import UpdateExerciseForm from './UpdateExerciseForm';
import {
  XCircleIcon as XCircleIconSolid,
  PencilAltIcon as PencilAltIconSolid,
  // CheckCircleIcon as CheckCircleIconSolid
} from '@heroicons/react/solid';

const Exercise = ({ segment, exercise, handleSegmentChange }) => {
  const [updateExercise, setUpdateExercise] = useState(false);

  const handleExerciseUpdateToggle = () => {
    setUpdateExercise(!updateExercise)
  }

  const handleExerciseDelete = (id) => {
    const updatedExercises = segment.exercises.filter((currentExercise) => {
      return currentExercise.id !== id
    })

    const updatedSegment = {id: segment.id, exercises: [...updatedExercises]};

    handleSegmentChange(updatedSegment)
  }

  const handleExerciseUpdate = (updatedExercise) => {
    let updatedSegment = segment.exercises.map((currentExercise) => {
      if( currentExercise.id !== updatedExercise.id ) return currentExercise;
      return updatedExercise;
    })

    updatedSegment = {id: segment.id, exercises: [...updatedSegment]};
    handleSegmentChange(updatedSegment);
    handleExerciseUpdateToggle();
  }

  return (
    <div className="flex-col  my-2 relative rounded-lg border border-gray-900 bg-white px-6 py-5 shadow-sm items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 w-1/2">
      <div className="flex justify-between">
        <div className="flex-col ">
          <p className="text-sm font-medium text-gray-900">
            {exercise.name}
          </p>
          <p className="text-sm text-gray-500">
            {exercise.workout}
          </p>
        </div>
        <div>
          {/*<CheckCircleIconSolid
            className="h-6 w-6 text-green-400"
            onClick={() => console.log('Clicked to complete')}
            aria-hidden="true"
          />*/}
          <XCircleIconSolid
            className="h-6 w-6 text-red-400 pointerpointer-events-none"
            onClick={() => handleExerciseDelete(exercise.id)}
            aria-hidden="true"
          />
          <PencilAltIconSolid
            className="h-6 w-6 text-yellow-400"
            onClick={() => handleExerciseUpdateToggle()}
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        {
          updateExercise && <UpdateExerciseForm
            handleExerciseUpdateToggle={handleExerciseUpdateToggle}
            exercise={exercise}
            handleExerciseUpdate={handleExerciseUpdate}
          />
        }
      </div>
    </div>
  );
}

export default Exercise;
