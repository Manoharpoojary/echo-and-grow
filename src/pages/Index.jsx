import { ProfileCard } from "@/components/ProfileCard";
import { StatsCard, CircularProgress } from "@/components/StatsCard";
import { ConnectionsList } from "@/components/ConnectionsList";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PreferencesSection } from "@/components/PreferencesSection";
import { MediaGallery } from "@/components/MediaGallery";
import { MatchSetupModal } from "@/components/MatchSetupModal";
import jordanProfile from "@/assets/jordan-profile.jpg";
import averyProfile from "@/assets/avery-profile.jpg";
import taylorProfile from "@/assets/taylor-profile.jpg";
import samProfile from "@/assets/sam-profile.jpg";
import miaProfile from "@/assets/mia-profile.jpg";
import media1 from "@/assets/media-1.jpg";
import media2 from "@/assets/media-2.jpg";
import media3 from "@/assets/media-3.jpg";

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

  const aboutDescription = "Point guard with a pass-first mindset and high basketball IQ. I love organizing pickup runs and entering local leagues. Open to scrimmages, training sessions, and weekend tournaments.";

  const skills = [
    { name: "Ball Handling", type: "primary" },
    { name: "Court Vision", type: "primary" },
    { name: "Perimeter Defense", type: "primary" },
    { name: "Fast Breaks", type: "secondary" }
  ];

  const preferences = {
    format: "5v5, 3v3",
    intensity: "Competitive + Fun",
    travelRadius: "Up to 10 miles",
    openTo: "Leagues • Tournaments • Pickup"
  };

  const mediaItems = [
    { url: media1, alt: "Basketball court design 1" },
    { url: media2, alt: "Basketball court design 2" },
    { url: media3, alt: "Basketball court design 3" },
    { url: media1, alt: "Basketball court design 4" },
    { url: media2, alt: "Basketball court design 5" },
    { url: media3, alt: "Basketball court design 6" }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Profile Card */}
        <ProfileCard {...profileData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
            </div>

            {/* About and Skills Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AboutSection description={aboutDescription} />
              <SkillsSection skills={skills} />
            </div>

            {/* Preferences and Availability Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PreferencesSection preferences={preferences} />
              <AvailabilityCalendar availability={availability} />
            </div>

            {/* Media Gallery */}
            <MediaGallery mediaItems={mediaItems} />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ConnectionsList connections={connections} />
            <MatchSetupModal playerName={profileData.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;