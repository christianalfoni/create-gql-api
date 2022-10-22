
export type Album = {
  id: {
    type: string;
    arguments: null;
  }
  sandboxes: {
    type: Sandbox;
    arguments: null;
  }
  title: {
    type: string;
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
    arguments: null;
  }
  currency: {
    type: string;
    arguments: null;
  }
  date: {
    type: string;
    arguments: null;
  }

}

export type BillingPreview = {
  immediatePayment: {
    type: BillingDetails;
    arguments: null;
  }
  nextPayment: {
    type: BillingDetails;
    arguments: null;
  }

}

export type Bookmarked = {
  entity: {
    type: BookmarkEntity;
    arguments: null;
  }
  isBookmarked: {
    type: boolean;
    arguments: null;
  }

}

export type BookmarkEntity =   | Team  | User;

export type Branch = {
  connections: {
    type: Connection;
    arguments: null;
  }
  contribution: {
    type: boolean;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  owner: {
    type: User;
    arguments: null;
  }
  poolSize: {
    type: number;
    arguments: null;
  }
  project: {
    type: Project;
    arguments: null;
  }
  pullRequests: {
    type: PullRequest;
    arguments: null;
  }
  status: {
    type: Status;
    arguments: null;
  }
  upstream: {
    type: boolean;
    arguments: null;
  }

}

export type BranchConnections = {
  branchId: {
    type: string;
    arguments: null;
  }
  connections: {
    type: Connection;
    arguments: null;
  }

}

export type BranchLastCommit = {
  branchId: {
    type: string;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    arguments: null;
  }

}

export type BranchStatus = {
  branchId: {
    type: string;
    arguments: null;
  }
  status: {
    type: Status;
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
    arguments: null;
  }
  code: {
    type: string;
    arguments: null;
  }
  head: {
    type: number;
    arguments: null;
  }
  path: {
    type: string;
    arguments: null;
  }
  sandboxId: {
    type: string;
    arguments: null;
  }

}

export type Collaborator = {
  authorization: {
    type: Authorization;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  lastSeenAt: {
    type: string;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    arguments: null;
  }
  user: {
    type: User;
    arguments: null;
  }
  warning: {
    type: string;
    arguments: null;
  }

}

export type Collection = {
  id: {
    type: string;
    arguments: null;
  }
  path: {
    type: string;
    arguments: null;
  }
  sandboxCount: {
    type: number;
    arguments: null;
  }
  sandboxes: {
    type: Sandbox;
    arguments: null;
  }
  team: {
    type: Team;
    arguments: null;
  }
  teamId: {
    type: string;
    arguments: null;
  }
  user: {
    type: User;
    arguments: null;
  }

}

export type Comment = {
  anchorReference: {
    type: Reference;
    arguments: null;
  }
  comments: {
    type: Comment;
    arguments: null;
  }
  content: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  insertedAt: {
    type: string;
    arguments: null;
  }
  isRead: {
    type: boolean;
    arguments: null;
  }
  isResolved: {
    type: boolean;
    arguments: null;
  }
  parentComment: {
    type: Comment;
    arguments: null;
  }
  references: {
    type: Reference;
    arguments: null;
  }
  replyCount: {
    type: number;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }
  user: {
    type: User;
    arguments: null;
  }

}

export type Connection = {
  appId: {
    type: string;
    arguments: null;
  }
  clientId: {
    type: string;
    arguments: null;
  }
  color: {
    type: string;
    arguments: null;
  }
  timestamp: {
    type: string;
    arguments: null;
  }
  user: {
    type: User;
    arguments: null;
  }

}

export type CurrentUser = {
  betaAccess: {
    type: boolean;
    arguments: null;
  }
  betaSandboxes: {
    type: SandboxV2;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: Template;
    arguments: null;
  }
  collaboratorSandboxes: {
    type: Sandbox;
    arguments: null;
  }
  collection: {
    type: Collection;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  collections: {
    type: Collection;
    arguments: {
      teamId: string;
    }

  }
  deletionRequested: {
    type: boolean;
    arguments: null;
  }
  email: {
    type: string;
    arguments: null;
  }
  featureFlags: {
    type: FeatureFlag;
    arguments: null;
  }
  githubOrganizations: {
    type: GithubOrganization;
    arguments: null;
  }
  githubProfile: {
    type: GithubProfile;
    arguments: null;
  }
  githubRepos: {
    type: GithubRepo;
    arguments: {
      page: number;
      perPage: number;
    }

  }
  id: {
    type: string;
    arguments: null;
  }
  likedSandboxes: {
    type: Sandbox;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  notificationPreferences: {
    type: NotificationPreferences;
    arguments: null;
  }
  notifications: {
    type: Notification;
    arguments: {
      limit: number;
      orderBy: OrderBy;
      type: string;
    }

  }
  personalWorkspaceId: {
    type: string;
    arguments: null;
  }
  provider: {
    type: ProviderName;
    arguments: null;
  }
  recentBranches: {
    type: Branch;
    arguments: {
      contribution: boolean;
      limit: number;
      teamId: string;
    }

  }
  recentProjects: {
    type: Project;
    arguments: {
      limit: number;
    }

  }
  recentlyAccessedSandboxes: {
    type: Sandbox;
    arguments: {
      limit: number;
      teamId: string;
    }

  }
  recentlyUsedTemplates: {
    type: Template;
    arguments: {
      teamId: string;
    }

  }
  sandboxes: {
    type: Sandbox;
    arguments: {
      hasOriginalGit: boolean;
      limit: number;
      orderBy: OrderBy;
      showDeleted: boolean;
    }

  }
  team: {
    type: Team;
    arguments: {
      id: string;
    }

  }
  teams: {
    type: Team;
    arguments: null;
  }
  templates: {
    type: Template;
    arguments: {
      showAll: boolean;
      teamId: string;
    }

  }
  username: {
    type: string;
    arguments: null;
  }
  workspaces: {
    type: Team;
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
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  limitCpu: {
    type: number;
    arguments: null;
  }
  limitMemory: {
    type: string;
    arguments: null;
  }
  limitStorage: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  order: {
    type: number;
    arguments: null;
  }

}

export type FeatureFlag = {
  description: {
    type: string;
    arguments: null;
  }
  enabled: {
    type: boolean;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  teams: {
    type: Team;
    arguments: null;
  }

}

export type Git = {
  baseGitSandboxes: {
    type: Sandbox;
    arguments: {
      teamId: string;
    }

  }
  branch: {
    type: string;
    arguments: null;
  }
  commitSha: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  originalGitSandboxes: {
    type: Sandbox;
    arguments: {
      teamId: string;
    }

  }
  path: {
    type: string;
    arguments: null;
  }
  repo: {
    type: string;
    arguments: null;
  }
  username: {
    type: string;
    arguments: null;
  }

}

export type GithubOrganization = {
  avatarUrl: {
    type: string;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  login: {
    type: string;
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
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  login: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  scopes: {
    type: string;
    arguments: null;
  }

}

export type GithubRepo = {
  authorization: {
    type: GithubRepoAuthorization;
    arguments: null;
  }
  fullName: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  owner: {
    type: GithubOrganization;
    arguments: null;
  }
  updatedAt: {
    type: string;
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
    arguments: null;
  }
  archived: {
    type: boolean;
    arguments: null;
  }
  createdAt: {
    type: string;
    arguments: null;
  }
  defaultBranch: {
    type: string;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  fork: {
    type: boolean;
    arguments: null;
  }
  id: {
    type: number;
    arguments: null;
  }
  isTemplate: {
    type: boolean;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  owner: {
    type: string;
    arguments: null;
  }
  parent: {
    type: GitHubRepository;
    arguments: null;
  }
  permission: {
    type: GithubPermission;
    arguments: null;
  }
  private: {
    type: boolean;
    arguments: null;
  }
  pushedAt: {
    type: string;
    arguments: null;
  }
  source: {
    type: GitHubRepository;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }

}

export enum GitProvider {
    GITHUB = "GITHUB",

}

export type GitV2 = {
  branch: {
    type: string;
    arguments: null;
  }
  owner: {
    type: string;
    arguments: null;
  }
  repo: {
    type: string;
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
    arguments: null;
  }
  resolution: {
    type: number;
    arguments: null;
  }
  uploadId: {
    type: string;
    arguments: null;
  }
  url: {
    type: string;
    arguments: null;
  }

}

export type InstallationEvent = {
  action: {
    type: InstallationEventAction;
    arguments: null;
  }
  event: {
    type: string;
    arguments: null;
  }

}

export enum InstallationEventAction {
    CREATED = "CREATED",

}

export type Invitation = {
  authorization: {
    type: Authorization;
    arguments: null;
  }
  email: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    arguments: null;
  }
  token: {
    type: string;
    arguments: null;
  }

}

export type LastCommit = {
  color: {
    type: string;
    arguments: null;
  }
  message: {
    type: string;
    arguments: null;
  }
  sha: {
    type: string;
    arguments: null;
  }
  timestamp: {
    type: string;
    arguments: null;
  }
  user: {
    type: User;
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
    arguments: null;
  }
  data: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  insertedAt: {
    type: string;
    arguments: null;
  }
  read: {
    type: boolean;
    arguments: null;
  }
  type: {
    type: string;
    arguments: null;
  }

}

export type NotificationPreferences = {
  emailCommentMention: {
    type: boolean;
    arguments: null;
  }
  emailCommentReply: {
    type: boolean;
    arguments: null;
  }
  emailNewComment: {
    type: boolean;
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
    arguments: null;
  }
  previewPath: {
    type: string;
    arguments: null;
  }
  screenshotUrl: {
    type: string;
    arguments: null;
  }
  userAgent: {
    type: string;
    arguments: null;
  }
  width: {
    type: number;
    arguments: null;
  }
  x: {
    type: number;
    arguments: null;
  }
  y: {
    type: number;
    arguments: null;
  }

}

export type PrivateRegistry = {
  authType: {
    type: AuthType;
    arguments: null;
  }
  enabledScopes: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  limitToScopes: {
    type: boolean;
    arguments: null;
  }
  proxyEnabled: {
    type: boolean;
    arguments: null;
  }
  registryAuthKey: {
    type: string;
    arguments: null;
  }
  registryType: {
    type: RegistryType;
    arguments: null;
  }
  registryUrl: {
    type: string;
    arguments: null;
  }
  teamId: {
    type: string;
    arguments: null;
  }

}

export type Project = {
  appInstalled: {
    type: boolean;
    arguments: null;
  }
  availableEnvironments: {
    type: Environment;
    arguments: null;
  }
  branches: {
    type: Branch;
    arguments: null;
  }
  connections: {
    type: Connection;
    arguments: null;
  }
  defaultBranch: {
    type: Branch;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  environment: {
    type: Environment;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    arguments: null;
  }
  lastCommit: {
    type: LastCommit;
    arguments: null;
  }
  owner: {
    type: string;
    arguments: null;
  }
  private: {
    type: boolean;
    arguments: null;
  }
  pullRequests: {
    type: PullRequest;
    arguments: null;
  }
  repo: {
    type: string;
    arguments: null;
  }
  repository: {
    type: Repository;
    arguments: null;
  }
  teams: {
    type: Team;
    arguments: null;
  }

}

export type ProSubscription = {
  billingInterval: {
    type: SubscriptionInterval;
    arguments: null;
  }
  cancelAt: {
    type: string;
    arguments: null;
  }
  currency: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  nextBillDate: {
    type: string;
    arguments: null;
  }
  origin: {
    type: SubscriptionOrigin;
    arguments: null;
  }
  paymentProvider: {
    type: SubscriptionPaymentProvider;
    arguments: null;
  }
  quantity: {
    type: number;
    arguments: null;
  }
  status: {
    type: SubscriptionStatus;
    arguments: null;
  }
  trialEnd: {
    type: string;
    arguments: null;
  }
  trialStart: {
    type: string;
    arguments: null;
  }
  type: {
    type: SubscriptionType;
    arguments: null;
  }
  unitPrice: {
    type: number;
    arguments: null;
  }
  updateBillingUrl: {
    type: string;
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
    arguments: null;
  }
  creator: {
    type: User;
    arguments: null;
  }
  creatorUsername: {
    type: string;
    arguments: null;
  }
  draft: {
    type: boolean;
    arguments: null;
  }
  htmlUrl: {
    type: string;
    arguments: null;
  }
  number: {
    type: number;
    arguments: null;
  }
  prClosedAt: {
    type: string;
    arguments: null;
  }
  prCreatedAt: {
    type: string;
    arguments: null;
  }
  prMergedAt: {
    type: string;
    arguments: null;
  }
  prUpdatedAt: {
    type: string;
    arguments: null;
  }
  sourceBranch: {
    type: Branch;
    arguments: null;
  }
  state: {
    type: string;
    arguments: null;
  }
  targetBranch: {
    type: Branch;
    arguments: null;
  }
  title: {
    type: string;
    arguments: null;
  }

}

export type Reference = {
  id: {
    type: string;
    arguments: null;
  }
  metadata: {
    type: ReferenceMetadata;
    arguments: null;
  }
  resource: {
    type: string;
    arguments: null;
  }
  type: {
    type: string;
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
    arguments: {
      teamId: string;
    }

  }
  addCollaborator: {
    type: Collaborator;
    arguments: {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    }

  }
  addSandboxesToAlbum: {
    type: Album;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  addToCollection: {
    type: Collection;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  addToCollectionOrTeam: {
    type: Sandbox;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  archiveAllNotifications: {
    type: User;
    arguments: null;
  }
  archiveNotification: {
    type: Notification;
    arguments: {
      notificationId: string;
    }

  }
  bookmarkTemplate: {
    type: Template;
    arguments: {
      teamId: string;
      templateId: string;
    }

  }
  cancelDeleteCurrentUser: {
    type: string;
    arguments: null;
  }
  changeCollaboratorAuthorization: {
    type: Collaborator;
    arguments: {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    }

  }
  changeSandboxInvitationAuthorization: {
    type: Invitation;
    arguments: {
      authorization: Authorization;
      invitationId: string;
      sandboxId: string;
    }

  }
  changeTeamMemberAuthorizations: {
    type: Team;
    arguments: {
      memberAuthorizations: MemberAuthorization;
      teamId: string;
    }

  }
  clearNotificationCount: {
    type: User;
    arguments: null;
  }
  createAlbum: {
    type: Album;
    arguments: {
      description: string;
      title: string;
    }

  }
  createCodeComment: {
    type: Comment;
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
    arguments: {
      path: string;
      teamId: string;
    }

  }
  createComment: {
    type: Comment;
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
    arguments: {
      description: string;
      enabled: boolean;
      name: string;
    }

  }
  createOrUpdatePrivateNpmRegistry: {
    type: PrivateRegistry;
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
    arguments: {
      authorization: Authorization;
      email: string;
      sandboxId: string;
    }

  }
  createTeam: {
    type: Team;
    arguments: {
      name: string;
      pilot: boolean;
    }

  }
  deleteAlbum: {
    type: string;
    arguments: {
      id: string;
    }

  }
  deleteCollection: {
    type: Collection;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  deleteComment: {
    type: Comment;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  deleteCurrentUser: {
    type: string;
    arguments: null;
  }
  deletePrivateNpmRegistry: {
    type: PrivateRegistry;
    arguments: {
      teamId: string;
    }

  }
  deleteSandboxes: {
    type: Sandbox;
    arguments: {
      sandboxIds: string;
    }

  }
  deleteWorkspace: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  disableFeatureFlag: {
    type: FeatureFlag;
    arguments: {
      name: string;
    }

  }
  disableFeatureFlagForTeam: {
    type: TeamsFeatureFlag;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableFeatureFlag: {
    type: FeatureFlag;
    arguments: {
      name: string;
    }

  }
  enableFeatureFlagForTeam: {
    type: TeamsFeatureFlag;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableTeamBetaAccess: {
    type: Team;
    arguments: {
      teamId: string;
    }

  }
  inviteToTeam: {
    type: Team;
    arguments: {
      authorization: TeamMemberAuthorization;
      teamId: string;
      username: string;
    }

  }
  inviteToTeamViaEmail: {
    type: string;
    arguments: {
      authorization: TeamMemberAuthorization;
      email: string;
      teamId: string;
    }

  }
  leaveTeam: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  makeSandboxesTemplates: {
    type: Template;
    arguments: {
      sandboxIds: string;
    }

  }
  markAllNotificationsAsRead: {
    type: User;
    arguments: null;
  }
  markNotificationAsRead: {
    type: Notification;
    arguments: {
      notificationId: string;
    }

  }
  permanentlyDeleteSandboxes: {
    type: Sandbox;
    arguments: {
      sandboxIds: string;
    }

  }
  previewUpdateSubscriptionBillingInterval: {
    type: BillingPreview;
    arguments: {
      billingInterval: SubscriptionInterval;
      subscriptionId: string;
      teamId: string;
    }

  }
  reactivateSubscription: {
    type: ProSubscription;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  redeemSandboxInvitation: {
    type: Invitation;
    arguments: {
      invitationToken: string;
      sandboxId: string;
    }

  }
  redeemTeamInviteToken: {
    type: Team;
    arguments: {
      inviteToken: string;
    }

  }
  rejectTeamInvitation: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  removeCollaborator: {
    type: Collaborator;
    arguments: {
      sandboxId: string;
      username: string;
    }

  }
  removeFromTeam: {
    type: Team;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  removeSandboxesFromAlbum: {
    type: Album;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  renameCollection: {
    type: Collection;
    arguments: {
      newPath: string;
      newTeamId: string;
      path: string;
      teamId: string;
    }

  }
  renameSandbox: {
    type: Sandbox;
    arguments: {
      id: string;
      title: string;
    }

  }
  resolveComment: {
    type: Comment;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  revokeSandboxInvitation: {
    type: Invitation;
    arguments: {
      invitationId: string;
      sandboxId: string;
    }

  }
  revokeTeamInvitation: {
    type: Team;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  setDefaultTeamMemberAuthorization: {
    type: WorkspaceSandboxSettings;
    arguments: {
      defaultAuthorization: TeamMemberAuthorization;
      teamId: string;
    }

  }
  setPreventSandboxesExport: {
    type: Sandbox;
    arguments: {
      preventSandboxExport: boolean;
      sandboxIds: string;
    }

  }
  setPreventSandboxesLeavingWorkspace: {
    type: Sandbox;
    arguments: {
      preventSandboxLeaving: boolean;
      sandboxIds: string;
    }

  }
  setSandboxAlwaysOn: {
    type: Sandbox;
    arguments: {
      alwaysOn: boolean;
      sandboxId: string;
    }

  }
  setSandboxesFrozen: {
    type: Sandbox;
    arguments: {
      isFrozen: boolean;
      sandboxIds: string;
    }

  }
  setSandboxesPrivacy: {
    type: Sandbox;
    arguments: {
      privacy: number;
      sandboxIds: string;
    }

  }
  setTeamDescription: {
    type: Team;
    arguments: {
      description: string;
      teamId: string;
    }

  }
  setTeamMinimumPrivacy: {
    type: WorkspaceSandboxSettings;
    arguments: {
      minimumPrivacy: number;
      teamId: string;
      updateDrafts: boolean;
    }

  }
  setTeamName: {
    type: Team;
    arguments: {
      name: string;
      teamId: string;
    }

  }
  setWorkspaceSandboxSettings: {
    type: WorkspaceSandboxSettings;
    arguments: {
      preventSandboxExport: boolean;
      preventSandboxLeaving: boolean;
      teamId: string;
    }

  }
  softCancelSubscription: {
    type: ProSubscription;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  unbookmarkTemplate: {
    type: Template;
    arguments: {
      teamId: string;
      templateId: string;
    }

  }
  unmakeSandboxesTemplates: {
    type: Template;
    arguments: {
      sandboxIds: string;
    }

  }
  unresolveComment: {
    type: Comment;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  updateAlbum: {
    type: Album;
    arguments: {
      description: string;
      id: string;
      title: string;
    }

  }
  updateComment: {
    type: Comment;
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
    arguments: {
      bio: string;
      name: string;
      socialLinks: string;
      username: string;
    }

  }
  updateNotificationPreferences: {
    type: NotificationPreferences;
    arguments: {
      emailCommentMention: boolean;
      emailCommentReply: boolean;
      emailNewComment: boolean;
    }

  }
  updateNotificationReadStatus: {
    type: Notification;
    arguments: {
      notificationId: string;
      read: boolean;
    }

  }
  updateProjectEnvironment: {
    type: Project;
    arguments: {
      environmentId: string;
      gitProvider: GitProvider;
      owner: string;
      repo: string;
    }

  }
  updateSubscription: {
    type: ProSubscription;
    arguments: {
      quantity: number;
      subscriptionId: string;
      teamId: string;
    }

  }
  updateSubscriptionBillingInterval: {
    type: ProSubscription;
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
    arguments: {
      albumId: string;
    }

  }
  albums: {
    type: Album;
    arguments: {
      username: string;
    }

  }
  curatedAlbums: {
    type: Album;
    arguments: null;
  }
  featureFlags: {
    type: FeatureFlag;
    arguments: null;
  }
  git: {
    type: Git;
    arguments: {
      branch: string;
      path: string;
      repo: string;
      username: string;
    }

  }
  githubOrganizationRepos: {
    type: GithubRepo;
    arguments: {
      organization: string;
      page: number;
      perPage: number;
    }

  }
  githubRepo: {
    type: GithubRepo;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  me: {
    type: CurrentUser;
    arguments: null;
  }
  project: {
    type: Project;
    arguments: {
      gitProvider: GitProvider;
      owner: string;
      repo: string;
    }

  }
  sandbox: {
    type: Sandbox;
    arguments: {
      sandboxId: string;
    }

  }
  teamByToken: {
    type: Team;
    arguments: {
      inviteToken: string;
    }

  }

}

export type RootSubscriptionType = {
  collaboratorAdded: {
    type: Collaborator;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorChanged: {
    type: Collaborator;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorRemoved: {
    type: Collaborator;
    arguments: {
      sandboxId: string;
    }

  }
  commentAdded: {
    type: Comment;
    arguments: {
      sandboxId: string;
    }

  }
  commentChanged: {
    type: Comment;
    arguments: {
      sandboxId: string;
    }

  }
  commentRemoved: {
    type: Comment;
    arguments: {
      sandboxId: string;
    }

  }
  githubEvents: {
    type: RepositoryEvent;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  invitationChanged: {
    type: Invitation;
    arguments: {
      sandboxId: string;
    }

  }
  invitationCreated: {
    type: Invitation;
    arguments: {
      sandboxId: string;
    }

  }
  invitationRemoved: {
    type: Invitation;
    arguments: {
      sandboxId: string;
    }

  }
  projectCommits: {
    type: BranchLastCommit;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectConnections: {
    type: BranchConnections;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectStatus: {
    type: BranchStatus;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  sandboxChanged: {
    type: Sandbox;
    arguments: {
      sandboxId: string;
    }

  }

}

export type Sandbox = {
  alias: {
    type: string;
    arguments: null;
  }
  alwaysOn: {
    type: boolean;
    arguments: null;
  }
  author: {
    type: User;
    arguments: null;
  }
  authorId: {
    type: string;
    arguments: null;
  }
  authorization: {
    type: Authorization;
    arguments: null;
  }
  baseGit: {
    type: Git;
    arguments: null;
  }
  collaborators: {
    type: Collaborator;
    arguments: null;
  }
  collection: {
    type: Collection;
    arguments: null;
  }
  comment: {
    type: Comment;
    arguments: {
      commentId: string;
    }

  }
  comments: {
    type: Comment;
    arguments: null;
  }
  customTemplate: {
    type: Template;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  forkCount: {
    type: number;
    arguments: null;
  }
  forkedTemplate: {
    type: Template;
    arguments: null;
  }
  git: {
    type: Git;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  insertedAt: {
    type: string;
    arguments: null;
  }
  invitations: {
    type: Invitation;
    arguments: null;
  }
  isFrozen: {
    type: boolean;
    arguments: null;
  }
  isSse: {
    type: boolean;
    arguments: null;
  }
  isV2: {
    type: boolean;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    arguments: null;
  }
  likeCount: {
    type: number;
    arguments: null;
  }
  originalGit: {
    type: Git;
    arguments: null;
  }
  permissions: {
    type: SandboxProtectionSettings;
    arguments: null;
  }
  prNumber: {
    type: number;
    arguments: null;
  }
  privacy: {
    type: number;
    arguments: null;
  }
  removedAt: {
    type: string;
    arguments: null;
  }
  screenshotOutdated: {
    type: boolean;
    arguments: null;
  }
  screenshotUrl: {
    type: string;
    arguments: null;
  }
  source: {
    type: Source;
    arguments: null;
  }
  team: {
    type: Team;
    arguments: null;
  }
  teamId: {
    type: string;
    arguments: null;
  }
  title: {
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }
  viewCount: {
    type: number;
    arguments: null;
  }

}

export type SandboxProtectionSettings = {
  preventSandboxExport: {
    type: boolean;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: boolean;
    arguments: null;
  }

}

export type SandboxV2 = {
  alias: {
    type: string;
    arguments: null;
  }
  authorization: {
    type: Authorization;
    arguments: null;
  }
  collaborators: {
    type: Collaborator;
    arguments: null;
  }
  gitv2: {
    type: GitV2;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  insertedAt: {
    type: string;
    arguments: null;
  }
  isV2: {
    type: boolean;
    arguments: null;
  }
  removedAt: {
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }

}

export type Source = {
  id: {
    type: string;
    arguments: null;
  }
  template: {
    type: string;
    arguments: null;
  }

}

export type Status = {
  hasChanges: {
    type: boolean;
    arguments: null;
  }
  hasConflicts: {
    type: boolean;
    arguments: null;
  }
  remote: {
    type: StatusCommitCounts;
    arguments: null;
  }
  target: {
    type: StatusCommitCounts;
    arguments: null;
  }

}

export type StatusCommitCounts = {
  ahead: {
    type: number;
    arguments: null;
  }
  behind: {
    type: number;
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
    arguments: null;
  }
  beta: {
    type: boolean;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: Template;
    arguments: null;
  }
  collections: {
    type: Collection;
    arguments: null;
  }
  creatorId: {
    type: string;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  drafts: {
    type: Sandbox;
    arguments: {
      authorId: string;
      limit: number;
      orderBy: OrderBy;
    }

  }
  id: {
    type: string;
    arguments: null;
  }
  inviteToken: {
    type: string;
    arguments: null;
  }
  invitees: {
    type: User;
    arguments: null;
  }
  joinedPilotAt: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  privateRegistry: {
    type: PrivateRegistry;
    arguments: null;
  }
  projects: {
    type: Project;
    arguments: {
      syncData: boolean;
    }

  }
  sandboxes: {
    type: Sandbox;
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
    arguments: null;
  }
  subscription: {
    type: ProSubscription;
    arguments: null;
  }
  templates: {
    type: Template;
    arguments: null;
  }
  userAuthorizations: {
    type: UserAuthorization;
    arguments: null;
  }
  users: {
    type: User;
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
    arguments: null;
  }
  featureFlagId: {
    type: string;
    arguments: null;
  }
  teamId: {
    type: string;
    arguments: null;
  }

}

export type Template = {
  bookmarked: {
    type: Bookmarked;
    arguments: null;
  }
  color: {
    type: string;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  iconUrl: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  insertedAt: {
    type: string;
    arguments: null;
  }
  official: {
    type: boolean;
    arguments: null;
  }
  published: {
    type: boolean;
    arguments: null;
  }
  sandbox: {
    type: Sandbox;
    arguments: null;
  }
  title: {
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }

}

export type User = {
  avatarUrl: {
    type: string;
    arguments: null;
  }
  bio: {
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  personalWorkspaceId: {
    type: string;
    arguments: null;
  }
  socialLinks: {
    type: string;
    arguments: null;
  }
  username: {
    type: string;
    arguments: null;
  }

}

export type UserAuthorization = {
  authorization: {
    type: TeamMemberAuthorization;
    arguments: null;
  }
  userId: {
    type: string;
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
    arguments: null;
  }
  username: {
    type: string;
    arguments: null;
  }

}

export type WorkspaceSandboxSettings = {
  defaultAuthorization: {
    type: TeamMemberAuthorization;
    arguments: null;
  }
  minimumPrivacy: {
    type: number;
    arguments: null;
  }
  preventSandboxExport: {
    type: boolean;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: boolean;
    arguments: null;
  }

}
