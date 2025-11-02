import OffersSection, { sampleOfferCards } from './OffersSection';

export default function ActivitiesSection() {
  // For activities, we can use all cards or create specific activity cards
  const activityCards = sampleOfferCards;

  return (
    <OffersSection
      title='Adventure Activities'
      tabs={[
        { id: 'trekking', label: 'Trekking' },
        { id: 'water-sports', label: 'Water Sports' },
        { id: 'cultural', label: 'Cultural' },
        { id: 'wildlife', label: 'Wildlife' },
      ]}
      cards={activityCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
