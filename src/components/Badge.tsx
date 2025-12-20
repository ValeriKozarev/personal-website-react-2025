export interface IBadge {
    label: string,
    variant?: 'default' | 'primary'  // Can extend with more variants later
}

export default function Badge({ label, variant = 'default' }: IBadge) {
    const variantStyles = {
        default: 'bg-white text-slate-700 border border-slate-300',
        primary: 'bg-blue-100 text-blue-700'
    };

    return (
        <span className={`px-3 py-1 text-sm rounded-full ${variantStyles[variant]}`}>
            {label}
        </span>
    )
}
