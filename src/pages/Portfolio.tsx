import WorkExperienceCard from "../components/WorkExperienceCard";
import ProjectCard from "../components/ProjectCard";
import Badge from "../components/Badge";
import EducationCard from "../components/EducationCard";
import CollapsibleSection from "../components/CollapsibleSection";

export default function Portfolio() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Work History</h2>
            <CollapsibleSection>
              <div className="space-y-8">
                <WorkExperienceCard
                  title={"Senior Software Engineer (promoted from Software Engineer II)"}
                  company={"Alarm.com"}
                  timeStart={"June 2022"}
                  timeEnd={"Present"}
                  summary={["Promoted to take ownership of team's web efforts, with expanded responsibilities including high-level project planning, managing mid-level engineers, and collaborating with leads on new initiatives.", "Owned a business-critical tool from design through deployment which processed millions of live, production accounts with a failure rate below 0.1%. This work directly unblocked more than a dozen high-impact projects across multiple departments.", "Served as a key engineer on a time-sensitive, high-visibility initiative that successfully migrated a large portion of the customer base to push notifications, directly reducing operational costs.", "Led initiatives to standardize accessibility testing and documentation which streamlined team workflows, improved productivity across departments, and improved company accessibility and UX posture.", "Participated in recurring Innovation Weeks, regularly delivering a new prototype or feature proposal grounded in real company needs. Wins include new integrations with AI to improve backlog ticket maintenance, internal web apps to increase developer productivity, and new accessibility-focused features in our product offering."]}
                  isCurrent={true}
                  technologies={["Ember", "TypeScript", "React", "C#", ".NET", "SQL"]}
                />
                <WorkExperienceCard
                  title={"Full-Stack Software Developer, MyChart"}
                  company={"Epic Systems"}
                  timeStart={"Aug 2020"}
                  timeEnd={"Jan 2022"}
                  summary={["Led and contributed to several large-scale, multi-release projects. Gained crucial experience managing projects, as well as designing and implementing new, major functionality for product users across various demographics.", "Developed novel approach for implementing decision trees in telemedicine self-triage flows as part of collaboration project with a third-party service.", "Key contributor to project for tracking patient COVID-19 vaccinations in MyChart app. Worked quickly and diligently to deliver high-impact work in unprecedented global circumstances.", "Consistently ranked as a top performer on my team."]}
                  technologies={["MUMPS", "C#", "ASP.NET", ".NET Core", "Angular"]}
                />
                <WorkExperienceCard
                  title={"Technology Analyst Intern"}
                  company={"Credit Suisse"}
                  timeStart={"Summer 2021"}
                  timeEnd={""}
                  summary={"Worked as part of a small, agile team to create a financial data chatbot. Responsible for implementing web-scraping functionality and integration with third-party machine-learning services such as Microsoft QnAMaker and LUIS."}
                  technologies={["Python", "Flask", "Django"]}
                />
                <WorkExperienceCard
                  title={"Undergraduate Research Assistant (NCSU, Dr. Williams)"}
                  company={"NCSU"}
                  timeStart={"2019-'20 School Year"}
                  timeEnd={""}
                  summary={["Contributed to ongoing projects and research centered around security and security education. Primary tasks included exploring tools that could aid the research team, configuring and maintaining test environments, and quantifying results.", "Co-author, “Do I really need all this work to find vulnerabilities?”, Empirical Software Engineering 27, 154 (2022).", "Co-author, “Structuring a Comprehensive Software Security Course Around the OWASP Application Security Verification Standard”, ICSE-JSEET 2021"]}
                  technologies={["Linux", "Python"]}
                />
                <WorkExperienceCard
                  title={"Undergraduate Research Assistant (NCSU, Dr. Shen)"}
                  company={"NCSU"}
                  timeStart={"2018-'19 School Year"}
                  timeEnd={""}
                  summary={"Collaboration project with Lawrence Livermore National Labs. Explored and quantified the results of different memory allocation techniques in high-performance computing clusters using CUDA C."}
                  technologies={["C", "CUDA C", "Python"]}
                />
                <WorkExperienceCard
                  title={"Database Development Intern"}
                  company={"PeopleFluent"}
                  timeStart={"May 2017"}
                  timeEnd={"Aug 2018"}
                  summary={"Re-wrote an internal export tool and improved the runtime over the previous solution by over 90%. Developed SQL queries for various business needs."}
                  technologies={["SQL", "C#", "Python"]}
                />
              </div>
            </CollapsibleSection>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Projects</h2>
            <CollapsibleSection collapsedHeight="400px">
              <div className="space-y-6">
              <ProjectCard
                title="Vibecheck"
                description="A single-page web app that leverages Spotify APIs to allow users to sign-in with their Spotify accounts to see their stats, visualize audio features of their playlists, and find new music! To me, this type of project is a perfect marriage of some of my main interests so I've loved working on it and iterating over the years!"
                technologies={["React", "TypeScript", "Tailwind", "Vite"]}
                projectUrl="https://github.com/ValeriKozarev/vibecheck_2.0"
              />
              <ProjectCard
                title="Cloudinator"
                description="My Senior Design project at NC State led by Michael DeHaan, the founder of Ansible. Cloudinator was an open-source automation platform to allow developers to more easily deploy and configure their Linux-based applications on various cloud platforms such as AWS and GCP. I was responsible for implementing the APIs for various AWS resources such as Load Balancers and Auto-scaling Groups, implementing deployment logic such as Blue/Green and Rolling deployments, and implementing various network topology elements such as Bastion Hosts and custom VPC configurations."
                technologies={["Python", "AWS", "GCP", "Git"]}
                projectUrl="https://sdc.csc.ncsu.edu/projects/2020/spring#4"
              />
              <ProjectCard
                title="Personal Website v3"
                description="This site you're on right now! I rewrite this site every few years to explore new tools, stay current with industry trends, and sharpen my skills. Previous versions used frameworks I was more familiar with at the time such as Nuxt.js and Vue which you can find on my GitHub."
                technologies={["React", "TypeScript", "Tailwind", "Vite"]}
                projectUrl="https://github.com/ValeriKozarev/personal-website-react-2025"
              />
              <ProjectCard
                title="Valerium"
                description="Network Security was one of my favorite classes that I took as an undergrad, and one of the things we learned about in that class was blockchain technology. I found myself inspired to learn more about how cryptocurrencies use blockchain technology and tried my hand at creating my very own simple cryptocurrency in Python! Valerium is the result of that effort, it is a simple cryptocurrency that allows users to commit transactions, mine blocks, and reach consensus via Flask endpoints."
                technologies={["Python", "Block-chain"]}
                projectUrl="https://github.com/ValeriKozarev/Valerium"
              />
              <ProjectCard
                title="Rendezvous"
                description="At the year hackathon hosted at NC State (PackHacks 2019), myself and three of my best friends created an app called Rendezvous which won the competition's MLH 'Best Use of Snapkit' Award! We used Swift and the new Creative Kit from the Snap API (which had released only ten days prior) to prototype a calendar app that allowed users to auto-generate unique stickers for their selected calendar events and post them to Snapchat."
                technologies={["Swift", "Snap API", "Python"]}
                projectUrl="https://devpost.com/software/rendezvous-7t20g1"
              />
              </div>
            </CollapsibleSection>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <div className="flex gap-2 flex-wrap">
                  {["React", "TypeScript", "Tailwind CSS", "Next.js", "Ember", "Vue", "Angular", "HTML", "CSS", "WCAG a11y"].map((skill, index) => (
                    <Badge key={index} label={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <div className="flex gap-2 flex-wrap">
                  {["Node.js", "C#", ".NET Standard", "Python", "SQL", "AWS", "Git"].map((skill, index) => (
                    <Badge key={index} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-4 pb-1 border-b-2 border-primary-500 inline-block">Education</h2>
            <EducationCard
              degree="Bachelor of Science, Computer Science (Statistics Minor)"
              school="North Carolina State University"
              year="2020"
              gpa="Summa Cum Laude"
              honors={["Dean's List", "NC State University Honors Program", "NC State Alpha Ultimate Frisbee Team"]}
              logoUrl="/ncstate-logo.png"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
