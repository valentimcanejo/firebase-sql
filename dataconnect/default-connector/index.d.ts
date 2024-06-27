import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface EmailMeta_Key {
  userUid: string;
  emailId: UUIDString;
  __typename?: 'EmailMeta_Key';
}

export interface Email_Key {
  id: UUIDString;
  __typename?: 'Email_Key';
}

export interface ListEmailsResponse {
  emails: ({
    id: UUIDString;
    subject: string;
    text: string;
    sent: DateString;
    from: {
      name: string;
    };
  } & Email_Key)[];
}

export interface Recipient_Key {
  emailId: UUIDString;
  userUid: string;
  __typename?: 'Recipient_Key';
}

export interface User_Key {
  uid: string;
  __typename?: 'User_Key';
}



/* Allow users to create refs without passing in DataConnect */
export function listEmailsRef(): QueryRef<ListEmailsResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listEmailsRef(dc: DataConnect): QueryRef<ListEmailsResponse,undefined>;

export function listEmails(): QueryPromise<ListEmailsResponse, undefined>;
export function listEmails(dc: DataConnect): QueryPromise<ListEmailsResponse,undefined>;


