export const MediaGallery = ({ mediaItems }) => {
  return (
    <div className="bg-card backdrop-blur-glass border border-card-border rounded-2xl p-6 shadow-glass">
      <h2 className="text-lg font-semibold text-card-foreground mb-4">Media</h2>
      <div className="grid grid-cols-3 gap-3">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden border border-card-border hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img
              src={item.url}
              alt={item.alt || `Media ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};