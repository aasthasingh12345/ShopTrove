import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><h4>1. Information Collection</h4>

We collect personal information, such as your name, email address, shipping address, and payment details, to process orders and provide a personalized shopping experience. We may also gather non-personal data, including browser information and IP addresses, to improve our website's performance and security.</p>
          <p><h4>2.Data Security</h4>

We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. Your payment information is encrypted using secure socket layer technology (SSL) for secure transactions.

</p>
          <p><h4>3. Cookies</h4>

Our website uses cookies to enhance your browsing experience. These cookies are used to remember your preferences and provide relevant content.</p>
          
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
