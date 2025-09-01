export const PreferencesSection = ({ preferences }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">Preferences</h2>
      <div className="space-y-3">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <span className="text-sm text-card-foreground font-medium">
              {Array.isArray(value) ? value.join(', ') : value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};