// About.js (or About.jsx)

import React from 'react';

function About() {
    return (
        // <div className="max-w-7xl h-screen overflow-y-hidden mx-auto box-border px-4 py-2 dark:bg-dark-background">
        //     <div>
        //         <h2 className="text-2xl font-bold mb-4 dark:text-white">About Us</h2>
        //         <p className="text-gray-700 dark:text-slate-400">
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
        //         </p>
        //         <p className="text-gray-700 dark:text-slate-400">
        //             Quisque luctus velit sit amet magna viverra laoreet. Pellentesque libero justo, semper at tempus vel, ultrices in ligula.
        //         </p>
        //     </div>

        // </div>
    <div className="bg-white  dark:bg-dark-background pt-2 text-left">
      <div className="max-w-7xl mx-auto box-border px-4 py-2 dark:bg-dark-background">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Project Title: TextUtils
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
           TextUtils is a web application that allows users to interact with text content in various ways. Whether you need to change the case of text, clear it, or view statistics about it, this tool provides a simple and user-friendly interface to perform these actions. Additionally, the project supports a dark mode for enhanced readability.
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Features:</h3>
        <ul className="list-disc pl-8 mb-4  ">
          <li className='text-gray-700 dark:text-gray-400'>
            <span className="text-gray-700 dark:text-white">Change to Uppercase:</span> Clicking the "Change to Uppercase" button will convert all the text to uppercase letters.
          </li>
          <li className='text-gray-700 dark:text-gray-400'>
            <span className="text-gray-700 dark:text-white">Change to Lowercase:</span> Clicking the "Change to Lowercase" button will convert all the text to lowercase letters.
          </li>
          <li className='text-gray-700 dark:text-gray-400'>
            <span className="text-gray-700 dark:text-white">Clear:</span> The "Clear" button allows you to remove all the text from the input area.
          </li>
        </ul>
        <ul className="list-disc pl-8 mb-4">
          <li className='text-gray-700 dark:text-gray-400'>
            <span className="text-gray-700 dark:text-white">Text Statistics:</span> The tool provides valuable information about the entered text:
            <ul className="list-disc pl-8">
              <li className='text-gray-700 dark:text-gray-400'>
                <span className="text-gray-700 dark:text-white">Word Count:</span> Displays the number of words in the text.
              </li>
              <li className='text-gray-700 dark:text-gray-400'>
                <span className="text-gray-700 dark:text-white">Character Count:</span> Shows the total number of characters, including spaces and special characters.
              </li>
              <li className='text-gray-700 dark:text-gray-400'>
                <span className="text-gray-700 dark:text-white">Reading Time:</span> Estimates the time required to read the text based on an average reading speed of 0.008 minutes per word.
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-400">
          <span className="font-semibold text-white">Dark Mode:</span> The application offers a dark mode, enhancing the user experience by reducing eye strain in low-light environments.
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Technology Stack:</h3>
        <p className="text-gray-700 dark:text-white">
          <span className="font-semibold text-gray-700 dark:text-gray-400">Frontend Framework:</span> React<br />
          <span className="font-semibold text-gray-700 dark:text-gray-400">Styling:</span> Tailwind CSS<br />
          <span className="font-semibold text-gray-700 dark:text-gray-400">State Management:</span> React `useState`
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Usage:</h3>
        <p className="text-gray-700 dark:text-gray-400">
          Users can enter or paste text into the input area. They can then apply transformations like changing the case or clearing the text. The tool provides instant feedback, allowing users to view text statistics and the transformed content. The dark mode option enhances readability in different lighting conditions.
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Why Use This Tool:</h3>
        <p className="text-gray-700 dark:text-gray-400">
          - Quickly manipulate text without the need for external software or code.<br />
          - Get insights into the structure and length of text content.<br />
          - Enhance the user experience with a dark mode option.
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Future Enhancements:</h3>
        <ul className="list-disc pl-8">
          <li className="text-gray-700 dark:text-gray-400">
            <span className="text-gray-700 dark:text-gray-400">Implement additional text transformation options (e.g., title case, sentence case).</span>
          </li>
          <li className="text-gray-700 dark:text-gray-400">
            <span className="text-gray-700 dark:text-gray-400">Add support for uploading text files.</span>
          </li>
          <li className="text-gray-700 dark:text-gray-400">
            <span className="text-gray-700 dark:text-gray-400">Improve the user interface for better usability.</span>
          </li>
        </ul>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">Contributions:</h3>
        <p className="text-gray-700 dark:text-gray-400">
          This project is open to contributions from the developer community. If you have ideas for enhancements or would like to contribute to the project, please feel free to submit pull requests or open issues on the project's GitHub repository.
        </p>
        <h3 className="text-xl font-semibold my-4 text-gray-800 dark:text-white">GitHub Repository:</h3>
        <a href="#" className="text-blue-500 hover:underline">https://github.com/iamsakshigupta/TextUtils.git</a>
      </div>
    </div>
  );
}



export default About;
