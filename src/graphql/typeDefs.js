import { gql } from 'apollo-boost';

const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    displayName: String!
    email: String!
    id: ID!
    createdAt: DateTime!
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    SetCurrentUser(user: User!): User!
    RemoveItemFromCart(id: ID!): ID!
    ClearItemFromCart(id: ID!): ID!
  }
`;

export default typeDefs;
