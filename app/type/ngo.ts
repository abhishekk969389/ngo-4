export interface NgoBrand {
  name: string;
  tagline: string;
  logo: string;
}

export interface NgoSubNavLink {
  label: string;
  href: string;
}

export interface NgoNavLink {
  label: string;
  href: string;
  description?: string;
  children?: NgoSubNavLink[];
}

export interface NgoActionLink {
  label: string;
  href: string;
}

export interface NgoActions {
  searchLabel: string;
  donate: NgoActionLink;
  volunteer: NgoActionLink;
}

export interface NgoBannerStat {
  id: number;
  value: string;
  label: string;
  icon: 'smiley' | 'heart' | 'projects';
}

export interface NgoBanner {
  tagline: string;
  heading: string;
  description: string;
  backgroundImage: string;
  buttons: {
    donate: {
      label: string;
      href: string;
    };
    volunteer: {
      label: string;
      href: string;
    };
  };
  stats: NgoBannerStat[];
}

export interface NgoAboutFeature {
  id: number;
  text: string;
  icon: string;
}

export interface NgoAboutSection {
  tagline: string;
  heading: string;
  description: string;
  quote: string;
  images: {
    main: string;
    circle: string;
  };
  features: NgoAboutFeature[];
  button: {
    label: string;
    href: string;
  };
}

export interface NgoMissionCard {
  id: number;
  title: string;
  description: string;
  icon: 'child' | 'shelter' | 'education' | 'food';
  href: string;
}

export interface NgoOurMission {
  badge: string;
  heading: string;
  description: string;
  cards: NgoMissionCard[];
}

export interface NgoCauseCard {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  centerIcon: string;
  image: string;
  href: string;
  ctaText?: string;
}

export interface NgoSmileCauses {
  heading: string;
  description: string;
  ctaText?: string;
  cards: NgoCauseCard[];
}

export interface NgoTestimonialCard {
  id: number;
  name: string;
  designation: string;
  feedback: string;
  rating: number;
  image: string;
  themeColor: string;
}

export interface NgoTestimonialHeading {
  prefix: string;
  highlight: string;
  suffix: string;
}

export interface NgoTestimonials {
  heading: NgoTestimonialHeading;
  cards: NgoTestimonialCard[];
}

export interface NgoBlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  image: string;
  href: string;
}

export interface NgoBlogsSection {
  badge: string;
  heading: string;
  button: {
    label: string;
    href: string;
  };
  posts: NgoBlogPost[];
}

export interface NgoHomeCta {
  heading: string;
  description: string;
  buttons: {
    donate: {
      label: string;
      href: string;
      icon: string;
    };
    volunteer: {
      label: string;
      href: string;
      icon: string;
    };
  };
}

export interface BreadcrumbItem {
  id?: number | string;
  label: string;
  href?: string;
  icon?: string;
  isCurrent?: boolean;
}

export interface PageBannerData {
  title: string;
  backgroundImage: string;
  altText?: string;
  breadcrumbs: BreadcrumbItem[];
}

export type PageBanners = Record<string, PageBannerData>;

export interface BannerProps {
  pageKey?: string;
  bannerData?: PageBannerData;
  className?: string;
}

export interface NgoAboutStoryHighlight {
  title: string;
  subtitle: string;
  icon?: string;
}

export interface NgoAboutStorySection {
  badge: string;
  badgeIcon?: string;
  heading: string;
  highlight: NgoAboutStoryHighlight;
  paragraphs: string[];
  images: {
    main: string;
    circle: string;
  };
}

export interface NgoWhatWeDoItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoWhatWeDoSection {
  badge: string;
  badgeIcon?: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  items: NgoWhatWeDoItem[];
  images: {
    girl: string;
    education: string;
    food: string;
    planting: string;
  };
}

export interface NgoCertificateCard {
  id: number;
  title: string;
  subtitle: string;
  label: string;
}

export interface NgoCertificateSection {
  badge: string;
  heading: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  certificates: NgoCertificateCard[];
}

export interface NgoCertificateAchievementSection {
  iconName: string;
  tag: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export interface NgoSitemapLink {
  id: number;
  label: string;
  href: string;
}

export interface NgoSitemapCategory {
  id: number;
  title: string;
  icon: string;
  links: NgoSitemapLink[];
}

export interface NgoSitemapSection {
  heading: string;
  description: string;
  categories: NgoSitemapCategory[];
}

export interface NgoLegalLink {
  id: number;
  label: string;
  href: string;
}

export interface NgoLegalSection {
  heading: string;
  description: string;
  links: NgoLegalLink[];
}

export interface MissionPagePillar {
  id: number;
  title: string;
  description: string;
  icon: 'educate' | 'heal' | 'support' | 'empower' | string;
  themeColor: string;
  bgColor: string;
}

export interface MissionPageSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  pillars: MissionPagePillar[];
  badgeTagline?: string;
  images: {
    main: string;
    circle: string;
  };
}

export interface NgoServiceItem {
  id: number;
  slug?: string;
  href?: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface ServiceHeaderFeature {
  id: number | string;
  title: string;
  icon: string;
}

export interface ServiceHeaderData {
  badge: string;
  badgeIcon?: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceHeaderFeature[];
  heroImage: string;
  heroAlt?: string;
}

export interface ServiceFeatureCard {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceApproachStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceApproachData {
  title: string;
  description: string;
  steps: ServiceApproachStep[];
}

export interface ServiceQuoteData {
  quote: string;
  author: string;
}

export interface ServiceWhatWeProvideData {
  title: string;
  items: string[];
  quoteBox: ServiceQuoteData;
}

export interface ServiceFeaturesApproachData {
  topBannerTitle: string;
  topBannerIcon?: string;
  featureCards: ServiceFeatureCard[];
  approach: ServiceApproachData;
  centerImage: string;
  centerImageAlt?: string;
  whatWeProvide: ServiceWhatWeProvideData;
}

export interface ServiceImpactStatItem {
  id: number | string;
  value: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceImpactData {
  title: string;
  stats: ServiceImpactStatItem[];
}

export interface ServiceCtaButton {
  label: string;
  href: string;
}

export interface ServiceCtaData {
  icon?: string;
  title: string;
  description: string;
  button: ServiceCtaButton;
}

export interface ServiceImpactCtaData {
  impact: ServiceImpactData;
  cta: ServiceCtaData;
}

export interface ServiceDetailItem {
  id: string;
  numericId?: number;
  banner?: PageBannerData;
  header: ServiceHeaderData;
  featuresApproach: ServiceFeaturesApproachData;
  impactCta: ServiceImpactCtaData;
}

export type ServiceDetailsMap = Record<string, ServiceDetailItem>;

export interface NgoServicesSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  centerImage: string;
  items: NgoServiceItem[];
}

export interface NgoImpactStat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface NgoImpactHighlight {
  title: string;
  text: string;
}

export interface NgoImpactSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
    line3: string;
  };
  description: string;
  stats: NgoImpactStat[];
  showcase: {
    mainImage: string;
    secondaryImages: string[];
    quote: NgoImpactHighlight;
  };
}

export interface NgoImpactGlanceStat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface NgoImpactGlanceSection {
  badge: string;
  heading: string;
  stats: NgoImpactGlanceStat[];
}

export interface NgoFocusAreaCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface NgoFocusAreaSection {
  badge?: string;
  heading: string;
  cards: NgoFocusAreaCard[];
}

export interface NgoCsrInitiativeItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface NgoCsrInitiativesSection {
  badge: string;
  heading: string;
  items: NgoCsrInitiativeItem[];
}

export interface NgoGoalItem {
  id: number;
  code: string;
  title: string;
  accent: string;
  icon: string;
}

export interface NgoGoalsSection {
  badge?: string;
  heading: string;
  items: NgoGoalItem[];
}

export interface NgoCommitmentSection {
  title: string;
  description: string;
  quote: {
    text: string;
    author: string;
  };
}

export interface NgoArticleCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface NgoArticlesSection {
  heading: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  cards: NgoArticleCard[];
}

export interface NgoSupportContactMethod {
  id: number;
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export interface NgoSupportContactFieldOption {
  value: string;
  label: string;
}

export interface NgoSupportContactField {
  id: number;
  name: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  placeholder: string;
  icon?: string;
  options?: NgoSupportContactFieldOption[];
}

export interface NgoSupportContactForm {
  heading: string;
  fields: NgoSupportContactField[];
  buttonLabel: string;
}

export interface NgoContactSection {
  title: string;
  subtitle: string;
  description: string;
  contactMethods: NgoSupportContactMethod[];
  form: NgoSupportContactForm;
}

export interface NgoPortfolioCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  buttonLabel: string;
  href: string;
  themeClass: string;
}

export interface NgoPortfolioSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  cards: NgoPortfolioCard[];
}

export interface PortfolioMetaInfo {
  id: number | string;
  label: string;
  value: string;
  icon: string;
}

export interface PortfolioHeroQuote {
  quote: string;
  author: string;
  role?: string;
}

export interface PortfolioDetailHeaderData {
  badge: string;
  badgeIcon?: string;
  title: string;
  location: string;
  locationIcon?: string;
  description: string;
  metaInfo: PortfolioMetaInfo[];
  backButtonLabel: string;
  backButtonHref: string;
  heroImage: string;
  heroAlt?: string;
  heroQuote: PortfolioHeroQuote;
}

export interface PortfolioFeatureCard {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioAboutData {
  title: string;
  paragraphs: string[];
  features: PortfolioFeatureCard[];
}

export interface PortfolioImpactStat {
  id: number | string;
  value: string;
  label: string;
  icon: string;
}

export interface PortfolioImpactData {
  title: string;
  stats: PortfolioImpactStat[];
}

export interface PortfolioStoryCard {
  id: number | string;
  quote: string;
  author: string;
  ageOrRole: string;
  avatar: string;
}

export interface PortfolioStoriesData {
  title: string;
  cards: PortfolioStoryCard[];
}

export interface PortfolioPartnerItem {
  id: number | string;
  name: string;
  logo?: string;
  icon?: string;
}

export interface PortfolioPartnersData {
  title: string;
  partners: PortfolioPartnerItem[];
}

export interface PortfolioDetailContentData {
  about: PortfolioAboutData;
  impact: PortfolioImpactData;
  stories: PortfolioStoriesData;
  partners: PortfolioPartnersData;
}

export interface PortfolioHighlightItem {
  id: number | string;
  badgeNumber?: string;
  icon?: string;
  title: string;
  description: string;
}

export interface PortfolioGalleryItem {
  id: number | string;
  image: string;
  alt?: string;
}

export interface PortfolioDetailSidebarData {
  highlightsTitle: string;
  highlights: PortfolioHighlightItem[];
  galleryTitle: string;
  gallery: PortfolioGalleryItem[];
  sidebarQuote: PortfolioHeroQuote;
}

export interface PortfolioDetailCtaData {
  icon?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface PortfolioDetailItem {
  id: string;
  numericId?: number;
  header: PortfolioDetailHeaderData;
  content: PortfolioDetailContentData;
  sidebar: PortfolioDetailSidebarData;
  cta: PortfolioDetailCtaData;
}

export type PortfolioDetailsMap = Record<string, PortfolioDetailItem>;

export interface NgoCaseStudyCategory {
  id: number;
  label: string;
  value: string;
}

export interface NgoCaseStudyCard {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  buttonLabel: string;
  href: string;
  accent: string;
}

export interface NgoCaseStudySection {
  badge: string;
  heading: string;
  description: string;
  categories: NgoCaseStudyCategory[];
  cards: NgoCaseStudyCard[];
}

export interface NgoMediaOutlet {
  id: number;
  name: string;
  icon: string;
  href?: string;
}

export interface NgoMediaSection {
  badge: string;
  heading: string;
  description: string;
  outlets: NgoMediaOutlet[];
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

export interface NgoCareersSidebar {
  title: string;
  subtitle: string;
  applyButton: {
    label: string;
    href: string;
  };
  dividerText: string;
  saveButton: {
    label: string;
    icon: string;
  };
  jobDetails: NgoCareerJobDetailItem[];
  share: {
    title: string;
    links: NgoCareerShareLink[];
  };
}

export interface NgoCareerFormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'select';
  required?: boolean;
  options?: string[];
  colSpan?: 'full' | 'half';
}

export interface NgoCareerApplyForm {
  applicantInfo: {
    title: string;
    fields: NgoCareerFormField[];
  };
  resumeSection: {
    title: string;
    subtitle: string;
    dragDropText: string;
    orText: string;
    browseFileText: string;
    maxSizeNote: string;
  };
  coverLetterSection: {
    title: string;
    label: string;
    placeholder: string;
    minCharNote: string;
  };
  additionalInfoSection: {
    title: string;
    label: string;
    placeholder: string;
    options: string[];
  };
  confirmation: {
    text: string;
  };
  submitButton: {
    label: string;
    icon?: string;
  };
  securityFooter: {
    text: string;
    icon?: string;
  };
  successState: {
    title: string;
    message: string;
    buttonLabel: string;
  };
}

export interface NgoCareersSection {
  aboutRole: {
    title: string;
    description: string;
  };
  keyResponsibilities: {
    title: string;
    items: string[];
  };
  qualifications: {
    title: string;
    items: string[];
  };
  whatWeOffer: {
    title: string;
    items: NgoCareerOfferItem[];
  };
  callout: {
    line1: string;
    line2: string;
    icon?: string;
  };
  sidebar: NgoCareersSidebar;
  applyForm?: NgoCareerApplyForm;
}

export interface NgoPartnerItem {
  id: number;
  name: string;
  logo: string;
  href?: string;
}

export interface NgoPartnersSection {
  heading: string;
  highlightedText?: string;
  description: string;
  partners: NgoPartnerItem[];
}

export interface NgoPartnerCardItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoPartnerCardsSection {
  items: NgoPartnerCardItem[];
}

export interface NgoBecomePartnerSection {
  heading: string;
  highlightedText?: string;
  description: string;
  button: {
    label: string;
    href: string;
    icon?: string;
  };
  backgroundImage: string;
}

export interface NgoEnquiryFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoEnquiryGetInTouch {
  title: string;
  phone: string;
  email: string;
  address: string;
}

export interface NgoEnquiryFormLabels {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
}

export interface NgoEnquiryFormPlaceholders {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
}

export interface NgoEnquiryFormHeader {
  title: string;
  subtitle: string;
  icon: string;
}

export interface NgoEnquiryFormInfoBox {
  title: string;
  subtitle: string;
  icon: string;
}

export interface NgoEnquiryForm {
  header: NgoEnquiryFormHeader;
  labels: NgoEnquiryFormLabels;
  placeholders: NgoEnquiryFormPlaceholders;
  subjectOptions: string[];
  maxMessageLength: number;
  infoBox: NgoEnquiryFormInfoBox;
  submitButton: {
    label: string;
    icon: string;
  };
}

export interface NgoEnquirySection {
  badge: string;
  heading: string;
  description: string;
  features: NgoEnquiryFeature[];
  getInTouch: NgoEnquiryGetInTouch;
  form: NgoEnquiryForm;
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

export interface NgoBrochureSection {
  heading: string;
  highlightedText?: string;
  description: string;
  items: NgoBrochureItem[];
}

export interface NgoContactInfoDetailItem {
  id: number;
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface NgoContactUsFormPlaceholders {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NgoContactUsForm {
  title: string;
  subtitle: string;
  placeholders: NgoContactUsFormPlaceholders;
  submitButton: {
    label: string;
    icon?: string;
  };
}

export interface NgoContactUsInfo {
  title: string;
  items: NgoContactInfoDetailItem[];
}

export interface NgoContactUsSection {
  heading: string;
  description: string;
  form: NgoContactUsForm;
  info: NgoContactUsInfo;
}

export interface NgoFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface NgoFaqSidebarItem {
  id: number;
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface NgoFaqSidebar {
  title: string;
  description: string;
  items: NgoFaqSidebarItem[];
  button: {
    label: string;
    href: string;
    icon?: string;
  };
}

export interface NgoFaqSection {
  heading: string;
  description: string;
  sidebar: NgoFaqSidebar;
  faqs: NgoFaqItem[];
}

export interface NgoPrivacyPolicyItem {
  id: number;
  title: string;
  content: string;
}

export interface NgoPrivacyPolicySection {
  sections: NgoPrivacyPolicyItem[];
  callout: {
    title: string;
    subtitle: string;
    icon?: string;
  };
}

export interface NgoTermsItem {
  id: number;
  title: string;
  content: string;
}

export interface NgoTermsConditionSection {
  sections: NgoTermsItem[];
  callout: {
    title: string;
    subtitle: string;
    icon?: string;
  };
}

export interface NgoRefundPolicyItem {
  id: number;
  title: string;
  content: string;
}

export interface NgoRefundPolicySection {
  sections: NgoRefundPolicyItem[];
  callout: {
    title: string;
    subtitle: string;
    icon?: string;
  };
}

export interface NgoDonateCurrency {
  code: string;
  symbol: string;
  label: string;
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

export interface NgoDonateStep1 {
  title: string;
  amountPlaceholder: string;
  currencies: NgoDonateCurrency[];
  tiers: NgoDonateTier[];
  recurringLabel: string;
  frequencies: string[];
}

export interface NgoDonateStep2 {
  title: string;
  labels: Record<string, string>;
  placeholders: Record<string, string>;
  countryOptions: string[];
  causeOptions: string[];
  anonymousLabel: string;
  addMessageLabel: string;
  messagePlaceholder?: string;
  submitButton: {
    label: string;
    icon?: string;
  };
  securityNotice: {
    text: string;
    icon?: string;
  };
}

export interface NgoDonateSection {
  heading: string;
  description: string;
  form: {
    step1: NgoDonateStep1;
    step2: NgoDonateStep2;
  };
  impactSidebar: {
    title: string;
    items: NgoDonateImpactItem[];
  };
}

export interface NgoTogetherDonateStat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface NgoTogetherDonateSection {
  heading: string;
  stats: NgoTogetherDonateStat[];
  generosityBanner: {
    title: string;
    description: string;
    icon: string;
    button: {
      label: string;
      href: string;
      icon?: string;
    };
  };
  securityFooter: {
    text: string;
    icon?: string;
  };
}

export interface NgoGalleryCategory {
  id: string;
  label: string;
}

export interface NgoGalleryImageItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  isFeatured?: boolean;
}

export interface NgoGalleryHeader {
  title: string;
  subtitle: string;
  icon: string;
}

export interface NgoGallerySection {
  header: NgoGalleryHeader;
  categories: NgoGalleryCategory[];
  images: NgoGalleryImageItem[];
  loadMoreButton: {
    label: string;
    icon?: string;
  };
}

export interface NgoVideoCategory {
  id: string;
  label: string;
}

export interface NgoVideoItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  alt?: string;
}

export interface NgoVideoGalleryHeader {
  title: string;
  subtitle: string;
  icon?: string;
}

export interface NgoVideoGallerySection {
  header: NgoVideoGalleryHeader;
  categories: NgoVideoCategory[];
  videos: NgoVideoItem[];
}

export interface NgoBlogSectionContent {
  heading: string;
  content: string;
}

export interface NgoBlogQuote {
  quote: string;
  author?: string;
}

export interface NgoBlogCardItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  alt?: string;
  readMoreText?: string;
  href: string;
  paragraphs?: string[];
  sections?: NgoBlogSectionContent[];
  quote?: NgoBlogQuote;
}

export interface NgoBlogPageSection {
  header: {
    title: string;
    subtitle: string;
  };
  sidebar?: {
    title: string;
    viewAllButton: {
      label: string;
      href: string;
    };
  };
  blogs: NgoBlogCardItem[];
}

export interface NgoEventCard {
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

export interface NgoEventSection {
  badge: string;
  heading: string;
  subheading: string;
  featuredTitle: string;
  arrowButtons: {
    prev: string;
    next: string;
  };
  cards: NgoEventCard[];
  upcomingTitle: string;
  viewMoreLabel: string;
  upcomingCards: NgoUpcomingEventCard[];
}

export interface NgoHelpCard {
  id: number;
  title: string;
  description: string;
  button: string;
  icon: string;
}

export interface NgoHelpSection {
  heading: {
    line1: string;
    line2: string;
  };
  subheading: string;
  cards: NgoHelpCard[];
}

export interface VisionPagePillar {
  id: number;
  title: string;
  description: string;
  icon: 'inclusive' | 'opportunities' | 'healthy' | 'stronger' | string;
}

export interface VisionPageQuote {
  prefix: string;
  italicText: string;
}

export interface VisionPageCard {
  title: string;
  description: string;
  icon?: string;
}

export interface VisionPageSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  pillars: VisionPagePillar[];
  quote: VisionPageQuote;
  visionCard: VisionPageCard;
  images: {
    main: string;
  };
}

export interface TeamMemberSocial {
  platform: 'linkedin' | 'twitter' | 'email' | string;
  href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: TeamMemberSocial[];
  experience: string;
  education: string;
  email: string;
  phone: string;
  location: string;
  joined: string;
  expertise: string[];
  coreValues: string[];
  achievements: string;
  quote: string;
}

export interface TeamCtaBanner {
  title: string;
  description: string;
  ctaTitle: string;
  button: {
    label: string;
    href: string;
  };
}

export interface TeamSectionDetailLabels {
  experience: string;
  education: string;
  email: string;
  phone: string;
  location: string;
  joined: string;
  joinedTitle?: string;
  expertise: string;
  coreValues: string;
  achievements: string;
  quote: string;
  back: string;
  connect?: string;
  notFound?: string;
}

export interface TeamSectionData {
  badge: string;
  heading: string;
  description: string;
  detailLabels: TeamSectionDetailLabels;
  members: TeamMember[];
  ctaBanner: TeamCtaBanner;
}

export interface NgoData {
  brand: NgoBrand;
  banner: NgoBanner;
  pageBanners?: PageBanners;
  aboutSection: NgoAboutSection;
  aboutStorySection?: NgoAboutStorySection;
  whatWeDoSection?: NgoWhatWeDoSection;
  missionPageSection?: MissionPageSection;
  servicesSection?: NgoServicesSection;
  serviceDetails?: ServiceDetailsMap;
  impactSection?: NgoImpactSection;
  impactGlanceSection?: NgoImpactGlanceSection;
  focusAreaSection?: NgoFocusAreaSection;
  csrInitiativesSection?: NgoCsrInitiativesSection;
  goalsSection?: NgoGoalsSection;
  commitmentSection?: NgoCommitmentSection;
  articlesSection?: NgoArticlesSection;
  contactSection?: NgoContactSection;
  portfolioSection?: NgoPortfolioSection;
  portfolioDetails?: PortfolioDetailsMap;
  caseStudySection?: NgoCaseStudySection;
  caseStudyDetails?: CaseStudyDetailsMap;
  mediaSection?: NgoMediaSection;
  careersSection?: NgoCareersSection;
  partnersSection?: NgoPartnersSection;
  partnerCardsSection?: NgoPartnerCardsSection;
  becomePartnerSection?: NgoBecomePartnerSection;
  enquirySection?: NgoEnquirySection;
  brochureSection?: NgoBrochureSection;
  contactUsSection?: NgoContactUsSection;
  faqSection?: NgoFaqSection;
  privacyPolicySection?: NgoPrivacyPolicySection;
  termsConditionSection?: NgoTermsConditionSection;
  refundPolicySection?: NgoRefundPolicySection;
  donateSection?: NgoDonateSection;
  togetherDonateSection?: NgoTogetherDonateSection;
  gallerySection?: NgoGallerySection;
  videoGallerySection?: NgoVideoGallerySection;
  eventSection?: NgoEventSection;
  eventDetails?: EventDetailsMap;
  helpSection?: NgoHelpSection;
  visionPageSection?: VisionPageSection;
  certificateSection: NgoCertificateSection;
  certificateAchievementSection: NgoCertificateAchievementSection;
  sitemapSection: NgoSitemapSection;
  legalSection: NgoLegalSection;
  teamSection?: TeamSectionData;
  branchesSection?: NgoBranchesSection;
  ourMission: NgoOurMission;
  smileCauses: NgoSmileCauses;
  testimonials: NgoTestimonials;
  blogsSection: NgoBlogsSection;
  blogPageSection?: NgoBlogPageSection;
  homeCta: NgoHomeCta;
  navLinks: NgoNavLink[];
  actions: NgoActions;
}

export interface NgoBranchItem {
  id: number;
  title: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface NgoBranchesSection {
  heading: string;
  description: string;
  branches: NgoBranchItem[];
}



export interface LinkItem {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin';
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface FooterData {
  footerHeadings: {
    quickLinks: string;
    ourCauses: string;
    usefulLinks: string;
    contactInfo: string;
  };
  about: {
    description: string;
  };
  socialLinks: SocialLink[];
  quickLinks: LinkItem[];
  ourCauses: LinkItem[];
  usefulLinks: LinkItem[];
  contactInfo: ContactInfo;
  copyrightText: string;
}

export interface CaseStudyOverviewFeature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface CaseStudyOverview {
  title: string;
  description: string;
  icon?: string;
  features: CaseStudyOverviewFeature[];
}

export interface CaseStudyImpactStat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon?: string;
}

export interface CaseStudyImpact {
  badge?: string;
  title: string;
  stats: CaseStudyImpactStat[];
}

export interface CaseStudyStoryQuote {
  text: string;
  author: string;
}

export interface CaseStudyStory {
  badge?: string;
  title: string;
  paragraphs: string[];
  quote?: CaseStudyStoryQuote;
  image: string;
  imageAlt?: string;
}

export interface CaseStudyGalleryItem {
  id: number;
  image: string;
  alt?: string;
}

export interface CaseStudyGallery {
  badge?: string;
  title?: string;
  items: CaseStudyGalleryItem[];
}

export interface CaseStudyDetailItem {
  id: string;
  numericId?: number;
  title: string;
  category: string;
  headerTitle?: string;
  heroImage?: string;
  overview: CaseStudyOverview;
  impact: CaseStudyImpact;
  story: CaseStudyStory;
  gallery: CaseStudyGallery;
}

export type CaseStudyDetailsMap = Record<string, CaseStudyDetailItem>;

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

export type EventDetailsMap = Record<string, EventDetailItem>;