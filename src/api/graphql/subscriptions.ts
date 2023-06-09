import { gql } from '@apollo/client'

export const SUBSCRIPTION_DEMAND = gql`
  subscription Demand($demandId: ID!) {
    demand(demandId: $demandId) {
      id
    }
  }
`
