interface AvailabilityCalendarProps {
  availability: string[];
}

export const AvailabilityCalendar = ({ availability }: AvailabilityCalendarProps) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Availability</h3>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`text-center p-3 rounded-lg border transition-all duration-200 ${
              availability.includes(day)
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "border-card-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};