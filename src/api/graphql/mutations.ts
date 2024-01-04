import { gql } from '@apollo/client'

export const UPLOAD_ORIGINAL_FILE = gql`
  mutation UploadOriginalFile($fileType: DemandFileType!, $fileName: String!, $fileSize: Int!) @api(name: NEW_API) {
    uploadOriginalFile(input: { fileType: $fileType, fileName: $fileName, fileSize: $fileSize }) {
      uploadUrl
      success
      expiredAt
    }
  }
`

export const START_DEMAND_JOBS = gql`
  mutation StartDemandJobs($demandId: ID!) @api(name: NEW_API) {
    startDemandJobs(input: { demandId: $demandId }) {
      success
    }
  }
`

export const UPDATE_INVOICE_SAMPLE = gql`
  mutation UpdateInvoiceSample($id: ID!, $filePath: String, $billingType: BillingType) @api(name: NEW_API) {
    updateInvoiceSample(input: { id: $id, filePath: $filePath, billingType: $billingType }) {
      id
    }
  }
`
