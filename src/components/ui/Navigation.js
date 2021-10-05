import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { FaWeight } from 'react-icons/fa';
import { GrSchedule } from 'react-icons/gr';
import { GiStrongMan } from 'react-icons/gi';


export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <GiStrongMan
                    className="block lg:hidden h-8 w-auto text-gray-300"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <GiStrongMan
                    className="hidden lg:block h-8 w-auto text-gray-300"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="block ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      Schedule
                      <GrSchedule
                        className="ml-1 bg-white"
                      />
                    </a>
                    <a
                      href="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      History
                      <FaWeight
                        className="ml-1"
                      />
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
