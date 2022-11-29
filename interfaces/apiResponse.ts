export interface IApiResponse {
    result: string
    data: Data
  }
  
  export interface Data {
    body: Body
    common: Common
  }
  
  export interface Body {
    header: string
    query: Query
    searchResults: SearchResults
    sortResults: SortResults
    filters: Filters
    pointOfSale: PointOfSale
    miscellaneous: Miscellaneous
    pageInfo: PageInfo
  }
  
  export interface Query {
    destination: Destination
  }
  
  export interface Destination {
    id: string
    value: string
    resolvedLocation: string
  }
  
  export interface SearchResults {
    totalCount: number
    results: Result[]
    pagination: Pagination
  }
  
  export interface Result {
    id: number
    name: string
    starRating: number
    urls: Urls
    address: Address
    welcomeRewards: WelcomeRewards
    guestReviews: GuestReviews
    landmarks: Landmark[]
    geoBullets: any[]
    ratePlan: RatePlan
    neighbourhood: string
    deals: Deals
    messaging: Messaging
    badging: Badging
    pimmsAttributes?: string
    coordinate: Coordinate
    providerType: string
    supplierHotelId: number
    isAlternative: boolean
    optimizedThumbUrls: OptimizedThumbUrls
    roomsLeft?: number
  }
  
  export interface Urls {}
  
  export interface Address {
    streetAddress: string
    extendedAddress: string
    locality: string
    postalCode: string
    region: string
    countryName: string
    countryCode: string
    obfuscate: boolean
  }
  
  export interface WelcomeRewards {
    collect: boolean
  }
  
  export interface GuestReviews {
    unformattedRating: number
    rating: string
    total: number
    scale: number
    badge?: string
    badgeText?: string
  }
  
  export interface Landmark {
    label: string
    distance: string
  }
  
  export interface RatePlan {
    price: Price
    features: Features
    type: string
  }
  
  export interface Price {
    current: string
    exactCurrent: number
    fullyBundledPricePerStay: string
    old?: string
  }
  
  export interface Features {
    freeCancellation: boolean
    paymentPreference: boolean
    noCCRequired: boolean
  }
  
  export interface Deals {
    specialDeal?: SpecialDeal
    priceReasoning?: string
    secretPrice?: SecretPrice
  }
  
  export interface SpecialDeal {
    dealText: string
  }
  
  export interface SecretPrice {
    dealText: string
  }
  
  export interface Messaging {
    scarcity?: string
  }
  
  export interface Badging {}
  
  export interface Coordinate {
    lat: number
    lon: number
  }
  
  export interface OptimizedThumbUrls {
    srpDesktop: string
  }
  
  export interface Pagination {
    currentPage: number
    pageGroup: string
    nextPageStartIndex: number
    nextPageNumber: number
    nextPageGroup: string
  }
  
  export interface SortResults {
    options: Option[]
    distanceOptionLandmarkId: number
  }
  
  export interface Option {
    label: string
    itemMeta: string
    choices: Choice[]
    enhancedChoices: EnhancedChoice[]
    selectedChoiceLabel?: string
  }
  
  export interface Choice {
    label: string
    value: string
    selected: boolean
  }
  
  export interface EnhancedChoice {
    label: string
    itemMeta: string
    choices: Choice2[]
  }
  
  export interface Choice2 {
    label: string
    id: number
  }
  
  export interface Filters {
    applied: boolean
    name: Name
    starRating: StarRating
    guestRating: GuestRating
    landmarks: Landmarks
    neighbourhood: Neighbourhood
    accommodationType: AccommodationType
    facilities: Facilities
    accessibility: Accessibility
    themesAndTypes: ThemesAndTypes
    price: Price2
    paymentPreference: PaymentPreference
    welcomeRewards: WelcomeRewards2
  }
  
  export interface Name {
    item: Item
    autosuggest: Autosuggest
  }
  
  export interface Item {
    value: string
  }
  
  export interface Autosuggest {
    additionalUrlParams: AdditionalUrlParams
  }
  
  export interface AdditionalUrlParams {
    "resolved-location": string
    "q-destination": string
    "destination-id": string
  }
  
  export interface StarRating {
    applied: boolean
    items: Item2[]
  }
  
  export interface Item2 {
    value: number
  }
  
  export interface GuestRating {
    range: Range
  }
  
  export interface Range {
    min: Min
    max: Max
  }
  
  export interface Min {
    defaultValue: number
  }
  
  export interface Max {
    defaultValue: number
  }
  
  export interface Landmarks {
    selectedOrder: any[]
    items: Item3[]
    distance: any[]
  }
  
  export interface Item3 {
    label: string
    value: string
  }
  
  export interface Neighbourhood {
    applied: boolean
    items: Item4[]
  }
  
  export interface Item4 {
    label: string
    value: string
  }
  
  export interface AccommodationType {
    applied: boolean
    items: Item5[]
  }
  
  export interface Item5 {
    label: string
    value: string
  }
  
  export interface Facilities {
    applied: boolean
    items: Item6[]
  }
  
  export interface Item6 {
    label: string
    value: string
  }
  
  export interface Accessibility {
    applied: boolean
    items: Item7[]
  }
  
  export interface Item7 {
    label: string
    value: string
  }
  
  export interface ThemesAndTypes {
    applied: boolean
    items: Item8[]
  }
  
  export interface Item8 {
    label: string
    value: string
  }
  
  export interface Price2 {
    label: string
    range: Range2
    multiplier: number
  }
  
  export interface Range2 {
    min: Min2
    max: Max2
    increments: number
  }
  
  export interface Min2 {
    defaultValue: number
  }
  
  export interface Max2 {
    defaultValue: number
  }
  
  export interface PaymentPreference {
    items: Item9[]
  }
  
  export interface Item9 {
    label: string
    value: string
  }
  
  export interface WelcomeRewards2 {
    label: string
    items: Item10[]
  }
  
  export interface Item10 {
    label: string
    value: string
  }
  
  export interface PointOfSale {
    currency: Currency
  }
  
  export interface Currency {
    code: string
    symbol: string
    separators: string
    format: string
  }
  
  export interface Miscellaneous {
    pageViewBeaconUrl: string
    showLegalInfoForStrikethroughPrices: boolean
    legalInfoForStrikethroughPrices: string
    compressionMessaging: CompressionMessaging
  }
  
  export interface CompressionMessaging {
    percentage: number
    popularityMessage: string
  }
  
  export interface PageInfo {
    pageType: string
  }
  
  export interface Common {
    pointOfSale: PointOfSale2
    tracking: Tracking
  }
  
  export interface PointOfSale2 {
    numberSeparators: string
    brandName: string
  }
  
  export interface Tracking {
    omniture: Omniture
  }
  
  export interface Omniture {
    "s.prop33": string
    "s.prop32": string
    "s.prop74": string
    "s.products": string
    "s.eVar16": string
    "s.eVar40": string
    "s.eVar41": string
    "s.eVar63": string
    "s.eVar42": string
    "s.eVar4": string
    "s.eVar43": string
    "s.eVar3": string
    "s.eVar22": string
    "s.eVar2": string
    "s.eVar23": string
    "s.eVar24": string
    "s.eVar7": string
    "s.server": string
    "s.eVar6": string
    "s.prop29": string
    "s.eVar5": string
    "s.prop27": string
    "s.eVar9": string
    "s.prop21": string
    "s.prop20": string
    "s.eVar69": string
    "s.currencyCode": string
    "s.eVar26": string
    "s.eVar29": string
    "s.prop9": string
    "s.eVar95": string
    "s.prop7": string
    "s.eVar31": string
    "s.eVar32": string
    "s.eVar33": string
    "s.eVar34": string
    "s.eVar13": string
    "s.prop19": string
    "s.events": string
    "s.prop18": string
    "s.prop5": string
    "s.prop15": string
    "s.prop3": string
    "s.prop14": string
    "s.prop36": string
    "s.eVar93": string
    "s.prop2": string
  }
  