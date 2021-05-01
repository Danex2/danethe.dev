import { FaCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

export default function Projects() {
  return (
    <>
      <section aria-label="Personal / Open Source Projects" className="mb-20">
        <h2 className="mb-2 text-2xl font-bold">Projects</h2>
        <p className="mb-10 text-gray-400">personal / open source projects</p>
        <div className="grid gap-10 ">
          {[
            {
              name: "Not Yahoo Answers",
              description:
                "With the news of Yahoo! Answers coming to and end I thought it would be fun to make somewhat of a clone of the famous forum. This isn't a full 1 to 1 copy of the website but mostly an excercise to try new technologies and get back into the habit of programming daily.",
              tech: [
                "Typescript",
                "Next.js",
                "TailwindCSS",
                "Prisma",
                "Postgres",
                "GraphQL",
                "Cypress",
              ],
              code: "https://github.com/nulfrost/not-yahoo-answers",
              website: "https://not-yahoo-answers.vercel.app",
            },

            {
              name: "QuickUI",
              description:
                "A website I made that let's people share their world of warcraft UI configurations quickly. User are able to share their UI code and to anyone that wants to use it all they have to do is import that code into the add-on. At the time I was just getting into the AWS ecosystem and was hearing a lot about amplify so I wanted to try it out. Auth was extremely easy to set up and creating a GraphQL API was very simple also. Overall I like the experience with Amplify if AWS was the only thing I could use.",
              tech: ["Typescript", "Next.js", "ChakraUI", "Prisma", "Postgres"],
              code: "https://github.com/nulfrost/quickui",
              website: "https://master.d3vtz7bmt2l79k.amplifyapp.com/",
            },
            {
              name: "giyu",
              description:
                " Extremely simple express logger middleware. I liked the style of the loggers that I used when I was working with golang so I made one for Express with a similar log format.",
              tech: ["Typescript", "Node"],
              code: "https://github.com/nulfrost/giyu",
              website: "https://github.com/nulfrost/giyu",
            },
            {
              name: "jobber",
              description:
                "Very basic frontend application using Next.js and ChakraUI. Fetches data from the github jobs API. Jobs can be filtered by the title or description as well as sorting based on date.",
              tech: ["Typescript", "Next.js", "ChakraUI"],
              code: "https://github.com/nulfrost/jobber",
              website: "https://jobber-chi.vercel.app/",
            },
          ].map(({ name, description, tech, code, website }) => (
            <div className="flex flex-col" key={name}>
              <p className="mb-3 text-2xl font-bold">{name}</p>
              <ul className="flex mb-3 space-x-3">
                <li>
                  <a
                    href={code}
                    className="mb-4 text-lg text-gray-400 duration-150 hover:text-gray-600"
                    target="_blank"
                  >
                    <FaCode className="text-lg" />
                  </a>
                </li>
                <li>
                  <a
                    href={website}
                    className="mb-4 text-lg text-gray-400 duration-150 hover:text-gray-600"
                    target="_blank"
                  >
                    <GoBrowser />
                  </a>
                </li>
              </ul>
              <p className="mb-4 text-gray-500 lg:text-lg">{description}</p>
              <span className="mt-auto text-sm font-semibold">
                {tech.join(" • ")}
              </span>
            </div>
          ))}
        </div>
      </section>
      <hr
        style={{
          borderTop: "5px solid #7E90A0",
          marginBottom: "2.5rem",
        }}
      />
    </>
  );
}