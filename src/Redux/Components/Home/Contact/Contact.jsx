import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className='contact_us_css' style={{ display: "flex", flexDirection: "column", margin: "50px" }}>
            <div className="contact_heading">
                <h2>Contact Me</h2>
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="contact_form">
                    <InputGroup className="mb-3" style={{ display: 'flex', gap: "10px", height: "60px" }}>
                        <Form.Control
                            placeholder="Enter your name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            required
                            style={{ fontSize: "20px" }}
                        />
                        <Form.Control
                            placeholder="Enter your email"
                            aria-label="email"
                            type='email'
                            aria-describedby="basic-addon1"
                            required
                            style={{ fontSize: "20px" }}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3" style={{ display: 'flex', gap: "10px", height: "60px" }}>
                        <Form.Control
                            placeholder="Enter your phone number"
                            aria-label="phone"
                            type='number'
                            aria-describedby="basic-addon1"
                            required
                            style={{ fontSize: "20px" }}
                        />
                        <Form.Control
                            placeholder="Enter your subject"
                            aria-label="subject"
                            aria-describedby="basic-addon1"
                            required
                            style={{ fontSize: "20px" }}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter your message" required style={{ height: "200px", fontSize: "20px" }} />
                    </InputGroup>
                </div>
                <div className="contact_button">
                    <motion.button className="contact_button_1" type="submit" whileHover={{
                        scale: 1.1, backgroundColor: "rgb(30,144,255)", color: 'rgb(255,255,255)'
                    }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ height: "50px", width: "250px", borderRadius: "20px", fontSize: "20px" }}
                    >Send Message</motion.button>
                </div>
            </form>
        </div>
    )
}

export default Contact