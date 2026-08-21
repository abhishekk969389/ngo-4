const fs = require('fs');

let aliases = `
// Dynamically extracted types
export type PageBannerData = NonNullable<NGOpageBannersData>[keyof NonNullable<NGOpageBannersData>];
export type BreadcrumbItem = NonNullable<PageBannerData['breadcrumbs']>[number];

export type NgoBlogCardItem = NonNullable<NGOblogsSectionData>['cards'][number];
export type NgoBlogPageSection = NonNullable<NGOblogPageSectionData>;

export type CaseStudyDetailItem = NonNullable<NGOcaseStudyDetailsData>[keyof NonNullable<NGOcaseStudyDetailsData>];
export type CaseStudyGallery = CaseStudyDetailItem['gallery'];
export type CaseStudyImpact = CaseStudyDetailItem['impact'];
export type CaseStudyStory = CaseStudyDetailItem['story'];
export type CaseStudyOverview = CaseStudyDetailItem['overview'];
export type NgoCaseStudySection = NonNullable<NGOcaseStudySectionData>;
export type NgoCaseStudyCard = NgoCaseStudySection['cards'][number];

export type EventDetailItem = NonNullable<NGOeventDetailsData>[keyof NonNullable<NGOeventDetailsData>];
export type NgoEventSection = NonNullable<NGOeventSectionData>;
export type NgoEventCard = NgoEventSection['cards'][number];

export type TeamSectionData = NonNullable<NGOteamSectionData>;
export type TeamMember = TeamSectionData['members'][number];

export type PortfolioDetailItem = NonNullable<NGOportfolioDetailsData>[keyof NonNullable<NGOportfolioDetailsData>];
export type PortfolioDetailContentData = PortfolioDetailItem['content'];
export type PortfolioDetailCtaData = PortfolioDetailItem['cta'];
export type PortfolioDetailHeaderData = PortfolioDetailItem['header'];
export type PortfolioDetailSidebarData = PortfolioDetailItem['sidebar'];

export type ServiceDetailItem = NonNullable<NGOserviceDetailsData>[keyof NonNullable<NGOserviceDetailsData>];
export type ServiceFeaturesApproachData = ServiceDetailItem['featuresApproach'];
export type ServiceHeaderData = ServiceDetailItem['header'];
export type ServiceImpactCtaData = ServiceDetailItem['impactCta'];
export type NgoServiceItem = NonNullable<NGOservicesSectionData>['items'][number];

export type NgoBranchesSection = NonNullable<NGObranchesSectionData>;
export type NgoBrochureSection = NonNullable<NGObrochureSectionData>;

export type NgoCareersSection = NonNullable<NGOcareersSectionData>;
export type NgoCareerApplyForm = NonNullable<NgoCareersSection['applyForm']>;

export type NgoContactUsSection = NonNullable<NGOcontactUsSectionData>;
export type NgoContactSection = NonNullable<NGOcontactSectionData>;
export type NgoSupportContactField = NgoContactSection['form']['fields'][number];
export type NgoSupportContactMethod = NgoContactSection['contactMethods'][number];

export type NgoCsrInitiativeItem = NonNullable<NGOcsrInitiativesSectionData>['items'][number];
export type NgoFocusAreaCard = NonNullable<NGOfocusAreaSectionData>['cards'][number];
export type NgoGoalItem = NonNullable<NGOgoalsSectionData>['items'][number];
export type NgoImpactGlanceStat = NonNullable<NGOimpactGlanceSectionData>['stats'][number];
export type NgoImpactStat = NonNullable<NGOimpactSectionData>['stats'][number];

export type NgoDonateSection = NonNullable<NGOdonateSectionData>;
export type NgoTogetherDonateSection = NonNullable<NGOtogetherDonateSectionData>;
export type NgoEnquirySection = NonNullable<NGOenquirySectionData>;

export type NgoFaqSection = NonNullable<NGOfaqSectionData>;
export type NgoFaqItem = NgoFaqSection['faqs'][number];

export type NgoGallerySection = NonNullable<NGOgallerySectionData>;
export type NgoGalleryCategory = NgoGallerySection['categories'][number];
export type NgoGalleryImageItem = NgoGallerySection['items'][number];

export type NgoVideoGallerySection = NonNullable<NGOvideoGallerySectionData>;
export type NgoVideoCategory = NonNullable<any>; // Manual needed?
export type NgoVideoItem = NgoVideoGallerySection['items'][number];

export type NgoMediaSection = NonNullable<NGOmediaSectionData>;
export type NgoMediaOutlet = NgoMediaSection['outlets'][number];

export type MissionPageSection = NonNullable<NGOmissionPageSectionData>;

export type NgoBecomePartnerSection = NonNullable<NGObecomePartnerSectionData>;

export type NgoPrivacyPolicySection = NonNullable<NGOprivacyPolicySectionData>;
export type NgoRefundPolicySection = NonNullable<NGOrefundPolicySectionData>;

export type NgoArticlesSection = NonNullable<NGOarticlesSectionData>;
export type NgoArticleCard = NgoArticlesSection['cards'][number];

export type NgoHelpCard = NonNullable<NGOhelpSectionData>['items'][number];

export type BannerProps = {
  data: any; 
};

export type NgoData = NonNullable<RawSiteData>['NGO'];
`;

fs.writeFileSync('scratch/generated_types.ts', aliases);
