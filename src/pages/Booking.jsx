import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const timeSlots = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM',
  ];

  const [bookingData, setBookingData] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    axios
      .get('https://turf-webapp.onrender.com/api/booking')
      .then((response) => {
        setBookingData(response.data);
        console.log('Booking data:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        setErrorMessage('Failed to load booking data. Please try again.');
      });
  }, []);

  useEffect(() => {
    const slots = bookingData.map((booking) => booking.slotTime);
    setBookedSlots(slots);
  }, [bookingData, selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime('');
    setIsBooked(false);
    setErrorMessage('');
  };

  const handleTimeSlotClick = (time) => {
    if (!bookedSlots.includes(time)) {
      setSelectedTime(time);
    }
  };

  const handleBookNow = async () => {
    if (!selectedDate || !selectedTime || !userName || !userPhone) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(''); // Reset error message before making the request

    try {
      const response = await axios.post(
        'https://turf-webapp.onrender.com/api/request-booking',
        {
          userName,
          userPhone,
          slotTime: selectedTime,
          date: selectedDate,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        setIsBooked(true);
        setUserName('');
        setUserPhone('');
        setSelectedDate('');
        setSelectedTime('');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }

      console.log('Booking response:', response?.data || 'No response');
    } catch (error) {
      console.error('Error booking slot:', error);
      setErrorMessage('Error while booking. Please check your details and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-5 container mx-auto max-w-md overflow-y-auto" style={{ maxHeight: '80vh' }}>
      <h2 className="text-2xl font-bold mb-4">Book Your Slot</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Your Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border"
          placeholder="Enter your name"
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
              disabled={bookedSlots.includes(time) || isLoading}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleBookNow}
        className={`w-full text-white px-6 py-2 rounded-lg ${
          isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </div>
        ) : (
          'Book Now'
        )}
      </button>

      {errorMessage && (
        <div className="mt-4 text-center text-red-500 font-semibold">
          🤔oops! {errorMessage}
          our team is working on it thanks for your patience.
        </div>
      )}

      {isBooked && (
        <div className="mt-4 text-center text-green-500 font-semibold">
        your request for reservation has been received our team will contact you soon 😊
        </div>
      )}
    </div>
  );
};

export default BookingSchedule;
