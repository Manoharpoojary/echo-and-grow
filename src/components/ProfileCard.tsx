import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, UserPlus } from "lucide-react";

interface ProfileCardProps {
  name: string;
  location: string;
  description: string;
  avatar: string;
  tags: Array<{ label: string; variant?: string }>;
  connections: number;
  score: number;
}

export const ProfileCard = ({
  name,
  location,
  description,
  avatar,
  tags,
  connections,
  score,
}: ProfileCardProps) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-card-border"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-card-foreground">{name}</h1>
            <p className="text-muted-foreground">{location} • {description}</p>
            <div className="flex gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={tag.variant === "primary" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {tag.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right mr-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>
                <strong className="text-card-foreground text-lg">{connections}</strong> Connections
              </span>
              <span>
                <strong className="text-card-foreground text-lg">{score}/100</strong> Score
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Message
            </Button>
            <Button variant="default" size="sm" className="gap-2">
              <UserPlus className="w-4 h-4" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};