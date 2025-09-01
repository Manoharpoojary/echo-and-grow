export const AboutSection = ({ description }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">About</h2>
      <p className="text-card-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};