import { gql } from 'graphql-tag';
export const locationSchema = gql`
  """
  A place that forms a unit and can be used for some specific purpose -
  respa unit or resource, service map unit, beta.kultus venue, linked
  events place, Kukkuu venue
  """
  type Venue {
    meta: NodeMeta
    name: LanguageString
    location: LocationDescription @cacheControl(inheritMaxAge: true)
    description: LanguageString
    descriptionResources: DescriptionResources
    partOf: Venue
    openingHours: OpeningHours
    manager: LegalEntity
    contactDetails: ContactInfo
    reservationPolicy: VenueReservationPolicy
    accessibilityProfile: AccessibilityProfile
    arrivalInstructions: String
    additionalInfo: String
    facilities: [VenueFacility!]
    images: [LocationImage]
    ontologyWords: [OntologyWord]
  }
  """
  Free-form location, not necessarily at a know venue.
  """
  type LocationDescription {
    url: LanguageString
    geoLocation: GeoJSONFeature @cacheControl(inheritMaxAge: true)
    address: Address
    explanation: String
      @origin(service: "linked", type: "event", attr: "location_extra_info")
    administrativeDivisions: [AdministrativeDivision]
    venue: Venue
  }
  """
  TODO: take this from service map / TPREK
  """
  type AccessibilityProfile {
    meta: NodeMeta
    todo: String
  }
  """
  TODO: combine beta.kultus Venue stuff with respa equipment type
  """
  type VenueFacility {
    meta: NodeMeta
    name: String!
    categories: [KeywordString!]
  }
  type OpeningHours {
    url: String
    is_open_now_url: String
    today: [OpeningHoursTimes]
    data: [OpeningHoursDay]
  }

  type LocationImage {
    url: String
    caption: LanguageString
  }

  type AdministrativeDivision {
    id: ID
    type: String
    municipality: String
    name: LanguageString
  }

  type OntologyWord {
    id: ID
    label: LanguageString
  }

  type OpeningHoursDay {
    date: String
    times: [OpeningHoursTimes]
  }

  type OpeningHoursTimes {
    startTime: String
    endTime: String
    endTimeOnNextDay: Boolean
    resourceState: String
    fullDay: Boolean
  }
`;
