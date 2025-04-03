import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingData, setBookingData] = useState([]);

  const timeSlots = [
    '06:00 AM - 07:00 AM',
    '07:00 AM - 08:00 AM',
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
    '10:00 PM - 11:00 PM',
    '11:00 PM - 12:00 AM',
  ];

  useEffect(() => {
    axios
      .get('https://turf-webapp.onrender.com/api/booking')
      .then((response) => {
        setBookingData(response.data);
        console.log('Booking data:', response.data);
      })
      .catch((error) => {
        // console.error('Error fetching bookings:', error);
        setErrorMessage('Failed to load booking data. Please try again.');
      });

  }, []);
  console.log(bookingData);
  const allBookedSlots = bookingData.flatMap((booking) => booking.slotTimes);
  // console.log(allBookedSlots);




  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime('');
    setIsBooked(false);
    setErrorMessage('');
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime((prevSelected) =>
      prevSelected.includes(time)
        ? prevSelected.filter((t) => t !== time) // Remove if already selected
        : [...prevSelected, time] // Add if not selected
    );
  };


  const handleBookNow = async () => {
    if (!selectedDate || selectedTime.length === 0 || !userName || !userPhone) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Check if any selected time slot is already booked
    // const selectedTimeSlots = Object.values(bookingData).flatMap((booking) => booking.slotTimes);
    // console.log('selectedTime:', selectedTimeSlots);

    const isAlreadyBooked = selectedTime.some((time) =>
      bookingData.some(
        (booking) => booking.date === selectedDate && allBookedSlots.includes(time)
      )
    );

    if (isAlreadyBooked) {
      setErrorMessage('One or more selected time slots are already booked. Please choose another.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post(
        'https://turf-webapp.onrender.com/api/request-booking',
        {
          userName,
          userPhone,
          slotTimes: selectedTime, // Send an array of selected slots
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
        setSelectedTime([]); // Clear selected times
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      // console.error('Error booking slot:', error);
      setErrorMessage('Error while booking. Please check your details and try again.');
    } finally {
      setIsLoading(false);
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
        <div className="mb-4">

          {/* Color Legend */}
          <table className="table-auto w-full text-left text-sm text-gray-700 mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">
                  <span className="w-4 h-4 bg-gray-300 inline-block rounded mr-2"></span>
                  Confirmed (Unavailable)
                </td>
                <td className="px-4 py-2">Slot is already booked and unavailable.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <span className="w-4 h-4 bg-yellow-500 inline-block rounded mr-2"></span>
                  Pending (May be approved)
                </td>
                <td className="px-4 py-2">Slot is pending approval and may become available.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <span className="w-4 h-4 bg-green-500 inline-block rounded mr-2"></span>
                  Selected
                </td>
                <td className="px-4 py-2">Slot is selected by the user for booking.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <span className="w-4 h-4 bg-gray-100 inline-block border border-gray-400 rounded mr-2"></span>
                  Available
                </td>
                <td className="px-4 py-2">Slot is available for booking.</td>
              </tr>
            </tbody>
          </table>

          <div className="max-h-[250px] overflow-y-auto border border-gray-300 rounded-lg p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {timeSlots.map((time, index) => {
                const booking = bookingData.find(
                  (b) => b.date === selectedDate && b.slotTimes.includes(time)
                );

                const isConfirmed = booking?.status === 'confirmed';
                const isPending = booking?.status === 'pending';

                return (
                  <button
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                    className={`text-sm font-medium px-2 py-2 rounded-lg text-center transition-all ${isConfirmed
                        ? 'bg-gray-300 cursor-not-allowed text-gray-700'
                        : isPending
                          ? 'bg-yellow-500 text-white'
                          : selectedTime.includes(time)
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 hover:bg-green-500 hover:text-white'
                      }`}
                    disabled={isConfirmed || isLoading}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>


        </div>

      </div>

      <button
        onClick={handleBookNow}
        className={`w-full text-white px-6 py-2 rounded-lg ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
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
