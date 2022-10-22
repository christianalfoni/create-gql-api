
export type Album = {
  id: {
    type: string;
    arguments: null;
  }
  sandboxes: {
    type: string;
    arguments: null;
  }
  title: {
    type: string;
    arguments: null;
  }

}

export type BillingDetails = {
  amount: {
    type: string;
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
    type: string;
    arguments: null;
  }
  nextPayment: {
    type: string;
    arguments: null;
  }

}

export type Bookmarked = {
  entity: {
    type: string;
    arguments: null;
  }
  isBookmarked: {
    type: string;
    arguments: null;
  }

}

export type Branch = {
  connections: {
    type: string;
    arguments: null;
  }
  contribution: {
    type: string;
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
    type: string;
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
  poolSize: {
    type: string;
    arguments: null;
  }
  project: {
    type: string;
    arguments: null;
  }
  pullRequests: {
    type: string;
    arguments: null;
  }
  status: {
    type: string;
    arguments: null;
  }
  upstream: {
    type: string;
    arguments: null;
  }

}

export type BranchConnections = {
  branchId: {
    type: string;
    arguments: null;
  }
  connections: {
    type: string;
    arguments: null;
  }

}

export type BranchLastCommit = {
  branchId: {
    type: string;
    arguments: null;
  }
  lastCommit: {
    type: string;
    arguments: null;
  }

}

export type BranchStatus = {
  branchId: {
    type: string;
    arguments: null;
  }
  status: {
    type: string;
    arguments: null;
  }

}

export type CodeReferenceMetadata = {
  anchor: {
    type: string;
    arguments: null;
  }
  code: {
    type: string;
    arguments: null;
  }
  head: {
    type: string;
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
    type: string;
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
    type: string;
    arguments: null;
  }
  user: {
    type: string;
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
    type: string;
    arguments: null;
  }
  sandboxes: {
    type: string;
    arguments: null;
  }
  team: {
    type: string;
    arguments: null;
  }
  teamId: {
    type: string;
    arguments: null;
  }
  user: {
    type: string;
    arguments: null;
  }

}

export type Comment = {
  anchorReference: {
    type: string;
    arguments: null;
  }
  comments: {
    type: string;
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
    type: string;
    arguments: null;
  }
  isResolved: {
    type: string;
    arguments: null;
  }
  parentComment: {
    type: string;
    arguments: null;
  }
  references: {
    type: string;
    arguments: null;
  }
  replyCount: {
    type: string;
    arguments: null;
  }
  sandbox: {
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }
  user: {
    type: string;
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
    type: string;
    arguments: null;
  }

}

export type CurrentUser = {
  betaAccess: {
    type: string;
    arguments: null;
  }
  betaSandboxes: {
    type: string;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: string;
    arguments: null;
  }
  collaboratorSandboxes: {
    type: string;
    arguments: null;
  }
  collection: {
    type: string;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  collections: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  deletionRequested: {
    type: string;
    arguments: null;
  }
  email: {
    type: string;
    arguments: null;
  }
  featureFlags: {
    type: string;
    arguments: null;
  }
  githubOrganizations: {
    type: string;
    arguments: null;
  }
  githubProfile: {
    type: string;
    arguments: null;
  }
  githubRepos: {
    type: string;
    arguments: {
      page: string;
      perPage: string;
    }

  }
  id: {
    type: string;
    arguments: null;
  }
  likedSandboxes: {
    type: string;
    arguments: null;
  }
  name: {
    type: string;
    arguments: null;
  }
  notificationPreferences: {
    type: string;
    arguments: null;
  }
  notifications: {
    type: string;
    arguments: {
      limit: string;
      orderBy: string;
      type: string;
    }

  }
  personalWorkspaceId: {
    type: string;
    arguments: null;
  }
  provider: {
    type: string;
    arguments: null;
  }
  recentBranches: {
    type: string;
    arguments: {
      contribution: string;
      limit: string;
      teamId: string;
    }

  }
  recentProjects: {
    type: string;
    arguments: {
      limit: string;
    }

  }
  recentlyAccessedSandboxes: {
    type: string;
    arguments: {
      limit: string;
      teamId: string;
    }

  }
  recentlyUsedTemplates: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  sandboxes: {
    type: string;
    arguments: {
      hasOriginalGit: string;
      limit: string;
      orderBy: string;
      showDeleted: string;
    }

  }
  team: {
    type: string;
    arguments: {
      id: string;
    }

  }
  teams: {
    type: string;
    arguments: null;
  }
  templates: {
    type: string;
    arguments: {
      showAll: string;
      teamId: string;
    }

  }
  username: {
    type: string;
    arguments: null;
  }
  workspaces: {
    type: string;
    arguments: null;
  }

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
    type: string;
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
    type: string;
    arguments: null;
  }

}

export type FeatureFlag = {
  description: {
    type: string;
    arguments: null;
  }
  enabled: {
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
  teams: {
    type: string;
    arguments: null;
  }

}

export type Git = {
  baseGitSandboxes: {
    type: string;
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
    type: string;
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
    type: string;
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
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }

}

export type GitHubRepository = {
  allowForking: {
    type: string;
    arguments: null;
  }
  archived: {
    type: string;
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
    type: string;
    arguments: null;
  }
  id: {
    type: string;
    arguments: null;
  }
  isTemplate: {
    type: string;
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
    type: string;
    arguments: null;
  }
  permission: {
    type: string;
    arguments: null;
  }
  private: {
    type: string;
    arguments: null;
  }
  pushedAt: {
    type: string;
    arguments: null;
  }
  source: {
    type: string;
    arguments: null;
  }
  updatedAt: {
    type: string;
    arguments: null;
  }

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

export type ImageReferenceMetadata = {
  fileName: {
    type: string;
    arguments: null;
  }
  resolution: {
    type: string;
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
    type: string;
    arguments: null;
  }
  event: {
    type: string;
    arguments: null;
  }

}

export type Invitation = {
  authorization: {
    type: string;
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
    type: string;
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
    type: string;
    arguments: null;
  }

}

export type Notification = {
  archived: {
    type: string;
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
    type: string;
    arguments: null;
  }
  type: {
    type: string;
    arguments: null;
  }

}

export type NotificationPreferences = {
  emailCommentMention: {
    type: string;
    arguments: null;
  }
  emailCommentReply: {
    type: string;
    arguments: null;
  }
  emailNewComment: {
    type: string;
    arguments: null;
  }

}

export type PreviewReferenceMetadata = {
  height: {
    type: string;
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
    type: string;
    arguments: null;
  }
  x: {
    type: string;
    arguments: null;
  }
  y: {
    type: string;
    arguments: null;
  }

}

export type PrivateRegistry = {
  authType: {
    type: string;
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
    type: string;
    arguments: null;
  }
  proxyEnabled: {
    type: string;
    arguments: null;
  }
  registryAuthKey: {
    type: string;
    arguments: null;
  }
  registryType: {
    type: string;
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
    type: string;
    arguments: null;
  }
  availableEnvironments: {
    type: string;
    arguments: null;
  }
  branches: {
    type: string;
    arguments: null;
  }
  connections: {
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
  environment: {
    type: string;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    arguments: null;
  }
  lastCommit: {
    type: string;
    arguments: null;
  }
  owner: {
    type: string;
    arguments: null;
  }
  private: {
    type: string;
    arguments: null;
  }
  pullRequests: {
    type: string;
    arguments: null;
  }
  repo: {
    type: string;
    arguments: null;
  }
  repository: {
    type: string;
    arguments: null;
  }
  teams: {
    type: string;
    arguments: null;
  }

}

export type ProSubscription = {
  billingInterval: {
    type: string;
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
    type: string;
    arguments: null;
  }
  paymentProvider: {
    type: string;
    arguments: null;
  }
  quantity: {
    type: string;
    arguments: null;
  }
  status: {
    type: string;
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
    type: string;
    arguments: null;
  }
  unitPrice: {
    type: string;
    arguments: null;
  }
  updateBillingUrl: {
    type: string;
    arguments: null;
  }

}

export type PullRequest = {
  baseRepository: {
    type: string;
    arguments: null;
  }
  creator: {
    type: string;
    arguments: null;
  }
  creatorUsername: {
    type: string;
    arguments: null;
  }
  draft: {
    type: string;
    arguments: null;
  }
  htmlUrl: {
    type: string;
    arguments: null;
  }
  number: {
    type: string;
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
    type: string;
    arguments: null;
  }
  state: {
    type: string;
    arguments: null;
  }
  targetBranch: {
    type: string;
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
    type: string;
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

export type RootMutationType = {
  acceptTeamInvitation: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  addCollaborator: {
    type: string;
    arguments: {
      authorization: string;
      sandboxId: string;
      username: string;
    }

  }
  addSandboxesToAlbum: {
    type: string;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  addToCollection: {
    type: string;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  addToCollectionOrTeam: {
    type: string;
    arguments: {
      collectionPath: string;
      sandboxIds: string;
      teamId: string;
    }

  }
  archiveAllNotifications: {
    type: string;
    arguments: null;
  }
  archiveNotification: {
    type: string;
    arguments: {
      notificationId: string;
    }

  }
  bookmarkTemplate: {
    type: string;
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
    type: string;
    arguments: {
      authorization: string;
      sandboxId: string;
      username: string;
    }

  }
  changeSandboxInvitationAuthorization: {
    type: string;
    arguments: {
      authorization: string;
      invitationId: string;
      sandboxId: string;
    }

  }
  changeTeamMemberAuthorizations: {
    type: string;
    arguments: {
      memberAuthorizations: string;
      teamId: string;
    }

  }
  clearNotificationCount: {
    type: string;
    arguments: null;
  }
  createAlbum: {
    type: string;
    arguments: {
      description: string;
      title: string;
    }

  }
  createCodeComment: {
    type: string;
    arguments: {
      anchorReference: string;
      codeReferences: string;
      content: string;
      id: string;
      imageReferences: string;
      parentCommentId: string;
      sandboxId: string;
      userReferences: string;
    }

  }
  createCollection: {
    type: string;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  createComment: {
    type: string;
    arguments: {
      codeReference: string;
      codeReferences: string;
      content: string;
      id: string;
      imageReferences: string;
      parentCommentId: string;
      sandboxId: string;
      userReferences: string;
    }

  }
  createFeatureFlag: {
    type: string;
    arguments: {
      description: string;
      enabled: string;
      name: string;
    }

  }
  createOrUpdatePrivateNpmRegistry: {
    type: string;
    arguments: {
      authType: string;
      enabledScopes: string;
      limitToScopes: string;
      proxyEnabled: string;
      registryAuthKey: string;
      registryType: string;
      registryUrl: string;
      teamId: string;
    }

  }
  createPreviewComment: {
    type: string;
    arguments: {
      anchorReference: string;
      codeReferences: string;
      content: string;
      id: string;
      imageReferences: string;
      parentCommentId: string;
      sandboxId: string;
      userReferences: string;
    }

  }
  createSandboxInvitation: {
    type: string;
    arguments: {
      authorization: string;
      email: string;
      sandboxId: string;
    }

  }
  createTeam: {
    type: string;
    arguments: {
      name: string;
      pilot: string;
    }

  }
  deleteAlbum: {
    type: string;
    arguments: {
      id: string;
    }

  }
  deleteCollection: {
    type: string;
    arguments: {
      path: string;
      teamId: string;
    }

  }
  deleteComment: {
    type: string;
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
    type: string;
    arguments: {
      teamId: string;
    }

  }
  deleteSandboxes: {
    type: string;
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
    type: string;
    arguments: {
      name: string;
    }

  }
  disableFeatureFlagForTeam: {
    type: string;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableFeatureFlag: {
    type: string;
    arguments: {
      name: string;
    }

  }
  enableFeatureFlagForTeam: {
    type: string;
    arguments: {
      featureFlagId: string;
      teamId: string;
    }

  }
  enableTeamBetaAccess: {
    type: string;
    arguments: {
      teamId: string;
    }

  }
  inviteToTeam: {
    type: string;
    arguments: {
      authorization: string;
      teamId: string;
      username: string;
    }

  }
  inviteToTeamViaEmail: {
    type: string;
    arguments: {
      authorization: string;
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
    type: string;
    arguments: {
      sandboxIds: string;
    }

  }
  markAllNotificationsAsRead: {
    type: string;
    arguments: null;
  }
  markNotificationAsRead: {
    type: string;
    arguments: {
      notificationId: string;
    }

  }
  permanentlyDeleteSandboxes: {
    type: string;
    arguments: {
      sandboxIds: string;
    }

  }
  previewUpdateSubscriptionBillingInterval: {
    type: string;
    arguments: {
      billingInterval: string;
      subscriptionId: string;
      teamId: string;
    }

  }
  reactivateSubscription: {
    type: string;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  redeemSandboxInvitation: {
    type: string;
    arguments: {
      invitationToken: string;
      sandboxId: string;
    }

  }
  redeemTeamInviteToken: {
    type: string;
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
    type: string;
    arguments: {
      sandboxId: string;
      username: string;
    }

  }
  removeFromTeam: {
    type: string;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  removeSandboxesFromAlbum: {
    type: string;
    arguments: {
      albumId: string;
      sandboxIds: string;
    }

  }
  renameCollection: {
    type: string;
    arguments: {
      newPath: string;
      newTeamId: string;
      path: string;
      teamId: string;
    }

  }
  renameSandbox: {
    type: string;
    arguments: {
      id: string;
      title: string;
    }

  }
  resolveComment: {
    type: string;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  revokeSandboxInvitation: {
    type: string;
    arguments: {
      invitationId: string;
      sandboxId: string;
    }

  }
  revokeTeamInvitation: {
    type: string;
    arguments: {
      teamId: string;
      userId: string;
    }

  }
  setDefaultTeamMemberAuthorization: {
    type: string;
    arguments: {
      defaultAuthorization: string;
      teamId: string;
    }

  }
  setPreventSandboxesExport: {
    type: string;
    arguments: {
      preventSandboxExport: string;
      sandboxIds: string;
    }

  }
  setPreventSandboxesLeavingWorkspace: {
    type: string;
    arguments: {
      preventSandboxLeaving: string;
      sandboxIds: string;
    }

  }
  setSandboxAlwaysOn: {
    type: string;
    arguments: {
      alwaysOn: string;
      sandboxId: string;
    }

  }
  setSandboxesFrozen: {
    type: string;
    arguments: {
      isFrozen: string;
      sandboxIds: string;
    }

  }
  setSandboxesPrivacy: {
    type: string;
    arguments: {
      privacy: string;
      sandboxIds: string;
    }

  }
  setTeamDescription: {
    type: string;
    arguments: {
      description: string;
      teamId: string;
    }

  }
  setTeamMinimumPrivacy: {
    type: string;
    arguments: {
      minimumPrivacy: string;
      teamId: string;
      updateDrafts: string;
    }

  }
  setTeamName: {
    type: string;
    arguments: {
      name: string;
      teamId: string;
    }

  }
  setWorkspaceSandboxSettings: {
    type: string;
    arguments: {
      preventSandboxExport: string;
      preventSandboxLeaving: string;
      teamId: string;
    }

  }
  softCancelSubscription: {
    type: string;
    arguments: {
      subscriptionId: string;
      teamId: string;
    }

  }
  unbookmarkTemplate: {
    type: string;
    arguments: {
      teamId: string;
      templateId: string;
    }

  }
  unmakeSandboxesTemplates: {
    type: string;
    arguments: {
      sandboxIds: string;
    }

  }
  unresolveComment: {
    type: string;
    arguments: {
      commentId: string;
      sandboxId: string;
    }

  }
  updateAlbum: {
    type: string;
    arguments: {
      description: string;
      id: string;
      title: string;
    }

  }
  updateComment: {
    type: string;
    arguments: {
      codeReferences: string;
      commentId: string;
      content: string;
      imageReferences: string;
      sandboxId: string;
      userReferences: string;
    }

  }
  updateCurrentUser: {
    type: string;
    arguments: {
      bio: string;
      name: string;
      socialLinks: string;
      username: string;
    }

  }
  updateNotificationPreferences: {
    type: string;
    arguments: {
      emailCommentMention: string;
      emailCommentReply: string;
      emailNewComment: string;
    }

  }
  updateNotificationReadStatus: {
    type: string;
    arguments: {
      notificationId: string;
      read: string;
    }

  }
  updateProjectEnvironment: {
    type: string;
    arguments: {
      environmentId: string;
      gitProvider: string;
      owner: string;
      repo: string;
    }

  }
  updateSubscription: {
    type: string;
    arguments: {
      quantity: string;
      subscriptionId: string;
      teamId: string;
    }

  }
  updateSubscriptionBillingInterval: {
    type: string;
    arguments: {
      billingInterval: string;
      subscriptionId: string;
      teamId: string;
    }

  }

}

export type RootQueryType = {
  album: {
    type: string;
    arguments: {
      albumId: string;
    }

  }
  albums: {
    type: string;
    arguments: {
      username: string;
    }

  }
  curatedAlbums: {
    type: string;
    arguments: null;
  }
  featureFlags: {
    type: string;
    arguments: null;
  }
  git: {
    type: string;
    arguments: {
      branch: string;
      path: string;
      repo: string;
      username: string;
    }

  }
  githubOrganizationRepos: {
    type: string;
    arguments: {
      organization: string;
      page: string;
      perPage: string;
    }

  }
  githubRepo: {
    type: string;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  me: {
    type: string;
    arguments: null;
  }
  project: {
    type: string;
    arguments: {
      gitProvider: string;
      owner: string;
      repo: string;
    }

  }
  sandbox: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  teamByToken: {
    type: string;
    arguments: {
      inviteToken: string;
    }

  }

}

export type RootSubscriptionType = {
  collaboratorAdded: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorChanged: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  collaboratorRemoved: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  commentAdded: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  commentChanged: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  commentRemoved: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  githubEvents: {
    type: string;
    arguments: {
      owner: string;
      repo: string;
    }

  }
  invitationChanged: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  invitationCreated: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  invitationRemoved: {
    type: string;
    arguments: {
      sandboxId: string;
    }

  }
  projectCommits: {
    type: string;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectConnections: {
    type: string;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  projectStatus: {
    type: string;
    arguments: {
      branchId: string;
      owner: string;
      repo: string;
    }

  }
  sandboxChanged: {
    type: string;
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
    type: string;
    arguments: null;
  }
  author: {
    type: string;
    arguments: null;
  }
  authorId: {
    type: string;
    arguments: null;
  }
  authorization: {
    type: string;
    arguments: null;
  }
  baseGit: {
    type: string;
    arguments: null;
  }
  collaborators: {
    type: string;
    arguments: null;
  }
  collection: {
    type: string;
    arguments: null;
  }
  comment: {
    type: string;
    arguments: {
      commentId: string;
    }

  }
  comments: {
    type: string;
    arguments: null;
  }
  customTemplate: {
    type: string;
    arguments: null;
  }
  description: {
    type: string;
    arguments: null;
  }
  forkCount: {
    type: string;
    arguments: null;
  }
  forkedTemplate: {
    type: string;
    arguments: null;
  }
  git: {
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
  invitations: {
    type: string;
    arguments: null;
  }
  isFrozen: {
    type: string;
    arguments: null;
  }
  isSse: {
    type: string;
    arguments: null;
  }
  isV2: {
    type: string;
    arguments: null;
  }
  lastAccessedAt: {
    type: string;
    arguments: null;
  }
  likeCount: {
    type: string;
    arguments: null;
  }
  originalGit: {
    type: string;
    arguments: null;
  }
  permissions: {
    type: string;
    arguments: null;
  }
  prNumber: {
    type: string;
    arguments: null;
  }
  privacy: {
    type: string;
    arguments: null;
  }
  removedAt: {
    type: string;
    arguments: null;
  }
  screenshotOutdated: {
    type: string;
    arguments: null;
  }
  screenshotUrl: {
    type: string;
    arguments: null;
  }
  source: {
    type: string;
    arguments: null;
  }
  team: {
    type: string;
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
    type: string;
    arguments: null;
  }

}

export type SandboxProtectionSettings = {
  preventSandboxExport: {
    type: string;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: string;
    arguments: null;
  }

}

export type SandboxV2 = {
  alias: {
    type: string;
    arguments: null;
  }
  authorization: {
    type: string;
    arguments: null;
  }
  collaborators: {
    type: string;
    arguments: null;
  }
  gitv2: {
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
  isV2: {
    type: string;
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
    type: string;
    arguments: null;
  }
  hasConflicts: {
    type: string;
    arguments: null;
  }
  remote: {
    type: string;
    arguments: null;
  }
  target: {
    type: string;
    arguments: null;
  }

}

export type StatusCommitCounts = {
  ahead: {
    type: string;
    arguments: null;
  }
  behind: {
    type: string;
    arguments: null;
  }

}

export type Team = {
  avatarUrl: {
    type: string;
    arguments: null;
  }
  beta: {
    type: string;
    arguments: null;
  }
  bookmarkedTemplates: {
    type: string;
    arguments: null;
  }
  collections: {
    type: string;
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
    type: string;
    arguments: {
      authorId: string;
      limit: string;
      orderBy: string;
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
    type: string;
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
    type: string;
    arguments: null;
  }
  projects: {
    type: string;
    arguments: {
      syncData: string;
    }

  }
  sandboxes: {
    type: string;
    arguments: {
      alwaysOn: string;
      authorId: string;
      hasOriginalGit: string;
      limit: string;
      orderBy: string;
      showDeleted: string;
    }

  }
  settings: {
    type: string;
    arguments: null;
  }
  subscription: {
    type: string;
    arguments: null;
  }
  templates: {
    type: string;
    arguments: null;
  }
  userAuthorizations: {
    type: string;
    arguments: null;
  }
  users: {
    type: string;
    arguments: null;
  }

}

export type TeamsFeatureFlag = {
  enabledForTeam: {
    type: string;
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
    type: string;
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
    type: string;
    arguments: null;
  }
  published: {
    type: string;
    arguments: null;
  }
  sandbox: {
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
    type: string;
    arguments: null;
  }
  userId: {
    type: string;
    arguments: null;
  }

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
    type: string;
    arguments: null;
  }
  minimumPrivacy: {
    type: string;
    arguments: null;
  }
  preventSandboxExport: {
    type: string;
    arguments: null;
  }
  preventSandboxLeaving: {
    type: string;
    arguments: null;
  }

}
