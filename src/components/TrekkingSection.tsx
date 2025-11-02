import OffersSection, { sampleOfferCards } from './OffersSection';

export default function TrekkingSection() {
  // For trekking, we can use all cards or create specific trekking cards
  const trekkingCards = sampleOfferCards;

  return (
    <OffersSection
      title='Trekking Adventures'
      tabs={[
        { id: 'easy', label: 'Easy' },
        { id: 'moderate', label: 'Moderate' },
        { id: 'difficult', label: 'Difficult' },
        { id: 'extreme', label: 'Extreme' },
      ]}
      cards={trekkingCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
