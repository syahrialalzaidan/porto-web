"use client";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaAws,
  FaCloud,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { TbBrandGolang, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import {
  SiCockroachlabs,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="text-white bg-[#161513] lg:py-6 flex flex-col gap-24 items-center px-[5%]">
        <Boxes />
        <section
          id="about"
          className="flex flex-col z-[70] items-center justify-center min-h-screen md:h-fit w-full lg:w-2/3 gap-4 md:gap-8"
        >
          <div className="w-[210px] aspect-square border-2 border-white bg-slate-300 rounded-full relative overflow-hidden">
            <Image
              src={"/yal-bi.jpeg"}
              fill={true}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            Hello 👋, My Name is <br />
            <span className="text-gradient">Mochamad Syahrial Alzaidan</span>
          </h2>

          <p className="text-[#C5C5C5] text-sm md:text-base text-center">
            I am an undergraduate{" "}
            <span className="project">Information System and Technology </span>
            student in{" "}
            <span className="experience">
              Bandung Institute of Technology
            </span>{" "}
            who is highly passionate in software engineering, project management
            and data. He has a high determination to success and really loves
            learning new things.
          </p>

          <div className="flex gap-4 text-[#C5C5C5] text-3xl md:text-4xl cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/mochamadsyahrialalzaidan/"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-110" />
            </Link>

            <Link href="https://github.com/syahrialalzaidan" target="_blank">
              <FaGithub className="hover:scale-110" />
            </Link>

            <Link
              href="https://www.instagram.com/syahrialzaidan/"
              target="_blank"
            >
              <FaInstagram className="hover:scale-110" />
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1XLGrnmoKLUlTQWS12oeBiOSRnsMRVk6h/view?usp=sharing"
              target="_blank"
              className="md:px-7 py-2 px-5 flex items-center justify-center md:py-4 text-black bg-white hover:text-white border hover:border-white hover:bg-transparent rounded-full"
            >
              <FaBook className="inline-block mr-2" />
              See My Resume
            </a>
          </div>
        </section>

        {/* tech stack */}
        <section
          data-aos="fade-up"
          id="tech"
          className="flex flex-col gap-6 items-center w-full"
        >
          <h1 className="text-[#C5C5C5] text-xl">EXPERIENCED WITH</h1>
          <div className="flex items-center justify-center flex-wrap gap-4 lg:gap-12">
            <TbBrandNextjs className="text-6xl tech-stack hover:scale-110" />
            <FaReact className="text-6xl tech-stack hover:scale-110" />
            <TbBrandTailwind className="text-6xl hover:scale-110 tech-stack" />
            <TbBrandGolang className="text-6xl hover:scale-110 tech-stack" />
            <FaPhp className="text-6xl hover:scale-110 tech-stack" />
            <SiCockroachlabs className="text-6xl hover:scale-110 tech-stack" />
            <SiPostgresql className="text-6xl hover:scale-110 tech-stack" />
            <FaAws className="text-6xl tech-stack hover:scale-110" />
            <SiTypescript className="text-6xl tech-stack hover:scale-110" />
            <FaNode className="text-6xl tech-stack hover:scale-110" />
            <SiPostman className="text-6xl tech-stack hover:scale-110" />
            <SiMongodb className="text-6xl tech-stack hover:scale-110" />
            <SiPrisma className="text-6xl tech-stack hover:scale-110" />
            <FaCloud className="text-6xl tech-stack hover:scale-110" />
            <FaPython className="text-6xl tech-stack hover:scale-110" />
          </div>
        </section>

        {/* projects */}
        <section
          data-aos="fade-up"
          id="project"
          className="w-full flex flex-col gap-8"
        >
          <h1 className="project font-bold text-center text-3xl md:text-4xl">
            PROJECTS
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-10 justify-center">
            <ProjectCard
              name="EpidemIT"
              image="/epidemit.png"
              link="https://main.d1iex298jj9b2k.amplifyapp.com/"
              description="Contributed to an inclusive IT education platform, integrated AI for enhanced learning and helps people with disabilities, provided financial support, utilized gamification for engagement."
            />

            <ProjectCard
              name="Klugee"
              image="/klugee.png"
              link="https://klugee.co.id/"
              description="A platform for you to find the best tutor for your children. Created the promotional, admin and course website of the company"
            />

            <ProjectCard
              name="Bersama Ashwa"
              image="/ashwa.png"
              link="https://bersamaashwa.com/"
              description="Mental Health Service that could help you to know about yourself."
            />

            <ProjectCard
              name="Danain"
              image="/danain.png"
              link="https://danain.site/"
              description="Danain is a website platform that allows investors and startup companies to meet. We believe innovation should get the funding it deserves, and we will facilitate its journey."
            />

            <ProjectCard
              name="Help Pals Therapy"
              image="/help-pals.png"
              link="https://helppalstherapy.com/"
              description="Help Pals Therapy is a platform that helps you control your mental health by monitoring your emotion day by day. Also, it could assess your mental health condition and give you a recommendation to improve your mental health."
            />

            <ProjectCard
              name="Wisata Karangsalam Lor"
              image="/desa.png"
              link="https://wisatakarangsalam.com/"
              description="Wisata Karangsalam Lor is a website that helps you to know more about Karangsalam Lor Village. It also helps you to book a homestay and get to know the village better."
            />
          </div>
        </section>

        {/* experience */}
        <section
          data-aos="fade-up"
          id="experience"
          className="w-full flex flex-col gap-8 mb-20"
        >
          <h1 className="experience font-bold text-center text-3xl md:text-4xl">
            EXPERIENCE
          </h1>
          <Experience
            title="Software Developer Intern at Telkom Indonesia"
            date="Sep 2024 - Present"
            logo="/telkom.png"
            description="Developed ICA using Next.js where I implemented new features to the system during my internship period"
          />

          <Experience
            title="Software Engineer Intern at Mostrans (Kalbe Group)"
            date="Apr 2024 - Present"
            logo="/mostrans_1.png"
            description="I developed an application using Deno with TypeScript, Recoil, React, and GraphQL, where I refactored existing code leveraging refactoring techniques and object-oriented programming (OOP) concepts. By implementing design patterns and adhering to clean code principles, I significantly enhanced code performance and maintainability."
          />

          <Experience
            title="Software Engineer Intern at Central Bank of Indonesia"
            date="Jun 2024 - Aug 2024"
            logo="/bi.png"
            description="Developed BI-Presence, a web-based application that provides a platform for the Bank Indonesia's employees to make attendance reports, leave requests, and other HR-related activities. I was responsible for developing the website using Vue.js, Tailwind CSS, and .NET Core, ensuring a seamless user experience and efficient data management."
          />

          <Experience
            title="Software Engineer at Inkubator IT"
            date="Mar 2023 - Feb 2024"
            logo="/iit.png"
            description="I've completed five website development projects for external clients and stakeholders in collaboration with fellow developers. These projects spanned diverse domains, addressing needs in mental health, village services, dormitories, and English language courses. I was entrusted by the IT Incubator of the HMIF ITB, overseeing projects with a cumulative value exceeding ±50 million Indonesian Rupiah."
          />

          <Experience
            title="Software Engineer at BIST League 6.0"
            date="Jul 2023 - Nov 2023"
            logo="/bislig.png"
            description="I collaborated with a team of 5 developers to design and build a competition-focused website, taking on the role of a full-stack developer. My responsibilities included implementing various features crucial for competition needs, such as registration, team creation, and dashboard functionalities. By leveraging my skills across the entire development stack, we successfully delivered a comprehensive web solution tailored to meet the specific requirements of the competition."
          />

          <Experience
            title="Web Developer Intern at Wesclic Indonesia Neotech"
            date="Jan 2023 - Apr 2023"
            logo="/wesclic.png"
            description=" I collaborated with a team of 5 developers to create a website for
          clients, where I played a key role in developing a middleware to
          seamlessly integrate the frontend with the backend of the company's
          site. Utilizing Next.js and Tailwind CSS, I successfully translated
          Figma designs into code, ensuring a cohesive and visually appealing user
          experience."
          />
        </section>
      </div>

      {/* footer */}
      <section
        id="contact"
        className="bg-[#161513]/70 px-[5%] py-12 text-white w-full flex flex-col gap-6"
      >
        <h1 className="font-semibold text-3xl">Any Questions? Hit me up!</h1>
        <p className="text-[#C5C5C5]">
          {"I'm"} open for any possible collaborations within my expertise.{" "}
          {"I'm"} also open for new opportunities towards my career development.
          If you have any questions or just want to say hi, feel free to contact
          me!
        </p>

        <Link
          href="mailto:syahrialalzaidan@gmail.com"
          target="_blank"
          className="flex gap-4"
        >
          <MdOutlineEmail className="inline-block mr-2 text-2xl" />
          <p>syahrialalzaidan@gmail.com</p>
        </Link>

        <Link
          href="https://wa.me/6281286320826"
          target="_blank"
          className="flex gap-4"
        >
          <FaWhatsapp className="inline-block mr-2 text-2xl" />
          <p>+62 812 8632 0826</p>
        </Link>

        <div className="h-[1px] bg-white w-full mt-4"></div>
        <p className="text-center">© Mochamad Syahrial Alzaidan 2024</p>
      </section>
    </>
  );
}
