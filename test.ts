
export type Album = {
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  sandboxes: {
    type: Sandbox;
    isList: true;
    arguments: null;
  }
  title: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum Authorization {
    COMMENT = "COMMENT",
    NONE = "NONE",
    OWNER = "OWNER",
    READ = "READ",
    WRITE_CODE = "WRITE_CODE",
    WRITE_PROJECT = "WRITE_PROJECT",

}

export enum AuthType {
    BASIC = "BASIC",
    BEARER = "BEARER",

}

export type BillingDetails = {
  amount: {
    type: number;
    isList: false;
    arguments: null;
  }
  currency: {
    type: string;
    isList: false;
    arguments: null;
  }
  date: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type BillingPreview = {
  immediatePayment: {
    type: BillingDetails;
    isList: false;
    arguments: null;
  }
  nextPayment: {
    type: BillingDetails;
    isList: false;
    arguments: null;
  }

}

export type Bookmarked = {
  entity: {
    type: BookmarkEntity;
    isList: false;
    arguments: null;
  }
  isBookmarked: {
    type: boolean;
    isList: false;
    arguments: null;
  }

}

export type BookmarkEntity =   | Team  | User;

export type Branch = {
  connections: {
    type: Connection;
    isList: true;
    arguments: null;
  }
  contribution: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  owner: {
    type: User;
    isList: false;
    arguments: null;
  }
  poolSize: {
    type: number;
    isList: false;
    arguments: null;
  }
  project: {
    type: Project;
    isList: false;
    arguments: null;
  }
  pullRequests: {
    type: PullRequest;
    isList: true;
    arguments: null;
  }
  status: {
    type: Status;
    isList: false;
    arguments: null;
  }
  upstream: {
    type: boolean;
    isList: false;
    arguments: null;
  }

}

export type BranchConnections = {
  branchId: {
    type: string;
    isList: false;
    arguments: null;
  }
  connections: {
    type: Connection;
    isList: true;
    arguments: null;
  }

}

export type BranchLastCommit = {
  branchId: {
    type: string;
    isList: false;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    isList: false;
    arguments: null;
  }

}

export type BranchStatus = {
  branchId: {
    type: string;
    isList: false;
    arguments: null;
  }
  status: {
    type: Status;
    isList: false;
    arguments: null;
  }

}

export type CodeReference = {
  anchor: number;
  code: string;
  head: number;
  lastUpdatedAt: string;
  path: string;

}

export type CodeReferenceMetadata = {
  anchor: {
    type: number;
    isList: false;
    arguments: null;
  }
  code: {
    type: string;
    isList: false;
    arguments: null;
  }
  head: {
    type: number;
    isList: false;
    arguments: null;
  }
  path: {
    type: string;
    isList: false;
    arguments: null;
  }
  sandboxId: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Collaborator = {
  authorization: {
    type: Authorization;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  lastSeenAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    isList: false;
    arguments: null;
  }
  user: {
    type: User;
    isList: false;
    arguments: null;
  }
  warning: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Collection = {
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  path: {
    type: string;
    isList: false;
    arguments: null;
  }
  sandboxCount: {
    type: number;
    isList: false;
    arguments: null;
  }
  sandboxes: {
    type: Sandbox;
    isList: true;
    arguments: null;
  }
  team: {
    type: Team;
    isList: false;
    arguments: null;
  }
  teamId: {
    type: string;
    isList: false;
    arguments: null;
  }
  user: {
    type: User;
    isList: false;
    arguments: null;
  }

}

export type Comment = {
  anchorReference: {
    type: Reference;
    isList: false;
    arguments: null;
  }
  comments: {
    type: Comment;
    isList: true;
    arguments: null;
  }
  content: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  insertedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  isRead: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  isResolved: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  parentComment: {
    type: Comment;
    isList: false;
    arguments: null;
  }
  references: {
    type: Reference;
    isList: true;
    arguments: null;
  }
  replyCount: {
    type: number;
    isList: false;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  user: {
    type: User;
    isList: false;
    arguments: null;
  }

}

export type Connection = {
  appId: {
    type: string;
    isList: false;
    arguments: null;
  }
  clientId: {
    type: string;
    isList: false;
    arguments: null;
  }
  color: {
    type: string;
    isList: false;
    arguments: null;
  }
  timestamp: {
    type: string;
    isList: false;
    arguments: null;
  }
  user: {
    type: User;
    isList: false;
    arguments: null;
  }

}

export type CurrentUser = {
  betaAccess: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  betaSandboxes: {
    type: SandboxV2;
    isList: true;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: Template;
    isList: true;
    arguments: null;
  }
  collaboratorSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: null;
  }
  collection: {
    type: Collection;
    isList: false;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  collections: {
    type: Collection;
    isList: true;
    arguments: {
      teamId: string;
    }

  }
  deletionRequested: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  email: {
    type: string;
    isList: false;
    arguments: null;
  }
  featureFlags: {
    type: FeatureFlag;
    isList: true;
    arguments: null;
  }
  githubOrganizations: {
    type: GithubOrganization;
    isList: true;
    arguments: null;
  }
  githubProfile: {
    type: GithubProfile;
    isList: false;
    arguments: null;
  }
  githubRepos: {
    type: GithubRepo;
    isList: true;
    arguments: {
      page: number;
      perPage: number;
    }

  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  likedSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  notificationPreferences: {
    type: NotificationPreferences;
    isList: false;
    arguments: null;
  }
  notifications: {
    type: Notification;
    isList: true;
    arguments: {
      limit: number;
      orderBy: OrderBy;
      type: string;
    }

  }
  personalWorkspaceId: {
    type: string;
    isList: false;
    arguments: null;
  }
  provider: {
    type: ProviderName;
    isList: false;
    arguments: null;
  }
  recentBranches: {
    type: Branch;
    isList: true;
    arguments: {
      contribution: boolean;
      limit: number;
      teamId: string;
    }

  }
  recentProjects: {
    type: Project;
    isList: true;
    arguments: {
      limit: number;
    }

  }
  recentlyAccessedSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      limit: number;
      teamId: string;
    }

  }
  recentlyUsedTemplates: {
    type: Template;
    isList: true;
    arguments: {
      teamId: string;
    }

  }
  sandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      hasOriginalGit: boolean;
      limit: number;
      orderBy: OrderBy;
      showDeleted: boolean;
    }

  }
  team: {
    type: Team;
    isList: false;
    arguments: {
      id: string;
    }

  }
  teams: {
    type: Team;
    isList: true;
    arguments: null;
  }
  templates: {
    type: Template;
    isList: true;
    arguments: {
      showAll: boolean;
      teamId: string;
    }

  }
  username: {
    type: string;
    isList: false;
    arguments: null;
  }
  workspaces: {
    type: Team;
    isList: true;
    arguments: null;
  }

}

export enum Direction {
    ASC = "ASC",
    DESC = "DESC",

}

export type Environment = {
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  limitCpu: {
    type: number;
    isList: false;
    arguments: null;
  }
  limitMemory: {
    type: string;
    isList: false;
    arguments: null;
  }
  limitStorage: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  order: {
    type: number;
    isList: false;
    arguments: null;
  }

}

export type FeatureFlag = {
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  enabled: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  teams: {
    type: Team;
    isList: true;
    arguments: null;
  }

}

export type Git = {
  baseGitSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      teamId: string;
    }

  }
  branch: {
    type: string;
    isList: false;
    arguments: null;
  }
  commitSha: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  originalGitSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      teamId: string;
    }

  }
  path: {
    type: string;
    isList: false;
    arguments: null;
  }
  repo: {
    type: string;
    isList: false;
    arguments: null;
  }
  username: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type GithubOrganization = {
  avatarUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  login: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum GithubPermission {
    ADMIN = "ADMIN",
    NONE = "NONE",
    READ = "READ",
    WRITE = "WRITE",

}

export type GithubProfile = {
  avatarUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  login: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  scopes: {
    type: string;
    isList: true;
    arguments: null;
  }

}

export type GithubRepo = {
  authorization: {
    type: GithubRepoAuthorization;
    isList: false;
    arguments: null;
  }
  fullName: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  owner: {
    type: GithubOrganization;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum GithubRepoAuthorization {
    READ = "READ",
    WRITE = "WRITE",

}

export type GitHubRepository = {
  allowForking: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  archived: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  createdAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  defaultBranch: {
    type: string;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  fork: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  id: {
    type: number;
    isList: false;
    arguments: null;
  }
  isTemplate: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  owner: {
    type: string;
    isList: false;
    arguments: null;
  }
  parent: {
    type: GitHubRepository;
    isList: false;
    arguments: null;
  }
  permission: {
    type: GithubPermission;
    isList: false;
    arguments: null;
  }
  private: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  pushedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  source: {
    type: GitHubRepository;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum GitProvider {
    GITHUB = "GITHUB",

}

export type GitV2 = {
  branch: {
    type: string;
    isList: false;
    arguments: null;
  }
  owner: {
    type: string;
    isList: false;
    arguments: null;
  }
  repo: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type ImageReference = {
  fileName: string;
  resolution: number;
  src: string;
  url: string;

}

export type ImageReferenceMetadata = {
  fileName: {
    type: string;
    isList: false;
    arguments: null;
  }
  resolution: {
    type: number;
    isList: true;
    arguments: null;
  }
  uploadId: {
    type: string;
    isList: false;
    arguments: null;
  }
  url: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type InstallationEvent = {
  action: {
    type: InstallationEventAction;
    isList: false;
    arguments: null;
  }
  event: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum InstallationEventAction {
    CREATED = "CREATED",

}

export type Invitation = {
  authorization: {
    type: Authorization;
    isList: false;
    arguments: null;
  }
  email: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    isList: false;
    arguments: null;
  }
  token: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type LastCommit = {
  color: {
    type: string;
    isList: false;
    arguments: null;
  }
  message: {
    type: string;
    isList: false;
    arguments: null;
  }
  sha: {
    type: string;
    isList: false;
    arguments: null;
  }
  timestamp: {
    type: string;
    isList: false;
    arguments: null;
  }
  user: {
    type: User;
    isList: false;
    arguments: null;
  }

}

export type MemberAuthorization = {
  authorization: TeamMemberAuthorization;
  userId: string;

}

export type Notification = {
  archived: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  data: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  insertedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  read: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  type: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type NotificationPreferences = {
  emailCommentMention: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  emailCommentReply: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  emailNewComment: {
    type: boolean;
    isList: false;
    arguments: null;
  }

}

export type OrderBy = {
  direction: Direction;
  field: string;

}

export type PreviewReference = {
  height: number;
  previewPath: string;
  screenshotSrc: string;
  userAgent: string;
  width: number;
  x: number;
  y: number;

}

export type PreviewReferenceMetadata = {
  height: {
    type: number;
    isList: false;
    arguments: null;
  }
  previewPath: {
    type: string;
    isList: false;
    arguments: null;
  }
  screenshotUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  userAgent: {
    type: string;
    isList: false;
    arguments: null;
  }
  width: {
    type: number;
    isList: false;
    arguments: null;
  }
  x: {
    type: number;
    isList: false;
    arguments: null;
  }
  y: {
    type: number;
    isList: false;
    arguments: null;
  }

}

export type PrivateRegistry = {
  authType: {
    type: AuthType;
    isList: false;
    arguments: null;
  }
  enabledScopes: {
    type: string;
    isList: true;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  limitToScopes: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  proxyEnabled: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  registryAuthKey: {
    type: string;
    isList: false;
    arguments: null;
  }
  registryType: {
    type: RegistryType;
    isList: false;
    arguments: null;
  }
  registryUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  teamId: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Project = {
  appInstalled: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  availableEnvironments: {
    type: Environment;
    isList: true;
    arguments: null;
  }
  branches: {
    type: Branch;
    isList: true;
    arguments: null;
  }
  connections: {
    type: Connection;
    isList: true;
    arguments: null;
  }
  defaultBranch: {
    type: Branch;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  environment: {
    type: Environment;
    isList: false;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    isList: false;
    arguments: null;
  }
  owner: {
    type: string;
    isList: false;
    arguments: null;
  }
  private: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  pullRequests: {
    type: PullRequest;
    isList: true;
    arguments: null;
  }
  repo: {
    type: string;
    isList: false;
    arguments: null;
  }
  repository: {
    type: Repository;
    isList: false;
    arguments: null;
  }
  teams: {
    type: Team;
    isList: true;
    arguments: null;
  }

}

export type ProSubscription = {
  billingInterval: {
    type: SubscriptionInterval;
    isList: false;
    arguments: null;
  }
  cancelAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  currency: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  nextBillDate: {
    type: string;
    isList: false;
    arguments: null;
  }
  origin: {
    type: SubscriptionOrigin;
    isList: false;
    arguments: null;
  }
  paymentProvider: {
    type: SubscriptionPaymentProvider;
    isList: false;
    arguments: null;
  }
  quantity: {
    type: number;
    isList: false;
    arguments: null;
  }
  status: {
    type: SubscriptionStatus;
    isList: false;
    arguments: null;
  }
  trialEnd: {
    type: string;
    isList: false;
    arguments: null;
  }
  trialStart: {
    type: string;
    isList: false;
    arguments: null;
  }
  type: {
    type: SubscriptionType;
    isList: false;
    arguments: null;
  }
  unitPrice: {
    type: number;
    isList: false;
    arguments: null;
  }
  updateBillingUrl: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export enum ProviderName {
    APPLE = "APPLE",
    GITHUB = "GITHUB",
    GOOGLE = "GOOGLE",

}

export type PullRequest = {
  baseRepository: {
    type: Repository;
    isList: false;
    arguments: null;
  }
  creator: {
    type: User;
    isList: false;
    arguments: null;
  }
  creatorUsername: {
    type: string;
    isList: false;
    arguments: null;
  }
  draft: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  htmlUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  number: {
    type: number;
    isList: false;
    arguments: null;
  }
  prClosedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  prCreatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  prMergedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  prUpdatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  sourceBranch: {
    type: Branch;
    isList: false;
    arguments: null;
  }
  state: {
    type: string;
    isList: false;
    arguments: null;
  }
  targetBranch: {
    type: Branch;
    isList: false;
    arguments: null;
  }
  title: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Reference = {
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  metadata: {
    type: ReferenceMetadata;
    isList: false;
    arguments: null;
  }
  resource: {
    type: string;
    isList: false;
    arguments: null;
  }
  type: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type ReferenceMetadata =   | CodeReferenceMetadata  | ImageReferenceMetadata  | PreviewReferenceMetadata  | UserReferenceMetadata;

export enum RegistryType {
    CUSTOM = "CUSTOM",
    GITHUB = "GITHUB",
    NPM = "NPM",

}

export type Repository =   | GitHubRepository;

export type RepositoryEvent =   | InstallationEvent;

export type RootMutationType = {
  acceptTeamInvitation: {
    type: Team;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  addCollaborator: {
    type: Collaborator;
    isList: false;
    arguments: {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    }

  }
  addSandboxesToAlbum: {
    type: Album;
    isList: false;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  addToCollection: {
    type: Collection;
    isList: false;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  addToCollectionOrTeam: {
    type: Sandbox;
    isList: true;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  archiveAllNotifications: {
    type: User;
    isList: false;
    arguments: null;
  }
  archiveNotification: {
    type: Notification;
    isList: false;
    arguments: {
      notificationId: string;
    }

  }
  bookmarkTemplate: {
    type: Template;
    isList: false;
    arguments: {
      teamId: string;
      templateId: string;
    }

  }
  cancelDeleteCurrentUser: {
    type: string;
    isList: false;
    arguments: null;
  }
  changeCollaboratorAuthorization: {
    type: Collaborator;
    isList: false;
    arguments: {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    }

  }
  changeSandboxInvitationAuthorization: {
    type: Invitation;
    isList: false;
    arguments: {
      authorization: Authorization;
      invitationId: string;
      sandboxId: string;
    }

  }
  changeTeamMemberAuthorizations: {
    type: Team;
    isList: false;
    arguments: {
      memberAuthorizations: MemberAuthorization;
      teamId: string;
    }

  }
  clearNotificationCount: {
    type: User;
    isList: false;
    arguments: null;
  }
  createAlbum: {
    type: Album;
    isList: false;
    arguments: {
      description: string;
      title: string;
    }

  }
  createCodeComment: {
    type: Comment;
    isList: false;
    arguments: {
      anchorReference: CodeReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    }

  }
  createCollection: {
    type: Collection;
    isList: false;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  createComment: {
    type: Comment;
    isList: false;
    arguments: {
      codeReference: CodeReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    }

  }
  createFeatureFlag: {
    type: FeatureFlag;
    isList: false;
    arguments: {
      description: string;
      enabled: boolean;
      name: string;
    }

  }
  createOrUpdatePrivateNpmRegistry: {
    type: PrivateRegistry;
    isList: false;
    arguments: {
      authType: AuthType;
      enabledScopes: string;
      limitToScopes: boolean;
      proxyEnabled: boolean;
      registryAuthKey: string;
      registryType: RegistryType;
      registryUrl: string;
      teamId: string;
    }

  }
  createPreviewComment: {
    type: Comment;
    isList: false;
    arguments: {
      anchorReference: PreviewReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    }

  }
  createSandboxInvitation: {
    type: Invitation;
    isList: false;
    arguments: {
      authorization: Authorization;
      email: string;
      sandboxId: string;
    }

  }
  createTeam: {
    type: Team;
    isList: false;
    arguments: {
      name: string;
      pilot: boolean;
    }

  }
  deleteAlbum: {
    type: string;
    isList: false;
    arguments: {
      id: string;
    }

  }
  deleteCollection: {
    type: Collection;
    isList: true;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  deleteComment: {
    type: Comment;
    isList: false;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  deleteCurrentUser: {
    type: string;
    isList: false;
    arguments: null;
  }
  deletePrivateNpmRegistry: {
    type: PrivateRegistry;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  deleteSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      sandboxIds: string;
    }

  }
  deleteWorkspace: {
    type: string;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  disableFeatureFlag: {
    type: FeatureFlag;
    isList: false;
    arguments: {
      name: string;
    }

  }
  disableFeatureFlagForTeam: {
    type: TeamsFeatureFlag;
    isList: false;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableFeatureFlag: {
    type: FeatureFlag;
    isList: false;
    arguments: {
      name: string;
    }

  }
  enableFeatureFlagForTeam: {
    type: TeamsFeatureFlag;
    isList: false;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableTeamBetaAccess: {
    type: Team;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  inviteToTeam: {
    type: Team;
    isList: false;
    arguments: {
      authorization: TeamMemberAuthorization;
      teamId: string;
      username: string;
    }

  }
  inviteToTeamViaEmail: {
    type: string;
    isList: false;
    arguments: {
      authorization: TeamMemberAuthorization;
      email: string;
      teamId: string;
    }

  }
  leaveTeam: {
    type: string;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  makeSandboxesTemplates: {
    type: Template;
    isList: true;
    arguments: {
      sandboxIds: string;
    }

  }
  markAllNotificationsAsRead: {
    type: User;
    isList: false;
    arguments: null;
  }
  markNotificationAsRead: {
    type: Notification;
    isList: false;
    arguments: {
      notificationId: string;
    }

  }
  permanentlyDeleteSandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      sandboxIds: string;
    }

  }
  previewUpdateSubscriptionBillingInterval: {
    type: BillingPreview;
    isList: false;
    arguments: {
      billingInterval: SubscriptionInterval;
      subscriptionId: string;
      teamId: string;
    }

  }
  reactivateSubscription: {
    type: ProSubscription;
    isList: false;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  redeemSandboxInvitation: {
    type: Invitation;
    isList: false;
    arguments: {
      invitationToken: string;
      sandboxId: string;
    }

  }
  redeemTeamInviteToken: {
    type: Team;
    isList: false;
    arguments: {
      inviteToken: string;
    }

  }
  rejectTeamInvitation: {
    type: string;
    isList: false;
    arguments: {
      teamId: string;
    }

  }
  removeCollaborator: {
    type: Collaborator;
    isList: false;
    arguments: {
      sandboxId: string;
      username: string;
    }

  }
  removeFromTeam: {
    type: Team;
    isList: false;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  removeSandboxesFromAlbum: {
    type: Album;
    isList: false;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  renameCollection: {
    type: Collection;
    isList: true;
    arguments: {
      newPath: string;
      newTeamId: string;
      path: string;
      teamId: string;
    }

  }
  renameSandbox: {
    type: Sandbox;
    isList: false;
    arguments: {
      id: string;
      title: string;
    }

  }
  resolveComment: {
    type: Comment;
    isList: false;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  revokeSandboxInvitation: {
    type: Invitation;
    isList: false;
    arguments: {
      invitationId: string;
      sandboxId: string;
    }

  }
  revokeTeamInvitation: {
    type: Team;
    isList: false;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  setDefaultTeamMemberAuthorization: {
    type: WorkspaceSandboxSettings;
    isList: false;
    arguments: {
      defaultAuthorization: TeamMemberAuthorization;
      teamId: string;
    }

  }
  setPreventSandboxesExport: {
    type: Sandbox;
    isList: true;
    arguments: {
      preventSandboxExport: boolean;
      sandboxIds: string;
    }

  }
  setPreventSandboxesLeavingWorkspace: {
    type: Sandbox;
    isList: true;
    arguments: {
      preventSandboxLeaving: boolean;
      sandboxIds: string;
    }

  }
  setSandboxAlwaysOn: {
    type: Sandbox;
    isList: false;
    arguments: {
      alwaysOn: boolean;
      sandboxId: string;
    }

  }
  setSandboxesFrozen: {
    type: Sandbox;
    isList: true;
    arguments: {
      isFrozen: boolean;
      sandboxIds: string;
    }

  }
  setSandboxesPrivacy: {
    type: Sandbox;
    isList: true;
    arguments: {
      privacy: number;
      sandboxIds: string;
    }

  }
  setTeamDescription: {
    type: Team;
    isList: false;
    arguments: {
      description: string;
      teamId: string;
    }

  }
  setTeamMinimumPrivacy: {
    type: WorkspaceSandboxSettings;
    isList: false;
    arguments: {
      minimumPrivacy: number;
      teamId: string;
      updateDrafts: boolean;
    }

  }
  setTeamName: {
    type: Team;
    isList: false;
    arguments: {
      name: string;
      teamId: string;
    }

  }
  setWorkspaceSandboxSettings: {
    type: WorkspaceSandboxSettings;
    isList: false;
    arguments: {
      preventSandboxExport: boolean;
      preventSandboxLeaving: boolean;
      teamId: string;
    }

  }
  softCancelSubscription: {
    type: ProSubscription;
    isList: false;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  unbookmarkTemplate: {
    type: Template;
    isList: false;
    arguments: {
      teamId: string;
      templateId: string;
    }

  }
  unmakeSandboxesTemplates: {
    type: Template;
    isList: true;
    arguments: {
      sandboxIds: string;
    }

  }
  unresolveComment: {
    type: Comment;
    isList: false;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  updateAlbum: {
    type: Album;
    isList: false;
    arguments: {
      description: string;
      id: string;
      title: string;
    }

  }
  updateComment: {
    type: Comment;
    isList: false;
    arguments: {
      codeReferences: CodeReference;
      commentId: string;
      content: string;
      imageReferences: ImageReference;
      sandboxId: string;
      userReferences: UserReference;
    }

  }
  updateCurrentUser: {
    type: User;
    isList: false;
    arguments: {
      bio: string;
      name: string;
      socialLinks: string;
      username: string;
    }

  }
  updateNotificationPreferences: {
    type: NotificationPreferences;
    isList: false;
    arguments: {
      emailCommentMention: boolean;
      emailCommentReply: boolean;
      emailNewComment: boolean;
    }

  }
  updateNotificationReadStatus: {
    type: Notification;
    isList: false;
    arguments: {
      notificationId: string;
      read: boolean;
    }

  }
  updateProjectEnvironment: {
    type: Project;
    isList: false;
    arguments: {
      environmentId: string;
      gitProvider: GitProvider;
      owner: string;
      repo: string;
    }

  }
  updateSubscription: {
    type: ProSubscription;
    isList: false;
    arguments: {
      quantity: number;
      subscriptionId: string;
      teamId: string;
    }

  }
  updateSubscriptionBillingInterval: {
    type: ProSubscription;
    isList: false;
    arguments: {
      billingInterval: SubscriptionInterval;
      subscriptionId: string;
      teamId: string;
    }

  }

}

export type RootQueryType = {
  album: {
    type: Album;
    isList: false;
    arguments: {
      albumId: string;
    }

  }
  albums: {
    type: Album;
    isList: true;
    arguments: {
      username: string;
    }

  }
  curatedAlbums: {
    type: Album;
    isList: true;
    arguments: null;
  }
  featureFlags: {
    type: FeatureFlag;
    isList: true;
    arguments: null;
  }
  git: {
    type: Git;
    isList: false;
    arguments: {
      branch: string;
      path: string;
      repo: string;
      username: string;
    }

  }
  githubOrganizationRepos: {
    type: GithubRepo;
    isList: true;
    arguments: {
      organization: string;
      page: number;
      perPage: number;
    }

  }
  githubRepo: {
    type: GithubRepo;
    isList: false;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  me: {
    type: CurrentUser;
    isList: false;
    arguments: null;
  }
  project: {
    type: Project;
    isList: false;
    arguments: {
      gitProvider: GitProvider;
      owner: string;
      repo: string;
    }

  }
  sandbox: {
    type: Sandbox;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  teamByToken: {
    type: Team;
    isList: false;
    arguments: {
      inviteToken: string;
    }

  }

}

export type RootSubscriptionType = {
  collaboratorAdded: {
    type: Collaborator;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorChanged: {
    type: Collaborator;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorRemoved: {
    type: Collaborator;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  commentAdded: {
    type: Comment;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  commentChanged: {
    type: Comment;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  commentRemoved: {
    type: Comment;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  githubEvents: {
    type: RepositoryEvent;
    isList: false;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  invitationChanged: {
    type: Invitation;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  invitationCreated: {
    type: Invitation;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  invitationRemoved: {
    type: Invitation;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }
  projectCommits: {
    type: BranchLastCommit;
    isList: false;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectConnections: {
    type: BranchConnections;
    isList: false;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectStatus: {
    type: BranchStatus;
    isList: false;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  sandboxChanged: {
    type: Sandbox;
    isList: false;
    arguments: {
      sandboxId: string;
    }

  }

}

export type Sandbox = {
  alias: {
    type: string;
    isList: false;
    arguments: null;
  }
  alwaysOn: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  author: {
    type: User;
    isList: false;
    arguments: null;
  }
  authorId: {
    type: string;
    isList: false;
    arguments: null;
  }
  authorization: {
    type: Authorization;
    isList: false;
    arguments: null;
  }
  baseGit: {
    type: Git;
    isList: false;
    arguments: null;
  }
  collaborators: {
    type: Collaborator;
    isList: true;
    arguments: null;
  }
  collection: {
    type: Collection;
    isList: false;
    arguments: null;
  }
  comment: {
    type: Comment;
    isList: false;
    arguments: {
      commentId: string;
    }

  }
  comments: {
    type: Comment;
    isList: true;
    arguments: null;
  }
  customTemplate: {
    type: Template;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  forkCount: {
    type: number;
    isList: false;
    arguments: null;
  }
  forkedTemplate: {
    type: Template;
    isList: false;
    arguments: null;
  }
  git: {
    type: Git;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  insertedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  invitations: {
    type: Invitation;
    isList: true;
    arguments: null;
  }
  isFrozen: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  isSse: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  isV2: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  likeCount: {
    type: number;
    isList: false;
    arguments: null;
  }
  originalGit: {
    type: Git;
    isList: false;
    arguments: null;
  }
  permissions: {
    type: SandboxProtectionSettings;
    isList: false;
    arguments: null;
  }
  prNumber: {
    type: number;
    isList: false;
    arguments: null;
  }
  privacy: {
    type: number;
    isList: false;
    arguments: null;
  }
  removedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  screenshotOutdated: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  screenshotUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  source: {
    type: Source;
    isList: false;
    arguments: null;
  }
  team: {
    type: Team;
    isList: false;
    arguments: null;
  }
  teamId: {
    type: string;
    isList: false;
    arguments: null;
  }
  title: {
    type: string;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  viewCount: {
    type: number;
    isList: false;
    arguments: null;
  }

}

export type SandboxProtectionSettings = {
  preventSandboxExport: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: boolean;
    isList: false;
    arguments: null;
  }

}

export type SandboxV2 = {
  alias: {
    type: string;
    isList: false;
    arguments: null;
  }
  authorization: {
    type: Authorization;
    isList: false;
    arguments: null;
  }
  collaborators: {
    type: Collaborator;
    isList: true;
    arguments: null;
  }
  gitv2: {
    type: GitV2;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  insertedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  isV2: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  removedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Source = {
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  template: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Status = {
  hasChanges: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  hasConflicts: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  remote: {
    type: StatusCommitCounts;
    isList: false;
    arguments: null;
  }
  target: {
    type: StatusCommitCounts;
    isList: false;
    arguments: null;
  }

}

export type StatusCommitCounts = {
  ahead: {
    type: number;
    isList: false;
    arguments: null;
  }
  behind: {
    type: number;
    isList: false;
    arguments: null;
  }

}

export enum SubscriptionInterval {
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",

}

export enum SubscriptionOrigin {
    LEGACY = "LEGACY",
    PATRON = "PATRON",
    PILOT = "PILOT",

}

export enum SubscriptionPaymentProvider {
    PADDLE = "PADDLE",
    STRIPE = "STRIPE",

}

export enum SubscriptionStatus {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    INCOMPLETE_EXPIRED = "INCOMPLETE_EXPIRED",
    PAUSED = "PAUSED",
    TRIALING = "TRIALING",
    UNKNOWN = "UNKNOWN",
    UNPAID = "UNPAID",

}

export enum SubscriptionType {
    PERSONAL_PRO = "PERSONAL_PRO",
    TEAM_PRO = "TEAM_PRO",

}

export type Team = {
  avatarUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  beta: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: Template;
    isList: true;
    arguments: null;
  }
  collections: {
    type: Collection;
    isList: true;
    arguments: null;
  }
  creatorId: {
    type: string;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  drafts: {
    type: Sandbox;
    isList: true;
    arguments: {
      authorId: string;
      limit: number;
      orderBy: OrderBy;
    }

  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  inviteToken: {
    type: string;
    isList: false;
    arguments: null;
  }
  invitees: {
    type: User;
    isList: true;
    arguments: null;
  }
  joinedPilotAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  privateRegistry: {
    type: PrivateRegistry;
    isList: false;
    arguments: null;
  }
  projects: {
    type: Project;
    isList: true;
    arguments: {
      syncData: boolean;
    }

  }
  sandboxes: {
    type: Sandbox;
    isList: true;
    arguments: {
      alwaysOn: boolean;
      authorId: string;
      hasOriginalGit: boolean;
      limit: number;
      orderBy: OrderBy;
      showDeleted: boolean;
    }

  }
  settings: {
    type: WorkspaceSandboxSettings;
    isList: false;
    arguments: null;
  }
  subscription: {
    type: ProSubscription;
    isList: false;
    arguments: null;
  }
  templates: {
    type: Template;
    isList: true;
    arguments: null;
  }
  userAuthorizations: {
    type: UserAuthorization;
    isList: true;
    arguments: null;
  }
  users: {
    type: User;
    isList: true;
    arguments: null;
  }

}

export enum TeamMemberAuthorization {
    ADMIN = "ADMIN",
    READ = "READ",
    WRITE = "WRITE",

}

export type TeamsFeatureFlag = {
  enabledForTeam: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  featureFlagId: {
    type: string;
    isList: false;
    arguments: null;
  }
  teamId: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type Template = {
  bookmarked: {
    type: Bookmarked;
    isList: true;
    arguments: null;
  }
  color: {
    type: string;
    isList: false;
    arguments: null;
  }
  description: {
    type: string;
    isList: false;
    arguments: null;
  }
  iconUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  insertedAt: {
    type: string;
    isList: false;
    arguments: null;
  }
  official: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  published: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    isList: false;
    arguments: null;
  }
  title: {
    type: string;
    isList: false;
    arguments: null;
  }
  updatedAt: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type User = {
  avatarUrl: {
    type: string;
    isList: false;
    arguments: null;
  }
  bio: {
    type: string;
    isList: false;
    arguments: null;
  }
  id: {
    type: string;
    isList: false;
    arguments: null;
  }
  name: {
    type: string;
    isList: false;
    arguments: null;
  }
  personalWorkspaceId: {
    type: string;
    isList: false;
    arguments: null;
  }
  socialLinks: {
    type: string;
    isList: true;
    arguments: null;
  }
  username: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type UserAuthorization = {
  authorization: {
    type: TeamMemberAuthorization;
    isList: false;
    arguments: null;
  }
  userId: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type UserReference = {
  userId: string;
  username: string;

}

export type UserReferenceMetadata = {
  userId: {
    type: string;
    isList: false;
    arguments: null;
  }
  username: {
    type: string;
    isList: false;
    arguments: null;
  }

}

export type WorkspaceSandboxSettings = {
  defaultAuthorization: {
    type: TeamMemberAuthorization;
    isList: false;
    arguments: null;
  }
  minimumPrivacy: {
    type: number;
    isList: false;
    arguments: null;
  }
  preventSandboxExport: {
    type: boolean;
    isList: false;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: boolean;
    isList: false;
    arguments: null;
  }

}
