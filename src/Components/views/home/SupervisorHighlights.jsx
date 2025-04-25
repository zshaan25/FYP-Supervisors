import React from 'react'

const SupervisorHighlights = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">Top Supervisors</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded shadow text-gray-800">Sir. Salman Irfan - Web Development</div>
        <div className="bg-blue-50 p-4 rounded shadow text-gray-800">Dr. Ahmed Raza - Cybersecurity</div>
        <div className="bg-blue-50 p-4 rounded shadow text-gray-800">Dr. Fatima Noor - Data Science</div>
      </div>
    </section>
  )
}

export default SupervisorHighlights