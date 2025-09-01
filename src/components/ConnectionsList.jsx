import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ConnectionsList = ({ connections }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-card-foreground">Connections</h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
          See all
        </Button>
      </div>
      <div className="space-y-3">
        {connections.map((connection) => (
          <div key={connection.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="w-10 h-10 rounded-full object-cover border border-card-border"
              />
              <div>
                <p className="font-medium text-card-foreground text-sm">{connection.name}</p>
                <Badge variant="secondary" className="text-xs">
                  {connection.sport}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};