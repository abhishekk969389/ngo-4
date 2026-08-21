import ngoDataJson from './ngoData_structured.json';

export type RawSiteData = typeof ngoDataJson;
export type NGOSchema = typeof ngoDataJson.NGO;
export type NGOSections = NGOSchema['sections'];
export type NGOTemplateComponents = NGOSchema['templateComponents'];

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

export type NGOTopbarData = NGOSections['Topbar']['variants']['NGOTopbar1'];
export type NGOHeaderData = NGOSections['Header']['variants']['NGOHeader1'];
export type NGOFooterData = NGOSections['Footer']['variants']['NGOFooter1'];
export type NGOBannerData = NGOSections['Banner']['variants']['NGOBanner1'];
export type NGOMissionData = NGOSections['Mission']['variants']['NGOMission1'];
export type NGOProgramsData = NGOSections['Programs']['variants']['NGOPrograms1'];
export type NGOCausesData = NGOSections['Causes']['variants']['NGOCauses1'];
export type NGOHowWeWorkData = NGOSections['HowWeWork']['variants']['NGOHowWeWork1'];
export type NGOGalleryData = NGOSections['Gallery']['variants']['NGOGallery1'];
export type NGOBlogData = NGOSections['Blog']['variants']['NGOBlog1'];
export type NGOTeamData = NGOSections['Team']['variants']['NGOTeam1'];
export type NGOTestimonialData = NGOSections['Testimonial']['variants']['NGOTestimonial1'];
export type NGOContactData = NGOSections['Contact']['variants']['NGOContact1'];
export type NGOFAQData = NGOSections['FAQ']['variants']['NGOFAQ1'];
export type NGOAboutData = NGOSections['About']['variants']['NGOAbout1'];
export type NGOMissionPageData = NGOSections['MissionPage']['variants']['NGOMissionPage1'];
export type NGOEventsData = NGOSections['Events']['variants']['NGOEvents1'];
export type NGOCareerData = NGOSections['Career']['variants']['NGOCareer1'];
export type NGOPrivacyPolicyData = NGOSections['PrivacyPolicy']['variants']['NGOPrivacyPolicy1'];
export type NGOSitemapData = NGOSections['Sitemap']['variants']['NGOSitemap1'];
export type NGOBlogDetailData = NGOSections['BlogDetail']['variants']['NGOBlogDetail1'];
export type NGObrandData = NGOSections['brand']['variants']['Legacy_brand'];
export type NGObannerData = NGOSections['banner']['variants']['Legacy_banner'];
export type NGOpageBannersData = NGOSections['pageBanners']['variants']['Legacy_pageBanners'];
export type NGOsitemapSectionData = NGOSections['sitemapSection']['variants']['Legacy_sitemapSection'];
export type NGOlegalSectionData = NGOSections['legalSection']['variants']['Legacy_legalSection'];
export type NGOaboutSectionData = NGOSections['aboutSection']['variants']['Legacy_aboutSection'];
export type NGOaboutStorySectionData = NGOSections['aboutStorySection']['variants']['Legacy_aboutStorySection'];
export type NGOwhatWeDoSectionData = NGOSections['whatWeDoSection']['variants']['Legacy_whatWeDoSection'];
export type NGOmissionPageSectionData = NGOSections['missionPageSection']['variants']['Legacy_missionPageSection'];
export type NGOservicesSectionData = NGOSections['servicesSection']['variants']['Legacy_servicesSection'];
export type NGOserviceDetailsData = NGOSections['serviceDetails']['variants']['Legacy_serviceDetails'];
export type NGOimpactSectionData = NGOSections['impactSection']['variants']['Legacy_impactSection'];
export type NGOimpactGlanceSectionData = NGOSections['impactGlanceSection']['variants']['Legacy_impactGlanceSection'];
export type NGOfocusAreaSectionData = NGOSections['focusAreaSection']['variants']['Legacy_focusAreaSection'];
export type NGOcsrInitiativesSectionData = NGOSections['csrInitiativesSection']['variants']['Legacy_csrInitiativesSection'];
export type NGOgoalsSectionData = NGOSections['goalsSection']['variants']['Legacy_goalsSection'];
export type NGOcommitmentSectionData = NGOSections['commitmentSection']['variants']['Legacy_commitmentSection'];
export type NGOarticlesSectionData = NGOSections['articlesSection']['variants']['Legacy_articlesSection'];
export type NGOcontactSectionData = NGOSections['contactSection']['variants']['Legacy_contactSection'];
export type NGOportfolioSectionData = NGOSections['portfolioSection']['variants']['Legacy_portfolioSection'];
export type NGOcaseStudySectionData = NGOSections['caseStudySection']['variants']['Legacy_caseStudySection'];
export type NGOeventSectionData = NGOSections['eventSection']['variants']['Legacy_eventSection'];
export type NGOhelpSectionData = NGOSections['helpSection']['variants']['Legacy_helpSection'];
export type NGOvisionPageSectionData = NGOSections['visionPageSection']['variants']['Legacy_visionPageSection'];
export type NGOcertificateSectionData = NGOSections['certificateSection']['variants']['Legacy_certificateSection'];
export type NGOcertificateAchievementSectionData = NGOSections['certificateAchievementSection']['variants']['Legacy_certificateAchievementSection'];
export type NGOteamSectionData = NGOSections['teamSection']['variants']['Legacy_teamSection'];
export type NGOourMissionData = NGOSections['ourMission']['variants']['Legacy_ourMission'];
export type NGOsmileCausesData = NGOSections['smileCauses']['variants']['Legacy_smileCauses'];
export type NGOtestimonialsData = NGOSections['testimonials']['variants']['Legacy_testimonials'];
export type NGOblogsSectionData = NGOSections['blogsSection']['variants']['Legacy_blogsSection'];
export type NGOmediaSectionData = NGOSections['mediaSection']['variants']['Legacy_mediaSection'];
export type NGOcareersSectionData = NGOSections['careersSection']['variants']['Legacy_careersSection'];
export type NGOpartnersSectionData = NGOSections['partnersSection']['variants']['Legacy_partnersSection'];
export type NGOpartnerCardsSectionData = NGOSections['partnerCardsSection']['variants']['Legacy_partnerCardsSection'];
export type NGObecomePartnerSectionData = NGOSections['becomePartnerSection']['variants']['Legacy_becomePartnerSection'];
export type NGOenquirySectionData = NGOSections['enquirySection']['variants']['Legacy_enquirySection'];
export type NGObrochureSectionData = NGOSections['brochureSection']['variants']['Legacy_brochureSection'];
export type NGOcontactUsSectionData = NGOSections['contactUsSection']['variants']['Legacy_contactUsSection'];
export type NGOfaqSectionData = NGOSections['faqSection']['variants']['Legacy_faqSection'];
export type NGOprivacyPolicySectionData = NGOSections['privacyPolicySection']['variants']['Legacy_privacyPolicySection'];
export type NGOtermsConditionSectionData = NGOSections['termsConditionSection']['variants']['Legacy_termsConditionSection'];
export type NGOrefundPolicySectionData = NGOSections['refundPolicySection']['variants']['Legacy_refundPolicySection'];
export type NGOdonateSectionData = NGOSections['donateSection']['variants']['Legacy_donateSection'];
export type NGOtogetherDonateSectionData = NGOSections['togetherDonateSection']['variants']['Legacy_togetherDonateSection'];
export type NGOgallerySectionData = NGOSections['gallerySection']['variants']['Legacy_gallerySection'];
export type NGOvideoGallerySectionData = NGOSections['videoGallerySection']['variants']['Legacy_videoGallerySection'];
export type NGOblogPageSectionData = NGOSections['blogPageSection']['variants']['Legacy_blogPageSection'];
export type NGOhomeCtaData = NGOSections['homeCta']['variants']['Legacy_homeCta'];
export type NGOactionsData = NGOSections['actions']['variants']['Legacy_actions'];
export type NGOaboutData = NGOSections['about']['variants']['Legacy_about'];
export type NGOsocialLinksData = NGOSections['socialLinks']['variants']['Legacy_socialLinks'];
export type NGOquickLinksData = NGOSections['quickLinks']['variants']['Legacy_quickLinks'];
export type NGOourCausesData = NGOSections['ourCauses']['variants']['Legacy_ourCauses'];
export type NGOusefulLinksData = NGOSections['usefulLinks']['variants']['Legacy_usefulLinks'];
export type NGOcontactInfoData = NGOSections['contactInfo']['variants']['Legacy_contactInfo'];
export type NGObranchesSectionData = NGOSections['branchesSection']['variants']['Legacy_branchesSection'];
export type NGOfooterHeadingsData = NGOSections['footerHeadings']['variants']['Legacy_footerHeadings'];
export type NGOcopyrightTextData = NGOSections['copyrightText']['variants']['Legacy_copyrightText'];
export type NGOportfolioDetailsData = NGOSections['portfolioDetails']['variants']['Legacy_portfolioDetails'];
export type NGOcaseStudyDetailsData = NGOSections['caseStudyDetails']['variants']['Legacy_caseStudyDetails'];
export type NGOeventDetailsData = NGOSections['eventDetails']['variants']['Legacy_eventDetails'];

const sec = ngoDataJson.NGO.sections;

export const site = {
  Topbar: sec['Topbar']?.variants?.['NGOTopbar1'],
  topbar: sec['Topbar']?.variants?.['NGOTopbar1'],
  Header: sec['Header']?.variants?.['NGOHeader1'],
  header: sec['Header']?.variants?.['NGOHeader1'],
  Footer: sec['Footer']?.variants?.['NGOFooter1'],
  footer: sec['Footer']?.variants?.['NGOFooter1'],
  Banner: sec['Banner']?.variants?.['NGOBanner1'],
  banner: sec['banner']?.variants?.['Legacy_banner'],
  Mission: sec['Mission']?.variants?.['NGOMission1'],
  mission: sec['Mission']?.variants?.['NGOMission1'],
  Programs: sec['Programs']?.variants?.['NGOPrograms1'],
  programs: sec['Programs']?.variants?.['NGOPrograms1'],
  Causes: sec['Causes']?.variants?.['NGOCauses1'],
  causes: sec['Causes']?.variants?.['NGOCauses1'],
  HowWeWork: sec['HowWeWork']?.variants?.['NGOHowWeWork1'],
  howwework: sec['HowWeWork']?.variants?.['NGOHowWeWork1'],
  Gallery: sec['Gallery']?.variants?.['NGOGallery1'],
  gallery: sec['Gallery']?.variants?.['NGOGallery1'],
  Blog: sec['Blog']?.variants?.['NGOBlog1'],
  blog: sec['Blog']?.variants?.['NGOBlog1'],
  Team: sec['Team']?.variants?.['NGOTeam1'],
  team: sec['Team']?.variants?.['NGOTeam1'],
  Testimonial: sec['Testimonial']?.variants?.['NGOTestimonial1'],
  testimonial: sec['Testimonial']?.variants?.['NGOTestimonial1'],
  Contact: sec['Contact']?.variants?.['NGOContact1'],
  contact: sec['Contact']?.variants?.['NGOContact1'],
  FAQ: sec['FAQ']?.variants?.['NGOFAQ1'],
  faq: sec['FAQ']?.variants?.['NGOFAQ1'],
  About: sec['About']?.variants?.['NGOAbout1'],
  about: sec['about']?.variants?.['Legacy_about'],
  MissionPage: sec['MissionPage']?.variants?.['NGOMissionPage1'],
  missionpage: sec['MissionPage']?.variants?.['NGOMissionPage1'],
  Events: sec['Events']?.variants?.['NGOEvents1'],
  events: sec['Events']?.variants?.['NGOEvents1'],
  Career: sec['Career']?.variants?.['NGOCareer1'],
  career: sec['Career']?.variants?.['NGOCareer1'],
  PrivacyPolicy: sec['PrivacyPolicy']?.variants?.['NGOPrivacyPolicy1'],
  privacypolicy: sec['PrivacyPolicy']?.variants?.['NGOPrivacyPolicy1'],
  Sitemap: sec['Sitemap']?.variants?.['NGOSitemap1'],
  sitemap: sec['Sitemap']?.variants?.['NGOSitemap1'],
  BlogDetail: sec['BlogDetail']?.variants?.['NGOBlogDetail1'],
  blogdetail: sec['BlogDetail']?.variants?.['NGOBlogDetail1'],
  brand: sec['brand']?.variants?.['Legacy_brand'],
  pageBanners: sec['pageBanners']?.variants?.['Legacy_pageBanners'],
  pagebanners: sec['pageBanners']?.variants?.['Legacy_pageBanners'],
  sitemapSection: sec['sitemapSection']?.variants?.['Legacy_sitemapSection'],
  sitemapsection: sec['sitemapSection']?.variants?.['Legacy_sitemapSection'],
  legalSection: sec['legalSection']?.variants?.['Legacy_legalSection'],
  legalsection: sec['legalSection']?.variants?.['Legacy_legalSection'],
  aboutSection: sec['aboutSection']?.variants?.['Legacy_aboutSection'],
  aboutsection: sec['aboutSection']?.variants?.['Legacy_aboutSection'],
  aboutStorySection: sec['aboutStorySection']?.variants?.['Legacy_aboutStorySection'],
  aboutstorysection: sec['aboutStorySection']?.variants?.['Legacy_aboutStorySection'],
  whatWeDoSection: sec['whatWeDoSection']?.variants?.['Legacy_whatWeDoSection'],
  whatwedosection: sec['whatWeDoSection']?.variants?.['Legacy_whatWeDoSection'],
  missionPageSection: sec['missionPageSection']?.variants?.['Legacy_missionPageSection'],
  missionpagesection: sec['missionPageSection']?.variants?.['Legacy_missionPageSection'],
  servicesSection: sec['servicesSection']?.variants?.['Legacy_servicesSection'],
  servicessection: sec['servicesSection']?.variants?.['Legacy_servicesSection'],
  serviceDetails: sec['serviceDetails']?.variants?.['Legacy_serviceDetails'],
  servicedetails: sec['serviceDetails']?.variants?.['Legacy_serviceDetails'],
  impactSection: sec['impactSection']?.variants?.['Legacy_impactSection'],
  impactsection: sec['impactSection']?.variants?.['Legacy_impactSection'],
  impactGlanceSection: sec['impactGlanceSection']?.variants?.['Legacy_impactGlanceSection'],
  impactglancesection: sec['impactGlanceSection']?.variants?.['Legacy_impactGlanceSection'],
  focusAreaSection: sec['focusAreaSection']?.variants?.['Legacy_focusAreaSection'],
  focusareasection: sec['focusAreaSection']?.variants?.['Legacy_focusAreaSection'],
  csrInitiativesSection: sec['csrInitiativesSection']?.variants?.['Legacy_csrInitiativesSection'],
  csrinitiativessection: sec['csrInitiativesSection']?.variants?.['Legacy_csrInitiativesSection'],
  goalsSection: sec['goalsSection']?.variants?.['Legacy_goalsSection'],
  goalssection: sec['goalsSection']?.variants?.['Legacy_goalsSection'],
  commitmentSection: sec['commitmentSection']?.variants?.['Legacy_commitmentSection'],
  commitmentsection: sec['commitmentSection']?.variants?.['Legacy_commitmentSection'],
  articlesSection: sec['articlesSection']?.variants?.['Legacy_articlesSection'],
  articlessection: sec['articlesSection']?.variants?.['Legacy_articlesSection'],
  contactSection: sec['contactSection']?.variants?.['Legacy_contactSection'],
  portfolioSection: sec['portfolioSection']?.variants?.['Legacy_portfolioSection'],
  portfoliosection: sec['portfolioSection']?.variants?.['Legacy_portfolioSection'],
  caseStudySection: sec['caseStudySection']?.variants?.['Legacy_caseStudySection'],
  casestudysection: sec['caseStudySection']?.variants?.['Legacy_caseStudySection'],
  eventSection: sec['eventSection']?.variants?.['Legacy_eventSection'],
  eventsection: sec['eventSection']?.variants?.['Legacy_eventSection'],
  helpSection: sec['helpSection']?.variants?.['Legacy_helpSection'],
  helpsection: sec['helpSection']?.variants?.['Legacy_helpSection'],
  visionPageSection: sec['visionPageSection']?.variants?.['Legacy_visionPageSection'],
  visionpagesection: sec['visionPageSection']?.variants?.['Legacy_visionPageSection'],
  certificateSection: sec['certificateSection']?.variants?.['Legacy_certificateSection'],
  certificatesection: sec['certificateSection']?.variants?.['Legacy_certificateSection'],
  certificateAchievementSection: sec['certificateAchievementSection']?.variants?.['Legacy_certificateAchievementSection'],
  certificateachievementsection: sec['certificateAchievementSection']?.variants?.['Legacy_certificateAchievementSection'],
  teamSection: sec['teamSection']?.variants?.['Legacy_teamSection'],
  teamsection: sec['teamSection']?.variants?.['Legacy_teamSection'],
  ourMission: sec['ourMission']?.variants?.['Legacy_ourMission'],
  ourmission: sec['ourMission']?.variants?.['Legacy_ourMission'],
  smileCauses: sec['smileCauses']?.variants?.['Legacy_smileCauses'],
  smilecauses: sec['smileCauses']?.variants?.['Legacy_smileCauses'],
  testimonials: sec['testimonials']?.variants?.['Legacy_testimonials'],
  blogsSection: sec['blogsSection']?.variants?.['Legacy_blogsSection'],
  blogssection: sec['blogsSection']?.variants?.['Legacy_blogsSection'],
  mediaSection: sec['mediaSection']?.variants?.['Legacy_mediaSection'],
  mediasection: sec['mediaSection']?.variants?.['Legacy_mediaSection'],
  careersSection: sec['careersSection']?.variants?.['Legacy_careersSection'],
  careerssection: sec['careersSection']?.variants?.['Legacy_careersSection'],
  partnersSection: sec['partnersSection']?.variants?.['Legacy_partnersSection'],
  partnerssection: sec['partnersSection']?.variants?.['Legacy_partnersSection'],
  partnerCardsSection: sec['partnerCardsSection']?.variants?.['Legacy_partnerCardsSection'],
  partnercardssection: sec['partnerCardsSection']?.variants?.['Legacy_partnerCardsSection'],
  becomePartnerSection: sec['becomePartnerSection']?.variants?.['Legacy_becomePartnerSection'],
  becomepartnersection: sec['becomePartnerSection']?.variants?.['Legacy_becomePartnerSection'],
  enquirySection: sec['enquirySection']?.variants?.['Legacy_enquirySection'],
  enquirysection: sec['enquirySection']?.variants?.['Legacy_enquirySection'],
  brochureSection: sec['brochureSection']?.variants?.['Legacy_brochureSection'],
  brochuresection: sec['brochureSection']?.variants?.['Legacy_brochureSection'],
  contactUsSection: sec['contactUsSection']?.variants?.['Legacy_contactUsSection'],
  contactussection: sec['contactUsSection']?.variants?.['Legacy_contactUsSection'],
  faqSection: sec['faqSection']?.variants?.['Legacy_faqSection'],
  faqsection: sec['faqSection']?.variants?.['Legacy_faqSection'],
  privacyPolicySection: sec['privacyPolicySection']?.variants?.['Legacy_privacyPolicySection'],
  privacypolicysection: sec['privacyPolicySection']?.variants?.['Legacy_privacyPolicySection'],
  termsConditionSection: sec['termsConditionSection']?.variants?.['Legacy_termsConditionSection'],
  termsconditionsection: sec['termsConditionSection']?.variants?.['Legacy_termsConditionSection'],
  refundPolicySection: sec['refundPolicySection']?.variants?.['Legacy_refundPolicySection'],
  refundpolicysection: sec['refundPolicySection']?.variants?.['Legacy_refundPolicySection'],
  donateSection: sec['donateSection']?.variants?.['Legacy_donateSection'],
  donatesection: sec['donateSection']?.variants?.['Legacy_donateSection'],
  togetherDonateSection: sec['togetherDonateSection']?.variants?.['Legacy_togetherDonateSection'],
  togetherdonatesection: sec['togetherDonateSection']?.variants?.['Legacy_togetherDonateSection'],
  gallerySection: sec['gallerySection']?.variants?.['Legacy_gallerySection'],
  gallerysection: sec['gallerySection']?.variants?.['Legacy_gallerySection'],
  videoGallerySection: sec['videoGallerySection']?.variants?.['Legacy_videoGallerySection'],
  videogallerysection: sec['videoGallerySection']?.variants?.['Legacy_videoGallerySection'],
  blogPageSection: sec['blogPageSection']?.variants?.['Legacy_blogPageSection'],
  blogpagesection: sec['blogPageSection']?.variants?.['Legacy_blogPageSection'],
  homeCta: sec['homeCta']?.variants?.['Legacy_homeCta'],
  homecta: sec['homeCta']?.variants?.['Legacy_homeCta'],
  actions: sec['actions']?.variants?.['Legacy_actions'],
  socialLinks: sec['socialLinks']?.variants?.['Legacy_socialLinks'],
  sociallinks: sec['socialLinks']?.variants?.['Legacy_socialLinks'],
  quickLinks: sec['quickLinks']?.variants?.['Legacy_quickLinks'],
  quicklinks: sec['quickLinks']?.variants?.['Legacy_quickLinks'],
  ourCauses: sec['ourCauses']?.variants?.['Legacy_ourCauses'],
  ourcauses: sec['ourCauses']?.variants?.['Legacy_ourCauses'],
  usefulLinks: sec['usefulLinks']?.variants?.['Legacy_usefulLinks'],
  usefullinks: sec['usefulLinks']?.variants?.['Legacy_usefulLinks'],
  contactInfo: sec['contactInfo']?.variants?.['Legacy_contactInfo'],
  contactinfo: sec['contactInfo']?.variants?.['Legacy_contactInfo'],
  branchesSection: sec['branchesSection']?.variants?.['Legacy_branchesSection'],
  branchessection: sec['branchesSection']?.variants?.['Legacy_branchesSection'],
  footerHeadings: sec['footerHeadings']?.variants?.['Legacy_footerHeadings'],
  footerheadings: sec['footerHeadings']?.variants?.['Legacy_footerHeadings'],
  copyrightText: sec['copyrightText']?.variants?.['Legacy_copyrightText'],
  copyrighttext: sec['copyrightText']?.variants?.['Legacy_copyrightText'],
  portfolioDetails: sec['portfolioDetails']?.variants?.['Legacy_portfolioDetails'],
  portfoliodetails: sec['portfolioDetails']?.variants?.['Legacy_portfolioDetails'],
  caseStudyDetails: sec['caseStudyDetails']?.variants?.['Legacy_caseStudyDetails'],
  casestudydetails: sec['caseStudyDetails']?.variants?.['Legacy_caseStudyDetails'],
  eventDetails: sec['eventDetails']?.variants?.['Legacy_eventDetails'],
  eventdetails: sec['eventDetails']?.variants?.['Legacy_eventDetails'],
};

export const slugify = (text: string): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export type SiteData = typeof site;
export default ngoDataJson;

// Dynamically extracted types
export type PageBannerData = NonNullable<NGOpageBannersData>[keyof NonNullable<NGOpageBannersData>];
export type BreadcrumbItem = NonNullable<PageBannerData['breadcrumbs']>[number];

export type NgoBlogCardItem = NonNullable<NGOblogsSectionData>['posts'][number];
export type NgoBlogPageSection = NonNullable<NGOblogPageSectionData>;

export type CaseStudyDetailItem = NonNullable<NGOcaseStudyDetailsData>[keyof NonNullable<NGOcaseStudyDetailsData>];
export type CaseStudyGallery = CaseStudyDetailItem['gallery'];
export type CaseStudyImpact = CaseStudyDetailItem['impact'];
export type CaseStudyStory = CaseStudyDetailItem['story'];
export type CaseStudyOverview = CaseStudyDetailItem['overview'];
export type NgoCaseStudySection = NonNullable<NGOcaseStudySectionData>;
export type NgoCaseStudyCard = NgoCaseStudySection['cards'][number];

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
export type NgoGalleryImageItem = NgoGallerySection['images'][number];

export type NgoVideoGallerySection = NonNullable<NGOvideoGallerySectionData>;
export type NgoVideoCategory = NonNullable<any>; // Need fallback?
export type NgoVideoItem = NgoVideoGallerySection['videos'][number];

export type NgoMediaSection = NonNullable<NGOmediaSectionData>;
export type NgoMediaOutlet = NgoMediaSection['outlets'][number];

export type MissionPageSection = NonNullable<NGOmissionPageSectionData>;

export type NgoBecomePartnerSection = NonNullable<NGObecomePartnerSectionData>;

export type NgoPrivacyPolicySection = NonNullable<NGOprivacyPolicySectionData>;
export type NgoRefundPolicySection = NonNullable<NGOrefundPolicySectionData>;

export type NgoArticlesSection = NonNullable<NGOarticlesSectionData>;
export type NgoArticleCard = NgoArticlesSection['cards'][number];

export type NgoHelpCard = NonNullable<NGOhelpSectionData>['cards'][number];

export type BannerProps = {
  data?: any;
  pageKey?: string;
  bannerData?: any;
  className?: string;
};

export type NgoData = NonNullable<RawSiteData>['NGO'];

// Static types required for components
export interface NgoBranchItem {
  id: number;
  title: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface NgoBrochureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  buttonLabel?: string;
}

export interface NgoCareerFormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select";
  required?: boolean;
  options?: string[];
  colSpan?: "full" | "half";
}

export interface NgoCareerOfferItem {
  id: number;
  title: string;
  icon: string;
}

export interface NgoCareerJobDetailItem {
  id: number;
  label: string;
  value: string;
  icon: string;
}

export interface NgoCareerShareLink {
  platform: string;
  href: string;
  icon: string;
}

export interface NgoContactInfoDetailItem {
  id: number;
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface NgoDonateTier {
  id: number;
  title: string;
  subtext: string;
  amount: number;
  isDefault?: boolean;
}

export interface NgoDonateImpactItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoTogetherDonateStat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface NgoEnquiryFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoUpcomingEventCard {
  id: number;
  title: string;
  date: {
    day: number;
    month: string;
  };
  location: string;
  time: string;
  description: string;
  image: string;
  buttonLabel: string;
  href: string;
}

export interface NgoFaqSidebarItem {
  id: number;
  label: string;
  value: string;
  icon: string;
  href?: string;
}


// Extra Static types required for components
export interface EventDetailItem {
  id: string;
  numericId?: number;
  title: string;
  categoryTag?: string;
  description: string;
  image: string;
  date: {
    day: number | string;
    month: string;
    fullDate: string;
  };
  time: string;
  location: string;
  locationMapUrl?: string;
  viewOnMapLabel?: string;
  shareEventLabel?: string;
  volunteersRegistered?: string;
  aboutTitle?: string;
  aboutContent: string;
  expectationsTitle?: string;
  expectations: EventExpectation[];
  detailsTitle?: string;
  detailsRows: EventDetailRow[];
  bringTitle?: string;
  bringItems: EventBringItem[];
  galleryTitle?: string;
  gallery: EventGalleryImage[];
  impactCallout?: {
    title: string;
    subtitle: string;
  };
  registrationCard?: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
    loginText?: string;
    loginHref?: string;
  };
  organizer?: EventOrganizer;
  shareCard?: {
    title: string;
    description: string;
  };
  support?: EventSupport;
}

export interface NgoContactSection {
  title: string;
  subtitle: string;
  description: string;
  contactMethods: NgoSupportContactMethod[];
  form: NgoSupportContactForm;
}

export interface NgoSupportContactField {
  id: number;
  name: string;
  type: "text" | "email" | "select" | "textarea";
  placeholder: string;
  icon?: string;
  options?: NgoSupportContactFieldOption[];
}

export interface NgoSupportContactMethod {
  id: number;
  label: string;
  value: string;
  href?: string;
  icon: string;
}


// Nested Static types required for components
export interface EventExpectation {
  id: number;
  text: string;
}

export interface EventDetailRow {
  id: number;
  label: string;
  value: string;
  icon?: string;
  linkText?: string;
  linkHref?: string;
}

export interface EventBringItem {
  id: number;
  icon: string;
  label: string;
}

export interface EventGalleryImage {
  id: number;
  image: string;
  alt?: string;
}

export interface EventOrganizer {
  cardTitle?: string;
  name: string;
  description: string;
  icon?: string;
  profileLink?: string;
  profileText?: string;
}

export interface EventSupport {
  title: string;
  description: string;
  phone: string;
  email: string;
}

export interface NgoSupportContactForm {
  heading: string;
  fields: NgoSupportContactField[];
  buttonLabel: string;
}

export interface NgoSupportContactFieldOption {
  value: string;
  label: string;
}

