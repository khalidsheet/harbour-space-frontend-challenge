export interface Description {
  type: string;
  data: string;
}

export interface Location {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
  country_id: number;
  acronym: string;
}

export interface About {
  type: string;
  data: string;
}

export interface InternshipDescription {
  type: string;
  data: string;
}

export interface InternshipExpectation {
  type: string;
  data: string[];
}

export interface InternshipPotentialRoles {
  type: string;
  data: string[];
}

export interface WhoShouldApplyText {
  data: string;
  type: string;
}

export interface UniversityRequirements {
  type: string;
  data: string[];
}

export interface InternshipRequirements {
  type: string;
  data: string[];
}

export interface EncourageText {
  data: string;
  type: string;
}

export interface Answer {
  type: string;
  data: string;
}

export interface Item {
  type: string;
  question: string;
  answer: Answer[];
}

export interface Faqs {
  items: Item[];
  categories: string[];
}

export interface Description2 {
  type: string;
  data: string;
}

export interface RawFile {
  preview: string;
}

export interface Photo {
  rawFile: RawFile;
  src: string;
  title: string;
}

export interface Program {
  id: number;
  scope: string;
  name: string;
  about: string;
  description: Description2[];
  link: string;
  available: boolean;
  application_process: any[];
  photos: Photo[];
  program_logo: string;
  json_logo?: any;
}

export interface Description3 {
  type: string;
  data: string;
}

export interface RawFile2 {
  preview: string;
}

export interface ColorLogo {
  rawFile: RawFile2;
  src: string;
  title: string;
}

export interface RawFile3 {
  preview: string;
}

export interface LogoLight {
  rawFile: RawFile3;
  src: string;
  title: string;
}

export interface RawFile4 {
  preview: string;
}

export interface LogoDark {
  rawFile: RawFile4;
  src: string;
  title: string;
}

export interface Company {
  id: number;
  scope: string;
  name: string;
  type: string;
  color: string;
  website?: any;
  rank: number;
  description: Description3[];
  photos: any[];
  color_logo: ColorLogo;
  logo_light: LogoLight;
  logo_dark: LogoDark;
}

export interface RawFile5 {
  preview: string;
}

export interface SmallPicture {
  rawFile: RawFile5;
  src: string;
  title: string;
}

export interface Country {
  id: number;
  scope: string;
  country_name: string;
  display_name: string;
  country_code: string;
  country_flag: string;
  country_phone_code: string;
}

export interface Director {
  id: number;
  scope: string;
  name: string;
  first_name: string;
  last_name: string;
  slug: string;
  category: string;
  small_picture: SmallPicture;
  current_position: string;
  country: Country;
}

export interface RawFile6 {
  preview: string;
}

export interface SmallPicture2 {
  rawFile: RawFile6;
  src: string;
  title: string;
}

export interface Country2 {
  id: number;
  scope: string;
  country_name: string;
  display_name: string;
  country_code: string;
  country_flag: string;
  country_phone_code: string;
}

export interface Instructor {
  id: number;
  scope: string;
  name: string;
  first_name: string;
  last_name: string;
  slug: string;
  category: string;
  small_picture: SmallPicture2;
  current_position: string;
  country: Country2;
}

export default interface Scholarship {
  scope: string;
  id: number;
  name: string;
  description: Description[];
  location: Location;
  scholarship_start_date: string;
  application_end_date: string;
  duration: number;
  position: string;
  about: About[];
  tuition: number;
  total_value: number;
  stipend_per_month: number;
  stipend_per_year: number;
  remaining: number;
  study_commitment: number;
  internship_commitment: number;
  study_commitment_text: string;
  internship_commitment_text: string;
  work_commitment: number;
  work_commitment_duration: string;
  work_commitment_type: string;
  credits: number;
  courses: number;
  degree: string;
  what_you_will_learn: any[];
  internship_description: InternshipDescription[];
  internship_expectation: InternshipExpectation;
  internship_potential_roles: InternshipPotentialRoles;
  program_director_ids: number[];
  program_instructor_ids: number[];
  who_should_apply_text: WhoShouldApplyText[];
  university_requirements: UniversityRequirements;
  internship_requirements: InternshipRequirements;
  encourage_text: EncourageText[];
  faqs: Faqs;
  program: Program;
  company: Company;
  directors: Director[];
  instructors: Instructor[];
  mentors: any[];
}

export interface Meta {
  id: number;
  scope: string;
  title: string;
  description: string;
  abstract: string;
  keywords: string;
}

export interface OgMeta {
  id: number;
  scope: string;
  page_url: string;
  title: string;
  desc: string;
  image_url: string;
}

export interface RootScholarShipObject {
  id: number;
  scope: string;
  slug: string;
  is_published: boolean;
  scholarship: Scholarship;
  meta: Meta;
  og_meta: OgMeta;
  testimonials: any[];
}
