import OffersSection, { sampleOfferCards } from './OffersSection';

export default function HotelsSection() {
  // Filter cards for hotels only
  const hotelCards = sampleOfferCards.filter(card => card.category === 'Hotel');

  return (
    <OffersSection
      title='Best Hotel Deals'
      tabs={[
        { id: 'luxury', label: 'Luxury' },
        { id: 'budget', label: 'Budget' },
        { id: 'boutique', label: 'Boutique' },
        { id: 'resort', label: 'Resort' },
      ]}
      cards={hotelCards}
      showExploreButton={true}
      showCarouselButton={true}
    />
  );
}
