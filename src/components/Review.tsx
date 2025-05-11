import { motion } from "framer-motion";
import ReviewCard from "@/common/ReviewCard";
import React from "react";

export default function Review() {
  const testimonials = [
    {
      id: 1,
      username: "rob1025",
      country: "Romania",
      comment:
        "Delivered a very nice design in time and exceeded expectations. They understood very well.",
      countryCode: "ro",
    },
    {
      id: 2,
      username: "koyg01",
      country: "United States",
      comment:
        "Excellent work with little direction! Provided a clean design in Figma which I can take to the next level! I really appreciate the vision to append all of my ideas into one with someone who knows what they are doing in Figma. All of my own designs were baseless. They will get it done 1000% better!",
      countryCode: "us",
    },
    {
      id: 3,
      username: "wijaaak",
      country: "Indonesia",
      comment:
        "They are detailed and very critical at work. I am very happy to be able to work with a professional Agency like them.",
      countryCode: "id",
    },
    {
      id: 4,
      username: "peter_bovlk",
      country: "Slovakia",
      comment:
        "They were very kind and easy to work with. Their professionalism and responsiveness made the collaboration smooth and efficient. I highly recommend their services for anyone looking for quality work and a pleasant experience.",
      countryCode: "sk",
    },
    {
      id: 5,
      username: "foreachkid",
      country: "Czech Republic",
      comment:
        "Worked with them on redesigning existing site of about 7 pages. Communicated clearly and quickly made necessary revisions. Can't wait to work with him in the future.",
      countryCode: "cz",
    },
    {
      id: 6,
      username: "ecoliadam",
      country: "Ireland",
      comment:
        "It was great working with them. They provided an excellent service and were very helpful throughout the whole project. They communicated very well and kept me updated at all times. I would highly recommend them to anyone looking for help with their website design. 10/10",
      countryCode: "ie",
    },
    {
      id: 7,
      username: "fredoconthom",
      country: "United Kingdom",
      comment:
        "Happy with the work with them, I only gave a rough idea of what I wanted so I'm happy with what they came up with.",
      countryCode: "gb",
    },
    {
      id: 8,
      username: "ecoliadam",
      country: "Canada",
      comment:
        "Very attentive & easy to work with. Made revisions promptly and incorporated all feedback very well. Super flexible.",
      countryCode: "ca",
    },
    {
      id: 9,
      username: "frigidd",
      country: "Jamaica",
      comment:
        "Responds in a very timely manner, does excellent work. Definitely would recommend.",
      countryCode: "jm",
    },
    {
      id: 10,
      username: "slayoof",
      country: "United States",
      comment:
        "Rating: ⭐️⭐️⭐️⭐️⭐️ (5/5) I recently had the pleasure of experiencing a truly exceptional delivery service from this agency. From start to finish, the professionalism, responsiveness, and timely delivery left me thoroughly satisfied. I can confidently say that they went above and beyond to ensure a smooth and efficient experience.",
      countryCode: "us",
    },
    {
      id: 11,
      username: "boroamnesiac",
      country: "United Kingdom",
      comment:
        "Great cooperation. Our 2nd one and many new ones coming! Highly recommended.",
      countryCode: "gb",
    },
    {
      id: 12,
      username: "jacobfreedom",
      country: "Czech Republic",
      comment:
        "Loved working with MybusinessIdea, With having a team behind the project they made their work very easy to deal with. I recommended them to many of my team with their own personal Projects. Thank you very much!",
      countryCode: "cz",
    },
    {
      id: 13,
      username: "ruiassis999",
      country: "Portugal",
      comment:
        "Excellent original image creator. Consistently I'm able to voice an idea and MybusinessIdea is able to turn it into something an image that I'm amazed by. I highly recommend MybusinessIdea.",
      countryCode: "pt",
    },
    {
      id: 14,
      username: "joanneteo83",
      country: "Singapore",
      comment:
        "Seller is very efficient, fast delivery and innovative. Would definitely recommend him to my friends and relatives. Thank you for your patience and your time, designed logo is exactly the kind of feel I would like for my business. Appreciate.",
      countryCode: "sg",
    },
    {
      id: 15,
      username: "wildwildwest1",
      country: "United States",
      comment:
        "Great talent. Would definitely use again for any type of design. Made it super easy to create concepts and revise. We are very happy with our result.",
      countryCode: "us",
    },
    {
      id: 16,
      username: "groupanistage",
      country: "United States",
      comment:
        "Very good provider, he answered me as he requested, asking for some additional work related to the previous one.",
      countryCode: "us",
    },
    {
      id: 17,
      username: "aaronseeger",
      country: "Brazil",
      comment:
        "Awesome experience working with this team! Loved the designs he provided. I will definitely be reaching out again.",
      countryCode: "br",
    },
    {
      id: 18,
      username: "mjmagett",
      country: "United States",
      comment:
        "MybusinessIdea is always great to work with. I've been a continuing client for years and will keep coming back.",
      countryCode: "us",
    },
    {
      id: 19,
      username: "cbrymm",
      country: "United States",
      comment:
        "They are creative gifted graphic designer very easy to work with. I will continually use them on many projects.",
      countryCode: "us",
    },
  ];
  const continuousUpAnimation = {
    initial: { x: 0 },
    animate: {
      x: "-100%",
      transition: {
        duration: 200, // Slower duration for horizontal scroll
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  return (
    <section id="testimonials" className="bg-bg-secondary py-20">
      <div className="container mx-auto">
        <div className="lg:max-w-4xl md:max-w-3xl max-w-2xl px-5">
          <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-[#171717] font-medium">
            What Our Clients <br /> Say About Us
          </h1>
          <p className="text-[#4A4B54] text-[18px] mt-5">
            From startups to global enterprises, our clients share how our
            solutions have helped transform their businesses and drive success.
          </p>
        </div>

        {/* Single column with horizontal scroll */}
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex gap-6 w-max" // w-max makes container as wide as its content
            variants={continuousUpAnimation}
            initial="initial"
            animate="animate">
            {/* Original testimonials */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-[300px]">
                {" "}
                {/* Fixed width for each card */}
                <ReviewCard
                  username={testimonial.username}
                  country={testimonial.country}
                  comment={testimonial.comment}
                  countryCode={testimonial.countryCode}
                />
              </div>
            ))}

            {/* Duplicate testimonials for seamless looping */}
            {testimonials.map((testimonial) => (
              <div key={`dup-${testimonial.id}`} className="w-[300px]">
                <ReviewCard
                  username={testimonial.username}
                  country={testimonial.country}
                  comment={testimonial.comment}
                  countryCode={testimonial.countryCode}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
