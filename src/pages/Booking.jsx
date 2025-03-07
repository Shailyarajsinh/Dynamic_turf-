import React, { useState } from 'react';

const BookingSchedule = () => {
  // State for selected date and time slot
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  // Mock data for available time slots
  const timeSlots = [
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM',
    '08:00 PM - 10:00 PM',
  ];

  // Mock data for booked slots (for demonstration)
  const bookedSlots = ['12:00 PM - 02:00 PM', '04:00 PM - 06:00 PM'];

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime(''); // Reset time slot when date changes
    setIsBooked(false); // Reset booking status
  };

  // Handle time slot selection
  const handleTimeSlotClick = (time) => {
    if (!bookedSlots.includes(time)) {
      setSelectedTime(time);
    }
  };

  // Handle booking confirmation
  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
      alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
    } else {
      alert('Please select a date and time slot.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-5 container mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">Book Your Slot</h2>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-gray-700">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full px-4 py-2 rounded-lg border"
          min={new Date().toISOString().split('T')[0]} // Disable past dates
        />
      </div>

      {/* Time Slot Selection */}
      <div className="mb-4">
        <label className="block text-gray-700">Select Time Slot</label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(time)}
              className={`px-3 py-3 rounded-lg ${
                bookedSlots.includes(time)
                  ? 'bg-gray-300 cursor-not-allowed'
                  : selectedTime === time
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 hover:bg-green-500 hover:text-white'
              }`}
              disabled={bookedSlots.includes(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
      >
        Book Now
      </button>

      {/* Confirmation Message */}
      {isBooked && (
        <div className="mt-4 text-green-600">
          Booking confirmed for {selectedDate} at {selectedTime}!
        </div>
      )}
    </div>
  );
};

export default BookingSchedule;