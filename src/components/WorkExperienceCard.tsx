import Badge from "./Badge";

export interface IWorkExperienceCard {
    title: string,
    company: string,
    timeStart: string,
    timeEnd: string,
    summary: string | string[],  // Can accept either a single string or array of bullet points
    isCurrent?: boolean,  // optional prop used to highlight current role
    technologies?: string[]  // optional array of technologies/skills used
}

export default function WorkExperienceCard({ title, company, timeStart, timeEnd, summary, isCurrent = false, technologies }: IWorkExperienceCard) {
    const isBulletList = Array.isArray(summary);

    return (
        <div className={`pl-6 ${isCurrent ? 'border-l-2 border-slate-200' : ''}`}>
            <h3 className="text-2xl font-semibold pb-1">{title}</h3>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-2">
                <p className="text-slate-600 mb-2 md:mb-0">{company} • {timeStart}{timeEnd && ` - ${timeEnd}`}</p>

                {technologies && technologies.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {technologies.map((tech, index) => (
                            <Badge key={index} label={tech} />
                        ))}
                    </div>
                )}
            </div>

            {isBulletList ? (
                <ul className="text-slate-700 space-y-2">
                    {summary.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                            <span className="text-slate-400 select-none">•</span>
                            <span className="flex-1">{item}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-slate-700">{summary}</p>
            )}
        </div>
    )
}