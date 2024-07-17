'use client'
const colors = [
    'bg-border',
    'bg-input',
    'bg-ring',
    'bg-background',
    'bg-foreground',
    'bg-primary',
    'bg-primary-foreground',
    'bg-secondary',
    'bg-secondary-foreground',
    'bg-destructive',
    'bg-destructive-foreground',
    'bg-muted',
    'bg-muted-foreground',
    'bg-accent',
    'bg-accent-foreground',
    'bg-popover',
    'bg-popover-foreground',
    'bg-card',
    'bg-card-foreground'
]
export default function () {
    return (
        <div className="m-4 grid grid-cols-2 gap-2 border">
            {colors.map(color => (
                <div key={color} className="flex flex-row gap-2">
                    <div className={`${color} h-10 w-20`} />
                    <p>{color}</p>
                </div>
            ))}


        </div>
    )
}