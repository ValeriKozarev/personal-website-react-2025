export interface IWorkExperienceCard {
    title: string,
    company: string,
    timeStart: string,
    timeEnd: string,
    summary: string,
    isCurrent?: boolean  // optional prop used to highlight current role
}

export default function WorkExperienceCard({ title, company, timeStart, timeEnd, summary, isCurrent = false }: IWorkExperienceCard) {
    return (
        <div className={`pl-6 ${isCurrent ? 'border-l-2 border-slate-200' : ''}`}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-slate-600 mb-2">{company} • {timeStart}{timeEnd && ` - ${timeEnd}`}</p>
            <p className="text-slate-700">
                {summary}
            </p>
        </div>
    )
}