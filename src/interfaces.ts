export interface ILead {
    // API access token
    token: string
    // Conversion ID
    identifier: string
    email: string
    // Client ID, used for analysis of sources and campaigns.
    client?: string
    // Domain in which the lead has converted.
    domain?: string
    name?: string
    company?: string
    // Occupation / position of lead
    occupation?: string
    phone?: string
    website?: string
}
