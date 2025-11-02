import OffersSection, { sampleOfferCards } from './OffersSection';

export default function CruiseSection() {
  // Filter cards for cruise only
  const cruiseCards = sampleOfferCards.filter(
    card => card.category === 'Cruise'
  );

  return (
    <OffersSection
      title='Cruise Adventures'
      tabs={[
        { id: 'domestic', label: 'Domestic' },
        { id: 'international', label: 'International' },
        { id: 'luxury', label: 'Luxury' },
        { id: 'family', label: 'Family' },
      ]}
      cards={cruiseCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
