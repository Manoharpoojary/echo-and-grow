import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

export const MatchSetupModal = ({ playerName }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">
        Set up a match with {playerName}
      </h2>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        Propose time and place. {playerName} will confirm or suggest alternatives.
      </p>
      <div className="flex gap-3">
        <Button variant="outline" className="gap-2 flex-1">
          <Clock className="w-4 h-4" />
          Propose Time
        </Button>
        <Button variant="default" className="gap-2 flex-1">
          <CalendarDays className="w-4 h-4" />
          Invite to Game
        </Button>
      </div>
    </div>
  );
};