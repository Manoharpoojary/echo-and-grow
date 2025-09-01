import { ProfileCard } from "@/components/ProfileCard";
import { StatsCard, CircularProgress } from "@/components/StatsCard";
import { ConnectionsList } from "@/components/ConnectionsList";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import jordanProfile from "@/assets/jordan-profile.jpg";
import averyProfile from "@/assets/avery-profile.jpg";
import taylorProfile from "@/assets/taylor-profile.jpg";
import samProfile from "@/assets/sam-profile.jpg";
import miaProfile from "@/assets/mia-profile.jpg";

const Index = () => {
  const profileData = {
    name: "Jordan Smith",
    location: "Austin, TX",
    description: "Looking for pickup games and league teams",
    avatar: jordanProfile,
    tags: [
      { label: "Basketball", variant: "primary" },
      { label: "Point Guard", variant: "secondary" },
      { label: "Competitive", variant: "secondary" }
    ],
    connections: 86,
    score: 82
  };

  const connections = [
    { id: "1", name: "Avery Johnson", sport: "Basketball", avatar: averyProfile },
    { id: "2", name: "Taylor Kim", sport: "Volleyball", avatar: taylorProfile },
    { id: "3", name: "Sam Patel", sport: "Soccer", avatar: samProfile },
    { id: "4", name: "Mia Chen", sport: "Basketball", avatar: miaProfile }
  ];

  const availability = ["Sat", "Sun"];

  return (
    <div className="min-h-screen bg-gradient-primary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Profile Card */}
        <ProfileCard {...profileData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Connections Made */}
            <StatsCard
              title="Connections made"
              value="86"
              subtitle="Total"
            />

            {/* Social Score */}
            <StatsCard
              title="Social Score"
              value=""
              subtitle="Responsiveness, sportsmanship, reach"
            >
              <CircularProgress value={82} max={100} />
            </StatsCard>

            {/* Matches Played */}
            <StatsCard
              title="Matches Played"
              value="124"
            />

            {/* Win Rate */}
            <StatsCard
              title="Win Rate"
              value="62%"
            />

            {/* Avg Points */}
            <StatsCard
              title="Avg. Points"
              value="18.4"
            />

            {/* Preferred Days */}
            <StatsCard
              title="Preferred Days"
              value="Sat • Sun"
            />

            {/* Availability Calendar */}
            <div className="md:col-span-2">
              <AvailabilityCalendar availability={availability} />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <ConnectionsList connections={connections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;