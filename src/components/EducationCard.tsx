export interface IEducationCard {
    degree: string,
    school: string,
    year: string,
    gpa?: string,  // Optional GPA
    honors?: string[],  // Optional honors and societies
    logoUrl?: string  // Optional logo image URL
}

export default function EducationCard({ degree, school, year, gpa, honors, logoUrl }: IEducationCard) {
    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 flex gap-6">
            {/* Logo - hidden on mobile, shown on desktop */}
            {logoUrl && (
                <div className="hidden md:flex items-center flex-shrink-0">
                    <img
                        src={logoUrl}
                        alt={`${school} logo`}
                        className="w-32 h-32 object-contain"
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-2xl font-semibold">{degree}</h3>
                <p className="text-slate-600 mb-3">{school} • {year}{gpa && ` • GPA: ${gpa}`}</p>

                {honors && honors.length > 0 && (
                    <div>
                        <p className="text-sm font-medium text-slate-700 mb-1">Honors & Societies</p>
                        <ul className="text-slate-600 space-y-1">
                            {honors.map((honor, index) => (
                                <li key={index} className="flex gap-2 items-start">
                                    <span className="text-slate-400 select-none">•</span>
                                    <span>{honor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
