import OffersSection, { sampleOfferCards, sampleTabs } from './OffersSection';

export default function DealsAndOffers() {
  const handleExploreMore = () => {
    // TODO: Implement navigation to deals page or show more offers
    // This could navigate to a dedicated deals page or expand the current view
    // For now, this is a placeholder for future navigation logic
  };

  return (
    <OffersSection
      title='Exclusive Deals & Offers'
      tabs={sampleTabs}
      cards={sampleOfferCards}
      showExploreButton={false}
      showCarouselButton={true}
      onExploreMore={handleExploreMore}
    />
  );
}
