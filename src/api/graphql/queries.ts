import { gql } from '@apollo/client'

export const GET_DEMAND = gql`
  query Demands($demandStates: [DemandState!], $last: Int, $first: Int, $before: String, $after: String)
  @api(name: DEMAND_API) {
    demands(demandStates: $demandStates, last: $last, first: $first, before: $before, after: $after) {
      nodes {
        id
        fileType
        demandType
        progress
        state
        createdAt
        jobs {
          nodes {
            state
            progress
            id
          }
        }
        state
        exOption
        originalFiles {
          name
          size
          state
          uploadedAt
          expiredAt
        }
        resultFiles {
          downloadUrl
        }
      }
    }
  }
`
export const LIST_DEMAND = gql`
  query ListDemands($demandStates: [DemandState!]) @api(name: DEMAND_API) {
    listDemands(demandStates: $demandStates) {
      id
      demandType
      fileType
      progress
      rendering_start_frame_number
      rendering_end_frame_number
      use_gpu_count
      originalFiles {
        name
        size
        state
        filePath
        frameCount
        expiredAt
        uploadedAt
      }
      jobs {
        nodes {
          id
          state
          frame_number
          running
          progress
          rpr_size
        }
      }
      createdAt
    }
  }
`

export const GET_DEMAND_ID = gql`
  query GetDemand($demandId: ID!) @api(name: DEMAND_API) {
    getDemand(demandId: $demandId) {
      id
    }
  }
`
