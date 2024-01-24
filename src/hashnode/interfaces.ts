export interface FetchPublicationData {
  publication: Publication;
}

export interface Publication {
  isTeam: boolean;
  title: string;
  posts: Posts;
}

export interface Posts {
  edges: PostEdge[];
}

export interface PostEdge {
  node: PostNode;
}

export interface PostNode {
  id: string;
  title: string;
  brief: string;
  url: string;
  coverImage: PostCoverImage;
}

export interface PostCoverImage {
  url: string;
  isPortrait: boolean;
  attribution: string;
  photographer: string;
  isAttributionHidden: boolean;
}
