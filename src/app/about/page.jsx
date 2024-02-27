import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  return (
    <section className="container mx-auto px-5 md:px-20 py-10">
        <h3 className="text-5xl font-bold my-5 text-center">About</h3>
        <div className="xs:text-xs sm:text-xl" >
          <p className="mb-7">
            I´m Mateo León. This project is a CRUD (Create, Read, Update, Delete) developed to manage tasks.
            This project uses Next.js, Rest API, Prisma, React icons and an SQLite database to store the tasks.
          </p>
          <p className="mb-15">
            The app allows users to add new tasks, edit details of existing tasks and delete tasks.
          </p>
          <h3 className="text-3xl font-bold my-5 text-center">Find me on</h3>
          <div className="container flex row justify-center gap-10">
            <Link href='https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268/' target="blank">
              <FaLinkedin className="text-slate-400 text-5xl hover:text-white hover:scale-110 "/>
            </Link>
            <Link href='https://github.com/MateoLeon505' target="blank">
              <FaSquareGithub className="text-slate-400 text-5xl hover:text-white hover:scale-110"/>
            </Link>
          </div>
        </div>
    </section>
  );
};

export default About;
