import React, { useState } from 'react';
import { socials } from '../content/socials';
import { connect } from '../content/connect-content';
import { useForm, ValidationError } from '@formspree/react';

const Connect = ({ language, isActive }) => {
    const { heading, subheading, form } = connect[0];
    const [state, handleSubmit] = useForm("xwpllwlw");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { email } = formData;
        if (!email) {
            setErrorMessage(form.event.mandatory[language]);
        } else {
            setErrorMessage('');
            handleSubmit(event);
        }
    };

    return (
        <div className={`
            h-full flex flex-col xl:flex-row gap-6 p-4 xl:p-10
        `}>
            <div className={`
                transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-0'}
                w-full flex flex-col justify-start xl:justify-center items-center
            `}>
                <p className="font-bold">{heading[language]}</p>
                <p>{subheading[language]}</p>
                <a
                    href={socials[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social pt-2"
                    aria-label={socials[0].label}
                >
                    {socials[0].svg}
                </a>
            </div>

            <div className="w-full p-1 overflow-hidden">
                <form
                    onSubmit={handleFormSubmit}
                    className={`
                        transition-transform duration-500 ${isActive ? 'translate-x-0' : 'translate-x-full'}
                        w-full flex flex-col gap-6
                    `}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">{form.name[language]}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="h-8 rounded-sm p-1"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">{form.email[language]}<span className="font-bold text-red-500 p-1">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-8 rounded-sm p-1"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">{form.message[language]}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="h-[18dvh] xl:h-[28dvh] rounded-sm p-1"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="text-center xl:text-left">
                        <button
                            type="submit"
                            className={`
                                transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-0'}
                                cursor-pointer
                                border border-black-primary
                                w-24 py-2 rounded-sm
                                hover:scale-105 active:bg-black-primary active:text-white-primary
                                transition ease-in-out
                            `}
                            disabled={state.submitting}
                        >
                            {form.submit[language]}
                        </button>
                    </div>
                    {state.succeeded && <p className="bg-green-500 mt-2 text-white rounded-lg p-2 font-bold">{form.event.success[language]}</p>}
                    {errorMessage && <p className="bg-red-500 mt-2 text-white rounded-lg p-2 font-bold">{errorMessage}</p>}
                    {state.errors && <p className="bg-red-500 mt-2 text-white rounded-lg p-2 font-bold">{form.event.error[language]}</p>}
                </form>
            </div>
        </div>
    );
};

export default Connect;