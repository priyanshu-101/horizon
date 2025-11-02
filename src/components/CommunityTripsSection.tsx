import OffersSection, { sampleOfferCards } from './OffersSection';

export default function CommunityTripsSection() {
  // For community trips, we can use all cards or create specific community trip cards
  const communityCards = sampleOfferCards;

  return (
    <OffersSection
      title='Community Trips'
      tabs={[
        { id: 'weekend', label: 'Weekend' },
        { id: 'long-weekend', label: 'Long Weekend' },
        { id: 'festival', label: 'Festival' },
        { id: 'seasonal', label: 'Seasonal' },
      ]}
      cards={communityCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
