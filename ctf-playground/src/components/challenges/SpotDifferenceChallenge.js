import React, { useState } from 'react';

const SpotDifferenceChallenge = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a logic check for the expected answer
        const expectedAnswer = '1mD!ff3rent'; // Replace with the actual result of the exploit

        if (input === expectedAnswer) {
            setMessage('Congratulations! You successfully solved the challenge.');
        } else {
            setMessage('Incorrect result. Please try again.');
        }
    };

    const downloadJpg = () => {
        const element = document.createElement("a");
        element.href = "/im_different.png"; // Path to the file in the public directory
        element.download = "im_different.png";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Spot the Difference: Forensics Challenge</h1>
            <p className="mb-4">
                In this challenge, you need to analyze a file.
            </p>
            <button onClick={downloadJpg} className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4">
                Download File
            </button>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Exploit Result: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter result of your exploit" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default SpotDifferenceChallenge;
