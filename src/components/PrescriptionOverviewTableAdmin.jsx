import React from 'react';

const PrescriptionOverviewTableAdmin = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-500';
      case 'Rejected':
        return 'text-red-500';
      case 'Pending Review':
        return 'text-yellow-500';
      default:
        return 'text-black';
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Overview of prescribed medications</h2>
        <p className="text-gray-400 text-sm">See All</p>
      </div>
      <table className="w-full bg-gray-50">
        <thead>
          <tr>
          <th className="px-4 py-2 text-gray-400 text-center">DATE</th>
            <th className="px-4 py-2 text-gray-400 text-center">PATIENT NAME</th>
            <th className="px-4 py-2 text-gray-400 text-center">MEDICATION</th>
            <th className="px-4 py-2 text-gray-400 text-center">DOSAGE</th>
            <th className="px-4 py-2 text-gray-400 text-center">INSTRUCTIONS</th>
            <th className="px-4 py-2 text-gray-400 text-center">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200">
            <td className="px-4 py-2 text-center">January 10, 2023</td>
            <td className="px-4 py-2 text-center">John Doe</td>
            <td className="px-4 py-2 text-center">Amoxcillin</td>
            <td className="px-4 py-2 text-center">500mg</td>
            <td className="px-4 py-2 text-center">Take with food. Finish full course</td>
            <td className={`px-4 py-2 font-bold ${getStatusColor('Approved')} text-center`}>Approved</td>
          </tr>
          <tr className="bg-gray-50 border-b border-gray-200">
          <td className="px-4 py-2 text-center">January 12, 2023</td>
            <td className="px-4 py-2 text-center">Jane Smith</td>
            <td className="px-4 py-2 text-center">Ibruprofen</td>
            <td className="px-4 py-2 text-center">200mg</td>
            <td className="px-4 py-2 text-center">Take every 6 hours as needed f..</td>
            <td className={`px-4 py-2 font-bold ${getStatusColor('Rejected')} text-center`}>Rejected</td>
          </tr>
          <tr className="bg-white border-b border-gray-200">
          <td className="px-4 py-2 text-center">January 15, 2023</td>
            <td className="px-4 py-2 text-center">Robert Johnson</td>
            <td className="px-4 py-2 text-center">Metformin</td>
            <td className="px-4 py-2 text-center">1000mg</td>
            <td className="px-4 py-2 text-center">Take with meals. Monitor blood..</td>
            <td className={`px-4 py-2 font-bold ${getStatusColor('Pending Review')} text-center`}>Pending Review</td>
          </tr>
          <tr className="bg-gray-50">
          <td className="px-4 py-2 text-center">January 18, 2023</td>
            <td className="px-4 py-2 text-center">Susan William</td>
            <td className="px-4 py-2 text-center">Loratadine</td>
            <td className="px-4 py-2 text-center">10mg</td>
            <td className="px-4 py-2 text-center">Take once daily for allergies.</td>
            <td className={`px-4 py-2 font-bold ${getStatusColor('Approved')} text-center`}>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PrescriptionOverviewTableAdmin;