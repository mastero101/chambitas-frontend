export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expirationDate?: Date;
  documentUrl?: string;
  isVerified: boolean;
}
