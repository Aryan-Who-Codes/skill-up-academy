import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white-800">
      <h1 className="text-3xl font-bold mb-4">Skill Up Academy Terms and Conditions</h1>
      
      <p>Welcome to Skill Up Academy! These terms and conditions outline the rules and regulations for the use of our website.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p>We employ the use of cookies. By accessing Skill Up Academy, you agreed to use cookies in agreement with the Skill Up Academy's Privacy Policy.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">License</h2>
      <p>Unless otherwise stated, Skill Up Academy and/or its licensors own the intellectual property rights for all material on Skill Up Academy. All intellectual property rights are reserved. You may access this from Skill Up Academy for your own personal use subjected to restrictions set in these terms and conditions.</p>
      <p><strong>You must not:</strong></p>
      <ul className="list-disc ml-6">
        <li>Republish material from Skill Up Academy</li>
        <li>Sell, rent or sub-license material from Skill Up Academy</li>
        <li>Reproduce, duplicate or copy material from Skill Up Academy</li>
        <li>Redistribute content from Skill Up Academy</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Hyperlinking to our Content</h2>
      <p>The following organizations may link to our Website without prior written approval:</p>
      {/* Add more content */}
      
      {/* More sections and content here */}
      
      <h2 className="text-xl font-semibold mt-8 mb-2">Change to the Terms and Conditions</h2>
      <p>We reserve the right to change these terms and conditions from time to time. By continuing to use the website after such changes, you are agreeing to be bound by the revised terms and conditions.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Information</h2>
      <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us.</p>

      <p>By agreeing to these terms and conditions, you acknowledge that you have read and understood them and agree to be bound by them while using the Skill Up Academy website.</p>
    </div>
  );
};

export default TermsAndConditions;
