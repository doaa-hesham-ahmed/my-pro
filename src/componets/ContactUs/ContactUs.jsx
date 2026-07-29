import React, { useState } from "react";
import HomeStyle from "./ContactUs.module.css";

import {
    FaUser,
    FaEnvelope,
    FaCommentDots,
    FaBox,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane
} from "react-icons/fa";


export default function ContactUs() {


    const [formData, setFormData] = useState({

        name: "",
        email: "",
        productName: "",
        phone: "",
        address: "",
        message: ""

    });

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e) {

        e.preventDefault();


        alert("Message Sent Successfully 😊");


        setFormData({

            name: "",
            email: "",
            productName: "",
            phone: "",
            address: "",
            message: ""

        });

    }
    return (

        <div className={HomeStyle.contactPage}>


            <div className={HomeStyle.contactCard}>


                <h2 className={HomeStyle.contactTitle}>
                    Contact Us
                </h2>


                <p className={HomeStyle.description}>
                    Have a question or want to add your favorite recipe?
                    Send us a message.
                </p>



                <form
                    onSubmit={handleSubmit}
                    className={HomeStyle.form}
                >



                    <div className="row">


                        <div className="col-md-6">

                            <div className={HomeStyle.inputBox}>

                                <FaUser />

                                <input

                                    type="text"

                                    name="name"

                                    placeholder="Your Name"

                                    value={formData.name}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                        </div>



                        <div className="col-md-6">

                            <div className={HomeStyle.inputBox}>

                                <FaEnvelope />

                                <input

                                    type="email"

                                    name="email"

                                    placeholder="Your Email"

                                    value={formData.email}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                        </div>


                    </div>





                    <div className="row">


                        <div className="col-md-6">


                            <div className={HomeStyle.inputBox}>


                                <FaBox />


                                <input

                                    type="text"

                                    name="productName"

                                    placeholder="Recipe Name"

                                    value={formData.productName}

                                    onChange={handleChange}

                                />


                            </div>


                        </div>




                        <div className="col-md-6">


                            <div className={HomeStyle.inputBox}>


                                <FaPhone />


                                <input

                                    type="tel"

                                    name="phone"

                                    placeholder="Phone Number"

                                    value={formData.phone}

                                    onChange={handleChange}

                                />


                            </div>


                        </div>


                    </div>





                    <div className={HomeStyle.inputBox}>


                        <FaMapMarkerAlt />


                        <input

                            type="text"

                            name="address"

                            placeholder="Address"

                            value={formData.address}

                            onChange={handleChange}

                        />


                    </div>





                    <div className={`${HomeStyle.inputBox} ${HomeStyle.textarea}`}>


                        <FaCommentDots />


                        <textarea

                            name="message"

                            placeholder="Your Message"

                            value={formData.message}

                            onChange={handleChange}

                            required

                        ></textarea>


                    </div>





                    <button
                        className={HomeStyle.sendBtn}
                        type="submit"
                    >

                        Send Message

                        <FaPaperPlane />

                    </button>



                </form>



            </div>


        </div>

    );

}