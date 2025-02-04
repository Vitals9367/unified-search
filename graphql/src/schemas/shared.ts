import { gql } from 'graphql-tag';
export const sharedSchema = gql`
  scalar DateTime
  type NodeMeta @cacheControl(inheritMaxAge: true) {
    id: ID!
    createdAt: DateTime
    updatedAt: DateTime
  }
  """
  TODO: merge all free tags, categories, and keywords
  KEYWORDS ARE GIVEN FROM events-proxy (https://tapahtumat-proxy.test.kuva.hel.ninja/proxy/graphql)
  """
  type KeywordString {
    name: String!
  }
  """
  TODO: take from Profile or external source
  """
  enum UnifiedSearchLanguageEnum {
    FI
  }
  """
  TODO: convert all String's to LanguageString's if linguistic content
  """
  type LanguageString @cacheControl(inheritMaxAge: true) {
    fi: String
    sv: String
    en: String
  }
  """
  any kind of description answering the question "when".
  """
  type TimeDescription {
    starting: DateTime
      @origin(service: "linked", type: "event", attr: "start_time")
    ending: DateTime @origin(service: "linked", type: "event", attr: "end_time")
    otherTime: TimeDescription
  }
  """
  Resources (media) that provide extra description of a resource,
  facility, event or venue, such as images, videos, info pages, etc.
  """
  type DescriptionResources {
    mediaResources: [MediaResource!]!
      @origin(service: "linked", type: "event", attr: "images")
      @origin(service: "linked", type: "event", attr: "videos")
    infoUrls: [String!]!
      @origin(service: "linked", type: "event", attr: "info_url")
    externalLinks: [String!]!
  }
  """
  TODO: take this from Linked events Image type.
  """
  type MediaResource {
    meta: NodeMeta
    todo: String
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;
