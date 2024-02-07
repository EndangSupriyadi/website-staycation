import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ itemDetails, startBooking }) => {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const navigate = useNavigate();

  const updateData = (e) => {
    if (e.target.name === 'duration') {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === 'date') {
      setData({
        ...data,
        date: {
          ...data.date,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  useEffect(() => {
    if (itemDetails && itemDetails.price && itemDetails.unit) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      setData({
        ...data,
        duration: countDuration,
      });
    }
  }, [data.date.startDate, data.date.endDate, data, itemDetails]);

  useEffect(() => {
    if (itemDetails && itemDetails.price && itemDetails.unit) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      setData({
        ...data,
        date: {
          ...data.date,
          endDate: endDate,
        },
      });
    }
  }, [data, data.duration, itemDetails]);

  const startBookingHandler = () => {
    console.log('startBooking called');
    console.log('_id:', itemDetails ? itemDetails._id : 'N/A');
    console.log('duration:', data.duration);
    console.log('startDate:', data.date.startDate);
    console.log('endDate:', data.date.endDate);

    startBooking({
      _id: itemDetails ? itemDetails._id : null,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });

    navigate('/checkout');
  };

  if (!itemDetails || !itemDetails.price || !itemDetails.unit) {
    return <p>Item details not available</p>;
  }

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long will you stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBookingHandler}
      >
        Continue to Book
      </Button>
    </div>
  );
};

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func,
};

export default BookingForm;
