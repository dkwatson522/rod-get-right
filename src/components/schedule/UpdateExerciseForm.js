import React, { useState} from 'react';
import Button from '../ui/Button';

const UpdateExerciseForm = ({ handleExerciseUpdate, handleExerciseUpdateToggle, exercise }) => {

  const [name, setName] = useState(exercise.name);
  const [workout, setWorkout] = useState(exercise.workout);

  const handleNameInput = (e) => {
    setName(e.target.value)
  }

  const handleWorkoutInput = (e) => {
    setWorkout(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Provide a name for the workout')
    }
    handleExerciseUpdate({ id: exercise.id, name, workout });
    handleExerciseUpdateToggle();
    setName('');
    setWorkout('');
  }
  return (
    <>
      <form className="space-y-8 divide-y divide-gray-200" onSubmit={onSubmit}>
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Update Exercise</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">This will update the workout for this segment.</p>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => handleNameInput(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="workout" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Workout
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="workout"
                    id="workout"
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    value={workout}
                    onChange={(e) => handleWorkoutInput(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-center">
            <Button
              text={'Cancel'}
              handleAction={handleExerciseUpdateToggle}
              buttonAttributes={'bg-white text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'}
            />
            <button
              type="submit"
              className="ml-3 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdateExerciseForm;
