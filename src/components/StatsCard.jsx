export const StatsCard = ({ title, value, subtitle, children, className = "" }) => {
  return (
    <div className={`bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 ${className}`}>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold text-card-foreground">{value}</div>
          {subtitle && (
            <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>
          )}
        </div>
        {children && (
          <div className="ml-4">{children}</div>
        )}
      </div>
    </div>
  );
};

export const CircularProgress = ({ 
  value, 
  max, 
  size = 80, 
  strokeWidth = 8 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-card-foreground">
          {value}<span className="text-sm text-muted-foreground">/{max}</span>
        </span>
      </div>
    </div>
  );
};