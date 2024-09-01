"use client";
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kos25vx', 'template_ezilump', form.current, '7V7JdsBg6f9KC6ddk')
        .then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Great!',
                text: 'Your message has been sent successfully',
                footer: '<a href="#">Go home</a>'
              });
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <>
        {/* Form section */}
        <div className="w-full max-w-7xl bg-blue-950 p-8 rounded-lg shadow-md mt-6">
            <form action="" className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="matricNumber" className="block text-sm font-medium text-gray-300">
                            Matric Number
                        </label>
                        <input
                            type="text"
                            id="matricNumber"
                            name="matricNumber"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="counselingCategory" className="block text-sm font-medium text-gray-300">
                            Counseling Category
                        </label>
                        <select
                            id="counselingCategory"
                            name="counselingCategory"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="academic">Academic</option>
                            <option value="personal">Personal</option>
                            <option value="career">Career</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>    
    );
};

export default contact;
