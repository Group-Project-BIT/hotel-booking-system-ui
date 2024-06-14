import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';

const EnquirySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Enquiry submitted', { name, email, message });
    setSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6">Enquire Now</h2>
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <span className="block sm:inline">Thank you! Your enquiry has been submitted.</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" color="blue">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EnquirySection;
