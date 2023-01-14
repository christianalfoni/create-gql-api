import { createClient, createQueryUtils } from "./src";
import type { ListQuery, FieldQuery, Query, ListField } from "./src";
export type Album = {
  id: string;
  sandboxes: ListField<Sandbox>;
  title: string;
};
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
  amount: number;
  currency: string;
  date: string;
};
export type BillingPreview = {
  immediatePayment: BillingDetails;
  nextPayment: BillingDetails;
};
export type Bookmarked = {
  entity: BookmarkEntity;
  isBookmarked: boolean;
};

export type BookmarkEntity = Team | User;

export type Branch = {
  connections: ListField<Connection>;
  contribution: boolean;
  id: string;
  lastAccessedAt: string;
  lastCommit: LastCommit;
  name: string;
  owner: User;
  project: Project;
  pullRequests: ListField<PullRequest>;
  status: Status;
  upstream: boolean;
};
export type BranchConnections = {
  branchId: string;
  connections: ListField<Connection>;
};
export type BranchLastCommit = {
  branchId: string;
  lastCommit: LastCommit;
};
export type BranchStatus = {
  branchId: string;
  status: Status;
};
export type CodeReference = {
  anchor: number;
  code: string;
  head: number;
  lastUpdatedAt: string;
  path: string;
};
export type CodeReferenceMetadata = {
  anchor: number;
  code: string;
  head: number;
  path: string;
  sandboxId: string;
};
export type Collaborator = {
  authorization: Authorization;
  id: string;
  lastSeenAt: string;
  sandbox: Sandbox;
  user: User;
  warning: string;
};
export type Collection = {
  id: string;
  path: string;
  sandboxCount: number;
  sandboxes: ListField<Sandbox>;
  team: Team;
  teamId: string;
  user: User;
};
export type Comment = {
  anchorReference: Reference;
  comments: ListField<Comment>;
  content: string;
  id: string;
  insertedAt: string;
  isRead: boolean;
  isResolved: boolean;
  parentComment: Comment;
  references: ListField<Reference>;
  replyCount: number;
  sandbox: Sandbox;
  updatedAt: string;
  user: User;
};
export type Connection = {
  appId: string;
  clientId: string;
  color: string;
  timestamp: string;
  user: User;
};
export type CurrentUser = {
  betaAccess: boolean;
  bookmarkedTemplates: ListField<Template>;
  collaboratorSandboxes: ListField<Sandbox>;
  collection: FieldQuery<
    {
      path: string;
      teamId?: string;
    },
    Collection
  >;
  collections: ListQuery<
    {
      teamId?: string;
    },
    Collection
  >;
  deletionRequested: boolean;
  email: string;
  featureFlags: ListField<FeatureFlag>;
  githubOrganizations: ListField<GithubOrganization>;
  githubProfile: GithubProfile;
  githubRepos: ListQuery<
    {
      page?: number;
      perPage?: number;
    },
    GithubRepo
  >;
  id: string;
  likedSandboxes: ListField<Sandbox>;
  name: string;
  notificationPreferences: NotificationPreferences;
  notifications: ListQuery<
    {
      limit?: number;
      orderBy?: OrderBy;
      type?: string;
    },
    Notification
  >;
  personalWorkspaceId: string;
  provider: ProviderName;
  recentBranches: ListQuery<
    {
      contribution?: boolean;
      limit?: number;
      teamId?: string;
    },
    Branch
  >;
  recentProjects: ListQuery<
    {
      limit?: number;
    },
    Project
  >;
  recentlyAccessedSandboxes: ListQuery<
    {
      limit?: number;
      teamId?: string;
    },
    Sandbox
  >;
  recentlyUsedTemplates: ListQuery<
    {
      teamId?: string;
    },
    Template
  >;
  sandboxes: ListQuery<
    {
      hasOriginalGit?: boolean;
      limit?: number;
      orderBy?: OrderBy;
      showDeleted?: boolean;
    },
    Sandbox
  >;
  team: FieldQuery<
    {
      id?: string;
    },
    Team
  >;
  teams: ListField<Team>;
  templates: ListQuery<
    {
      showAll?: boolean;
      teamId?: string;
    },
    Template
  >;
  username: string;
  workspaces: ListField<Team>;
};
export enum Direction {
  ASC = "ASC",
  DESC = "DESC",
}
export type FeatureFlag = {
  description: string;
  enabled: boolean;
  id: string;
  name: string;
  teams: ListField<Team>;
};
export type Git = {
  baseGitSandboxes: ListQuery<
    {
      teamId?: string;
    },
    Sandbox
  >;
  branch: string;
  commitSha: string;
  id: string;
  originalGitSandboxes: ListQuery<
    {
      teamId?: string;
    },
    Sandbox
  >;
  path: string;
  repo: string;
  username: string;
};
export type GithubOrganization = {
  avatarUrl: string;
  description: string;
  id: string;
  login: string;
};
export enum GithubPermission {
  ADMIN = "ADMIN",
  NONE = "NONE",
  READ = "READ",
  WRITE = "WRITE",
}
export type GithubProfile = {
  avatarUrl: string;
  id: string;
  login: string;
  name: string;
  scopes: string[];
};
export type GithubRepo = {
  authorization: GithubRepoAuthorization;
  fullName: string;
  id: string;
  name: string;
  owner: GithubOrganization;
  private: boolean;
  updatedAt: string;
};
export enum GithubRepoAuthorization {
  READ = "READ",
  WRITE = "WRITE",
}
export type GitHubRepository = {
  allowForking: boolean;
  archived: boolean;
  createdAt: string;
  defaultBranch: string;
  description: string;
  fork: boolean;
  id: number;
  isTemplate: boolean;
  name: string;
  owner: string;
  parent: GitHubRepository;
  permission: GithubPermission;
  private: boolean;
  pushedAt: string;
  source: GitHubRepository;
  updatedAt: string;
};
export enum GitProvider {
  GITHUB = "GITHUB",
}
export type ImageReference = {
  fileName: string;
  resolution: number;
  src: string;
  url: string;
};
export type ImageReferenceMetadata = {
  fileName: string;
  resolution: number[];
  uploadId: string;
  url: string;
};
export type InstallationEvent = {
  action: InstallationEventAction;
  event: string;
};
export enum InstallationEventAction {
  CREATED = "CREATED",
}
export type Invitation = {
  authorization: Authorization;
  email: string;
  id: string;
  sandbox: Sandbox;
  token: string;
};
export type LastCommit = {
  color: string;
  message: string;
  sha: string;
  timestamp: string;
  user: User;
};
export type Limits = {
  personalFree: TeamLimits;
  personalPro: TeamLimits;
  teamFree: TeamLimits;
  teamPro: TeamLimits;
};
export type MemberAuthorization = {
  authorization: TeamMemberAuthorization;
  userId: string;
};
export type Notification = {
  archived: boolean;
  data: string;
  id: string;
  insertedAt: string;
  read: boolean;
  type: string;
};
export type NotificationPreferences = {
  emailCommentMention: boolean;
  emailCommentReply: boolean;
  emailNewComment: boolean;
};
export type OrderBy = {
  direction: Direction;
  field: string;
};
export type PreviewReference = {
  height: number;
  previewPath: string;
  screenshotSrc: string;
  userAgent: string;
  width: number;
  x: number;
  y: number;
};
export type PreviewReferenceMetadata = {
  height: number;
  previewPath: string;
  screenshotUrl: string;
  userAgent: string;
  width: number;
  x: number;
  y: number;
};
export type PrivateRegistry = {
  authType: AuthType;
  enabledScopes: string[];
  id: string;
  limitToScopes: boolean;
  proxyEnabled: boolean;
  registryAuthKey: string;
  registryType: RegistryType;
  registryUrl: string;
  teamId: string;
};
export type Project = {
  appInstalled: boolean;
  branchCount: number;
  branches: ListField<Branch>;
  connections: ListField<Connection>;
  defaultBranch: Branch;
  description: string;
  id: string;
  lastAccessedAt: string;
  lastCommit: LastCommit;
  owner: string;
  private: boolean;
  pullRequests: ListField<PullRequest>;
  repo: string;
  repository: Repository;
  team: Team;
  teams: ListField<Team>;
};
export type ProSubscription = {
  active: boolean;
  billingInterval: SubscriptionInterval;
  cancelAt: string;
  cancelAtPeriodEnd: boolean;
  currency: string;
  id: string;
  nextBillDate: string;
  origin: SubscriptionOrigin;
  paymentMethodAttached: boolean;
  paymentProvider: SubscriptionPaymentProvider;
  quantity: number;
  status: SubscriptionStatus;
  trialEnd: string;
  trialStart: string;
  type: SubscriptionType;
  unitPrice: number;
  updateBillingUrl: string;
};
export enum ProviderName {
  APPLE = "APPLE",
  GITHUB = "GITHUB",
  GOOGLE = "GOOGLE",
}
export type PullRequest = {
  baseRepository: Repository;
  creator: User;
  creatorUsername: string;
  draft: boolean;
  htmlUrl: string;
  number: number;
  prClosedAt: string;
  prCreatedAt: string;
  prMergedAt: string;
  prUpdatedAt: string;
  state: string;
  title: string;
};
export type Reference = {
  id: string;
  metadata: ReferenceMetadata;
  resource: string;
  type: string;
};

export type ReferenceMetadata =
  | CodeReferenceMetadata
  | ImageReferenceMetadata
  | PreviewReferenceMetadata
  | UserReferenceMetadata;

export enum RegistryType {
  CUSTOM = "CUSTOM",
  GITHUB = "GITHUB",
  NPM = "NPM",
}

export type Repository = GitHubRepository;

export type RepositoryEvent = InstallationEvent;

export type RootMutationType = {
  acceptTeamInvitation: FieldQuery<
    {
      teamId: string;
    },
    Team
  >;
  addCollaborator: FieldQuery<
    {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    },
    Collaborator
  >;
  addSandboxesToAlbum: FieldQuery<
    {
      albumId: string;
      sandboxIds: string;
    },
    Album
  >;
  addToCollection: FieldQuery<
    {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    },
    Collection
  >;
  addToCollectionOrTeam: ListQuery<
    {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    },
    Sandbox
  >;
  archiveAllNotifications: User;
  archiveNotification: FieldQuery<
    {
      notificationId: string;
    },
    Notification
  >;
  bookmarkTemplate: FieldQuery<
    {
      teamId: string;
      templateId: string;
    },
    Template
  >;
  cancelDeleteCurrentUser: string;
  changeCollaboratorAuthorization: FieldQuery<
    {
      authorization: Authorization;
      sandboxId: string;
      username: string;
    },
    Collaborator
  >;
  changeSandboxInvitationAuthorization: FieldQuery<
    {
      authorization: Authorization;
      invitationId: string;
      sandboxId: string;
    },
    Invitation
  >;
  changeTeamMemberAuthorizations: FieldQuery<
    {
      memberAuthorizations: MemberAuthorization;
      teamId: string;
    },
    Team
  >;
  clearNotificationCount: User;
  createAlbum: FieldQuery<
    {
      description: string;
      title: string;
    },
    Album
  >;
  createBranch: FieldQuery<
    {
      branch: string;
      from: string;
      name: string;
      owner: string;
      provider: GitProvider;
      team: string;
    },
    Branch
  >;
  createCodeComment: FieldQuery<
    {
      anchorReference: CodeReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    },
    Comment
  >;
  createCollection: FieldQuery<
    {
      path: string;
      teamId: string;
    },
    Collection
  >;
  createComment: FieldQuery<
    {
      codeReference: CodeReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    },
    Comment
  >;
  createOrUpdatePrivateNpmRegistry: FieldQuery<
    {
      authType: AuthType;
      enabledScopes: string;
      limitToScopes: boolean;
      proxyEnabled: boolean;
      registryAuthKey: string;
      registryType: RegistryType;
      registryUrl: string;
      teamId: string;
    },
    PrivateRegistry
  >;
  createPreviewComment: FieldQuery<
    {
      anchorReference: PreviewReference;
      codeReferences: CodeReference;
      content: string;
      id: string;
      imageReferences: ImageReference;
      parentCommentId: string;
      sandboxId: string;
      userReferences: UserReference;
    },
    Comment
  >;
  createSandboxInvitation: FieldQuery<
    {
      authorization: Authorization;
      email: string;
      sandboxId: string;
    },
    Invitation
  >;
  createTeam: FieldQuery<
    {
      name: string;
      pilot: boolean;
    },
    Team
  >;
  deleteAlbum: FieldQuery<
    {
      id: string;
    },
    string
  >;
  deleteBranch: FieldQuery<
    {
      id: string;
    },
    boolean
  >;
  deleteCollection: ListQuery<
    {
      path: string;
      teamId: string;
    },
    Collection
  >;
  deleteComment: FieldQuery<
    {
      commentId: string;
      sandboxId: string;
    },
    Comment
  >;
  deleteCurrentUser: string;
  deletePrivateNpmRegistry: FieldQuery<
    {
      teamId: string;
    },
    PrivateRegistry
  >;
  deleteProject: FieldQuery<
    {
      name: string;
      owner: string;
      provider: GitProvider;
      team: string;
    },
    boolean
  >;
  deleteSandboxes: ListQuery<
    {
      sandboxIds: string;
    },
    Sandbox
  >;
  deleteWorkspace: FieldQuery<
    {
      teamId: string;
    },
    string
  >;
  enableTeamBetaAccess: FieldQuery<
    {
      teamId: string;
    },
    Team
  >;
  importProject: FieldQuery<
    {
      name: string;
      owner: string;
      provider: GitProvider;
      team: string;
    },
    Project
  >;
  importReadOnlyBranch: FieldQuery<
    {
      branch: string;
      name: string;
      owner: string;
      provider: GitProvider;
    },
    Branch
  >;
  importReadOnlyProject: FieldQuery<
    {
      name: string;
      owner: string;
      provider: GitProvider;
    },
    Project
  >;
  inviteToTeam: FieldQuery<
    {
      authorization: TeamMemberAuthorization;
      teamId: string;
      username: string;
    },
    Team
  >;
  inviteToTeamViaEmail: FieldQuery<
    {
      authorization: TeamMemberAuthorization;
      email: string;
      teamId: string;
    },
    string
  >;
  leaveTeam: FieldQuery<
    {
      teamId: string;
    },
    string
  >;
  makeSandboxesTemplates: ListQuery<
    {
      sandboxIds: string;
    },
    Template
  >;
  markAllNotificationsAsRead: User;
  markNotificationAsRead: FieldQuery<
    {
      notificationId: string;
    },
    Notification
  >;
  permanentlyDeleteSandboxes: ListQuery<
    {
      sandboxIds: string;
    },
    Sandbox
  >;
  previewUpdateSubscriptionBillingInterval: FieldQuery<
    {
      billingInterval: SubscriptionInterval;
      subscriptionId: string;
      teamId: string;
    },
    BillingPreview
  >;
  reactivateSubscription: FieldQuery<
    {
      subscriptionId: string;
      teamId: string;
    },
    ProSubscription
  >;
  redeemSandboxInvitation: FieldQuery<
    {
      invitationToken: string;
      sandboxId: string;
    },
    Invitation
  >;
  redeemTeamInviteToken: FieldQuery<
    {
      inviteToken: string;
    },
    Team
  >;
  rejectTeamInvitation: FieldQuery<
    {
      teamId: string;
    },
    string
  >;
  removeCollaborator: FieldQuery<
    {
      sandboxId: string;
      username: string;
    },
    Collaborator
  >;
  removeFromTeam: FieldQuery<
    {
      teamId: string;
      userId: string;
    },
    Team
  >;
  removeSandboxesFromAlbum: FieldQuery<
    {
      albumId: string;
      sandboxIds: string;
    },
    Album
  >;
  renameCollection: ListQuery<
    {
      newPath: string;
      newTeamId: string;
      path: string;
      teamId: string;
    },
    Collection
  >;
  renameSandbox: FieldQuery<
    {
      id: string;
      title: string;
    },
    Sandbox
  >;
  resolveComment: FieldQuery<
    {
      commentId: string;
      sandboxId: string;
    },
    Comment
  >;
  revokeSandboxInvitation: FieldQuery<
    {
      invitationId: string;
      sandboxId: string;
    },
    Invitation
  >;
  revokeTeamInvitation: FieldQuery<
    {
      teamId: string;
      userId: string;
    },
    Team
  >;
  setDefaultTeamMemberAuthorization: FieldQuery<
    {
      defaultAuthorization: TeamMemberAuthorization;
      teamId: string;
    },
    WorkspaceSandboxSettings
  >;
  setPreventSandboxesExport: ListQuery<
    {
      preventSandboxExport: boolean;
      sandboxIds: string;
    },
    Sandbox
  >;
  setPreventSandboxesLeavingWorkspace: ListQuery<
    {
      preventSandboxLeaving: boolean;
      sandboxIds: string;
    },
    Sandbox
  >;
  setSandboxAlwaysOn: FieldQuery<
    {
      alwaysOn: boolean;
      sandboxId: string;
    },
    Sandbox
  >;
  setSandboxesFrozen: ListQuery<
    {
      isFrozen: boolean;
      sandboxIds: string;
    },
    Sandbox
  >;
  setSandboxesPrivacy: ListQuery<
    {
      privacy: number;
      sandboxIds: string;
    },
    Sandbox
  >;
  setTeamDescription: FieldQuery<
    {
      description: string;
      teamId: string;
    },
    Team
  >;
  setTeamMinimumPrivacy: FieldQuery<
    {
      minimumPrivacy: number;
      teamId: string;
      updateDrafts: boolean;
    },
    WorkspaceSandboxSettings
  >;
  setTeamName: FieldQuery<
    {
      name: string;
      teamId: string;
    },
    Team
  >;
  setWorkspaceSandboxSettings: FieldQuery<
    {
      preventSandboxExport: boolean;
      preventSandboxLeaving: boolean;
      teamId: string;
    },
    WorkspaceSandboxSettings
  >;
  softCancelSubscription: FieldQuery<
    {
      subscriptionId: string;
      teamId: string;
    },
    ProSubscription
  >;
  unbookmarkTemplate: FieldQuery<
    {
      teamId: string;
      templateId: string;
    },
    Template
  >;
  unmakeSandboxesTemplates: ListQuery<
    {
      sandboxIds: string;
    },
    Template
  >;
  unresolveComment: FieldQuery<
    {
      commentId: string;
      sandboxId: string;
    },
    Comment
  >;
  updateAlbum: FieldQuery<
    {
      description: string;
      id: string;
      title: string;
    },
    Album
  >;
  updateComment: FieldQuery<
    {
      codeReferences: CodeReference;
      commentId: string;
      content: string;
      imageReferences: ImageReference;
      sandboxId: string;
      userReferences: UserReference;
    },
    Comment
  >;
  updateCurrentUser: FieldQuery<
    {
      bio: string;
      name: string;
      socialLinks: string;
      username: string;
    },
    User
  >;
  updateNotificationPreferences: FieldQuery<
    {
      emailCommentMention: boolean;
      emailCommentReply: boolean;
      emailNewComment: boolean;
    },
    NotificationPreferences
  >;
  updateNotificationReadStatus: FieldQuery<
    {
      notificationId: string;
      read: boolean;
    },
    Notification
  >;
  updateSubscription: FieldQuery<
    {
      quantity: number;
      subscriptionId: string;
      teamId: string;
    },
    ProSubscription
  >;
  updateSubscriptionBillingInterval: FieldQuery<
    {
      billingInterval: SubscriptionInterval;
      subscriptionId: string;
      teamId: string;
    },
    ProSubscription
  >;
};
export type RootQueryType = {
  album: FieldQuery<
    {
      albumId: string;
    },
    Album
  >;
  albums: ListQuery<
    {
      username: string;
    },
    Album
  >;
  branchById: FieldQuery<
    {
      id: string;
    },
    Branch
  >;
  branchByName: FieldQuery<
    {
      branch: string;
      name: string;
      owner: string;
      provider: GitProvider;
      team?: string;
    },
    Branch
  >;
  curatedAlbums: ListField<Album>;
  featureFlags: ListField<FeatureFlag>;
  git: FieldQuery<
    {
      branch: string;
      path: string;
      repo: string;
      username: string;
    },
    Git
  >;
  githubOrganizationRepos: ListQuery<
    {
      organization: string;
      page?: number;
      perPage?: number;
    },
    GithubRepo
  >;
  githubRepo: FieldQuery<
    {
      owner: string;
      repo: string;
    },
    GithubRepo
  >;
  limits: Limits;
  me: CurrentUser;
  project: FieldQuery<
    {
      gitProvider?: GitProvider;
      owner: string;
      repo: string;
      team?: string;
    },
    Project
  >;
  projects: ListQuery<
    {
      name: string;
      owner: string;
      provider: GitProvider;
    },
    Project
  >;
  sandbox: FieldQuery<
    {
      sandboxId: string;
    },
    Sandbox
  >;
  teamByToken: FieldQuery<
    {
      inviteToken: string;
    },
    Team
  >;
};
export type RootSubscriptionType = {
  collaboratorAdded: FieldQuery<
    {
      sandboxId: string;
    },
    Collaborator
  >;
  collaboratorChanged: FieldQuery<
    {
      sandboxId: string;
    },
    Collaborator
  >;
  collaboratorRemoved: FieldQuery<
    {
      sandboxId: string;
    },
    Collaborator
  >;
  commentAdded: FieldQuery<
    {
      sandboxId: string;
    },
    Comment
  >;
  commentChanged: FieldQuery<
    {
      sandboxId: string;
    },
    Comment
  >;
  commentRemoved: FieldQuery<
    {
      sandboxId: string;
    },
    Comment
  >;
  githubEvents: FieldQuery<
    {
      owner: string;
      repo: string;
    },
    RepositoryEvent
  >;
  invitationChanged: FieldQuery<
    {
      sandboxId: string;
    },
    Invitation
  >;
  invitationCreated: FieldQuery<
    {
      sandboxId: string;
    },
    Invitation
  >;
  invitationRemoved: FieldQuery<
    {
      sandboxId: string;
    },
    Invitation
  >;
  projectCommits: FieldQuery<
    {
      branchId: string;
      owner: string;
      repo: string;
    },
    BranchLastCommit
  >;
  projectConnections: FieldQuery<
    {
      branchId: string;
      owner: string;
      repo: string;
    },
    BranchConnections
  >;
  projectStatus: FieldQuery<
    {
      branchId: string;
      owner: string;
      repo: string;
    },
    BranchStatus
  >;
  sandboxChanged: FieldQuery<
    {
      sandboxId: string;
    },
    Sandbox
  >;
};
export type Sandbox = {
  alias: string;
  alwaysOn: boolean;
  author: User;
  authorId: string;
  authorization: Authorization;
  baseGit: Git;
  collaborators: ListField<Collaborator>;
  collection: Collection;
  comment: FieldQuery<
    {
      commentId: string;
    },
    Comment
  >;
  comments: ListField<Comment>;
  customTemplate: Template;
  description: string;
  forkCount: number;
  forkedTemplate: Template;
  git: Git;
  id: string;
  insertedAt: string;
  invitations: ListField<Invitation>;
  isFrozen: boolean;
  isSse: boolean;
  isV2: boolean;
  lastAccessedAt: string;
  likeCount: number;
  originalGit: Git;
  permissions: SandboxProtectionSettings;
  prNumber: number;
  privacy: number;
  removedAt: string;
  screenshotOutdated: boolean;
  screenshotUrl: string;
  source: Source;
  team: Team;
  teamId: string;
  title: string;
  updatedAt: string;
  viewCount: number;
};
export type SandboxProtectionSettings = {
  preventSandboxExport: boolean;
  preventSandboxLeaving: boolean;
};
export type Source = {
  id: string;
  template: string;
};
export type Status = {
  hasChanges: boolean;
  hasConflicts: boolean;
  remote: StatusCommitCounts;
  target: StatusCommitCounts;
};
export type StatusCommitCounts = {
  ahead: number;
  behind: number;
};
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
  avatarUrl: string;
  beta: boolean;
  bookmarkedTemplates: ListField<Template>;
  collections: ListField<Collection>;
  creatorId: string;
  description: string;
  drafts: ListQuery<
    {
      authorId?: string;
      limit?: number;
      orderBy?: OrderBy;
    },
    Sandbox
  >;
  id: string;
  inviteToken: string;
  invitees: ListField<User>;
  joinedPilotAt: string;
  limits: TeamLimits;
  name: string;
  privateRegistry: PrivateRegistry;
  projects: ListQuery<
    {
      syncData?: boolean;
    },
    Project
  >;
  sandboxes: ListQuery<
    {
      alwaysOn?: boolean;
      authorId?: string;
      hasOriginalGit?: boolean;
      limit?: number;
      orderBy?: OrderBy;
      showDeleted?: boolean;
    },
    Sandbox
  >;
  settings: WorkspaceSandboxSettings;
  shortid: string;
  subscription: FieldQuery<
    {
      includeCancelled?: boolean;
    },
    ProSubscription
  >;
  templates: ListField<Template>;
  usage: TeamUsage;
  userAuthorizations: ListField<UserAuthorization>;
  users: ListField<User>;
};
export type TeamLimits = {
  maxEditors: number;
  maxPrivateProjects: number;
  maxPrivateSandboxes: number;
  maxPublicProjects: number;
  maxPublicSandboxes: number;
};
export enum TeamMemberAuthorization {
  ADMIN = "ADMIN",
  READ = "READ",
  WRITE = "WRITE",
}
export type TeamUsage = {
  editorsQuantity: number;
  privateProjectsQuantity: number;
  privateSandboxesQuantity: number;
  publicProjectsQuantity: number;
  publicSandboxesQuantity: number;
};
export type Template = {
  bookmarked: ListField<Bookmarked>;
  color: string;
  description: string;
  iconUrl: string;
  id: string;
  insertedAt: string;
  official: boolean;
  published: boolean;
  sandbox: Sandbox;
  title: string;
  updatedAt: string;
};
export type User = {
  avatarUrl: string;
  bio: string;
  id: string;
  name: string;
  personalWorkspaceId: string;
  socialLinks: string[];
  username: string;
};
export type UserAuthorization = {
  authorization: TeamMemberAuthorization;
  userId: string;
};
export type UserReference = {
  userId: string;
  username: string;
};
export type UserReferenceMetadata = {
  userId: string;
  username: string;
};
export type WorkspaceSandboxSettings = {
  defaultAuthorization: TeamMemberAuthorization;
  minimumPrivacy: number;
  preventSandboxExport: boolean;
  preventSandboxLeaving: boolean;
};
export type ObjectTypes = {
  Album: Album;
  BillingDetails: BillingDetails;
  BillingPreview: BillingPreview;
  Bookmarked: Bookmarked;
  Branch: Branch;
  BranchConnections: BranchConnections;
  BranchLastCommit: BranchLastCommit;
  BranchStatus: BranchStatus;
  CodeReferenceMetadata: CodeReferenceMetadata;
  Collaborator: Collaborator;
  Collection: Collection;
  Comment: Comment;
  Connection: Connection;
  CurrentUser: CurrentUser;
  FeatureFlag: FeatureFlag;
  Git: Git;
  GithubOrganization: GithubOrganization;
  GithubProfile: GithubProfile;
  GithubRepo: GithubRepo;
  GitHubRepository: GitHubRepository;
  ImageReferenceMetadata: ImageReferenceMetadata;
  InstallationEvent: InstallationEvent;
  Invitation: Invitation;
  LastCommit: LastCommit;
  Limits: Limits;
  Notification: Notification;
  NotificationPreferences: NotificationPreferences;
  PreviewReferenceMetadata: PreviewReferenceMetadata;
  PrivateRegistry: PrivateRegistry;
  Project: Project;
  ProSubscription: ProSubscription;
  PullRequest: PullRequest;
  Reference: Reference;
  RootMutationType: RootMutationType;
  RootQueryType: RootQueryType;
  RootSubscriptionType: RootSubscriptionType;
  Sandbox: Sandbox;
  SandboxProtectionSettings: SandboxProtectionSettings;
  Source: Source;
  Status: Status;
  StatusCommitCounts: StatusCommitCounts;
  Team: Team;
  TeamLimits: TeamLimits;
  TeamUsage: TeamUsage;
  Template: Template;
  User: User;
  UserAuthorization: UserAuthorization;
  UserReferenceMetadata: UserReferenceMetadata;
  WorkspaceSandboxSettings: WorkspaceSandboxSettings;
};
const { createQuery, createMutation, createSubscription } = createQueryUtils<
  RootQueryType,
  RootMutationType,
  RootSubscriptionType
>({
  collection: {
    path: {
      isNonNull: true,
      type: "String",
    },
    teamId: {
      isNonNull: false,
      type: "ID",
    },
  },
  collections: {
    teamId: {
      isNonNull: false,
      type: "ID",
    },
  },
  githubRepos: {
    page: {
      isNonNull: false,
      type: "Int",
    },
    perPage: {
      isNonNull: false,
      type: "Int",
    },
  },
  notifications: {
    limit: {
      isNonNull: false,
      type: "Int",
    },
    orderBy: {
      isNonNull: false,
      type: "OrderBy",
    },
    type: {
      isNonNull: false,
      type: "String",
    },
  },
  recentBranches: {
    contribution: {
      isNonNull: false,
      type: "Boolean",
    },
    limit: {
      isNonNull: false,
      type: "Int",
    },
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  recentProjects: {
    limit: {
      isNonNull: false,
      type: "Int",
    },
  },
  recentlyAccessedSandboxes: {
    limit: {
      isNonNull: false,
      type: "Int",
    },
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  recentlyUsedTemplates: {
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  sandboxes: {
    alwaysOn: {
      isNonNull: false,
      type: "Boolean",
    },
    authorId: {
      isNonNull: false,
      type: "UUID4",
    },
    hasOriginalGit: {
      isNonNull: false,
      type: "Boolean",
    },
    limit: {
      isNonNull: false,
      type: "Int",
    },
    orderBy: {
      isNonNull: false,
      type: "OrderBy",
    },
    showDeleted: {
      isNonNull: false,
      type: "Boolean",
    },
  },
  team: {
    id: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  templates: {
    showAll: {
      isNonNull: false,
      type: "Boolean",
    },
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  baseGitSandboxes: {
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  originalGitSandboxes: {
    teamId: {
      isNonNull: false,
      type: "UUID4",
    },
  },
  album: {
    albumId: {
      isNonNull: true,
      type: "ID",
    },
  },
  albums: {
    username: {
      isNonNull: true,
      type: "String",
    },
  },
  branchById: {
    id: {
      isNonNull: true,
      type: "String",
    },
  },
  branchByName: {
    branch: {
      isNonNull: true,
      type: "String",
    },
    name: {
      isNonNull: true,
      type: "String",
    },
    owner: {
      isNonNull: true,
      type: "String",
    },
    provider: {
      isNonNull: true,
      type: "GitProvider",
    },
    team: {
      isNonNull: false,
      type: "ID",
    },
  },
  git: {
    branch: {
      isNonNull: true,
      type: "String",
    },
    path: {
      isNonNull: true,
      type: "String",
    },
    repo: {
      isNonNull: true,
      type: "String",
    },
    username: {
      isNonNull: true,
      type: "String",
    },
  },
  githubOrganizationRepos: {
    organization: {
      isNonNull: true,
      type: "String",
    },
    page: {
      isNonNull: false,
      type: "Int",
    },
    perPage: {
      isNonNull: false,
      type: "Int",
    },
  },
  githubRepo: {
    owner: {
      isNonNull: true,
      type: "String",
    },
    repo: {
      isNonNull: true,
      type: "String",
    },
  },
  project: {
    gitProvider: {
      isNonNull: false,
      type: "GitProvider",
    },
    owner: {
      isNonNull: true,
      type: "String",
    },
    repo: {
      isNonNull: true,
      type: "String",
    },
    team: {
      isNonNull: false,
      type: "ID",
    },
  },
  projects: {
    syncData: {
      isNonNull: false,
      type: "Boolean",
    },
  },
  sandbox: {
    sandboxId: {
      isNonNull: true,
      type: "ID",
    },
  },
  teamByToken: {
    inviteToken: {
      isNonNull: true,
      type: "String",
    },
  },
  comment: {
    commentId: {
      isNonNull: true,
      type: "UUID4",
    },
  },
  drafts: {
    authorId: {
      isNonNull: false,
      type: "UUID4",
    },
    limit: {
      isNonNull: false,
      type: "Int",
    },
    orderBy: {
      isNonNull: false,
      type: "OrderBy",
    },
  },
  subscription: {
    includeCancelled: {
      isNonNull: false,
      type: "Boolean",
    },
  },
});
export { createQuery, createMutation, createSubscription, createClient, Query };
