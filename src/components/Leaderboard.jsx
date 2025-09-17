import React from 'react'
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  return (
     <div id='leader' className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Back Button */}
      <div className="w-full max-w-3xl mb-4">
        <Link
        to="/"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
      >
        ← Back
      </Link>


      </div>

      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-purple-600 text-2xl">🛡️</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Become a Steward</h1>
        <p className="text-gray-600">Help moderate and improve your community</p>
      </div>

      {/* No application found */}
      <div className="w-full max-w-3xl bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-5">
        ⚠️ No application found
      </div>

      {/* Eligibility Requirements */}
      <div className="w-full max-w-3xl bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Eligibility Requirements
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex justify-between items-center">
            <span>⭐ Minimum 100 reputation points</span>
            <span className="text-red-600">0 points ✖</span>
          </li>
          <li className="flex justify-between items-center">
            <span>📅 Account older than 30 days</span>
            <span className="text-red-600">N/A ✖</span>
          </li>
        </ul>
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-3 rounded-lg mt-4">
          ⚠️ You don't meet all the requirements yet. Keep participating in the
          community to increase your reputation!
        </div>
      </div>

      {/* How to Increase Reputation */}
      <div className="w-full max-w-3xl bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          How to Increase Your Reputation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Earn Points */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Earn Points By:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Reporting valid community issues (+10 points)</li>
              <li>Having your issues resolved (+20 points)</li>
              <li>Adding helpful comments (+5 points)</li>
              <li>Receiving upvotes on reports (+2 points each)</li>
            </ul>
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Best Practices:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Include clear photos with your reports</li>
              <li>Provide detailed descriptions</li>
              <li>Use accurate location information</li>
              <li>Engage constructively with the community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
