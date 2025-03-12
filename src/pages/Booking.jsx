import React, { useState } from 'react';
import axios from 'axios';

const BookingSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM',
    '08:00 PM - 10:00 PM',
  ];

  const bookedSlots = ['12:00 PM - 02:00 PM', '04:00 PM - 06:00 PM'];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime('');
    setIsBooked(false);
  };

  const handleTimeSlotClick = (time) => {
    if (!bookedSlots.includes(time)) {
      setSelectedTime(time);
    }
  };

  const handleBookNow = async () => {
    if (selectedDate && selectedTime && userName && userPhone) {
      try {
        const response = await axios.post('http://localhost:5000/api/request-booking', 
          {
          userName,
          userPhone,
          slotTime: selectedTime,
          date: selectedDate,
        }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 200) {
          setIsBooked(true);
          alert('Booking request sent to the owner.');
        }
      } catch (error) {
        console.error('Error booking slot:', error);
        alert('Error booking your slot. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-5 container mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">Book Your Slot</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Your Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Your Phone</label>
        <input
          type="text"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full px-4 py-2 rounded-lg border"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

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

      <button
        onClick={handleBookNow}
        className="w-full bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
      >
        Book Now
      </button>

      {isBooked && (
        <div className="mt-4 text-green-600">
          Booking request sent for {selectedDate} at {selectedTime}!
        </div>
      )}
    </div>
  );
};

export default BookingSchedule;