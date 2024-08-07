/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Custom scalar type that can accept an array of numbers, strings, and objects */
  AnyType: { input: any; output: any };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: { input: any; output: any };
};

export enum ABClientType {
  Active = 'active',
  InActive = 'inActive',
}

export type AddBranch = {
  address: AddressInput;
  altEmail?: InputMaybe<Scalars['String']['input']>;
  altPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  branchName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type AdditionalCompanyField = {
  __typename?: 'AdditionalCompanyField';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type AdditionalField = {
  __typename?: 'AdditionalField';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type AdvancePayment = {
  __typename?: 'AdvancePayment';
  advancePaymentType: Scalars['String']['output'];
  amount?: Maybe<Scalars['String']['output']>;
  value: Scalars['Float']['output'];
};

export type AdvancePaymentReceived = {
  __typename?: 'AdvancePaymentReceived';
  amount?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
};

export type AllProjectsList = {
  __typename?: 'AllProjectsList';
  data: Array<ProjectOutputList>;
  metadata: Metadata;
};

export type AvailableTeamInput = {
  dateRange?: InputMaybe<dateRange>;
  duration?: InputMaybe<duration>;
  fetchAllMembers?: InputMaybe<Scalars['Boolean']['input']>;
  firstSeasonDate?: InputMaybe<Scalars['DateTime']['input']>;
  frequency?: InputMaybe<frequency>;
  jobType?: InputMaybe<TypeOfJob>;
  repeatOn?: InputMaybe<Array<Scalars['JSON']['input']>>;
  timeRange?: InputMaybe<timeRange>;
};

export type AwardDetail = {
  __typename?: 'AwardDetail';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
};

export type Branch = {
  __typename?: 'Branch';
  address: Address;
  altEmail?: Maybe<Scalars['String']['output']>;
  altPhoneNumber?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  branchName: Scalars['String']['output'];
  companyId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  isPrimary: Scalars['Boolean']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type BranchResponse = {
  __typename?: 'BranchResponse';
  address: Address;
  altEmail?: Maybe<Scalars['String']['output']>;
  altPhoneNumber?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  branchName: Scalars['String']['output'];
  companyId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  isPrimary: Scalars['Boolean']['output'];
  phoneNumber: Scalars['String']['output'];
};

export enum CalendarType {
  Gregorian = 'gregorian',
  IslamicLunar = 'islamic_lunar',
  IslamicSolar = 'islamic_solar',
}

export type Checklist = {
  __typename?: 'Checklist';
  _id: Scalars['ObjectID']['output'];
  companyId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type ChecklistInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type ChecklistOutput = {
  __typename?: 'ChecklistOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ClientBranchesOutput = {
  __typename?: 'ClientBranchesOutput';
  address?: Maybe<Address>;
  altEmail?: Maybe<Scalars['String']['output']>;
  altPhoneNumber?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  branchName?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type ClientCompanyOutput = {
  __typename?: 'ClientCompanyOutput';
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingDetail?: Maybe<MarketingDetail>;
  markupDetail?: Maybe<MarkupDetail>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ClientContractorList = {
  __typename?: 'ClientContractorList';
  data: Array<ClientContractorsOutput>;
  metadata: Metadata;
};

export type ClientContractorsOutput = {
  __typename?: 'ClientContractorsOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  awardWinner?: Maybe<Scalars['Boolean']['output']>;
  companyDetails?: Maybe<CompanyDetailsABOutput>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experienceYears?: Maybe<Scalars['Float']['output']>;
  licenseVerified?: Maybe<Scalars['Boolean']['output']>;
  localRequests?: Maybe<Scalars['Float']['output']>;
  numberOfCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfProjects?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  respondsIn?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userInformation?: Maybe<userInformation>;
};

export type ClientInput = {
  branchesDetails?: InputMaybe<Array<CreateBranch>>;
  companyDetails?: InputMaybe<CreateClientCompany>;
  contractorIds?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentDetails?: InputMaybe<Array<paymentInput>>;
  projectsDetails?: InputMaybe<Array<ProjectForClientInput>>;
  servicesDetails?: InputMaybe<ServicesDetailsInput>;
  status?: InputMaybe<ClientStatus>;
};

export enum ClientStatus {
  Active = 'active',
  Archived = 'archived',
  InActive = 'inActive',
  Individual = 'individual',
  Lead = 'lead',
}

export type ClientsList = {
  __typename?: 'ClientsList';
  data: Array<ClientsOutput>;
  metadata: Metadata;
};

export type ClientsOutput = {
  __typename?: 'ClientsOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  contractorIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentDetails?: Maybe<Array<PaymentInput>>;
  projectCount?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ClientStatus>;
  userId?: Maybe<Scalars['String']['output']>;
  userInformation?: Maybe<userInformation>;
};

export enum ClockEventStatus {
  Approved = 'Approved',
  Archived = 'Archived',
  Paid = 'Paid',
  Pending = 'Pending',
  Revised = 'Revised',
}

export enum ClockEventType {
  BreakIn = 'BreakIn',
  BreakOut = 'BreakOut',
  ClockIn = 'ClockIn',
  ClockOut = 'ClockOut',
}

export type CompanyDetails = {
  __typename?: 'CompanyDetails';
  address?: Maybe<Address>;
  companyName?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<industryOutput>;
  logo?: Maybe<Scalars['String']['output']>;
  marketingDetail?: Maybe<MarketingDetail>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  serviceCategory?: Maybe<Array<serviceCategoryOutput>>;
  workingHours?: Maybe<WorkingHoursP>;
};

export type CompanyDetailsAB = {
  __typename?: 'CompanyDetailsAB';
  address: Address;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateContactNumbers?: Maybe<Array<Scalars['String']['output']>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactNumber: Scalars['String']['output'];
  email: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CompanyDetailsABOutput = {
  __typename?: 'CompanyDetailsABOutput';
  _id: Scalars['ObjectID']['output'];
  address: Address;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateContactNumbers?: Maybe<Array<Scalars['String']['output']>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  contactNumber: Scalars['String']['output'];
  email: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
};

export type CompanyResponse = {
  __typename?: 'CompanyResponse';
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address: Address;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  branches?: Maybe<Array<Branch>>;
  companyName: Scalars['String']['output'];
  companySize?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingDetail?: Maybe<MarketingDetail>;
  markupDetail?: Maybe<MarkupDetail>;
  phoneNumber: Scalars['String']['output'];
  serviceCategory?: Maybe<Array<Scalars['String']['output']>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ConfirmPaymentOutput = {
  __typename?: 'ConfirmPaymentOutput';
  profitAmount?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Boolean']['output'];
  transferId?: Maybe<Scalars['String']['output']>;
};

export type ContractorABClientOutput = {
  __typename?: 'ContractorABClientOutput';
  _id: Scalars['String']['output'];
  companyDetails?: Maybe<CompanyDetailsABOutput>;
  contractorIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentDetails?: Maybe<Array<PaymentAB>>;
  personalDetails: PersonalDetailABOutput;
  projectDetails?: Maybe<Array<ProjectDetailsABOuput>>;
};

export type ContractorABInput = {
  companyDetails?: InputMaybe<companyDetailsAB>;
  paymentDetails?: InputMaybe<Array<paymentAB>>;
  personalDetails: personalDetailAB;
  projectDetails?: InputMaybe<Array<projectDetailsAB>>;
};

export type ContractorABOutputs = {
  __typename?: 'ContractorABOutputs';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  companyDetails?: Maybe<CompanyDetailsAB>;
  contractorIds?: Maybe<Array<Scalars['String']['output']>>;
  lastActive?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Array<PaymentAB>>;
  projectDetails?: Maybe<Array<ProjectDetailsAB>>;
  type?: Maybe<ABClientType>;
  userId?: Maybe<Scalars['String']['output']>;
  userInformation?: Maybe<PersonalDetailAB>;
};

export type ContractorABProjectInput = {
  additionalEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalPhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  address: AddressInput;
  billingAddresses?: InputMaybe<Array<AddressInput>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
};

export type ContractorABProjectOutput = {
  __typename?: 'ContractorABProjectOutput';
  _id: Scalars['String']['output'];
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address?: Maybe<Address>;
  billingAddresses?: Maybe<Array<Address>>;
  clientId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
};

export type ContractorCompanyResponse = {
  __typename?: 'ContractorCompanyResponse';
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address: Address;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  branches?: Maybe<Array<Branch>>;
  companyName: Scalars['String']['output'];
  companySize?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ObjectID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingDetail?: Maybe<MarketingDetail>;
  markupDetail?: Maybe<MarkupDetail>;
  phoneNumber: Scalars['String']['output'];
  serviceCategory?: Maybe<Array<Scalars['String']['output']>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<TimeSheetCompany>;
};

export type ContractorCompanyUpdateResponse = {
  __typename?: 'ContractorCompanyUpdateResponse';
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  industry?: Maybe<Industry>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingBlog?: Maybe<Array<MarketingBlogOutput>>;
  marketingDetail?: Maybe<MarketingDetail>;
  marketingProject?: Maybe<Array<MarketingProjectOutput>>;
  markupDetail?: Maybe<MarkupDetail>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  serviceCategory?: Maybe<Array<serviceCategoryOutput>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<TimeSheetCompany>;
};

export type ContractorFilterInput = {
  awardWinner?: InputMaybe<Scalars['Boolean']['input']>;
  confirmedHired?: InputMaybe<Scalars['Boolean']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  licenseVerified?: InputMaybe<Scalars['Boolean']['input']>;
  respondsQuickly?: InputMaybe<Scalars['Boolean']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
};

export type ContractorInput = {
  awardWinner?: InputMaybe<Scalars['Boolean']['input']>;
  company: CreateContractorCompany;
  experienceYears?: InputMaybe<Scalars['Float']['input']>;
  licenseVerified?: InputMaybe<Scalars['Boolean']['input']>;
  localRequests?: InputMaybe<Scalars['Float']['input']>;
  numberOfCustomers?: InputMaybe<Scalars['Float']['input']>;
  numberOfProjects?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  respondsIn?: InputMaybe<Scalars['Float']['input']>;
};

export type ContractorList = {
  __typename?: 'ContractorList';
  data: Array<ContractorsOutput>;
  metadata: Metadata;
};

export type ContractorListOutputPublic = {
  __typename?: 'ContractorListOutputPublic';
  awardWinner?: Maybe<Scalars['Boolean']['output']>;
  companyDetails?: Maybe<CompanyDetails>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  licenseVerified?: Maybe<Scalars['Boolean']['output']>;
  localRequests?: Maybe<Scalars['Float']['output']>;
  numberOfCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfProjects?: Maybe<Scalars['Float']['output']>;
  personalDetails?: Maybe<PersonalDetails>;
  rating?: Maybe<Scalars['Float']['output']>;
  respondsIn?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ContractorListPublic = {
  __typename?: 'ContractorListPublic';
  data: Array<ContractorListOutputPublic>;
  metadata: Metadata;
};

export type ContractorOutput = {
  __typename?: 'ContractorOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  branchesDetails?: Maybe<Array<BranchResponse>>;
  companyDetails?: Maybe<GetContractorCompanyOutput>;
  companyId?: Maybe<Scalars['String']['output']>;
  industryDetails?: Maybe<getContractorindustryDetails>;
  personalDetails?: Maybe<ExtendedGetContractorUserDetail>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ContractorRegisterOutput = {
  __typename?: 'ContractorRegisterOutput';
  _id: Scalars['ObjectID']['output'];
  awardWinner?: Maybe<Scalars['Boolean']['output']>;
  company: ContractorRegisterResponse;
  companyId?: Maybe<Scalars['String']['output']>;
  experienceYears?: Maybe<Scalars['Float']['output']>;
  licenseVerified?: Maybe<Scalars['Boolean']['output']>;
  localRequests?: Maybe<Scalars['Float']['output']>;
  numberOfCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfProjects?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  respondsIn?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ContractorRegisterResponse = {
  __typename?: 'ContractorRegisterResponse';
  additionalBranches?: Maybe<Array<BranchResponse>>;
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingDetail?: Maybe<MarketingDetail>;
  markupDetail?: Maybe<MarkupDetail>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  serviceCategory?: Maybe<Array<Scalars['String']['output']>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<TimeSheetCompany>;
};

export enum ContractorSort {
  Rating = 'rating',
  RespondsIn = 'respondsIn',
}

export type ContractorsOutput = {
  __typename?: 'ContractorsOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  awardWinner?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experienceYears?: Maybe<Scalars['Float']['output']>;
  licenseVerified?: Maybe<Scalars['Boolean']['output']>;
  localRequests?: Maybe<Scalars['Float']['output']>;
  numberOfCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfProjects?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  respondsIn?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userInformation?: Maybe<userInformation>;
};

export type Cost = {
  __typename?: 'Cost';
  amountType: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type CreateBranch = {
  address: AddressInput;
  altEmail?: InputMaybe<Scalars['String']['input']>;
  altPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  branchName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary: Scalars['Boolean']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type CreateClientCompany = {
  additionalEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalPhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  address: AddressInput;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mailingAddress?: InputMaybe<AddressInput>;
  marketingDetail?: InputMaybe<marketingDetail>;
  markupDetail?: InputMaybe<markupDetail>;
  phoneNumber: Scalars['String']['input'];
  taxDetail?: InputMaybe<taxDetail>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContractorCompany = {
  additionalBranches?: InputMaybe<Array<CreateBranch>>;
  additionalEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  additionalPhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  address: AddressInput;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  companySize?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  industry?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mailingAddress?: InputMaybe<AddressInput>;
  marketingDetail?: InputMaybe<marketingDetail>;
  markupDetail?: InputMaybe<markupDetail>;
  phoneNumber: Scalars['String']['input'];
  serviceCategory?: InputMaybe<Array<Scalars['String']['input']>>;
  taxDetail?: InputMaybe<taxDetail>;
  workingHours?: InputMaybe<timeSheetCompany>;
};

export type CreateIndustry = {
  label?: InputMaybe<Scalars['String']['input']>;
  logos?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateServiceCategory = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  industryId: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type CurrencyType = {
  __typename?: 'CurrencyType';
  currencyType?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export enum CurrencyTypes {
  Aed = 'aed',
  Try = 'try',
  Usd = 'usd',
}

export type CustomSchedule = {
  __typename?: 'CustomSchedule';
  active?: Maybe<Scalars['Boolean']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
};

export type DateRange = {
  __typename?: 'DateRange';
  duration?: Maybe<Duration>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export enum DateRangeFilters {
  ThisMonth = 'this_month',
  ThisWeek = 'this_week',
  Today = 'today',
}

export enum DayOfWeek {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
}

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Department = {
  __typename?: 'Department';
  _id: Scalars['ObjectID']['output'];
  name: Scalars['String']['output'];
};

export type DepartmentCreate = {
  name: Scalars['String']['input'];
};

export type Discount = {
  __typename?: 'Discount';
  discountType: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type Duration = {
  __typename?: 'Duration';
  durationType?: Maybe<DurationType>;
  selectedFrequency?: Maybe<Scalars['Float']['output']>;
};

export enum DurationType {
  Day = 'day',
  Month = 'month',
  Quarter = 'quarter',
  Week = 'week',
}

export type EmploymentDetails = {
  __typename?: 'EmploymentDetails';
  billableRates: Scalars['String']['output'];
  billableRatesFrequency: Scalars['String']['output'];
  compensationType: Scalars['String']['output'];
  department?: Maybe<Scalars['String']['output']>;
  employmentGroup: Scalars['String']['output'];
  employmentType: Scalars['String']['output'];
  jobTitle: Scalars['String']['output'];
  payOutWages: Scalars['String']['output'];
  serviceArea: Scalars['String']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  wages: Scalars['String']['output'];
};

export type EmploymentDetailsPartial = {
  __typename?: 'EmploymentDetailsPartial';
  billableRates?: Maybe<Scalars['String']['output']>;
  billableRatesFrequency?: Maybe<Scalars['String']['output']>;
  compensationType?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  employmentGroup?: Maybe<Scalars['String']['output']>;
  employmentType?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  payOutWages?: Maybe<Scalars['String']['output']>;
  serviceArea?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  wages?: Maybe<Scalars['String']['output']>;
};

export type Expenses = {
  __typename?: 'Expenses';
  amount: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  expenseDate: Scalars['DateTime']['output'];
  images: Array<Scalars['String']['output']>;
};

export type ExtendedGetContractorUserDetail = {
  __typename?: 'ExtendedGetContractorUserDetail';
  _id?: Maybe<Scalars['String']['output']>;
  address?: Maybe<address>;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  awardWinner?: Maybe<Scalars['Boolean']['output']>;
  bgImage?: Maybe<Scalars['String']['output']>;
  company?: Maybe<companyDetails>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employmentDetails?: Maybe<EmploymentDetailsPartial>;
  experienceYears?: Maybe<Scalars['Float']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  licenseVerified?: Maybe<Scalars['Boolean']['output']>;
  localRequests?: Maybe<Scalars['Float']['output']>;
  numberOfCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfProjects?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  respondsIn?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twoFactorInformation?: Maybe<Scalars['JSON']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ExtendedMarkupDetail = {
  __typename?: 'ExtendedMarkupDetail';
  additionalMarkup?: Maybe<Array<AdditionalCompanyField>>;
  overHeadMarkup?: Maybe<Scalars['Float']['output']>;
  profitMarkup?: Maybe<Scalars['Float']['output']>;
  totalCostMarkup?: Maybe<Scalars['Float']['output']>;
};

export type ExtendedTaxDetail = {
  __typename?: 'ExtendedTaxDetail';
  additionalTax?: Maybe<Array<AdditionalCompanyField>>;
  taxId?: Maybe<Scalars['Float']['output']>;
  totalTaxPercentage?: Maybe<Scalars['Float']['output']>;
  valueAddedTax?: Maybe<Scalars['Float']['output']>;
};

export type FilterInput = {
  search?: InputMaybe<SearchTypeInput>;
};

export type Frequency = {
  __typename?: 'Frequency';
  frequencyType?: Maybe<DurationType>;
  selectedFrequency?: Maybe<Scalars['Float']['output']>;
};

export enum GeneralSettingCountry {
  Turkey = 'turkey',
  Uae = 'uae',
  Usa = 'usa',
}

export enum GeneralSettingType {
  Custom = 'custom',
  Recommended = 'recommended',
}

export type GeneratePdfInput = {
  data: Scalars['JSON']['input'];
  pdfType: PdfType;
};

export type GeneratePdfOutput = {
  __typename?: 'GeneratePdfOutput';
  name: Scalars['String']['output'];
  pdfURL: Scalars['String']['output'];
};

export type GetContractorCompanyOutput = {
  __typename?: 'GetContractorCompanyOutput';
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companySize?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectID']['output']>;
  industry?: Maybe<Industry>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isPhoneNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mailingAddress?: Maybe<Address>;
  marketingBlog?: Maybe<Array<MarketingBlogOutput>>;
  marketingDetail?: Maybe<MarketingDetail>;
  marketingProject?: Maybe<Array<MarketingProjectOutput>>;
  markupDetail?: Maybe<MarkupDetail>;
  serviceCategory?: Maybe<Array<serviceCategoryOutput>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  taxDetail?: Maybe<TaxDetail>;
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<TimeSheetCompany>;
};

export type GetTeamMemberOutput = {
  __typename?: 'GetTeamMemberOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<TeamDocument>>;
  employmentDetails?: Maybe<EmploymentDetails>;
  personalDetails?: Maybe<PersonalDetailTeamMember>;
  timeSheet?: Maybe<TimeSheetTeam>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Industry = {
  __typename?: 'Industry';
  _id: Scalars['ObjectID']['output'];
  label: Scalars['String']['output'];
  logos?: Maybe<Array<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type InventoryDetail = {
  __typename?: 'InventoryDetail';
  SKU?: Maybe<Scalars['String']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
};

export type InvoiceAdvancePayment = {
  __typename?: 'InvoiceAdvancePayment';
  amount?: Maybe<Scalars['Float']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoiceInput = {
  advancePayment?: InputMaybe<invoiceAdvancePayment>;
  clientId: Scalars['String']['input'];
  discount: discount;
  expenses?: InputMaybe<Array<expenses>>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxEnable: Scalars['Boolean']['input'];
  jobId?: InputMaybe<Scalars['String']['input']>;
  messageForClient?: InputMaybe<Scalars['String']['input']>;
  paymentDueDate: Scalars['DateTime']['input'];
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices: Array<servicesInput>;
  projectId: Scalars['String']['input'];
  quotationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  taxedAmount?: InputMaybe<Scalars['Float']['input']>;
  termsAndCondition: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type InvoiceListOutput = {
  __typename?: 'InvoiceListOutput';
  balanceDue?: Maybe<Scalars['Float']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  contractorName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  messageForClient?: Maybe<Scalars['String']['output']>;
  paymentDueDate?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  quotationId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<InvoiceStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Cost>;
};

export enum InvoiceListStatusInput {
  All = 'all',
  Archived = 'archived',
  BadDebt = 'badDebt',
  Cancelled = 'cancelled',
  Draft = 'draft',
  Due = 'due',
  New = 'new',
  Overdue = 'overdue',
  Paid = 'paid',
  PartiallyPaid = 'partiallyPaid',
  Schedule = 'schedule',
  Unpaid = 'unpaid',
}

export type InvoiceOutput = {
  __typename?: 'InvoiceOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  advancePayment?: Maybe<InvoiceAdvancePayment>;
  balanceDue?: Maybe<Scalars['Float']['output']>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Discount>;
  expenses?: Maybe<Array<Expenses>>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  job?: Maybe<JobOutput>;
  jobId?: Maybe<Scalars['String']['output']>;
  messageForClient?: Maybe<Scalars['String']['output']>;
  paymentDueDate?: Maybe<Scalars['DateTime']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices?: Maybe<Array<invoiceProductAndServiceOutPut>>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  quotation?: Maybe<QuotationOutput>;
  quotationId?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Reference>;
  status?: Maybe<InvoiceStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  termsAndCondition?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Cost>;
};

export enum InvoiceSort {
  InvoiceNumber = 'invoiceNumber',
  InvoiceTitle = 'invoiceTitle',
  Total = 'total',
}

export enum InvoiceStatus {
  Accepted = 'accepted',
  Archived = 'archived',
  BadDebt = 'badDebt',
  Cancelled = 'cancelled',
  Draft = 'draft',
  Due = 'due',
  Overdue = 'overdue',
  Paid = 'paid',
  PartiallyPaid = 'partiallyPaid',
  Schedule = 'schedule',
  Unpaid = 'unpaid',
}

export enum InvoiceTrigger {
  EndOfMonth = 'endOfMonth',
  JobComplete = 'jobComplete',
  SessionComplete = 'sessionComplete',
}

export type InvoicesOutputResponse = {
  __typename?: 'InvoicesOutputResponse';
  data: Array<InvoiceListOutput>;
  metadata: Metadata;
};

export enum ItemListFilter {
  Active = 'Active',
  All = 'All',
  Draft = 'Draft',
  New = 'New',
  InActive = 'inActive',
}

export type ItemOutput = {
  __typename?: 'ItemOutput';
  _id: Scalars['String']['output'];
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  totalPrice: Cost;
  type: Type;
  unitCost: Cost;
  unitPrice: Cost;
};

export type ItemResponse = {
  __typename?: 'ItemResponse';
  data: Array<ProductAndServiceOutPut>;
  metadata: Metadata;
};

export enum ItemSort {
  Name = 'name',
  Type = 'type',
  UnitPrice = 'unitPrice',
}

export enum ItemStatus {
  Archived = 'Archived',
  Cancelled = 'Cancelled',
  InProgress = 'InProgress',
  Revised = 'Revised',
  Active = 'active',
  Completed = 'completed',
  HoldItem = 'holdItem',
  Reschedule = 'reschedule',
}

export type JobExpense = {
  __typename?: 'JobExpense';
  amount: Scalars['Float']['output'];
  attachments: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  expenseDate: Scalars['DateTime']['output'];
};

export type JobGetOutput = {
  __typename?: 'JobGetOutput';
  AdvancePaymentReceived?: Maybe<Array<AdvancePaymentReceived>>;
  _id?: Maybe<Scalars['ObjectID']['output']>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  checklistIds: Array<Checklist>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateRange?: Maybe<DateRange>;
  discount?: Maybe<Discount>;
  duration?: Maybe<Duration>;
  endSessionDate?: Maybe<Scalars['DateTime']['output']>;
  equipmentNeeded?: Maybe<Scalars['String']['output']>;
  expense?: Maybe<Array<JobExpense>>;
  firstSessionDate?: Maybe<Scalars['DateTime']['output']>;
  frequency?: Maybe<Frequency>;
  invoiceSetting?: Maybe<InvoiceTrigger>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  jobNumber?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  jobType?: Maybe<TypeOfJob>;
  notes?: Maybe<Scalars['String']['output']>;
  notifyTeamMembers?: Maybe<Scalars['Boolean']['output']>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices: Array<ItemOutput>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  quotationId?: Maybe<Scalars['String']['output']>;
  reminderSetting?: Maybe<ReminderSetting>;
  repeatOn?: Maybe<Scalars['AnyType']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<JobStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  teamMembers?: Maybe<Array<TeamMemberOutput>>;
  timeRange?: Maybe<TimeRange>;
  total?: Maybe<Cost>;
};

export type JobInput = {
  AdvancePaymentReceived?: InputMaybe<Array<advancePaymentReceived>>;
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  checklistIds?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId: Scalars['String']['input'];
  dateRange?: InputMaybe<dateRange>;
  discount: discount;
  duration?: InputMaybe<duration>;
  endSessionDate?: InputMaybe<Scalars['DateTime']['input']>;
  equipmentNeeded: Scalars['String']['input'];
  expense?: InputMaybe<Array<jobExpense>>;
  firstSessionDate?: InputMaybe<Scalars['DateTime']['input']>;
  frequency?: InputMaybe<frequency>;
  invoiceSetting?: InputMaybe<InvoiceTrigger>;
  isTaxEnable: Scalars['Boolean']['input'];
  jobNumber: Scalars['String']['input'];
  jobTitle: Scalars['String']['input'];
  jobType: TypeOfJob;
  notes: Scalars['String']['input'];
  notifyTeamMembers: Scalars['Boolean']['input'];
  priority?: InputMaybe<RequestPriority>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices?: InputMaybe<Array<SharedItemCustomInput>>;
  projectId: Scalars['String']['input'];
  quotationId?: InputMaybe<Scalars['String']['input']>;
  reminderSetting?: InputMaybe<ReminderSetting>;
  repeatOn?: InputMaybe<Scalars['AnyType']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
  status: JobStatus;
  teamMemberId: Array<Scalars['String']['input']>;
  timeRange?: InputMaybe<timeRange>;
};

export type JobListByContractorIdOutput = {
  __typename?: 'JobListByContractorIdOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
};

export type JobListOutput = {
  __typename?: 'JobListOutput';
  AdvancePaymentReceived?: Maybe<Array<AdvancePaymentReceived>>;
  checklistIds?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  contractorName?: Maybe<Scalars['String']['output']>;
  dateRange?: Maybe<jobDateRangeOutput>;
  endSessionDate?: Maybe<Scalars['DateTime']['output']>;
  expense?: Maybe<Array<JobExpense>>;
  firstSessionDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invoiceSetting?: Maybe<InvoiceTrigger>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  jobNumber?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  jobType?: Maybe<TypeOfJob>;
  priority?: Maybe<RequestPriority>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  quotationId?: Maybe<Scalars['String']['output']>;
  reminderSetting?: Maybe<ReminderSetting>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<JobStatus>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  total?: Maybe<Cost>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export enum JobListStatusInput {
  Active = 'active',
  AheadOfSchedule = 'aheadOfSchedule',
  All = 'all',
  Archived = 'archived',
  Canceled = 'canceled',
  Completed = 'completed',
  Delayed = 'delayed',
  Draft = 'draft',
  InProgress = 'inProgress',
  Modified = 'modified',
  New = 'new',
  OnSchedule = 'onSchedule',
  Unassigned = 'unassigned',
  UpComing = 'upComing',
}

export type JobOutput = {
  __typename?: 'JobOutput';
  _id: Scalars['ObjectID']['output'];
  jobId: Scalars['String']['output'];
  status: JobStatus;
};

export type JobScheduleOutput1 = {
  __typename?: 'JobScheduleOutput1';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  equipmentChecklist?: Maybe<Array<Scalars['String']['output']>>;
  expense?: Maybe<Array<OtherExpense>>;
  instructionForTeamMember?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  materialChecklist?: Maybe<Array<Scalars['String']['output']>>;
  notesFromField?: Maybe<Scalars['String']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  recommendationForClient?: Maybe<Scalars['String']['output']>;
  safetyChecklist?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<ScheduleJobStatus>;
  taskSchedule?: Maybe<TaskSchedule>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type JobScheduleOutputList = {
  __typename?: 'JobScheduleOutputList';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  equipmentChecklist?: Maybe<Array<Scalars['String']['output']>>;
  expense?: Maybe<Array<OtherExpense>>;
  instructionForTeamMember?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  materialChecklist?: Maybe<Array<Scalars['String']['output']>>;
  notesFromField?: Maybe<Scalars['String']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices?: Maybe<Array<taskProductAndServiceOutPut>>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  recommendationForClient?: Maybe<Scalars['String']['output']>;
  safetyChecklist?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<ScheduleJobStatus>;
  taskSchedule?: Maybe<TaskSchedule>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  teamMembers?: Maybe<Array<TeamMemberOutput>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type JobScheduleOutputResponse = {
  __typename?: 'JobScheduleOutputResponse';
  data: Array<JobScheduleOutput1>;
  metadata: Metadata;
};

export type JobScheduleUpdate = {
  expense?: InputMaybe<Array<otherExpense>>;
  notesFromField?: InputMaybe<Scalars['String']['input']>;
  productAndServices?: InputMaybe<Array<TaskSharedItemCustomInput>>;
  status?: InputMaybe<ScheduleJobStatus>;
};

export type JobScheduleUpdateOutput = {
  __typename?: 'JobScheduleUpdateOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  equipmentChecklist?: Maybe<Array<Scalars['String']['output']>>;
  expense?: Maybe<Array<OtherExpense>>;
  instructionForTeamMember?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  materialChecklist?: Maybe<Array<Scalars['String']['output']>>;
  notesFromField?: Maybe<Scalars['String']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  recommendationForClient?: Maybe<Scalars['String']['output']>;
  safetyChecklist?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<ScheduleJobStatus>;
  taskSchedule?: Maybe<TaskSchedule>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum JobSort {
  ClientName = 'clientName',
  CompanyName = 'companyName',
  JobNumber = 'jobNumber',
  JobTitle = 'jobTitle',
  ProjectName = 'projectName',
}

export enum JobStatus {
  Active = 'active',
  AheadOfSchedule = 'aheadOfSchedule',
  Archived = 'archived',
  Canceled = 'canceled',
  Completed = 'completed',
  Delayed = 'delayed',
  Draft = 'draft',
  InProgress = 'inProgress',
  Modified = 'modified',
  OnSchedule = 'onSchedule',
  Pause = 'pause',
  Resume = 'resume',
  Unassigned = 'unassigned',
  UpComing = 'upComing',
}

export type JobsOutput = {
  __typename?: 'JobsOutput';
  AdvancePaymentReceived?: Maybe<Array<AdvancePaymentReceived>>;
  _id?: Maybe<Scalars['ObjectID']['output']>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  checklistIds?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateRange?: Maybe<DateRange>;
  discount?: Maybe<Discount>;
  duration?: Maybe<Duration>;
  endSessionDate?: Maybe<Scalars['DateTime']['output']>;
  equipmentNeeded?: Maybe<Scalars['String']['output']>;
  expense?: Maybe<Array<JobExpense>>;
  firstSessionDate?: Maybe<Scalars['DateTime']['output']>;
  frequency?: Maybe<Frequency>;
  invoiceSetting?: Maybe<InvoiceTrigger>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  jobNumber?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  jobType?: Maybe<TypeOfJob>;
  notes?: Maybe<Scalars['String']['output']>;
  notifyTeamMembers?: Maybe<Scalars['Boolean']['output']>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices: Array<ItemOutput>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  quotationId?: Maybe<Scalars['String']['output']>;
  reminderSetting?: Maybe<ReminderSetting>;
  repeatOn?: Maybe<Scalars['AnyType']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<JobStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  teamMembers?: Maybe<Array<TeamMemberOutput>>;
  timeRange?: Maybe<TimeRange>;
  total?: Maybe<Cost>;
};

export type JobsOutputResponse = {
  __typename?: 'JobsOutputResponse';
  data: Array<JobListOutput>;
  metadata: Metadata;
};

export type ListDateRange = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ListSearch = {
  searchBy?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type LocationInput = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
};

export enum LongDateFormat {
  DayMonthYear = 'day_month_year',
  MonthDayYear = 'month_day_year',
  WeekdayDayMonthYear = 'weekday_day_month_year',
  WeekdayMonthDayYear = 'weekday_month_day_year',
}

export enum LongTimeFormat {
  TwelveHourMeridiem = 'twelve_hour_meridiem',
  TwelveHourShortMeridiem = 'twelve_hour_short_meridiem',
}

export enum MaritalStatus {
  Divorced = 'divorced',
  Married = 'married',
  Separated = 'separated',
  Single = 'single',
  Widowed = 'widowed',
}

export type MarketingBlogInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type MarketingBlogOutput = {
  __typename?: 'MarketingBlogOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MarketingDetail = {
  __typename?: 'MarketingDetail';
  awardDetail?: Maybe<AwardDetail>;
  introduction?: Maybe<Scalars['String']['output']>;
  marketingBlog?: Maybe<Array<Scalars['String']['output']>>;
  marketingImages?: Maybe<Array<Scalars['String']['output']>>;
  marketingProject?: Maybe<Array<Scalars['String']['output']>>;
};

export type MarketingProjectInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  location: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MarketingProjectOutput = {
  __typename?: 'MarketingProjectOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MarkupAndTaxOutput = {
  __typename?: 'MarkupAndTaxOutput';
  markupDetail?: Maybe<ExtendedMarkupDetail>;
  taxDetail?: Maybe<ExtendedTaxDetail>;
};

export type MarkupDetail = {
  __typename?: 'MarkupDetail';
  additionalMarkup?: Maybe<Array<AdditionalCompanyField>>;
  overHeadMarkup?: Maybe<Scalars['Float']['output']>;
  profitMarkup?: Maybe<Scalars['Float']['output']>;
};

export enum MeasurementUnit {
  ImperialSystem = 'imperial_system',
  MetricSystem = 'metric_system',
  UsCustomaryUnits = 'us_customary_units',
}

export type Messages = {
  __typename?: 'Messages';
  detail?: Maybe<Scalars['String']['output']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  nextCursor?: Maybe<Scalars['String']['output']>;
  previousCursor?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  totalPages?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranch: BranchResponse;
  addContractorABProjects: ContractorABProjectOutput;
  completeClientProfile: createClientOutput;
  completeContractorProfile: ContractorRegisterOutput;
  confirmPayment: ConfirmPaymentOutput;
  createBulkProductOrService: Scalars['String']['output'];
  createCheckList: ChecklistOutput;
  createCompany: ContractorCompanyResponse;
  createContractorAB: ContractorABClientOutput;
  createDepartment: Department;
  createGeneralSetting: SettingOutput;
  createIndustry: industryOutput;
  createInvoice: InvoiceOutput;
  createJob: JobsOutput;
  createPayment: Scalars['Boolean']['output'];
  createPaymentIntent: PaymentIntentOutput;
  createProductOrService: ProductAndServiceOutPut;
  createProject: ProjectOutput;
  createQuotation: QuotationOutput;
  createRating: RatingOutput;
  createReport: JobOutput;
  createRequest: RequestCreateOutput;
  createServiceCategory: serviceCategoryOutput;
  createTeamMember: GetTeamMemberOutput;
  deleteBranch: Scalars['String']['output'];
  deleteUser: DeleteUserOutput;
  generatePDF: GeneratePdfOutput;
  performClockEvent: TimeSheetOutput;
  sendInquiryEmail: Scalars['String']['output'];
  updateBranch: BranchResponse;
  updateClockEvent: TimeSheetOutput;
  updateCompany: ContractorCompanyUpdateResponse;
  updateGeneralSetting: SettingOutput;
  updateIndustry: industryOutput;
  updateInvoice: InvoiceOutput;
  updateJob: JobsOutput;
  updateProductOrService: ProductAndServiceOutPut;
  updateQuotation: Scalars['String']['output'];
  updateRequest: RequestUpdateOutput;
  updateServiceCategory: serviceCategoryOutput;
  updateTask: JobScheduleUpdateOutput;
  updateTeamMember: GetTeamMemberOutput;
  updateUser: UserOutput;
};

export type MutationaddBranchArgs = {
  create: AddBranch;
};

export type MutationaddContractorABProjectsArgs = {
  create: ContractorABProjectInput;
};

export type MutationcompleteClientProfileArgs = {
  create: ClientInput;
};

export type MutationcompleteContractorProfileArgs = {
  create: ContractorInput;
};

export type MutationconfirmPaymentArgs = {
  paymentIntentId: Scalars['String']['input'];
  paymentMethod: Scalars['String']['input'];
};

export type MutationcreateBulkProductOrServiceArgs = {
  create: Array<ProductorServiceInput>;
};

export type MutationcreateCheckListArgs = {
  create: ChecklistInput;
};

export type MutationcreateCompanyArgs = {
  create: CreateClientCompany;
};

export type MutationcreateContractorABArgs = {
  create: ContractorABInput;
};

export type MutationcreateDepartmentArgs = {
  create: DepartmentCreate;
};

export type MutationcreateGeneralSettingArgs = {
  country?: InputMaybe<GeneralSettingCountry>;
  create?: InputMaybe<createInput>;
  settingType?: InputMaybe<GeneralSettingType>;
};

export type MutationcreateIndustryArgs = {
  create: CreateIndustry;
};

export type MutationcreateInvoiceArgs = {
  create: InvoiceInput;
};

export type MutationcreateJobArgs = {
  create: JobInput;
};

export type MutationcreatePaymentArgs = {
  create: PaymentsInput;
};

export type MutationcreatePaymentIntentArgs = {
  amount: Scalars['Float']['input'];
  contractorId: Scalars['String']['input'];
  currency: Scalars['String']['input'];
};

export type MutationcreateProductOrServiceArgs = {
  create: ProductorServiceInput;
};

export type MutationcreateProjectArgs = {
  create: ProjectInput;
};

export type MutationcreateQuotationArgs = {
  create: QuotationInput;
};

export type MutationcreateRatingArgs = {
  create: createRatingInput;
};

export type MutationcreateReportArgs = {
  create: ReportInput;
};

export type MutationcreateRequestArgs = {
  create: RequestCreateInput;
};

export type MutationcreateServiceCategoryArgs = {
  create: CreateServiceCategory;
};

export type MutationcreateTeamMemberArgs = {
  create: TeamInput;
};

export type MutationdeleteBranchArgs = {
  id: Scalars['String']['input'];
};

export type MutationgeneratePDFArgs = {
  generatePdfInput: GeneratePdfInput;
};

export type MutationperformClockEventArgs = {
  create: TimeSheetInput;
};

export type MutationsendInquiryEmailArgs = {
  create: SendEmailInquiryInput;
};

export type MutationupdateBranchArgs = {
  id: Scalars['String']['input'];
  update: updateBranch;
};

export type MutationupdateClockEventArgs = {
  id: Scalars['String']['input'];
  input: TimeSheetInput;
};

export type MutationupdateCompanyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  update: UpdateContractorCompany;
};

export type MutationupdateGeneralSettingArgs = {
  update: updateInput;
};

export type MutationupdateIndustryArgs = {
  id: Scalars['String']['input'];
  update: CreateIndustry;
};

export type MutationupdateInvoiceArgs = {
  id: Scalars['String']['input'];
  update: updateInvoiceInput;
};

export type MutationupdateJobArgs = {
  id: Scalars['String']['input'];
  updateJobInput: updateJobInput;
};

export type MutationupdateProductOrServiceArgs = {
  id: Scalars['String']['input'];
  update: UpdateProductorService;
};

export type MutationupdateQuotationArgs = {
  quotationId: Scalars['String']['input'];
  update: QuotationUpdateInput;
};

export type MutationupdateRequestArgs = {
  id: Scalars['String']['input'];
  update: RequestUpdateInput;
};

export type MutationupdateServiceCategoryArgs = {
  id: Scalars['String']['input'];
  update: UpdateServiceCategory;
};

export type MutationupdateTaskArgs = {
  id: Scalars['String']['input'];
  update: JobScheduleUpdate;
};

export type MutationupdateTeamMemberArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  update: updateTeamInput;
};

export type MutationupdateUserArgs = {
  update: updateUserInput;
};

export type OtherExpense = {
  __typename?: 'OtherExpense';
  amount: Scalars['Float']['output'];
  attachments: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  expenseDate: Scalars['DateTime']['output'];
};

export type PaginationInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type PartialEmploymentDetails = {
  billableRates?: InputMaybe<Scalars['String']['input']>;
  billableRatesFrequency?: InputMaybe<Scalars['String']['input']>;
  compensationType?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  employmentGroup?: InputMaybe<Scalars['String']['input']>;
  employmentType?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  payOutWages?: InputMaybe<Scalars['String']['input']>;
  serviceArea?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  wages?: InputMaybe<Scalars['String']['input']>;
};

export type PartialPersonalDetailTeamMember = {
  address?: InputMaybe<AddressInput>;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentAB = {
  __typename?: 'PaymentAB';
  billingAddress?: Maybe<Address>;
  cardHolderName?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  cvc?: Maybe<Scalars['String']['output']>;
  expirationMonthTwoDigits?: Maybe<Scalars['Float']['output']>;
  expirationYearTwoDigits?: Maybe<Scalars['Float']['output']>;
  paymentMethod: PaymentMethod;
};

export type PaymentInput = {
  __typename?: 'PaymentInput';
  billingAddress?: Maybe<Address>;
  cardHolderName?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  cvc?: Maybe<Scalars['String']['output']>;
  expirationMonthTwoDigits?: Maybe<Scalars['Float']['output']>;
  expirationYearTwoDigits?: Maybe<Scalars['Float']['output']>;
  paymentMethod: PaymentMethod;
};

export type PaymentIntentOutput = {
  __typename?: 'PaymentIntentOutput';
  clientSecret: Scalars['String']['output'];
};

export enum PaymentMethod {
  Card = 'card',
  Cash = 'cash',
}

export type PaymentsInput = {
  invoiceId: Scalars['String']['input'];
  paymentMethod?: PaymentMethod;
  stripePaymentSuccessId: Scalars['String']['input'];
};

export enum PdfType {
  Invoice = 'INVOICE',
  Quotation = 'QUOTATION',
  Request = 'REQUEST',
}

export type PercentageType = {
  __typename?: 'PercentageType';
  currencyType?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type PersonalDetailAB = {
  __typename?: 'PersonalDetailAB';
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PersonalDetailABOutput = {
  __typename?: 'PersonalDetailABOutput';
  address: Address;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  billingAddress?: Maybe<Address>;
  contactNumber: Scalars['String']['output'];
  dob?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type PersonalDetailTeamMember = {
  __typename?: 'PersonalDetailTeamMember';
  address?: Maybe<Address>;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  maritalStatus?: Maybe<MaritalStatus>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PersonalDetails = {
  __typename?: 'PersonalDetails';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type ProductAndServiceDimensions = {
  __typename?: 'ProductAndServiceDimensions';
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ProductAndServiceOutPut = {
  __typename?: 'ProductAndServiceOutPut';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  additionalInformation?: Maybe<Array<AdditionalField>>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  categoryId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  comparePrice?: Maybe<CurrencyType>;
  contractorId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  inventoryDetail?: Maybe<InventoryDetail>;
  isComparePriceEnable?: Maybe<Scalars['Boolean']['output']>;
  itemNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overHeadMarkup?: Maybe<PercentageType>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  profitMarkup?: Maybe<PercentageType>;
  quantityDetail?: Maybe<QuantityDetail>;
  shippingDetail?: Maybe<ShippingDetail>;
  status?: Maybe<ProductAndServiceStatus>;
  tagId?: Maybe<Array<Scalars['String']['output']>>;
  taxExempt?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Type>;
  unit?: Maybe<Scalars['String']['output']>;
  unitCost?: Maybe<CurrencyType>;
  unitPrice?: Maybe<CurrencyType>;
};

export type ProductAndServiceResponse = {
  __typename?: 'ProductAndServiceResponse';
  additionalInformation?: Maybe<Array<AdditionalField>>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  categoryId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  comparePrice?: Maybe<CurrencyType>;
  contractorId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  inventoryDetail?: Maybe<InventoryDetail>;
  isComparePriceEnable?: Maybe<Scalars['Boolean']['output']>;
  itemNumber?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  quantityDetail?: Maybe<QuantityDetail>;
  shippingDetail?: Maybe<ShippingDetail>;
  status?: Maybe<ProductAndServiceStatus>;
  tagId?: Maybe<Array<Scalars['String']['output']>>;
  taxExempt?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Type>;
  unit?: Maybe<Scalars['String']['output']>;
  unitCost?: Maybe<CurrencyType>;
  unitPrice?: Maybe<CurrencyType>;
  value: Scalars['String']['output'];
};

export enum ProductAndServiceStatus {
  Active = 'active',
  Draft = 'draft',
  InActive = 'inActive',
}

export type ProductAndServiceWeight = {
  __typename?: 'ProductAndServiceWeight';
  unit?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ProductAndServicesWithCompletionDateInput = {
  __typename?: 'ProductAndServicesWithCompletionDateInput';
  _id: Scalars['ObjectID']['output'];
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Float']['output']>;
  type: Type;
  unitPrice: Cost;
};

export type ProductorServiceInput = {
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  comparePrice?: InputMaybe<currencyType>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  inventoryDetail?: InputMaybe<inventoryDetail>;
  isComparePriceEnable?: InputMaybe<Scalars['Boolean']['input']>;
  itemNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overHeadMarkup?: InputMaybe<percentageType>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  profitMarkup?: InputMaybe<percentageType>;
  quantityDetail?: InputMaybe<quantityDetail>;
  shippingDetail?: InputMaybe<shippingDetail>;
  status?: InputMaybe<ProductAndServiceStatus>;
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
  taxExempt?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Type>;
  unit?: InputMaybe<Scalars['String']['input']>;
  unitCost: currencyType;
};

export enum ProfileStatus {
  BaseProfileCompleted = 'baseProfileCompleted',
  ProfileCompleted = 'profileCompleted',
  ProfileNotCompleted = 'profileNotCompleted',
}

export type ProjectDetailsAB = {
  __typename?: 'ProjectDetailsAB';
  _id?: Maybe<Scalars['String']['output']>;
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address: Address;
  billingAddresses?: Maybe<Array<Address>>;
  email: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
  projectNumber?: Maybe<Scalars['String']['output']>;
};

export type ProjectDetailsABOuput = {
  __typename?: 'ProjectDetailsABOuput';
  _id: Scalars['ObjectID']['output'];
  additionalEmails?: Maybe<Array<Scalars['String']['output']>>;
  additionalPhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  address: Address;
  billingAddresses?: Maybe<Array<Address>>;
  email: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
};

export type ProjectForClientInput = {
  address: AddressInput;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  billingAddresses?: InputMaybe<Array<AddressInput>>;
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectForClientOutput = {
  __typename?: 'ProjectForClientOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  address?: Maybe<Address>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  billingAddresses?: Maybe<Array<Address>>;
  clientId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<ProjectPriority>;
  projectName?: Maybe<Scalars['String']['output']>;
  projectNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<projectStatus>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ProjectInput = {
  address: AddressInput;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  billingAddresses?: InputMaybe<Array<AddressInput>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  priority?: InputMaybe<ProjectPriority>;
  projectName: Scalars['String']['input'];
  projectNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<projectStatus>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectListStatusInput {
  Active = 'active',
  AheadOfSchedule = 'aheadOfSchedule',
  All = 'all',
  Archived = 'archived',
  Canceled = 'canceled',
  Completed = 'completed',
  Delayed = 'delayed',
  Draft = 'draft',
  InProgress = 'inProgress',
  OnSchedule = 'onSchedule',
  Unassigned = 'unassigned',
  UpComing = 'upComing',
}

export type ProjectOutput = {
  __typename?: 'ProjectOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  address?: Maybe<Address>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  billingAddresses?: Maybe<Array<Address>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<Array<detail>>;
  email?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<ProjectPriority>;
  projectName?: Maybe<Scalars['String']['output']>;
  projectNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<JobStatus>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ProjectOutputList = {
  __typename?: 'ProjectOutputList';
  address?: Maybe<Address>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  contractorName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<ProjectPriority>;
  projectName?: Maybe<Scalars['String']['output']>;
  projectNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<projectStatus>;
};

export enum ProjectPriority {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium',
}

export enum ProjectSort {
  ContractorName = 'contractorName',
  Priority = 'priority',
  ProjectName = 'projectName',
  ProjectNumber = 'projectNumber',
  Status = 'status',
}

export type ProjectsList = {
  __typename?: 'ProjectsList';
  data: Array<ProjectOutput>;
  metadata: Metadata;
};

export type ProposedDuration = {
  __typename?: 'ProposedDuration';
  proposedDuration?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<ProposedDurationEnum>;
};

export enum ProposedDurationEnum {
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
}

export enum PunchType {
  Break = 'Break',
  Check = 'Check',
}

export type QuantityDetail = {
  __typename?: 'QuantityDetail';
  availableQuantity?: Maybe<Scalars['Float']['output']>;
  committedQuantity?: Maybe<Scalars['Float']['output']>;
  inventoryLocation?: Maybe<Scalars['String']['output']>;
  trackQuantity?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllProjects: AllProjectsList;
  getAvailableTeamMembers: Array<GetTeamMemberOutput>;
  getBranch: BranchResponse;
  getCheckList: Array<ChecklistOutput>;
  getClient: getClientOutput;
  getClientContractorsList: ClientContractorList;
  getClientList: ClientsList;
  getClientProjectList: Array<ProjectOutput>;
  getCompanyMarkupAndTaxSetting: MarkupAndTaxOutput;
  getContractor: ContractorOutput;
  getContractorABList: Array<ContractorABOutputs>;
  getContractorABProjects: Array<ContractorABProjectOutput>;
  getContractorList: ContractorList;
  getContractorListPublic: ContractorListPublic;
  getDepartmentList: Array<Department>;
  getGeneralSetting: SettingOutput;
  getIndustries: Array<industryOutput>;
  getIndustriesWithServices: Scalars['JSON']['output'];
  getIndustryListPublic: Array<industryOutput>;
  getInvoice: InvoiceOutput;
  getInvoiceList: InvoicesOutputResponse;
  getInvoicesStatusList: StatusCountList;
  getItemList: ItemResponse;
  getItemStatusList: StatusCountList;
  getJob: JobGetOutput;
  getJobList: JobsOutputResponse;
  getJobListByContractorId: Array<JobListByContractorIdOutput>;
  getJobSessionsDetail: getSessionDetailOutput;
  getJobStatusList: StatusCountList;
  getJobsByDateRange: Array<JobsOutput>;
  getProductAndService: ProductAndServiceOutPut;
  getProductAndServiceList: Array<ProductAndServiceResponse>;
  getProject: ProjectOutput;
  getProjectList: ProjectsList;
  getProjectListByContractor: Array<ProjectOutput>;
  getProjectStatusList: StatusCountList;
  getQuotation: QuotationOutput;
  getQuotationList: QuotationList;
  getQuotationStatusList: StatusCountList;
  getQuotationsByDateRange: Array<QuotationOutputByDateRange>;
  getReport: JobOutput;
  getReportList: Array<JobOutput>;
  getRequest: RequestCreateOutput;
  getRequestByDateRange: Array<RequestCreateOutput>;
  getRequestList: RequestList;
  getRequestStatusList: StatusCountList;
  getServiceCategories: Array<serviceCategoryOutput>;
  getServiceCategoryListPublic: Array<serviceCategoryOutput>;
  getSiteAssessmentJobTask: Scalars['JSON']['output'];
  getTask: JobScheduleOutputList;
  getTasksByDateRange: Array<JobScheduleOutput1>;
  getTasksList: JobScheduleOutputResponse;
  getTasksStatusList: StatusCountList;
  getTeamMemberById: GetTeamMemberOutput;
  getTeamMemberCheckIn: TimeSheetOutput;
  getTeamMemberList: TeamMemberOutputResponse;
  getTeamMembersByIds: Array<GetTeamMemberOutput>;
  getTeamStatusList: StatusCountList;
  getTimeSheet: TimeSheetOutput;
  getTimeSheetList: TimeSheetsOutputList;
  getTimeSheetStatusList: StatusCountList;
};

export type QuerygetAllProjectsArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<ProjectSort>;
  status?: InputMaybe<ProjectListStatusInput>;
};

export type QuerygetAvailableTeamMembersArgs = {
  input: AvailableTeamInput;
};

export type QuerygetBranchArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetClientArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetClientContractorsListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type QuerygetClientListArgs = {
  contractorId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type QuerygetCompanyMarkupAndTaxSettingArgs = {
  companyId: Scalars['String']['input'];
};

export type QuerygetContractorArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetContractorABProjectsArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetContractorListArgs = {
  clientExp?: InputMaybe<Scalars['Boolean']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type QuerygetContractorListPublicArgs = {
  ContractorFilterInput?: InputMaybe<ContractorFilterInput>;
  filters?: InputMaybe<FilterInput>;
  location?: InputMaybe<geoDistanceInput>;
  pagination?: InputMaybe<PaginationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<ContractorSort>;
};

export type QuerygetInvoiceArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetInvoiceListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<InvoiceSort>;
  status?: InputMaybe<InvoiceListStatusInput>;
};

export type QuerygetInvoicesStatusListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetItemListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<ItemSort>;
  status?: InputMaybe<ItemListFilter>;
};

export type QuerygetJobArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetJobListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<JobSort>;
  status?: InputMaybe<JobListStatusInput>;
};

export type QuerygetJobListByContractorIdArgs = {
  contractorId: Scalars['String']['input'];
};

export type QuerygetJobSessionsDetailArgs = {
  jobId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetJobStatusListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetJobsByDateRangeArgs = {
  dateRange?: InputMaybe<ListDateRange>;
  filter?: InputMaybe<DateRangeFilters>;
};

export type QuerygetProductAndServiceArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetProjectArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetProjectListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};

export type QuerygetProjectListByContractorArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetQuotationArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetQuotationListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<QuotationSort>;
  status?: InputMaybe<QuotationListFilter>;
};

export type QuerygetQuotationStatusListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetQuotationsByDateRangeArgs = {
  dateRange?: InputMaybe<ListDateRange>;
  filter?: InputMaybe<DateRangeFilters>;
};

export type QuerygetReportArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetRequestArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetRequestByDateRangeArgs = {
  dateRange?: InputMaybe<ListDateRange>;
  filter?: InputMaybe<DateRangeFilters>;
};

export type QuerygetRequestListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<RequestSort>;
  status?: InputMaybe<RequestListFilter>;
};

export type QuerygetRequestStatusListArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetServiceCategoriesArgs = {
  industryId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetServiceCategoryListPublicArgs = {
  industryId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetSiteAssessmentJobTaskArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetTaskArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetTasksByDateRangeArgs = {
  dateRange?: InputMaybe<TaskListDateRange>;
};

export type QuerygetTasksListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<ScheduleJobSort>;
  status?: InputMaybe<ScheduleJobStatusInput>;
  teamMemberId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetTasksStatusListArgs = {
  teamMemberId?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetTeamMemberByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuerygetTeamMemberListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<TeamSort>;
  status?: InputMaybe<TeamListStatusInput>;
};

export type QuerygetTeamMembersByIdsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QuerygetTimeSheetArgs = {
  id: Scalars['String']['input'];
};

export type QuerygetTimeSheetListArgs = {
  filters?: InputMaybe<FilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<ListSearch>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  sortByColumn?: InputMaybe<TimeSheetStatusSort>;
  status?: InputMaybe<TimeSheetStatusInput>;
  teamMemberId?: InputMaybe<Scalars['String']['input']>;
};

export type QuotationInput = {
  advancePayment?: InputMaybe<advancePayment>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId: Scalars['String']['input'];
  discount?: InputMaybe<discount>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxEnable: Scalars['Boolean']['input'];
  messageForClient?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<RequestPriority>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices: Array<servicesInput>;
  projectId: Scalars['String']['input'];
  proposedDate: Scalars['DateTime']['input'];
  proposedDuration?: InputMaybe<proposedDuration>;
  proposedTime: Scalars['DateTime']['input'];
  quotationNumber?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['String']['input'];
  status: QuotationStatus;
  taxedAmount?: InputMaybe<Scalars['Float']['input']>;
  termsAndCondition: Scalars['String']['input'];
  title: Scalars['String']['input'];
  validTill: Scalars['DateTime']['input'];
};

export type QuotationList = {
  __typename?: 'QuotationList';
  data: Array<QuotationOutputs>;
  metadata: Metadata;
};

export enum QuotationListFilter {
  Accepted = 'accepted',
  All = 'all',
  Archived = 'archived',
  AwaitingResponse = 'awaitingResponse',
  ConvertedToJob = 'convertedToJob',
  Draft = 'draft',
  New = 'new',
  Revised = 'revised',
  RevisionNeeded = 'revisionNeeded',
}

export type QuotationOutput = {
  __typename?: 'QuotationOutput';
  ClientMessagesForContractor?: Maybe<Array<Messages>>;
  _id?: Maybe<Scalars['ObjectID']['output']>;
  advancePayment?: Maybe<AdvancePayment>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateSent?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Discount>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  messageForClient?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices: Array<ItemOutput>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  proposedDate?: Maybe<Scalars['DateTime']['output']>;
  proposedDuration?: Maybe<ProposedDuration>;
  proposedTime?: Maybe<Scalars['DateTime']['output']>;
  quotationNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  status?: Maybe<QuotationStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  termsAndCondition?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Cost>;
  validTill?: Maybe<Scalars['DateTime']['output']>;
};

export type QuotationOutputByDateRange = {
  __typename?: 'QuotationOutputByDateRange';
  ClientMessagesForContractor?: Maybe<Array<Messages>>;
  _id?: Maybe<Scalars['ObjectID']['output']>;
  advancePayment?: Maybe<AdvancePayment>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateSent?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Discount>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  messageForClient?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  proposedDate?: Maybe<Scalars['DateTime']['output']>;
  proposedDuration?: Maybe<ProposedDuration>;
  proposedTime?: Maybe<Scalars['DateTime']['output']>;
  quotationNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  status?: Maybe<QuotationStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  termsAndCondition?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Cost>;
  validTill?: Maybe<Scalars['DateTime']['output']>;
};

export type QuotationOutputs = {
  __typename?: 'QuotationOutputs';
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  contractorName?: Maybe<Scalars['String']['output']>;
  dateSent?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  isTaxEnable?: Maybe<Scalars['Boolean']['output']>;
  priority?: Maybe<RequestPriority>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  proposedDate?: Maybe<Scalars['String']['output']>;
  proposedTime?: Maybe<Scalars['String']['output']>;
  quotationNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<QuotationStatus>;
  subTotal?: Maybe<Cost>;
  taxedAmount?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Cost>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  validTill?: Maybe<Scalars['String']['output']>;
};

export enum QuotationSort {
  Amount = 'amount',
  ClientName = 'clientName',
  CompanyName = 'companyName',
  ContractorName = 'contractorName',
  ProjectName = 'projectName',
  QuotationNumber = 'quotationNumber',
  Title = 'title',
  ValidTill = 'validTill',
}

export enum QuotationStatus {
  Accepted = 'accepted',
  Archived = 'archived',
  AwaitingResponse = 'awaitingResponse',
  ConvertedToJob = 'convertedToJob',
  Draft = 'draft',
  Rejected = 'rejected',
  Revised = 'revised',
  RevisionNeeded = 'revisionNeeded',
}

export type QuotationUpdateInput = {
  advancePayment?: InputMaybe<advancePayment>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<discount>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxEnable?: InputMaybe<Scalars['Boolean']['input']>;
  messageForClient?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<RequestPriority>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices?: InputMaybe<Array<servicesInput>>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  proposedDate?: InputMaybe<Scalars['DateTime']['input']>;
  proposedDuration?: InputMaybe<proposedDuration>;
  proposedTime?: InputMaybe<Scalars['DateTime']['input']>;
  quotationRevision?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<QuotationStatus>;
  taxedAmount?: InputMaybe<Scalars['Float']['input']>;
  termsAndCondition?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  validTill?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RatingOutput = {
  __typename?: 'RatingOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  entityId?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<entityType>;
  ratedBy?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type Reference = {
  __typename?: 'Reference';
  jobId?: Maybe<Scalars['String']['output']>;
  jobNo?: Maybe<Scalars['Float']['output']>;
  quotationId?: Maybe<Scalars['String']['output']>;
  quotationNo?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  requestNo?: Maybe<Scalars['Float']['output']>;
};

export enum ReminderSetting {
  OneDayBefore = 'oneDayBefore',
  ThreeDaysBefore = 'threeDaysBefore',
  TwoDaysBefore = 'twoDaysBefore',
}

export type ReportInput = {
  jobId: Scalars['String']['input'];
  status: JobStatus;
};

export type RequestCreateInput = {
  alternativeDate?: InputMaybe<requestDateAndParting>;
  alternativeSiteAssessmentDate?: InputMaybe<requestDateAndParting>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  contractorId?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  preferredDate: requestDateAndParting;
  priority: RequestPriority;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  requestNumber: Scalars['String']['input'];
  requestServices: Array<requestServices>;
  respondBy?: InputMaybe<Scalars['DateTime']['input']>;
  siteAssessmentDate?: InputMaybe<requestDateAndParting>;
  siteAssessmentRequired: Scalars['Boolean']['input'];
  status: RequestStatus;
  successProbability: RequestPriority;
  title: Scalars['String']['input'];
};

export type RequestCreateOutput = {
  __typename?: 'RequestCreateOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  altSiteTimeRange?: Maybe<RequestTimeRange>;
  alternativeDate?: Maybe<RequestDateAndParting>;
  alternativeDateTimeRange?: Maybe<RequestTimeRange>;
  alternativeSiteAssessmentDate?: Maybe<RequestDateAndParting>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  preferredDate?: Maybe<RequestDateAndParting>;
  preferredDateTimeRange?: Maybe<RequestTimeRange>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  requestNumber?: Maybe<Scalars['String']['output']>;
  requestServices?: Maybe<Array<RequestServices>>;
  respondBy?: Maybe<Scalars['DateTime']['output']>;
  siteAssTimeRange?: Maybe<RequestTimeRange>;
  siteAssessmentDate?: Maybe<RequestDateAndParting>;
  siteAssessmentRequired?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<RequestStatus>;
  successProbability?: Maybe<RequestPriority>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RequestDateAndParting = {
  __typename?: 'RequestDateAndParting';
  date: Scalars['DateTime']['output'];
  dayParting: RequestDayParting;
};

export enum RequestDayParting {
  Afternoon = 'Afternoon',
  Anytime = 'Anytime',
  Evening = 'Evening',
  Morning = 'Morning',
  Noon = 'Noon',
}

export type RequestList = {
  __typename?: 'RequestList';
  data: Array<RequestOutput>;
  metadata: Metadata;
};

export enum RequestListFilter {
  All = 'all',
  Archived = 'archived',
  Assessed = 'assessed',
  AssessmentNeeded = 'assessmentNeeded',
  ConvertToQuotation = 'convertToQuotation',
  ConvertedToQuotation = 'convertedToQuotation',
  Draft = 'draft',
  New = 'new',
  Revised = 'revised',
  RevisionNeeded = 'revisionNeeded',
}

export type RequestOutput = {
  __typename?: 'RequestOutput';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  client?: Maybe<detail>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  priority?: Maybe<RequestPriority>;
  project?: Maybe<ProjectOutput>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  requestNumber?: Maybe<Scalars['String']['output']>;
  respondBy?: Maybe<Scalars['String']['output']>;
  status?: Maybe<RequestStatus>;
  successProbability?: Maybe<RequestPriority>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export enum RequestPriority {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium',
}

export type RequestServices = {
  __typename?: 'RequestServices';
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
};

export enum RequestSort {
  Priority = 'priority',
  RequestNumber = 'requestNumber',
  RespondBy = 'respondBy',
  Title = 'title',
}

export enum RequestStatus {
  Archived = 'archived',
  AssessmentJob = 'assessmentJob',
  AssessmentNeeded = 'assessmentNeeded',
  ConvertToJob = 'convertToJob',
  ConvertToQuotation = 'convertToQuotation',
  ConvertedToJob = 'convertedToJob',
  ConvertedToQuotation = 'convertedToQuotation',
  Draft = 'draft',
  Revised = 'revised',
  RevisionNeeded = 'revisionNeeded',
}

export type RequestTimeRange = {
  __typename?: 'RequestTimeRange';
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type RequestUpdateInput = {
  alternativeDate?: InputMaybe<requestDateAndParting>;
  alternativeSiteAssessmentDate?: InputMaybe<requestDateAndParting>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  contractorId?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  preferredDate?: InputMaybe<requestDateAndParting>;
  priority?: InputMaybe<RequestPriority>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  requestServices?: InputMaybe<Array<requestServices>>;
  respondBy?: InputMaybe<Scalars['DateTime']['input']>;
  siteAssessmentDate?: InputMaybe<requestDateAndParting>;
  siteAssessmentRequired?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<RequestStatus>;
  successProbability?: InputMaybe<RequestPriority>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RequestUpdateOutput = {
  __typename?: 'RequestUpdateOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  altSiteTimeRange?: Maybe<RequestTimeRange>;
  alternativeDate?: Maybe<RequestDateAndParting>;
  alternativeDateTimeRange?: Maybe<RequestTimeRange>;
  alternativeSiteAssessmentDate?: Maybe<RequestDateAndParting>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  preferredDate?: Maybe<RequestDateAndParting>;
  preferredDateTimeRange?: Maybe<RequestTimeRange>;
  priority?: Maybe<RequestPriority>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  requestNumber?: Maybe<Scalars['String']['output']>;
  requestServices?: Maybe<Array<RequestServices>>;
  respondBy?: Maybe<Scalars['DateTime']['output']>;
  siteAssTimeRange?: Maybe<RequestTimeRange>;
  siteAssessmentDate?: Maybe<RequestDateAndParting>;
  siteAssessmentRequired?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<RequestStatus>;
  successProbability?: Maybe<RequestPriority>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum ScheduleJobSort {
  Title = 'title',
}

export enum ScheduleJobStatus {
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Pause = 'pause',
  Reschedule = 'reschedule',
  Resume = 'resume',
  Todo = 'todo',
}

export enum ScheduleJobStatusInput {
  Active = 'active',
  All = 'all',
  Cancelled = 'cancelled',
  Completed = 'completed',
  InProgress = 'inProgress',
  Started = 'started',
}

export type SearchTypeInput = {
  text: Scalars['String']['input'];
};

export type SendEmailInquiryInput = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type ServicesDetailsInput = {
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  servicesInterestedIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ServicesInput = {
  __typename?: 'ServicesInput';
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  itemId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  unitPrice?: Maybe<CurrencyType>;
};

export type SessionOutput = {
  __typename?: 'SessionOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  contractorId?: Maybe<Scalars['String']['output']>;
  equipmentChecklist?: Maybe<Array<Scalars['String']['output']>>;
  expense?: Maybe<Array<OtherExpense>>;
  instructionForTeamMember?: Maybe<Scalars['String']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  materialChecklist?: Maybe<Array<Scalars['String']['output']>>;
  notesFromField?: Maybe<Scalars['String']['output']>;
  privateNotes?: Maybe<Scalars['String']['output']>;
  productAndServices?: Maybe<Array<TaskSharedItemCustom>>;
  projectId?: Maybe<Scalars['String']['output']>;
  recommendationForClient?: Maybe<Scalars['String']['output']>;
  safetyChecklist?: Maybe<Array<Scalars['String']['output']>>;
  status?: Maybe<ScheduleJobStatus>;
  taskSchedule?: Maybe<TaskSchedule>;
  teamMemberId?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SettingOutput = {
  __typename?: 'SettingOutput';
  MeasurementSystem?: Maybe<MeasurementUnit>;
  _id?: Maybe<Scalars['ObjectID']['output']>;
  calendarType?: Maybe<CalendarType>;
  createdAt: Scalars['DateTime']['output'];
  currencyType?: Maybe<CurrencyTypes>;
  datePlusTimeFormat?: Maybe<Scalars['String']['output']>;
  firstDayOfWeek?: Maybe<DayOfWeek>;
  longDateFormat?: Maybe<LongDateFormat>;
  longTimeFormat?: Maybe<LongTimeFormat>;
  shortDateFormat?: Maybe<ShortDateFormat>;
  shortTimeFormat?: Maybe<ShortTimeFormat>;
  standardDigits?: Maybe<Scalars['String']['output']>;
  standardWorkWeek?: Maybe<StandardWorkWeek>;
  timeFormat?: Maybe<TimeFormat>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SharedItem = {
  __typename?: 'SharedItem';
  _id?: Maybe<Scalars['String']['output']>;
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  overHeadMarkup?: Maybe<PercentageType>;
  profitMarkup?: Maybe<PercentageType>;
  quantity?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ProductAndServiceStatus>;
  taxExempt?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Type>;
  unitCost?: Maybe<CurrencyType>;
  unitPrice?: Maybe<CurrencyType>;
};

export type SharedItemCustom = {
  __typename?: 'SharedItemCustom';
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  item: SharedItem;
  quantity: Scalars['Float']['output'];
  unitPrice?: Maybe<CurrencyType>;
};

export type SharedItemCustomInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  unitPrice?: InputMaybe<currencyType>;
};

export type ShippingDetail = {
  __typename?: 'ShippingDetail';
  dimensions?: Maybe<ProductAndServiceDimensions>;
  weight?: Maybe<ProductAndServiceWeight>;
};

export enum ShortDateFormat {
  DdMmmYy = 'DD_MMM_YY',
  DdMmmYyyy = 'DD_MMM_YYYY',
  DdMmYy = 'DD_MM_YY',
  DdMmYyyy = 'DD_MM_YYYY',
}

export enum ShortTimeFormat {
  TwelveHourMeridiem = 'twelve_hour_meridiem',
  TwelveHourShortMeridiem = 'twelve_hour_short_meridiem',
}

export type SpecialWorkingHours = {
  __typename?: 'SpecialWorkingHours';
  active: Scalars['Boolean']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
};

export enum StandardWorkWeek {
  FiveDays = 'five_days',
  FullWeek = 'full_week',
  SixDays = 'six_days',
}

export type StatusCount = {
  __typename?: 'StatusCount';
  count?: Maybe<Scalars['Float']['output']>;
  status: Scalars['String']['output'];
};

export type StatusCountList = {
  __typename?: 'StatusCountList';
  data?: Maybe<Array<StatusCount>>;
};

export type TaskListDateRange = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskSchedule = {
  __typename?: 'TaskSchedule';
  scheduledOn?: Maybe<DateRange>;
  timeRange?: Maybe<TimeRange>;
};

export type TaskSharedItemCustom = {
  __typename?: 'TaskSharedItemCustom';
  images?: Maybe<Array<Scalars['String']['output']>>;
  item: SharedItem;
  itemStatus?: Maybe<ItemStatus>;
  notesFromField?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
};

export type TaskSharedItemCustomInput = {
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  itemId?: InputMaybe<Scalars['String']['input']>;
  itemStatus?: InputMaybe<ItemStatus>;
  notesFromField?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
};

export type TaxDetail = {
  __typename?: 'TaxDetail';
  additionalTax?: Maybe<Array<AdditionalCompanyField>>;
  taxId?: Maybe<Scalars['Float']['output']>;
  valueAddedTax?: Maybe<Scalars['Float']['output']>;
};

export type TeamDocument = {
  __typename?: 'TeamDocument';
  docs?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TeamInput = {
  documents?: InputMaybe<Array<teamDocument>>;
  employmentDetails: employmentDetails;
  personalDetails: personalDetailTeamMember;
  timeSheet: timeSheet;
};

export enum TeamListStatusInput {
  All = 'all',
  Archived = 'archived',
}

export enum TeamMemberDaySelection {
  AllWorkingDays = 'AllWorkingDays',
  Custom = 'Custom',
}

export type TeamMemberListOutput = {
  __typename?: 'TeamMemberListOutput';
  assignmentTitle?: Maybe<Scalars['String']['output']>;
  contractorName?: Maybe<Scalars['String']['output']>;
  contractorUserId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  jobTitle: Scalars['String']['output'];
  lastCheckIn?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  teamMemberUserId: Scalars['String']['output'];
};

export type TeamMemberOutput = {
  __typename?: 'TeamMemberOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  contractor?: Maybe<detail>;
  contractorId?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<TeamDocument>>;
  employmentDetails?: Maybe<EmploymentDetails>;
  personalDetails?: Maybe<detail>;
  timeSheet?: Maybe<TimeSheetTeam>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TeamMemberOutputResponse = {
  __typename?: 'TeamMemberOutputResponse';
  data: Array<TeamMemberListOutput>;
  metadata: Metadata;
};

export enum TeamSort {
  Id = '_id',
}

export type TimeDuration = {
  __typename?: 'TimeDuration';
  durationType?: Maybe<TimeDurationEnum>;
  selectedFrequency?: Maybe<Scalars['Float']['output']>;
};

export enum TimeDurationEnum {
  Hours = 'Hours',
  Minutes = 'Minutes',
}

export enum TimeFormat {
  TwelveHour = 'twelve_hour',
  TwentyFourHour = 'twenty_four_hour',
}

export type TimeRange = {
  __typename?: 'TimeRange';
  endTime?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  timeDuration?: Maybe<TimeDuration>;
};

export type TimeSheetCompany = {
  __typename?: 'TimeSheetCompany';
  customSchedule?: Maybe<Array<CustomSchedule>>;
  specialWorkingHours?: Maybe<Array<SpecialWorkingHours>>;
};

export type TimeSheetInput = {
  jobScheduleId: Scalars['String']['input'];
  miles?: InputMaybe<Scalars['Float']['input']>;
  punchType?: InputMaybe<PunchType>;
};

export type TimeSheetListOutput = {
  __typename?: 'TimeSheetListOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  breakInTimestamp?: Maybe<Array<Scalars['String']['output']>>;
  breakOutTimestamp?: Maybe<Array<Scalars['String']['output']>>;
  clockInTimestamp?: Maybe<Scalars['String']['output']>;
  clockOutTimestamp?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  job?: Maybe<JobsOutput>;
  jobScheduleId?: Maybe<Scalars['String']['output']>;
  miles?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ClockEventStatus>;
  taskTitle?: Maybe<Scalars['String']['output']>;
  teamMember?: Maybe<detail>;
  teamMemberId?: Maybe<Scalars['String']['output']>;
  teamMemberJobTitle?: Maybe<Scalars['String']['output']>;
  teamMemberName?: Maybe<Scalars['String']['output']>;
  teamMemberUserId?: Maybe<Scalars['String']['output']>;
  totalBreakTime?: Maybe<Scalars['String']['output']>;
  totalWorkingTime?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ClockEventType>;
};

export type TimeSheetOutput = {
  __typename?: 'TimeSheetOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  breakInTimestamp?: Maybe<Array<Scalars['DateTime']['output']>>;
  breakOutTimestamp?: Maybe<Array<Scalars['DateTime']['output']>>;
  clockInTimestamp?: Maybe<Scalars['DateTime']['output']>;
  clockOutTimestamp?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  job?: Maybe<JobsOutput>;
  jobScheduleId?: Maybe<Scalars['String']['output']>;
  miles?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ClockEventStatus>;
  teamMember?: Maybe<detail>;
  teamMemberId?: Maybe<Scalars['String']['output']>;
  totalBreakTime?: Maybe<Scalars['String']['output']>;
  totalWorkingTime?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ClockEventType>;
};

export enum TimeSheetStatusInput {
  All = 'All',
  Approved = 'Approved',
  Archived = 'Archived',
  New = 'New',
  Paid = 'Paid',
  Pending = 'Pending',
  Revised = 'Revised',
}

export enum TimeSheetStatusSort {
  Total = 'total',
}

export type TimeSheetTeam = {
  __typename?: 'TimeSheetTeam';
  active?: Maybe<Scalars['Boolean']['output']>;
  customSchedule?: Maybe<Array<CustomSchedule>>;
  daySelection: TeamMemberDaySelection;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  specialWorkingHours?: Maybe<Array<SpecialWorkingHours>>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
};

export type TimeSheetsOutputList = {
  __typename?: 'TimeSheetsOutputList';
  data: Array<TimeSheetListOutput>;
  metadata: Metadata;
};

export enum Type {
  Product = 'product',
  Service = 'service',
}

export enum TypeOfJob {
  OneTime = 'OneTime',
  Recurring = 'Recurring',
}

export type UpdateContractorCompany = {
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  address?: InputMaybe<AddressInput>;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companySize?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mailingAddress?: InputMaybe<AddressInput>;
  marketingBlog?: InputMaybe<Array<MarketingBlogInput>>;
  marketingDetail?: InputMaybe<marketingDetail>;
  marketingProject?: InputMaybe<Array<MarketingProjectInput>>;
  markupDetail?: InputMaybe<markupDetail>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<Array<Scalars['String']['input']>>;
  servicesInterestedIn?: InputMaybe<Array<Scalars['String']['input']>>;
  taxDetail?: InputMaybe<taxDetail>;
  website?: InputMaybe<Scalars['String']['input']>;
  workingHours?: InputMaybe<timeSheetCompany>;
};

export type UpdateProductorService = {
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  comparePrice?: InputMaybe<currencyType>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  inventoryDetail?: InputMaybe<inventoryDetail>;
  isComparePriceEnable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overHeadMarkup?: InputMaybe<percentageType>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  profitMarkup?: InputMaybe<percentageType>;
  quantityDetail?: InputMaybe<quantityDetail>;
  shippingDetail?: InputMaybe<shippingDetail>;
  status?: InputMaybe<ProductAndServiceStatus>;
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
  taxExempt?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Type>;
  unit?: InputMaybe<Scalars['String']['input']>;
  unitCost?: InputMaybe<currencyType>;
};

export type UpdateServiceCategory = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UserDetail = {
  address?: InputMaybe<AddressInput>;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  twoFactorInformation?: InputMaybe<Scalars['JSON']['input']>;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  personalDetails?: Maybe<detail>;
};

export type WorkingHoursP = {
  __typename?: 'WorkingHoursP';
  customSchedule?: Maybe<Scalars['JSON']['output']>;
  specialWorkingHours?: Maybe<Scalars['JSON']['output']>;
};

export type additionalCompanyField = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type additionalFieldInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type address = {
  __typename?: 'address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type advancePayment = {
  advancePaymentType?: Scalars['String']['input'];
  amount?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['Float']['input'];
};

export type advancePaymentReceived = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type awardDetail = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
};

export type branchInput = {
  address: AddressInput;
  altEmail?: InputMaybe<Scalars['String']['input']>;
  altPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  branchName: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['ObjectID']['input'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPhoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary: Scalars['Boolean']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type companyDetails = {
  __typename?: 'companyDetails';
  companyName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type companyDetailsAB = {
  address: AddressInput;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  alternateContactNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  email: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type cost = {
  amountType?: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type createClientOutput = {
  __typename?: 'createClientOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  branchesDetails?: Maybe<Array<ClientBranchesOutput>>;
  companyDetails?: Maybe<ClientCompanyOutput>;
  companyId?: Maybe<Scalars['String']['output']>;
  contractorIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentDetails?: Maybe<Array<PaymentInput>>;
  projectsDetails?: Maybe<Array<ProjectForClientOutput>>;
  servicesDetails?: Maybe<servicesDetailsOutput>;
  status?: Maybe<ClientStatus>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type createInput = {
  MeasurementSystem?: InputMaybe<MeasurementUnit>;
  calendarType?: InputMaybe<CalendarType>;
  datePlusTimeFormat?: InputMaybe<Scalars['String']['input']>;
  firstDayOfWeek?: InputMaybe<DayOfWeek>;
  longDateFormat?: InputMaybe<LongDateFormat>;
  longTimeFormat?: InputMaybe<LongTimeFormat>;
  shortDateFormat?: InputMaybe<ShortDateFormat>;
  shortTimeFormat?: InputMaybe<ShortTimeFormat>;
  standardWorkWeek?: InputMaybe<StandardWorkWeek>;
  timeFormat?: InputMaybe<TimeFormat>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type createRatingInput = {
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<entityType>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type currencyType = {
  currencyType?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type customSchedule = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type dateRange = {
  duration?: InputMaybe<duration>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type detail = {
  __typename?: 'detail';
  _id?: Maybe<Scalars['String']['output']>;
  address?: Maybe<address>;
  alternateAddresses?: Maybe<Array<Address>>;
  alternateEmails?: Maybe<Array<Scalars['String']['output']>>;
  alternatePhoneNumbers?: Maybe<Array<Scalars['String']['output']>>;
  bgImage?: Maybe<Scalars['String']['output']>;
  company?: Maybe<companyDetails>;
  dob?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employmentDetails?: Maybe<EmploymentDetailsPartial>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  twoFactorInformation?: Maybe<Scalars['JSON']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type discount = {
  discountType?: Scalars['String']['input'];
  value?: Scalars['Float']['input'];
};

export type duration = {
  durationType?: InputMaybe<DurationType>;
  selectedFrequency?: InputMaybe<Scalars['Float']['input']>;
};

export type employmentDetails = {
  billableRates: Scalars['String']['input'];
  billableRatesFrequency: Scalars['String']['input'];
  compensationType: Scalars['String']['input'];
  department?: InputMaybe<Scalars['String']['input']>;
  employmentGroup: Scalars['String']['input'];
  employmentType: Scalars['String']['input'];
  jobTitle: Scalars['String']['input'];
  payOutWages: Scalars['String']['input'];
  serviceArea: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  wages: Scalars['String']['input'];
};

export enum entityType {
  Contractor = 'contractor',
  Product = 'product',
}

export type expenses = {
  amount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  expenseDate: Scalars['DateTime']['input'];
  images: Array<Scalars['String']['input']>;
};

export type frequency = {
  frequencyType?: InputMaybe<DurationType>;
  selectedFrequency?: InputMaybe<Scalars['Float']['input']>;
};

export type geoDistanceInput = {
  default?: Scalars['Boolean']['input'];
  distance?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
};

export type getClientOutput = {
  __typename?: 'getClientOutput';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  branchesDetails?: Maybe<Array<ClientBranchesOutput>>;
  companyDetails?: Maybe<ClientCompanyOutput>;
  companyId?: Maybe<Scalars['String']['output']>;
  contractorIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentDetails?: Maybe<Array<PaymentInput>>;
  personalDetails?: Maybe<detail>;
  projectsDetails?: Maybe<Array<ProjectForClientOutput>>;
  servicesDetails?: Maybe<servicesDetailsOutput>;
  status?: Maybe<ClientStatus>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type getContractorindustryDetails = {
  __typename?: 'getContractorindustryDetails';
  additionalInformation?: Maybe<Array<AdditionalField>>;
  companySize?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  serviceCategorty?: Maybe<Array<Scalars['String']['output']>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
};

export type getSessionDetailOutput = {
  __typename?: 'getSessionDetailOutput';
  completedTasks: Scalars['Float']['output'];
  currentSession?: Maybe<SessionOutput>;
  latestCompletedSession?: Maybe<SessionOutput>;
  nextSession?: Maybe<SessionOutput>;
  totalTasks: Scalars['Float']['output'];
};

export type industryInput = {
  _id: Scalars['ObjectID']['input'];
  label: Scalars['String']['input'];
  logos?: InputMaybe<Array<Scalars['String']['input']>>;
  value: Scalars['String']['input'];
};

export type industryOutput = {
  __typename?: 'industryOutput';
  label: Scalars['String']['output'];
  logos?: Maybe<Array<Scalars['String']['output']>>;
  value: Scalars['String']['output'];
};

export type inventoryDetail = {
  SKU?: InputMaybe<Scalars['String']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
};

export type invoiceAdvancePayment = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type invoiceProductAndServiceOutPut = {
  __typename?: 'invoiceProductAndServiceOutPut';
  _id: Scalars['ObjectID']['output'];
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Cost>;
  type: Type;
  unitPrice: Cost;
};

export type jobDateRangeOutput = {
  __typename?: 'jobDateRangeOutput';
  endDate?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type jobExpense = {
  amount: Scalars['Float']['input'];
  attachments: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  expenseDate: Scalars['DateTime']['input'];
};

export type marketingDetail = {
  awardDetail?: InputMaybe<awardDetail>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  marketingBlog?: InputMaybe<Array<Scalars['String']['input']>>;
  marketingImages?: InputMaybe<Array<Scalars['String']['input']>>;
  marketingProject?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type markupDetail = {
  additionalMarkup?: InputMaybe<Array<additionalCompanyField>>;
  overHeadMarkup?: InputMaybe<Scalars['Float']['input']>;
  profitMarkup?: InputMaybe<Scalars['Float']['input']>;
};

export type metadata = {
  nextCursor?: InputMaybe<Scalars['String']['input']>;
  previousCursor?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  totalPages?: InputMaybe<Scalars['Float']['input']>;
};

export type otherExpense = {
  amount: Scalars['Float']['input'];
  attachments: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  expenseDate: Scalars['DateTime']['input'];
};

export type paymentAB = {
  billingAddress?: InputMaybe<AddressInput>;
  cardHolderName?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cvc?: InputMaybe<Scalars['String']['input']>;
  expirationMonthTwoDigits?: InputMaybe<Scalars['Float']['input']>;
  expirationYearTwoDigits?: InputMaybe<Scalars['Float']['input']>;
  paymentMethod: PaymentMethod;
};

export type paymentInput = {
  billingAddress?: InputMaybe<AddressInput>;
  cardHolderName?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cvc?: InputMaybe<Scalars['String']['input']>;
  expirationMonthTwoDigits?: InputMaybe<Scalars['Float']['input']>;
  expirationYearTwoDigits?: InputMaybe<Scalars['Float']['input']>;
  paymentMethod: PaymentMethod;
};

export type percentageType = {
  currencyType?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type personalDetailAB = {
  address?: InputMaybe<AddressInput>;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  servicesInterestedIn?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type personalDetailTeamMember = {
  address?: InputMaybe<AddressInput>;
  alternateAddresses?: InputMaybe<Array<AddressInput>>;
  alternateEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  alternatePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  bgImage?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type productAndServiceDimensions = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type productAndServiceWeight = {
  unit?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type productAndServicesWithCompletionDateInput = {
  _id: Scalars['ObjectID']['input'];
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  completionDate?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
  type: Type;
  unitPrice: cost;
};

export type projectDetailsAB = {
  _id?: InputMaybe<Scalars['String']['input']>;
  additionalEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalPhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  address: AddressInput;
  billingAddresses?: InputMaybe<Array<AddressInput>>;
  email: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  projectName: Scalars['String']['input'];
  projectNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum projectStatus {
  Active = 'active',
  AheadOfSchedule = 'aheadOfSchedule',
  Archived = 'archived',
  Canceled = 'canceled',
  Completed = 'completed',
  Delayed = 'delayed',
  Draft = 'draft',
  InProgress = 'inProgress',
  OnSchedule = 'onSchedule',
  Unassigned = 'unassigned',
  UpComing = 'upComing',
}

export type proposedDuration = {
  proposedDuration?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<ProposedDurationEnum>;
};

export type quantityDetail = {
  availableQuantity?: InputMaybe<Scalars['Float']['input']>;
  committedQuantity?: InputMaybe<Scalars['Float']['input']>;
  inventoryLocation?: InputMaybe<Scalars['String']['input']>;
  trackQuantity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type reqestTimeRange = {
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type requestDateAndParting = {
  date: Scalars['DateTime']['input'];
  dayParting: RequestDayParting;
};

export type requestServices = {
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
};

export type serviceCategoryOutput = {
  __typename?: 'serviceCategoryOutput';
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  industryId: Scalars['String']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type servicesDetailsOutput = {
  __typename?: 'servicesDetailsOutput';
  additionalInformation?: Maybe<Array<AdditionalField>>;
  servicesInterestedIn?: Maybe<Array<Scalars['String']['output']>>;
};

export type servicesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  itemId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  unitPrice?: InputMaybe<currencyType>;
};

export type sharedItem = {
  _id?: InputMaybe<Scalars['String']['input']>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  overHeadMarkup?: InputMaybe<percentageType>;
  profitMarkup?: InputMaybe<percentageType>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<ProductAndServiceStatus>;
  taxExempt?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Type>;
  unitCost?: InputMaybe<currencyType>;
  unitPrice?: InputMaybe<currencyType>;
};

export type sharedItemCustom = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  item: sharedItem;
  quantity: Scalars['Float']['input'];
  unitPrice?: InputMaybe<currencyType>;
};

export type shippingDetail = {
  dimensions?: InputMaybe<productAndServiceDimensions>;
  weight?: InputMaybe<productAndServiceWeight>;
};

export type specialWorkingHours = {
  active: Scalars['Boolean']['input'];
  date?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type taskProductAndServiceOutPut = {
  __typename?: 'taskProductAndServiceOutPut';
  _id: Scalars['String']['output'];
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  description: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  itemStatus?: Maybe<ItemStatus>;
  name: Scalars['String']['output'];
  notesFromField?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  totalPrice: Cost;
  type: Type;
  unitCost: Cost;
  unitPrice: Cost;
};

export type taskSchedule = {
  scheduledOn?: InputMaybe<dateRange>;
  timeRange?: InputMaybe<timeRange>;
};

export type taskSharedItemCustom = {
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  item: sharedItem;
  itemStatus?: InputMaybe<ItemStatus>;
  notesFromField?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
};

export type taxDetail = {
  additionalTax?: InputMaybe<Array<additionalCompanyField>>;
  taxId?: InputMaybe<Scalars['Float']['input']>;
  valueAddedTax?: InputMaybe<Scalars['Float']['input']>;
};

export type teamDocument = {
  docs?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type timeDuration = {
  durationType?: InputMaybe<TimeDurationEnum>;
  selectedFrequency?: InputMaybe<Scalars['Float']['input']>;
};

export type timeRange = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  timeDuration?: InputMaybe<timeDuration>;
};

export type timeSheet = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  customSchedule?: InputMaybe<Array<customSchedule>>;
  daySelection: TeamMemberDaySelection;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  specialWorkingHours?: InputMaybe<Array<specialWorkingHours>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type timeSheetCompany = {
  customSchedule?: InputMaybe<Array<customSchedule>>;
  specialWorkingHours?: InputMaybe<Array<specialWorkingHours>>;
};

export type updateBranch = {
  address?: InputMaybe<AddressInput>;
  altEmail?: InputMaybe<Scalars['String']['input']>;
  altPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  branchName?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type updateInput = {
  MeasurementSystem?: InputMaybe<MeasurementUnit>;
  calendarType?: InputMaybe<CalendarType>;
  currencyType?: InputMaybe<CurrencyTypes>;
  datePlusTimeFormat?: InputMaybe<Scalars['String']['input']>;
  firstDayOfWeek?: InputMaybe<DayOfWeek>;
  longDateFormat?: InputMaybe<LongDateFormat>;
  longTimeFormat?: InputMaybe<LongTimeFormat>;
  shortDateFormat?: InputMaybe<ShortDateFormat>;
  shortTimeFormat?: InputMaybe<ShortTimeFormat>;
  standardDigits?: InputMaybe<Scalars['String']['input']>;
  standardWorkWeek?: InputMaybe<StandardWorkWeek>;
  timeFormat?: InputMaybe<TimeFormat>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type updateInvoiceInput = {
  advancePayment?: InputMaybe<invoiceAdvancePayment>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<discount>;
  expenses?: InputMaybe<Array<expenses>>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  isApproved?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxEnable?: InputMaybe<Scalars['Boolean']['input']>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  messageForClient?: InputMaybe<Scalars['String']['input']>;
  paymentDueDate?: InputMaybe<Scalars['DateTime']['input']>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices?: InputMaybe<Array<servicesInput>>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  quotationId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<InvoiceStatus>;
  taxedAmount?: InputMaybe<Scalars['Float']['input']>;
  termsAndCondition?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type updateJobInput = {
  AdvancePaymentReceived?: InputMaybe<Array<advancePaymentReceived>>;
  additionalInformation?: InputMaybe<Array<additionalFieldInput>>;
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  checklistIds?: InputMaybe<Array<Scalars['String']['input']>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  contractorId?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<dateRange>;
  discount?: InputMaybe<discount>;
  duration?: InputMaybe<duration>;
  endSessionDate?: InputMaybe<Scalars['DateTime']['input']>;
  equipmentNeeded?: InputMaybe<Scalars['String']['input']>;
  expense?: InputMaybe<Array<jobExpense>>;
  firstSessionDate?: InputMaybe<Scalars['DateTime']['input']>;
  frequency?: InputMaybe<frequency>;
  invoiceSetting?: InputMaybe<InvoiceTrigger>;
  isTaxEnable?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobType?: InputMaybe<TypeOfJob>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notifyTeamMembers?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<RequestPriority>;
  privateNotes?: InputMaybe<Scalars['String']['input']>;
  productAndServices?: InputMaybe<Array<SharedItemCustomInput>>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  quotationId?: InputMaybe<Scalars['String']['input']>;
  reminderSetting?: InputMaybe<ReminderSetting>;
  repeatOn?: InputMaybe<Scalars['AnyType']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<JobStatus>;
  subTotal?: InputMaybe<cost>;
  teamMemberId?: InputMaybe<Array<Scalars['String']['input']>>;
  timeRange?: InputMaybe<timeRange>;
  total?: InputMaybe<cost>;
};

export type updateTeamInput = {
  documents?: InputMaybe<Array<teamDocument>>;
  employmentDetails?: InputMaybe<PartialEmploymentDetails>;
  isProfileCompleted?: InputMaybe<ProfileStatus>;
  personalDetails?: InputMaybe<PartialPersonalDetailTeamMember>;
  timeSheet?: InputMaybe<timeSheet>;
};

export type updateUserInput = {
  personalDetails: UserDetail;
};

export type userInformation = {
  __typename?: 'userInformation';
  address?: Maybe<Scalars['JSONObject']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};
