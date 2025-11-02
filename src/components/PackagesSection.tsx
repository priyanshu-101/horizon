import OffersSection, { sampleOfferCards } from './OffersSection';

export default function PackagesSection() {
  // Filter cards for packages only
  const packageCards = sampleOfferCards.filter(
    card => card.category === 'Package'
  );

  return (
    <OffersSection
      title='Travel Packages'
      tabs={[
        { id: 'domestic', label: 'Domestic' },
        { id: 'international', label: 'International' },
        { id: 'honeymoon', label: 'Honeymoon' },
        { id: 'family', label: 'Family' },
      ]}
      cards={packageCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
