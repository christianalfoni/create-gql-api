export type Album = {
  id: string
  sandboxes: Sandbox[]
  title: string
}
export enum Authorization {
  COMMENT = "COMMENT",
  NONE = "NONE",
  OWNER = "OWNER",
  READ = "READ",
  WRITE_CODE = "WRITE_CODE",
  WRITE_PROJECT = "WRITE_PROJECT"
}
export enum AuthType {
  BASIC = "BASIC",
  BEARER = "BEARER"
}
export type BillingDetails = {
  amount: number
  currency: string
  date: string
}
export type BillingPreview = {
  immediatePayment: BillingDetails
  nextPayment: BillingDetails
}
export type Bookmarked = {
  entity: BookmarkEntity
  isBookmarked: boolean
}

export type BookmarkEntity = Team | User;

export type Branch = {
  connections: Connection[]
  contribution: boolean
  id: string
  lastAccessedAt: string
  lastCommit: LastCommit
  name: string
  owner: User
  poolSize: number
  project: Project
  pullRequests: PullRequest[]
  status: Status
  upstream: boolean
}
export type BranchConnections = {
  branchId: string
  connections: Connection[]
}
export type BranchLastCommit = {
  branchId: string
  lastCommit: LastCommit
}
export type BranchStatus = {
  branchId: string
  status: Status
}
export type CodeReference = {
  anchor: number;
  code: string;
  head: number;
  lastUpdatedAt: string;
  path: string;
}
export type CodeReferenceMetadata = {
  anchor: number
  code: string
  head: number
  path: string
  sandboxId: string
}
export type Collaborator = {
  authorization: Authorization
  id: string
  lastSeenAt: string
  sandbox: Sandbox
  user: User
  warning: string
}
export type Collection = {
  id: string
  path: string
  sandboxCount: number
  sandboxes: Sandbox[]
  team: Team
  teamId: string
  user: User
}
export type Comment = {
  anchorReference: Reference
  comments: Comment[]
  content: string
  id: string
  insertedAt: string
  isRead: boolean
  isResolved: boolean
  parentComment: Comment
  references: Reference[]
  replyCount: number
  sandbox: Sandbox
  updatedAt: string
  user: User
}
export type Connection = {
  appId: string
  clientId: string
  color: string
  timestamp: string
  user: User
}
export type CurrentUser = {
  betaAccess: boolean
  betaSandboxes: SandboxV2[]
  bookmarkedTemplates: Template[]
  collaboratorSandboxes: Sandbox[]
  collection: FieldQuery<{
    path: string
    teamId: string
  }, Collection>
  collections: ListQuery<{
    teamId: string
  }, Collection>
  deletionRequested: boolean
  email: string
  featureFlags: FeatureFlag[]
  githubOrganizations: GithubOrganization[]
  githubProfile: GithubProfile
  githubRepos: ListQuery<{
    page: number
    perPage: number
  }, GithubRepo>
  id: string
  likedSandboxes: Sandbox[]
  name: string
  notificationPreferences: NotificationPreferences
  notifications: ListQuery<{
    limit: number
    orderBy: OrderBy
    type: string
  }, Notification>
  personalWorkspaceId: string
  provider: ProviderName
  recentBranches: ListQuery<{
    contribution: boolean
    limit: number
    teamId: string
  }, Branch>
  recentProjects: ListQuery<{
    limit: number
  }, Project>
  recentlyAccessedSandboxes: ListQuery<{
    limit: number
    teamId: string
  }, Sandbox>
  recentlyUsedTemplates: ListQuery<{
    teamId: string
  }, Template>
  sandboxes: ListQuery<{
    hasOriginalGit: boolean
    limit: number
    orderBy: OrderBy
    showDeleted: boolean
  }, Sandbox>
  team: FieldQuery<{
    id: string
  }, Team>
  teams: Team[]
  templates: ListQuery<{
    showAll: boolean
    teamId: string
  }, Template>
  username: string
  workspaces: Team[]
}
export enum Direction {
  ASC = "ASC",
  DESC = "DESC"
}
export type Environment = {
  description: string
  id: string
  limitCpu: number
  limitMemory: string
  limitStorage: string
  name: string
  order: number
}
export type FeatureFlag = {
  description: string
  enabled: boolean
  id: string
  name: string
  teams: Team[]
}
export type Git = {
  baseGitSandboxes: ListQuery<{
    teamId: string
  }, Sandbox>
  branch: string
  commitSha: string
  id: string
  originalGitSandboxes: ListQuery<{
    teamId: string
  }, Sandbox>
  path: string
  repo: string
  username: string
}
export type GithubOrganization = {
  avatarUrl: string
  description: string
  id: string
  login: string
}
export enum GithubPermission {
  ADMIN = "ADMIN",
  NONE = "NONE",
  READ = "READ",
  WRITE = "WRITE"
}
export type GithubProfile = {
  avatarUrl: string
  id: string
  login: string
  name: string
  scopes: string[]
}
export type GithubRepo = {
  authorization: GithubRepoAuthorization
  fullName: string
  id: string
  name: string
  owner: GithubOrganization
  updatedAt: string
}
export enum GithubRepoAuthorization {
  READ = "READ",
  WRITE = "WRITE"
}
export type GitHubRepository = {
  allowForking: boolean
  archived: boolean
  createdAt: string
  defaultBranch: string
  description: string
  fork: boolean
  id: number
  isTemplate: boolean
  name: string
  owner: string
  parent: GitHubRepository
  permission: GithubPermission
  private: boolean
  pushedAt: string
  source: GitHubRepository
  updatedAt: string
}
export enum GitProvider {
  GITHUB = "GITHUB"
}
export type GitV2 = {
  branch: string
  owner: string
  repo: string
}
export type ImageReference = {
  fileName: string;
  resolution: number;
  src: string;
  url: string;
}
export type ImageReferenceMetadata = {
  fileName: string
  resolution: number[]
  uploadId: string
  url: string
}
export type InstallationEvent = {
  action: InstallationEventAction
  event: string
}
export enum InstallationEventAction {
  CREATED = "CREATED"
}
export type Invitation = {
  authorization: Authorization
  email: string
  id: string
  sandbox: Sandbox
  token: string
}
export type LastCommit = {
  color: string
  message: string
  sha: string
  timestamp: string
  user: User
}
export type MemberAuthorization = {
  authorization: TeamMemberAuthorization;
  userId: string;
}
export type Notification = {
  archived: boolean
  data: string
  id: string
  insertedAt: string
  read: boolean
  type: string
}
export type NotificationPreferences = {
  emailCommentMention: boolean
  emailCommentReply: boolean
  emailNewComment: boolean
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
  height: number
  previewPath: string
  screenshotUrl: string
  userAgent: string
  width: number
  x: number
  y: number
}
export type PrivateRegistry = {
  authType: AuthType
  enabledScopes: string[]
  id: string
  limitToScopes: boolean
  proxyEnabled: boolean
  registryAuthKey: string
  registryType: RegistryType
  registryUrl: string
  teamId: string
}
export type Project = {
  appInstalled: boolean
  availableEnvironments: Environment[]
  branches: Branch[]
  connections: Connection[]
  defaultBranch: Branch
  description: string
  environment: Environment
  lastAccessedAt: string
  lastCommit: LastCommit
  owner: string
  private: boolean
  pullRequests: PullRequest[]
  repo: string
  repository: Repository
  teams: Team[]
}
export type ProSubscription = {
  billingInterval: SubscriptionInterval
  cancelAt: string
  currency: string
  id: string
  nextBillDate: string
  origin: SubscriptionOrigin
  paymentProvider: SubscriptionPaymentProvider
  quantity: number
  status: SubscriptionStatus
  trialEnd: string
  trialStart: string
  type: SubscriptionType
  unitPrice: number
  updateBillingUrl: string
}
export enum ProviderName {
  APPLE = "APPLE",
  GITHUB = "GITHUB",
  GOOGLE = "GOOGLE"
}
export type PullRequest = {
  baseRepository: Repository
  creator: User
  creatorUsername: string
  draft: boolean
  htmlUrl: string
  number: number
  prClosedAt: string
  prCreatedAt: string
  prMergedAt: string
  prUpdatedAt: string
  sourceBranch: Branch
  state: string
  targetBranch: Branch
  title: string
}
export type Reference = {
  id: string
  metadata: ReferenceMetadata
  resource: string
  type: string
}

export type ReferenceMetadata = CodeReferenceMetadata | ImageReferenceMetadata | PreviewReferenceMetadata | UserReferenceMetadata;

export enum RegistryType {
  CUSTOM = "CUSTOM",
  GITHUB = "GITHUB",
  NPM = "NPM"
}

export type Repository = GitHubRepository;


export type RepositoryEvent = InstallationEvent;

export type RootMutationType = {
  acceptTeamInvitation: FieldQuery<{
    teamId: string
  }, Team>
  addCollaborator: FieldQuery<{
    authorization: Authorization
    sandboxId: string
    username: string
  }, Collaborator>
  addSandboxesToAlbum: FieldQuery<{
    albumId: string
    sandboxIds: string
  }, Album>
  addToCollection: FieldQuery<{
    collectionPath: string
    sandboxIds: string
    teamId: string
  }, Collection>
  addToCollectionOrTeam: ListQuery<{
    collectionPath: string
    sandboxIds: string
    teamId: string
  }, Sandbox>
  archiveAllNotifications: User
  archiveNotification: FieldQuery<{
    notificationId: string
  }, Notification>
  bookmarkTemplate: FieldQuery<{
    teamId: string
    templateId: string
  }, Template>
  cancelDeleteCurrentUser: string
  changeCollaboratorAuthorization: FieldQuery<{
    authorization: Authorization
    sandboxId: string
    username: string
  }, Collaborator>
  changeSandboxInvitationAuthorization: FieldQuery<{
    authorization: Authorization
    invitationId: string
    sandboxId: string
  }, Invitation>
  changeTeamMemberAuthorizations: FieldQuery<{
    memberAuthorizations: MemberAuthorization
    teamId: string
  }, Team>
  clearNotificationCount: User
  createAlbum: FieldQuery<{
    description: string
    title: string
  }, Album>
  createCodeComment: FieldQuery<{
    anchorReference: CodeReference
    codeReferences: CodeReference
    content: string
    id: string
    imageReferences: ImageReference
    parentCommentId: string
    sandboxId: string
    userReferences: UserReference
  }, Comment>
  createCollection: FieldQuery<{
    path: string
    teamId: string
  }, Collection>
  createComment: FieldQuery<{
    codeReference: CodeReference
    codeReferences: CodeReference
    content: string
    id: string
    imageReferences: ImageReference
    parentCommentId: string
    sandboxId: string
    userReferences: UserReference
  }, Comment>
  createFeatureFlag: FieldQuery<{
    description: string
    enabled: boolean
    name: string
  }, FeatureFlag>
  createOrUpdatePrivateNpmRegistry: FieldQuery<{
    authType: AuthType
    enabledScopes: string
    limitToScopes: boolean
    proxyEnabled: boolean
    registryAuthKey: string
    registryType: RegistryType
    registryUrl: string
    teamId: string
  }, PrivateRegistry>
  createPreviewComment: FieldQuery<{
    anchorReference: PreviewReference
    codeReferences: CodeReference
    content: string
    id: string
    imageReferences: ImageReference
    parentCommentId: string
    sandboxId: string
    userReferences: UserReference
  }, Comment>
  createSandboxInvitation: FieldQuery<{
    authorization: Authorization
    email: string
    sandboxId: string
  }, Invitation>
  createTeam: FieldQuery<{
    name: string
    pilot: boolean
  }, Team>
  deleteAlbum: FieldQuery<{
    id: string
  }, string>
  deleteCollection: ListQuery<{
    path: string
    teamId: string
  }, Collection>
  deleteComment: FieldQuery<{
    commentId: string
    sandboxId: string
  }, Comment>
  deleteCurrentUser: string
  deletePrivateNpmRegistry: FieldQuery<{
    teamId: string
  }, PrivateRegistry>
  deleteSandboxes: ListQuery<{
    sandboxIds: string
  }, Sandbox>
  deleteWorkspace: FieldQuery<{
    teamId: string
  }, string>
  disableFeatureFlag: FieldQuery<{
    name: string
  }, FeatureFlag>
  disableFeatureFlagForTeam: FieldQuery<{
    featureFlagId: string
    teamId: string
  }, TeamsFeatureFlag>
  enableFeatureFlag: FieldQuery<{
    name: string
  }, FeatureFlag>
  enableFeatureFlagForTeam: FieldQuery<{
    featureFlagId: string
    teamId: string
  }, TeamsFeatureFlag>
  enableTeamBetaAccess: FieldQuery<{
    teamId: string
  }, Team>
  inviteToTeam: FieldQuery<{
    authorization: TeamMemberAuthorization
    teamId: string
    username: string
  }, Team>
  inviteToTeamViaEmail: FieldQuery<{
    authorization: TeamMemberAuthorization
    email: string
    teamId: string
  }, string>
  leaveTeam: FieldQuery<{
    teamId: string
  }, string>
  makeSandboxesTemplates: ListQuery<{
    sandboxIds: string
  }, Template>
  markAllNotificationsAsRead: User
  markNotificationAsRead: FieldQuery<{
    notificationId: string
  }, Notification>
  permanentlyDeleteSandboxes: ListQuery<{
    sandboxIds: string
  }, Sandbox>
  previewUpdateSubscriptionBillingInterval: FieldQuery<{
    billingInterval: SubscriptionInterval
    subscriptionId: string
    teamId: string
  }, BillingPreview>
  reactivateSubscription: FieldQuery<{
    subscriptionId: string
    teamId: string
  }, ProSubscription>
  redeemSandboxInvitation: FieldQuery<{
    invitationToken: string
    sandboxId: string
  }, Invitation>
  redeemTeamInviteToken: FieldQuery<{
    inviteToken: string
  }, Team>
  rejectTeamInvitation: FieldQuery<{
    teamId: string
  }, string>
  removeCollaborator: FieldQuery<{
    sandboxId: string
    username: string
  }, Collaborator>
  removeFromTeam: FieldQuery<{
    teamId: string
    userId: string
  }, Team>
  removeSandboxesFromAlbum: FieldQuery<{
    albumId: string
    sandboxIds: string
  }, Album>
  renameCollection: ListQuery<{
    newPath: string
    newTeamId: string
    path: string
    teamId: string
  }, Collection>
  renameSandbox: FieldQuery<{
    id: string
    title: string
  }, Sandbox>
  resolveComment: FieldQuery<{
    commentId: string
    sandboxId: string
  }, Comment>
  revokeSandboxInvitation: FieldQuery<{
    invitationId: string
    sandboxId: string
  }, Invitation>
  revokeTeamInvitation: FieldQuery<{
    teamId: string
    userId: string
  }, Team>
  setDefaultTeamMemberAuthorization: FieldQuery<{
    defaultAuthorization: TeamMemberAuthorization
    teamId: string
  }, WorkspaceSandboxSettings>
  setPreventSandboxesExport: ListQuery<{
    preventSandboxExport: boolean
    sandboxIds: string
  }, Sandbox>
  setPreventSandboxesLeavingWorkspace: ListQuery<{
    preventSandboxLeaving: boolean
    sandboxIds: string
  }, Sandbox>
  setSandboxAlwaysOn: FieldQuery<{
    alwaysOn: boolean
    sandboxId: string
  }, Sandbox>
  setSandboxesFrozen: ListQuery<{
    isFrozen: boolean
    sandboxIds: string
  }, Sandbox>
  setSandboxesPrivacy: ListQuery<{
    privacy: number
    sandboxIds: string
  }, Sandbox>
  setTeamDescription: FieldQuery<{
    description: string
    teamId: string
  }, Team>
  setTeamMinimumPrivacy: FieldQuery<{
    minimumPrivacy: number
    teamId: string
    updateDrafts: boolean
  }, WorkspaceSandboxSettings>
  setTeamName: FieldQuery<{
    name: string
    teamId: string
  }, Team>
  setWorkspaceSandboxSettings: FieldQuery<{
    preventSandboxExport: boolean
    preventSandboxLeaving: boolean
    teamId: string
  }, WorkspaceSandboxSettings>
  softCancelSubscription: FieldQuery<{
    subscriptionId: string
    teamId: string
  }, ProSubscription>
  unbookmarkTemplate: FieldQuery<{
    teamId: string
    templateId: string
  }, Template>
  unmakeSandboxesTemplates: ListQuery<{
    sandboxIds: string
  }, Template>
  unresolveComment: FieldQuery<{
    commentId: string
    sandboxId: string
  }, Comment>
  updateAlbum: FieldQuery<{
    description: string
    id: string
    title: string
  }, Album>
  updateComment: FieldQuery<{
    codeReferences: CodeReference
    commentId: string
    content: string
    imageReferences: ImageReference
    sandboxId: string
    userReferences: UserReference
  }, Comment>
  updateCurrentUser: FieldQuery<{
    bio: string
    name: string
    socialLinks: string
    username: string
  }, User>
  updateNotificationPreferences: FieldQuery<{
    emailCommentMention: boolean
    emailCommentReply: boolean
    emailNewComment: boolean
  }, NotificationPreferences>
  updateNotificationReadStatus: FieldQuery<{
    notificationId: string
    read: boolean
  }, Notification>
  updateProjectEnvironment: FieldQuery<{
    environmentId: string
    gitProvider: GitProvider
    owner: string
    repo: string
  }, Project>
  updateSubscription: FieldQuery<{
    quantity: number
    subscriptionId: string
    teamId: string
  }, ProSubscription>
  updateSubscriptionBillingInterval: FieldQuery<{
    billingInterval: SubscriptionInterval
    subscriptionId: string
    teamId: string
  }, ProSubscription>
}
export type RootQueryType = {
  album: FieldQuery<{
    albumId: string
  }, Album>
  albums: ListQuery<{
    username: string
  }, Album>
  curatedAlbums: Album[]
  featureFlags: FeatureFlag[]
  git: FieldQuery<{
    branch: string
    path: string
    repo: string
    username: string
  }, Git>
  githubOrganizationRepos: ListQuery<{
    organization: string
    page: number
    perPage: number
  }, GithubRepo>
  githubRepo: FieldQuery<{
    owner: string
    repo: string
  }, GithubRepo>
  me: CurrentUser
  project: FieldQuery<{
    gitProvider: GitProvider
    owner: string
    repo: string
  }, Project>
  sandbox: FieldQuery<{
    sandboxId: string
  }, Sandbox>
  teamByToken: FieldQuery<{
    inviteToken: string
  }, Team>
}
export type RootSubscriptionType = {
  collaboratorAdded: FieldQuery<{
    sandboxId: string
  }, Collaborator>
  collaboratorChanged: FieldQuery<{
    sandboxId: string
  }, Collaborator>
  collaboratorRemoved: FieldQuery<{
    sandboxId: string
  }, Collaborator>
  commentAdded: FieldQuery<{
    sandboxId: string
  }, Comment>
  commentChanged: FieldQuery<{
    sandboxId: string
  }, Comment>
  commentRemoved: FieldQuery<{
    sandboxId: string
  }, Comment>
  githubEvents: FieldQuery<{
    owner: string
    repo: string
  }, RepositoryEvent>
  invitationChanged: FieldQuery<{
    sandboxId: string
  }, Invitation>
  invitationCreated: FieldQuery<{
    sandboxId: string
  }, Invitation>
  invitationRemoved: FieldQuery<{
    sandboxId: string
  }, Invitation>
  projectCommits: FieldQuery<{
    branchId: string
    owner: string
    repo: string
  }, BranchLastCommit>
  projectConnections: FieldQuery<{
    branchId: string
    owner: string
    repo: string
  }, BranchConnections>
  projectStatus: FieldQuery<{
    branchId: string
    owner: string
    repo: string
  }, BranchStatus>
  sandboxChanged: FieldQuery<{
    sandboxId: string
  }, Sandbox>
}
export type Sandbox = {
  alias: string
  alwaysOn: boolean
  author: User
  authorId: string
  authorization: Authorization
  baseGit: Git
  collaborators: Collaborator[]
  collection: Collection
  comment: FieldQuery<{
    commentId: string
  }, Comment>
  comments: Comment[]
  customTemplate: Template
  description: string
  forkCount: number
  forkedTemplate: Template
  git: Git
  id: string
  insertedAt: string
  invitations: Invitation[]
  isFrozen: boolean
  isSse: boolean
  isV2: boolean
  lastAccessedAt: string
  likeCount: number
  originalGit: Git
  permissions: SandboxProtectionSettings
  prNumber: number
  privacy: number
  removedAt: string
  screenshotOutdated: boolean
  screenshotUrl: string
  source: Source
  team: Team
  teamId: string
  title: string
  updatedAt: string
  viewCount: number
}
export type SandboxProtectionSettings = {
  preventSandboxExport: boolean
  preventSandboxLeaving: boolean
}
export type SandboxV2 = {
  alias: string
  authorization: Authorization
  collaborators: Collaborator[]
  gitv2: GitV2
  id: string
  insertedAt: string
  isV2: boolean
  removedAt: string
  updatedAt: string
}
export type Source = {
  id: string
  template: string
}
export type Status = {
  hasChanges: boolean
  hasConflicts: boolean
  remote: StatusCommitCounts
  target: StatusCommitCounts
}
export type StatusCommitCounts = {
  ahead: number
  behind: number
}
export enum SubscriptionInterval {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY"
}
export enum SubscriptionOrigin {
  LEGACY = "LEGACY",
  PATRON = "PATRON",
  PILOT = "PILOT"
}
export enum SubscriptionPaymentProvider {
  PADDLE = "PADDLE",
  STRIPE = "STRIPE"
}
export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  INCOMPLETE_EXPIRED = "INCOMPLETE_EXPIRED",
  PAUSED = "PAUSED",
  TRIALING = "TRIALING",
  UNKNOWN = "UNKNOWN",
  UNPAID = "UNPAID"
}
export enum SubscriptionType {
  PERSONAL_PRO = "PERSONAL_PRO",
  TEAM_PRO = "TEAM_PRO"
}
export type Team = {
  avatarUrl: string
  beta: boolean
  bookmarkedTemplates: Template[]
  collections: Collection[]
  creatorId: string
  description: string
  drafts: ListQuery<{
    authorId: string
    limit: number
    orderBy: OrderBy
  }, Sandbox>
  id: string
  inviteToken: string
  invitees: User[]
  joinedPilotAt: string
  name: string
  privateRegistry: PrivateRegistry
  projects: ListQuery<{
    syncData: boolean
  }, Project>
  sandboxes: ListQuery<{
    alwaysOn: boolean
    authorId: string
    hasOriginalGit: boolean
    limit: number
    orderBy: OrderBy
    showDeleted: boolean
  }, Sandbox>
  settings: WorkspaceSandboxSettings
  shortid: string
  subscription: ProSubscription
  templates: Template[]
  userAuthorizations: UserAuthorization[]
  users: User[]
}
export enum TeamMemberAuthorization {
  ADMIN = "ADMIN",
  READ = "READ",
  WRITE = "WRITE"
}
export type TeamsFeatureFlag = {
  enabledForTeam: boolean
  featureFlagId: string
  teamId: string
}
export type Template = {
  bookmarked: Bookmarked[]
  color: string
  description: string
  iconUrl: string
  id: string
  insertedAt: string
  official: boolean
  published: boolean
  sandbox: Sandbox
  title: string
  updatedAt: string
}
export type User = {
  avatarUrl: string
  bio: string
  id: string
  name: string
  personalWorkspaceId: string
  socialLinks: string[]
  username: string
}
export type UserAuthorization = {
  authorization: TeamMemberAuthorization
  userId: string
}
export type UserReference = {
  userId: string;
  username: string;
}
export type UserReferenceMetadata = {
  userId: string
  username: string
}
export type WorkspaceSandboxSettings = {
  defaultAuthorization: TeamMemberAuthorization
  minimumPrivacy: number
  preventSandboxExport: boolean
  preventSandboxLeaving: boolean
}

const argumentsByField = {
  "collection": {
    "path": {
      "isNonNull": true,
      "type": "String"
    },
    "teamId": {
      "isNonNull": false,
      "type": "ID"
    }
  },
  "collections": {
    "teamId": {
      "isNonNull": false,
      "type": "ID"
    }
  },
  "githubRepos": {
    "page": {
      "isNonNull": false,
      "type": "Int"
    },
    "perPage": {
      "isNonNull": false,
      "type": "Int"
    }
  },
  "notifications": {
    "limit": {
      "isNonNull": false,
      "type": "Int"
    },
    "orderBy": {
      "isNonNull": false,
      "type": "OrderBy"
    },
    "type": {
      "isNonNull": false,
      "type": "String"
    }
  },
  "recentBranches": {
    "contribution": {
      "isNonNull": false,
      "type": "Boolean"
    },
    "limit": {
      "isNonNull": false,
      "type": "Int"
    },
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "recentProjects": {
    "limit": {
      "isNonNull": false,
      "type": "Int"
    }
  },
  "recentlyAccessedSandboxes": {
    "limit": {
      "isNonNull": false,
      "type": "Int"
    },
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "recentlyUsedTemplates": {
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "sandboxes": {
    "alwaysOn": {
      "isNonNull": false,
      "type": "Boolean"
    },
    "authorId": {
      "isNonNull": false,
      "type": "UUID4"
    },
    "hasOriginalGit": {
      "isNonNull": false,
      "type": "Boolean"
    },
    "limit": {
      "isNonNull": false,
      "type": "Int"
    },
    "orderBy": {
      "isNonNull": false,
      "type": "OrderBy"
    },
    "showDeleted": {
      "isNonNull": false,
      "type": "Boolean"
    }
  },
  "team": {
    "id": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "templates": {
    "showAll": {
      "isNonNull": false,
      "type": "Boolean"
    },
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "baseGitSandboxes": {
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "originalGitSandboxes": {
    "teamId": {
      "isNonNull": false,
      "type": "UUID4"
    }
  },
  "album": {
    "albumId": {
      "isNonNull": true,
      "type": "ID"
    }
  },
  "albums": {
    "username": {
      "isNonNull": true,
      "type": "String"
    }
  },
  "git": {
    "branch": {
      "isNonNull": true,
      "type": "String"
    },
    "path": {
      "isNonNull": true,
      "type": "String"
    },
    "repo": {
      "isNonNull": true,
      "type": "String"
    },
    "username": {
      "isNonNull": true,
      "type": "String"
    }
  },
  "githubOrganizationRepos": {
    "organization": {
      "isNonNull": true,
      "type": "String"
    },
    "page": {
      "isNonNull": false,
      "type": "Int"
    },
    "perPage": {
      "isNonNull": false,
      "type": "Int"
    }
  },
  "githubRepo": {
    "owner": {
      "isNonNull": true,
      "type": "String"
    },
    "repo": {
      "isNonNull": true,
      "type": "String"
    }
  },
  "project": {
    "gitProvider": {
      "isNonNull": false,
      "type": "GitProvider"
    },
    "owner": {
      "isNonNull": true,
      "type": "String"
    },
    "repo": {
      "isNonNull": true,
      "type": "String"
    }
  },
  "sandbox": {
    "sandboxId": {
      "isNonNull": true,
      "type": "ID"
    }
  },
  "teamByToken": {
    "inviteToken": {
      "isNonNull": true,
      "type": "String"
    }
  },
  "comment": {
    "commentId": {
      "isNonNull": true,
      "type": "UUID4"
    }
  },
  "drafts": {
    "authorId": {
      "isNonNull": false,
      "type": "UUID4"
    },
    "limit": {
      "isNonNull": false,
      "type": "Int"
    },
    "orderBy": {
      "isNonNull": false,
      "type": "OrderBy"
    }
  },
  "projects": {
    "syncData": {
      "isNonNull": false,
      "type": "Boolean"
    }
  }
};
type FieldQuery<A extends Record<string, unknown>, T> = T & { __: A };

type ListQuery<
  A extends Record<string, unknown>,
  T extends Record<string, unknown>
> = Array<T> & { __: A };

type ListQueryDefinitions = [
  Record<string, unknown>,
  QueryDefinitions,
  ...never[]
];

type FieldQueryDefinitions = [Record<string, unknown>, ...never[]];

type AliasQueryDefinitions = { $ALIAS: string; $QUERY: ListQueryDefinitions };

type QueryDefinition =
  | boolean
  | ListQueryDefinitions
  | FieldQueryDefinitions
  | AliasQueryDefinitions
  | QueryDefinitions;

type QueryDefinitions = {
  [key: string]: QueryDefinition;
};

type ResolveQueryDefinitions<T extends Record<string, unknown>> =
  | {
      [K in keyof T]?: T[K] extends ListQuery<infer A, infer B>
        ? [A, ResolveQueryDefinitions<B>, ...never[]]
        : T[K] extends FieldQuery<infer A, infer B>
        ? B extends Record<string, unknown>
          ? [A, ResolveQueryDefinitions<B>, ...never[]]
          : [A, ...never[]]
        : T[K] extends Record<string, unknown>
        ? ResolveQueryDefinitions<T[K]>
        : boolean;
    } & {
      [key: string]:
        | {
            [K in keyof T]: T[K] extends ListQuery<infer A, infer B>
              ? {
                  $ALIAS: K;
                  $QUERY: [A, ResolveQueryDefinitions<B>, ...never[]];
                }
              : T[K] extends FieldQuery<infer A, infer B>
              ? {
                  $ALIAS: K;
                  $QUERY: B extends Record<string, unknown>
                    ? [A, ResolveQueryDefinitions<B>, ...never[]]
                    : [A, ...never[]];
                }
              : never;
          }[keyof T]
        | ListQueryDefinitions
        | FieldQueryDefinitions
        | ResolveQueryDefinitions<{}>
        | boolean;
    };

type ResolveQuery<
  T extends QueryDefinitions,
  U extends Record<string, unknown>
> = {
  [K in keyof T]: T[K] extends AliasQueryDefinitions
    ? T[K]["$ALIAS"] extends keyof U
      ? T[K]["$QUERY"] extends ListQueryDefinitions
        ? U[T[K]["$ALIAS"]] extends ListQuery<any, infer Q>
          ? Array<ResolveQuery<T[K]["$QUERY"][1], Q>>
          : U[T[K]["$ALIAS"]] extends FieldQuery<any, infer Q>
          ? Q
          : U[T[K]["$ALIAS"]]
        : never
      : never
    : K extends keyof U
    ? T[K] extends ListQueryDefinitions
      ? U[K] extends ListQuery<any, infer Q>
        ? Array<ResolveQuery<T[K][1], Q>>
        : U[K] extends FieldQuery<any, infer Q>
        ? Q
        : never
      : T[K] extends QueryDefinitions
      ? U[K] extends Record<string, unknown>
        ? ResolveQuery<T[K], U[K]>
        : U[K]
      : U[K]
    : never;
};

type DetectedVariableTypes = Record<
  string,
  { isNonNull: boolean; type: string }
>;

export function createQueryArgumentsString(
  fieldKey: string,
  args: Record<string, unknown>,
  detectedVariableTypes: DetectedVariableTypes
) {
  return `(${Object.keys(args)
    .reduce<string[]>((aggr, key) => {
      const val = args[key];
      const isVariable = typeof val === "string" && val[0] === "$";

      if (isVariable) {
        detectedVariableTypes[val] = argumentsByField[fieldKey][key];
      }

      return aggr.concat(`${key}: ${isVariable ? val : `"${val}"`}`);
    }, [])
    .join(", ")})`;
}

export function isAliasQueryDefinition(
  queryDefinition: QueryDefinition
): queryDefinition is AliasQueryDefinitions {
  return typeof queryDefinition === "object" && "$ALIAS" in queryDefinition;
}

export function createQueryBodyString(
  QueryDefinitions: QueryDefinitions,
  detectedVariableTypes: DetectedVariableTypes,
  level = 1
) {
  let string = " {\n";

  for (const field in QueryDefinitions) {
    const value = QueryDefinitions[field];

    if (value === false) {
      continue;
    }

    string += "  ".repeat(level) + field;

    if (value === true) {
      string += "\n";
    } else if (Array.isArray(value) && value.length === 1) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        "\n";
    } else if (Array.isArray(value) && value.length === 2) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        createQueryBodyString(value[1], detectedVariableTypes, level + 1);
    } else if (isAliasQueryDefinition(value)) {
      string += `: ${value.$ALIAS}${createQueryArgumentsString(
        value.$ALIAS,
        value.$QUERY[0],
        detectedVariableTypes
      )}${createQueryBodyString(
        value.$QUERY[1],
        detectedVariableTypes,
        level + 1
      )}`;
    } else {
      string += createQueryBodyString(
        value as QueryDefinitions,
        detectedVariableTypes,
        level + 1
      );
    }
  }

  string += "  ".repeat(level - 1) + "}\n";

  return string;
}

function createVariablesString(
  variables: Record<string, unknown>,
  detectedVariableTypes: Record<string, { isNonNull: boolean; type: string }>
) {
  return Object.keys(variables)
    .map((key) => {
      let varKey = `$${key}`;
      let gqlType = detectedVariableTypes[varKey];

      if (!gqlType) {
        throw new Error(`Unable to detect variable type for key ${key}`);
      }

      return `${varKey}: ${gqlType.type}${gqlType.isNonNull ? "!" : ""}`;
    })
    .join(", ");
}

function createQueryStringFactory(type: string) {
  return function createQueryStringFactory(
    name: string,
    query: QueryDefinitions,
    variables?: Record<string, unknown>
  ) {
    const detectedVariableTypes: Record<
      string,
      { isNonNull: boolean; type: string }
    > = {};
    const queryBodyString = createQueryBodyString(query, detectedVariableTypes);

    return `${type} ${name} ${
      variables
        ? `(${createVariablesString(variables, detectedVariableTypes)})`
        : ""
    }${queryBodyString}`;
  };
}

export function createApi(
  request: (
    query: string,
    variables: Record<string, unknown>
  ) => Promise<unknown>,
  subscribe: (
    query: string,
    variables: Record<string, unknown>,
    onMessage: (message: unknown) => void
  ) => () => void
): {
  createQuery: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootQueryType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (variables: V) => Promise<ResolveQuery<T, RootQueryType>>;
  createMutation: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootMutationType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (variables: V) => Promise<ResolveQuery<T, RootMutationType>>;
  createSubscription: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootSubscriptionType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (onMessage: (message: T) => void, variables: V) => () => void;
};
export function createApi(
  request: (
    query: string,
    variables: Record<string, unknown>
  ) => Promise<unknown>
): {
  createQuery: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootQueryType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (variables: V) => Promise<ResolveQuery<T, RootQueryType>>;
  createMutation: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootMutationType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (variables: V) => Promise<ResolveQuery<T, RootMutationType>>;
};
export function createApi(
  request: (
    query: string,
    variables: Record<string, unknown>
  ) => Promise<unknown>,
  subscribe?: (
    query: string,
    variables: Record<string, unknown>,
    onMessage: (message: unknown) => void
  ) => () => void
) {
  const createQueryString = createQueryStringFactory("query");
  const createMutationString = createQueryStringFactory("mutation");
  const createSubscriptionString = createQueryStringFactory("subscription");

  return {
    createMutation:
      <
        V extends Record<string, unknown> | void,
        T extends ResolveQueryDefinitions<RootMutationType>
      >(
        name: string,
        cb: T | ((variables: V) => T)
      ) =>
      (variables: V): Promise<ResolveQuery<T, RootMutationType>> => {
        const query =
          typeof cb === "function"
            ? cb(
                Object.keys(variables || {}).reduce<Record<string, string>>(
                  (aggr, key) => {
                    aggr[key] = "$" + key;

                    return aggr;
                  },
                  {}
                ) as V
              )
            : cb;

        return request(
          createMutationString(name, query, variables ? variables : undefined),
          variables
            ? Object.keys(variables).reduce<Record<string, unknown>>(
                (aggr, key) => {
                  aggr[key] = variables[key];

                  return aggr;
                },
                {}
              )
            : {}
        ) as Promise<ResolveQuery<T, RootMutationType>>;
      },
    createQuery:
      <
        V extends Record<string, unknown> | void,
        T extends ResolveQueryDefinitions<RootQueryType>
      >(
        name: string,
        cb: T | ((variables: V) => T)
      ) =>
      (variables: V): Promise<ResolveQuery<T, RootQueryType>> => {
        const query =
          typeof cb === "function"
            ? cb(
                Object.keys(variables || {}).reduce<Record<string, string>>(
                  (aggr, key) => {
                    aggr[key] = "$" + key;

                    return aggr;
                  },
                  {}
                ) as V
              )
            : cb;

        return request(
          createQueryString(name, query, variables ? variables : undefined),
          variables
            ? Object.keys(variables).reduce<Record<string, unknown>>(
                (aggr, key) => {
                  aggr[key] = variables[key];

                  return aggr;
                },
                {}
              )
            : {}
        ) as Promise<ResolveQuery<T, RootQueryType>>;
      },
    createSubscription: subscribe
      ? <
            V extends Record<string, unknown> | void,
            T extends ResolveQueryDefinitions<RootSubscriptionType>
          >(
            name: string,
            cb: T | ((variables: V) => T)
          ) =>
          (onMessage: (message: T) => void, variables: V): (() => void) => {
            const query =
              typeof cb === "function"
                ? cb(
                    Object.keys(variables || {}).reduce<Record<string, string>>(
                      (aggr, key) => {
                        aggr[key] = "$" + key;

                        return aggr;
                      },
                      {}
                    ) as V
                  )
                : cb;

            return subscribe(
              createSubscriptionString(
                name,
                query,
                variables ? variables : undefined
              ),
              variables
                ? Object.keys(variables).reduce<Record<string, unknown>>(
                    (aggr, key) => {
                      aggr[key] = variables[key];

                      return aggr;
                    },
                    {}
                  )
                : {},
              onMessage as any
            );
          }
      : undefined,
  };
}
