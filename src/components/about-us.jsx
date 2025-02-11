import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';


function AboutUs() {
    const [showInfo, SetShowInfo] = useState(false);

    return (
        <div className="container mt-4">
            <button className="btn btn-danger text-dark mb-3"
                onClick={() => SetShowInfo(!showInfo)}
            >
                {showInfo ? "Hide Info" : "Show Info"}
            </button>

            {showInfo && (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>About us</Accordion.Header>
                        <Accordion.Body>
                            Welcome to <strong>Reactify</strong>, your trusted e-commerce platform for high-quality products at the best prices. 
                            We offer a seamless shopping experience with a wide range of categories, secure payments, and fast delivery. 
                            Our mission is to bring you the latest trends and essentials with convenience and reliability. 
                            Shop with confidence—quality and customer satisfaction are our top priorities! 🚀🛒
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Made With ❤️ By</Accordion.Header>
                        <Accordion.Body>
                            This website is created and powered by Mohamed Ennara, an ITI Intern specializing in the Python Full Stack Track. Designed with passion and expertise, it delivers a seamless user experience, combining innovative technology with intuitive design. 🚀✨
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )}
        </div>
    );
}

export default AboutUs;
