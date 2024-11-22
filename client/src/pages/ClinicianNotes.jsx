import { useState } from 'react';

export default function ClinicianNotes() {
  const [formData, setFormData] = useState({
    clinicalNotes: '',
    diagnosis: '',
    treatmentPlan: '',
    medications: [{ name: '', dosage: '', frequency: '', duration: '' }],
    followUpInstructions: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMedicationChange = (index, e) => {
    const updatedMedications = [...formData.medications];
    updatedMedications[index][e.target.name] = e.target.value;
    setFormData({ ...formData, medications: updatedMedications });
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      medications: [...formData.medications, { name: '', dosage: '', frequency: '', duration: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here, you can send the data to your backend or perform additional processing.
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Clinician Notes and Treatment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Clinical Notes */}
        <div>
          <label className="block text-sm font-semibold">Clinical Notes</label>
          <textarea
            name="clinicalNotes"
            value={formData.clinicalNotes}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter clinical observations and findings."
          />
        </div>

        {/* Diagnosis */}
        <div>
          <label className="block text-sm font-semibold">Diagnosis</label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the patient's diagnosis."
          />
        </div>

        {/* Treatment Plan */}
        <div>
          <label className="block text-sm font-semibold">Treatment Plan</label>
          <textarea
            name="treatmentPlan"
            value={formData.treatmentPlan}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the treatment plan."
          />
        </div>

        {/* Medications */}
        <div>
          <label className="block text-sm font-semibold">Medications</label>
          {formData.medications.map((medication, index) => (
            <div key={index} className="space-y-2 mb-4 border p-4 rounded bg-gray-50">
              <div>
                <label className="block text-xs font-semibold">Medication Name</label>
                <input
                  type="text"
                  name="name"
                  value={medication.name}
                  onChange={(e) => handleMedicationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., Paracetamol"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold">Dosage</label>
                <input
                  type="text"
                  name="dosage"
                  value={medication.dosage}
                  onChange={(e) => handleMedicationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., 500mg"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={medication.frequency}
                  onChange={(e) => handleMedicationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., Twice daily"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={medication.duration}
                  onChange={(e) => handleMedicationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., 7 days"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addMedication}
            className="text-blue-500 text-sm underline"
          >
            + Add Another Medication
          </button>
        </div>

        {/* Follow-Up Instructions */}
        <div>
          <label className="block text-sm font-semibold">Follow-Up Instructions</label>
          <textarea
            name="followUpInstructions"
            value={formData.followUpInstructions}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Provide follow-up care instructions."
          />
        </div>

        {/* Additional Comments */}
        <div>
          <label className="block text-sm font-semibold">Additional Comments</label>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter any additional information."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded">
            Submit Notes
          </button>
        </div>
      </form>
    </div>
  );
}
