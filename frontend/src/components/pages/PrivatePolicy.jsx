const PrivatePolicy = () => {
  return (
    <div className="min-h-[90vh] flex justify-center md:items-center mt-28  p-2 md:p-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h2>
        <p className=" text-lg md:text-xl text-gray-700 mb-4">
          At Shane and Simple, we take your privacy seriously. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website [shanesimple.com], including
          any other media form, media channel, mobile website, or mobile
          application related or connected thereto . Please read this privacy
          policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the site.
        </p>
        <p className=" text-lg md:text-xl text-gray-700 mb-4">
          We reserve the right to make changes to this Privacy Policy at any
          time and for any reason. We will alert you about any changes by
          updating the “Last Updated” date of this Privacy Policy. You are
          encouraged to periodically review this Privacy Policy to stay informed
          of updates. You will be deemed to have been made aware of, will be
          subject to, and will be deemed to have accepted the changes in any
          revised Privacy Policy by your continued use of the Site after the
          date such revised Privacy Policy is posted.
        </p>
        {/* Add more paragraphs as necessary */}

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Information We Collect
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          We may collect personal information from you such as your name or
          email address. For example, you may voluntarily submit information to
          the Site by leaving a comment, subscribing to a newsletter, or
          submitting a contact form.
        </p>
        {/* Add more paragraphs as necessary */}

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          How We Use Your Information
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We may use the information we collect from you when you register, make
          a purchase, sign up for our newsletter, respond to a survey or
          marketing communication, surf the website, or use certain other site
          features in the following ways:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-lg text-gray-700">
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li className="text-lg text-gray-700">
            To improve our website in order to better serve you.
          </li>
          {/* Add more list items as necessary */}
        </ul>
        {/* Add more paragraphs as necessary */}

        <p className="text-lg text-gray-700 mb-4">
          For the full Privacy Policy, please visit
          [shanesimple.com/privacy-policy].
        </p>
      </div>
    </div>
  );
};

export default PrivatePolicy;
