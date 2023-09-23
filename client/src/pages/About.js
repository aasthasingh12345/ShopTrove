import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-ShopTrove"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          ShopTrove welcomes you to our distinguished e-commerce platform, where your shopping experience takes center stage. Founded with a fervent dedication to curating the finest products, our website boasts an extensive selection spanning fashion, electronics, home decor, and more. We take pride in our commitment to delivering the utmost convenience, staying at the forefront of innovation, and providing top-notch customer service and secure payment options to ensure your shopping journey is enjoyable and stress-free. ShopTrove is not just about commerce; it's a platform that values sustainability and ethical sourcing. We collaborate with eco-conscious brands and suppliers, offering eco-friendly and socially responsible products as part of our vision for a more responsible future. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
