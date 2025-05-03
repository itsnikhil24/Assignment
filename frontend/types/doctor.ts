
export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  qualifications: string[];
  profileImage?: string;
  rating?: number;
  fee: number;
  cashback?: number;
  clinic: string;
  availableIn?: string;
}

export enum ConsultMode {
  ONLINE = "Online",
  HOSPITAL = "Hospital",
}

export interface DoctorFilters {
  consultMode?: ConsultMode[];
  experienceYears?: number[];
  fee?: FeeRange[];
  languages?: string[];
  page: number;
  limit: number;
  search?: string;
}

export enum FeeRange {
  RANGE_100_500 = "100-500",
  RANGE_500_1000 = "500-1000",
  RANGE_1000_PLUS = "1000+",
}
