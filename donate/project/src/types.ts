export interface Donor {
  id: string;
  name: string;
  bloodType: BloodType;
  organType?: OrganType[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  availability: 'available' | 'unavailable';
  lastUpdated: string;
  contactInfo: {
    phone?: string;
    email: string;
  };
}

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type OrganType = 'Kidney' | 'Liver' | 'Heart' | 'Lungs' | 'Pancreas' | 'Corneas';