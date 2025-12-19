import WorkExperienceCard from "../components/WorkExperienceCard";

export default function Portfolio() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Work History Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Work History</h2>
            <div className="space-y-8">
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
                summary={"TODO..."}
              />
              <WorkExperienceCard
                title={"Technology Analyst Intern"}
                company={"Credit Suisse"}
                timeStart={"Summer 2021"}
                timeEnd={""}
                summary={"TODO..."}
              />
              <WorkExperienceCard
                title={"Undergraduate Research Assistant (NCSU, Dr. Williams)"}
                company={"NCSU"}
                timeStart={"2019-'20 School Year"}
                timeEnd={""}
                summary={"TODO..."}
              />
              <WorkExperienceCard
                title={"Undergraduate Research Assistant (NCSU, Dr. Shen)"}
                company={"NCSU"}
                timeStart={"2018-'19 School Year"}
                timeEnd={""}
                summary={"TODO..."}
              />
              <WorkExperienceCard
                title={"Database Development Intern"}
                company={"PeopleFluent"}
                timeStart={"May 2017"}
                timeEnd={"Aug 2018"}
                summary={"TODO..."}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-slate-600 mb-4">
                  Project description goes here...
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <p className="text-slate-600">
                  React, TypeScript, Tailwind CSS, Next.js
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <p className="text-slate-600">Node.js, Python, PostgreSQL</p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-4xl font-bold mb-8">Education</h2>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-semibold">Degree Name</h3>
              <p className="text-slate-600">University Name • Year</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
