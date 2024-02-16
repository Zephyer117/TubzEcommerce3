/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { RichText } from "./RichText";
import { PortableText } from "@portabletext/react";
import textContent from "@/sanity/schemas/textContent";

const About = () => {
  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <Image src="/" alt="/" width={50} height={50} />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Welcome to TUBz E-Commerce!</h1>
        <div className="px-[20px]">
          <div className="w-full ">
            <p>
              At TUBz E-Commerce, we are passionate about providing an
              unparalleled shopping experience for all your clothing needs.
              Established with a commitment to deliver quality fashion to every
              corner of Bangladesh, we take pride in being your go-to
              destination for the latest trends and timeless styles.
            </p>
          </div>
          <div>
            <div className="my-3">
              <h2 className="text-[2em] font-bold text-gray-600">
                {" "}
                Our Mission{" "}
              </h2>
              <p>
                Empowering individuals to express their unique style by offering
                a diverse range of high-quality clothing, we strive to make
                fashion accessible to everyone. At TUBz, we believe that what
                you wear is an expression of your identity, and our mission is
                to help you make that statement confidently.
              </p>
            </div>
            <div>
              <h2>What Sets Us Apart:</h2>
              <ul>
                <li>
                  Wide Range of Collections: From casual wear to formal attire,
                  we curate a diverse collection that caters to various tastes
                  and preferences. Whatever the occasion, you'll find the
                  perfect outfit at TUBz.
                </li>
                <li>
                  Quality Assurance: We understand the importance of quality in
                  fashion. That's why we source our fabrics carefully, ensuring
                  that each piece meets our high standards before it reaches
                  your closet.
                </li>
                <li>
                  Nationwide Reach: With a commitment to serving every corner of
                  Bangladesh, we've established a reliable and efficient
                  delivery network. Wherever you are, TUBz E-Commerce is just a
                  click away.
                </li>
              </ul>
            </div>
            <div>
              <h2>Our Story:</h2>
              <p>
                Founded with a vision to redefine the fashion landscape in
                Bangladesh, TUBz E-Commerce started as a small venture with big
                dreams. Over the years, our dedication to customer satisfaction,
                quality products, and a seamless shopping experience has helped
                us grow into a trusted name in the world of online clothing
                retail.
              </p>
            </div>
            <div>
              <h2>Get in Touch:</h2>
              <p>
                We value the relationship we build with our customers. If you
                have any questions, feedback, or just want to say hello, don't
                hesitate to reach out. Our customer support team is here to
                assist you.
              </p>
              <p>
                Thank you for choosing TUBz E-Commerce as your fashion
                destination. Join us on this style journey, and let's make every
                outfit a statement! Happy Shopping, The TUBz E-Commerce Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
