import OffersSection, { sampleOfferCards } from './OffersSection';

export default function CabsSection() {
  // For cabs, we can use all cards or create specific cab cards
  const cabCards = sampleOfferCards;

  return (
    <OffersSection
      title='Cab & Transport Services'
      tabs={[
        { id: 'local', label: 'Local' },
        { id: 'outstation', label: 'Outstation' },
        { id: 'airport', label: 'Airport' },
        { id: 'luxury', label: 'Luxury' },
      ]}
      cards={cabCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
