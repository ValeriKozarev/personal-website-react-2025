export default function Portfolio() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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

          {/* Work History Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Work History</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-slate-200 pl-6">
                <h3 className="text-2xl font-semibold">Job Title</h3>
                <p className="text-slate-600 mb-2">Company Name • 2020-Present</p>
                <p className="text-slate-700">
                  Description of role and accomplishments...
                </p>
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
