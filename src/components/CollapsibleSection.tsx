import { useState } from "react";

export interface ICollapsibleSection {
  children: React.ReactNode;
  collapsedHeight?: string;
  maxExpandedHeight?: string;
}

export default function CollapsibleSection({
  children,
  collapsedHeight = "300px",
  maxExpandedHeight = "3000px"
}: ICollapsibleSection) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        id="collapsible-content"
        className={`overflow-hidden transition-all duration-500 ease-in-out motion-reduce:transition-none`}
        style={{ maxHeight: isExpanded ? maxExpandedHeight : collapsedHeight }}
      >
        {children}
      </div>

      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent pointer-events-none z-0"></div>
      )}

      <div className="relative z-10 mt-6 text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="collapsible-content"
          className="px-6 py-2 text-sm font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-primary-300 hover:shadow-md hover:text-primary-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
