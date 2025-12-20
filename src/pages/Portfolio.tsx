import { useState } from "react";
import WorkExperienceCard from "../components/WorkExperienceCard";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import EducationCard from "../components/EducationCard";

export default function Portfolio() {
  const [showAllJobs, setShowAllJobs] = useState(false);

  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Work History</h2>
            <div className="relative">
              <div
                id="work-history-list"
                className={`space-y-8 overflow-hidden transition-all duration-500 ease-in-out motion-reduce:transition-none ${!showAllJobs ? 'max-h-[300px]' : 'max-h-[3000px]'}`}
              >
                <WorkExperienceCard
                  title={"Senior Software Engineer (promoted from Software Engineer II)"}
                  company={"Alarm.com"}
                  timeStart={"June 2022"}
                  timeEnd={"Present"}
                  summary={"TODO..."}
                  isCurrent={true}
                />
                <WorkExperienceCard
                  title={"Full-stack Software Developer, MyChart"}
                  company={"Epic Systems"}
                  timeStart={"Aug 2020"}
                  timeEnd={"Jan 2022"}
                  summary={["Lead and contributed to several large-scale, multi-release projects. Responsible for managing, designing, and implementing new, major functionality for product users across various demographics.", "Developed novel approach for implementing decision trees for telemedicine self-triage flows.", "Made significant contributions to COVID-19 vaccination efforts in MyChart in unprecedented circumstances during the COVID-19 pandemic.", " Consistently ranked as a top performer on my team."]}
                  technologies={["React", "TypeScript", "Node.js", "AWS"]}
                />
                <WorkExperienceCard
                  title={"Technology Analyst Intern"}
                  company={"Credit Suisse"}
                  timeStart={"Summer 2021"}
                  timeEnd={""}
                  summary={"Worked as part of a small, agile team to create a financial data chatbot. Responsible for implementing web-scraping functionality and integration with third-party machine-learning services such as Microsoft QnAMaker and LUIS."}
                />
                <WorkExperienceCard
                  title={"Undergraduate Research Assistant (NCSU, Dr. Williams)"}
                  company={"NCSU"}
                  timeStart={"2019-'20 School Year"}
                  timeEnd={""}
                  summary={["Contributed to on-going projects and research centered around security and security education. Primary tasks included exploring tools that could aid the research team, configuring and maintaining test environments, and quantifying results.", "Co-author, “Do I really need all this work to find vulnerabilities?”, Empirical Software Engineering 27, 154 (2022).", "Co-author, “Structuring a Comprehensive Software Security Course Around the OWASP Application Security Verification Standard”, ICSE-JSEET 2021"]}
                />
                <WorkExperienceCard
                  title={"Undergraduate Research Assistant (NCSU, Dr. Shen)"}
                  company={"NCSU"}
                  timeStart={"2018-'19 School Year"}
                  timeEnd={""}
                  summary={"Collaboration project with Lawrence Livermore National Labs. Explored and quantified the results of different memory allocation techniques in high-performance computing clusters using CUDA C."}
                />
                <WorkExperienceCard
                  title={"Database Development Intern"}
                  company={"PeopleFluent"}
                  timeStart={"May 2017"}
                  timeEnd={"Aug 2018"}
                  summary={"Re-wrote an internal export tool and improved the runtime over the previous solution by over 90%. Developed SQL queries for various business needs."}
                />
              </div>

              {!showAllJobs && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent pointer-events-none z-0"></div>
              )}

              <div className="relative z-10 mt-6 text-center">
                <button
                  onClick={() => setShowAllJobs(!showAllJobs)}
                  aria-expanded={showAllJobs}
                  aria-controls="work-history-list"
                  className="px-6 py-2 text-sm font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                >
                  {showAllJobs ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Projects</h2>
            <div className="space-y-6">
              <ProjectCard
                title="Project Title"
                description="Project description goes here..."
                technologies={["React", "TypeScript"]}
                githubUrl="https://github.com/ValeriKozarev/project-name"
              />
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <div className="flex gap-2 flex-wrap">
                  {["React", "Ember", "TypeScript", "Tailwind CSS", "Next.js", "HTML", "WCAG a11y"].map((skill, index) => (
                    <Badge key={index} label={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <div className="flex gap-2 flex-wrap">
                  {["Node.js", "C# and .NET Standard", "Python", "SQL"].map((skill, index) => (
                    <Badge key={index} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-sky-600 inline-block">Education</h2>
            <EducationCard
              degree="Bachelor's Degree, Computer Science (Statistics Minor)"
              school="North Carolina State University"
              year="2020"
              gpa="3.8"
              honors={["Summa Cum Laude", "Dean's List", "Phi Beta Kappa"]}
              logoUrl="/ncstate-logo.png"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
