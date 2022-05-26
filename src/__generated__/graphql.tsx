import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};

export type ChoiceNode = Node & {
  __typename?: 'ChoiceNode';
  choiceText: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  question: QuestionNode;
  votes: Scalars['Int'];
};

export type ChoiceNodeConnection = {
  __typename?: 'ChoiceNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChoiceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ChoiceNode` and its cursor. */
export type ChoiceNodeEdge = {
  __typename?: 'ChoiceNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ChoiceNode>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<QuestionNode>;
  hello?: Maybe<Scalars['String']>;
  questions?: Maybe<QuestionNodeConnection>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryQuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pubDate_Gte?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionNode = Node & {
  __typename?: 'QuestionNode';
  choiceSet: ChoiceNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  pubDate: Scalars['DateTime'];
  questionText: Scalars['String'];
};


export type QuestionNodeChoiceSetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QuestionNodeConnection = {
  __typename?: 'QuestionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuestionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuestionNode` and its cursor. */
export type QuestionNodeEdge = {
  __typename?: 'QuestionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<QuestionNode>;
};

export type AllQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuestionsQuery = { __typename?: 'Query', questions?: { __typename?: 'QuestionNodeConnection', edges: Array<{ __typename?: 'QuestionNodeEdge', node?: { __typename: 'QuestionNode', id: string, questionText: string } | null } | null> } | null };


export const AllQuestionsDocument = gql`
    query allQuestions {
  questions {
    edges {
      node {
        id
        questionText
        __typename
      }
    }
  }
}
    `;

export function useAllQuestionsQuery(options?: Omit<Urql.UseQueryArgs<AllQuestionsQueryVariables>, 'query'>) {
  return Urql.useQuery<AllQuestionsQuery>({ query: AllQuestionsDocument, ...options });
};