import { gql } from '@apollo/client'

export const UPLOAD_ORIGINAL_FILE = gql`
  mutation UploadOriginalFile($fileType: DemandFileType!, $fileName: String!, $fileSize: Int!) @api(name: DEMAND_API) {
    uploadOriginalFile(input: { fileType: $fileType, fileName: $fileName, fileSize: $fileSize }) {
      ... on UploadOriginalFileSuccess {
        uploadUrl
        success
        expiredAt
      }
    }
  }
`

export const START_DEMAND_JOBS = gql`
  mutation StartDemandJobs($demandId: ID!) @api(name: DEMAND_API) {
    startDemandJobs(input: { demandId: $demandId }) {
      ... on StartDemandJobsSuccess {
        success
      }
    }
  }
`
