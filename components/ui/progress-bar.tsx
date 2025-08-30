interface ProgressBarProps {
    current: number
    total: number
    label?: string
    showPercentage?: boolean
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'success' | 'warning' | 'danger'
}

export default function ProgressBar({
    current,
    total,
    label,
    showPercentage = true,
    size = 'md',
    variant = 'default',
}: ProgressBarProps) {
    const percentage = Math.min((current / total) * 100, 100)

    const sizeClasses = {
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
    }

    const variantClasses = {
        default: 'bg-gradient-to-r from-blue-500 to-purple-500',
        success: 'bg-gradient-to-r from-green-500 to-emerald-500',
        warning: 'bg-gradient-to-r from-yellow-500 to-orange-500',
        danger: 'bg-gradient-to-r from-red-500 to-pink-500',
    }

    return (
        <div className="w-full">
            {label && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                        {label}
                    </span>
                    {showPercentage && (
                        <span className="text-sm text-gray-500">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}

            <div
                className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}
            >
                <div
                    className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {!label && showPercentage && (
                <div className="text-right mt-1">
                    <span className="text-xs text-gray-500">
                        {current} / {total}
                    </span>
                </div>
            )}
        </div>
    )
}
