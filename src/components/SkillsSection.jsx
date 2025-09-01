import { Badge } from "@/components/ui/badge";

export const SkillsSection = ({ skills }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className={`text-xs px-3 py-1 font-medium text-white ${
              skill.type === 'primary' 
                ? 'bg-orange-500 hover:bg-orange-600' 
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};