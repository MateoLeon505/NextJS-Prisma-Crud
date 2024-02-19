import React from "react";

const About = () => {
  return (
    <section className="container h-[calc(100vh-7rem)] justify-center xs:px-5 md:px-20 py-10">
        <h3 className="text-5xl font-bold my-5 text-center">About</h3>
        <div className="xs:text-xs sm:text-xl" >
          <p className="mb-7">
            I´m Mateo León. This project is a CRUD (Create, Read, Update, Delete) developed to manage tasks.
            This project uses Next.js, Rest API, Prisma, React icons and an SQLite database to store the tasks.
          </p>
          <p>
            The app allows users to add new tasks, edit details of existing tasks, and delete tasks.
          </p>
        </div>
    </section>
  );
};

export default About;
