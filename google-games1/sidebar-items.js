initSidebarItems({"struct":[["AchievementDefinition","This is a JSON template for an achievement definition object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list achievement definitions (none)  "],["AchievementDefinitionListMethodBuilder","Lists all the achievement definitions for your application."],["AchievementDefinitionMethodsBuilder","A builder providing access to all methods supported on *achievementDefinition* resources. It is not used directly, but through the `Games` hub."],["AchievementDefinitionsListResponse","This is a JSON template for a list of achievement definition objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list achievement definitions (response)  "],["AchievementIncrementMethodBuilder","Increments the steps of the achievement with the given ID for the currently authenticated player."],["AchievementIncrementResponse","This is a JSON template for an achievement increment response   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * increment achievements (response)  "],["AchievementListMethodBuilder","Lists the progress for all your application's achievements for the currently authenticated player."],["AchievementMethodsBuilder","A builder providing access to all methods supported on *achievement* resources. It is not used directly, but through the `Games` hub."],["AchievementRevealMethodBuilder","Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player."],["AchievementRevealResponse","This is a JSON template for an achievement reveal response   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * reveal achievements (response)  "],["AchievementSetStepsAtLeastMethodBuilder","Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified."],["AchievementSetStepsAtLeastResponse","This is a JSON template for an achievement set steps at least response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * set steps at least achievements (response)  "],["AchievementUnlockMethodBuilder","Unlocks this achievement for the currently authenticated player."],["AchievementUnlockResponse","This is a JSON template for an achievement unlock response   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * unlock achievements (response)  "],["AchievementUpdateMultipleMethodBuilder","Updates multiple achievements for the currently authenticated player."],["AchievementUpdateMultipleRequest","This is a JSON template for a list of achievement update requests.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update multiple achievements (request)  "],["AchievementUpdateMultipleResponse","This is a JSON template for an achievement unlock response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update multiple achievements (response)  "],["AchievementUpdateRequest","This is a JSON template for a request to update an achievement.   This type is not used in any activity, and only used as *part* of another schema.  "],["AchievementUpdateResponse","This is a JSON template for an achievement update response.   This type is not used in any activity, and only used as *part* of another schema.  "],["AggregateStats","This is a JSON template for aggregate stats.   This type is not used in any activity, and only used as *part* of another schema.  "],["AnonymousPlayer","This is a JSON template for an anonymous player   This type is not used in any activity, and only used as *part* of another schema.  "],["Application","This is a JSON template for the Application resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get applications (response) * played applications (none)  "],["ApplicationCategory","This is a JSON template for an application category object.   This type is not used in any activity, and only used as *part* of another schema.  "],["ApplicationGetMethodBuilder","Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data."],["ApplicationMethodsBuilder","A builder providing access to all methods supported on *application* resources. It is not used directly, but through the `Games` hub."],["ApplicationPlayedMethodBuilder","Indicate that the the currently authenticated user is playing your application."],["Category","This is a JSON template for data related to individual game categories.   This type is not used in any activity, and only used as *part* of another schema.  "],["CategoryListResponse","This is a JSON template for a list of category data objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list categories by player metagame (response)  "],["EventBatchRecordFailure","This is a JSON template for a batch update failure resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventChild","This is a JSON template for an event child relationship resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventDefinition","This is a JSON template for an event definition resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventDefinitionListResponse","This is a JSON template for a ListDefinitions response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list definitions events (response)  "],["EventListByPlayerMethodBuilder","Returns a list showing the current progress on events in this application for the currently authenticated user."],["EventListDefinitionMethodBuilder","Returns a list of the event definitions in this application."],["EventMethodsBuilder","A builder providing access to all methods supported on *event* resources. It is not used directly, but through the `Games` hub."],["EventPeriodRange","This is a JSON template for an event period time range.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventPeriodUpdate","This is a JSON template for an event period update resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventRecordFailure","This is a JSON template for an event update failure resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventRecordMethodBuilder","Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application."],["EventRecordRequest","This is a JSON template for an event period update resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * record events (request)  "],["EventUpdateRequest","This is a JSON template for an event period update resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventUpdateResponse","This is a JSON template for an event period update resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * record events (response)  "],["Games","Central instance to access all Games related resource activities"],["GamesAchievementIncrement","This is a JSON template for the payload to request to increment an achievement.   This type is not used in any activity, and only used as *part* of another schema.  "],["GamesAchievementSetStepsAtLeast","This is a JSON template for the payload to request to increment an achievement.   This type is not used in any activity, and only used as *part* of another schema.  "],["ImageAsset","This is a JSON template for an image asset object.   This type is not used in any activity, and only used as *part* of another schema.  "],["Instance","This is a JSON template for the Instance resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceAndroidDetails","This is a JSON template for the Android instance details resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceIosDetails","This is a JSON template for the iOS details resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceWebDetails","This is a JSON template for the Web details resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["Leaderboard","This is a JSON template for the Leaderboard resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list leaderboards (none) * get leaderboards (response)  "],["LeaderboardEntry","This is a JSON template for the Leaderboard Entry resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["LeaderboardGetMethodBuilder","Retrieves the metadata of the leaderboard with the given ID."],["LeaderboardListMethodBuilder","Lists all the leaderboard metadata for your application."],["LeaderboardListResponse","This is a JSON template for a list of leaderboard objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list leaderboards (response)  "],["LeaderboardMethodsBuilder","A builder providing access to all methods supported on *leaderboard* resources. It is not used directly, but through the `Games` hub."],["LeaderboardScoreRank","This is a JSON template for a score rank in a leaderboard.   This type is not used in any activity, and only used as *part* of another schema.  "],["LeaderboardScores","This is a JSON template for a ListScores response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list window scores (response) * list scores (response)  "],["MetagameConfig","This is a JSON template for the metagame config resource   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get metagame config metagame (response)  "],["MetagameGetMetagameConfigMethodBuilder","Return the metagame configuration data for the calling application."],["MetagameListCategoriesByPlayerMethodBuilder","List play data aggregated per category for the player corresponding to playerId."],["MetagameMethodsBuilder","A builder providing access to all methods supported on *metagame* resources. It is not used directly, but through the `Games` hub."],["NetworkDiagnostics","This is a JSON template for network diagnostics reported for a client.   This type is not used in any activity, and only used as *part* of another schema.  "],["ParticipantResult","This is a JSON template for a result for a match participant.   This type is not used in any activity, and only used as *part* of another schema.  "],["PeerChannelDiagnostics","This is a JSON template for peer channel diagnostics.   This type is not used in any activity, and only used as *part* of another schema.  "],["PeerSessionDiagnostics","This is a JSON template for peer session diagnostics.   This type is not used in any activity, and only used as *part* of another schema.  "],["Played","This is a JSON template for metadata about a player playing a game with the currently authenticated user.   This type is not used in any activity, and only used as *part* of another schema.  "],["Player","This is a JSON template for a Player resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list players (none) * get players (response)  "],["PlayerAchievement","This is a JSON template for an achievement object.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerAchievementListResponse","This is a JSON template for a list of achievement objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list achievements (response)  "],["PlayerEvent","This is a JSON template for an event status resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerEventListResponse","This is a JSON template for a ListByPlayer response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list by player events (response)  "],["PlayerExperienceInfo","This is a JSON template for 1P/3P metadata about the player's experience.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerGetMethodBuilder","Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me."],["PlayerLeaderboardScore","This is a JSON template for a player leaderboard score object.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerLeaderboardScoreListResponse","This is a JSON template for a list of player leaderboard scores.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get scores (response)  "],["PlayerLevel","This is a JSON template for 1P/3P metadata about a user's level.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerListMethodBuilder","Get the collection of players for the currently authenticated user."],["PlayerListResponse","This is a JSON template for a third party player list response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list players (response)  "],["PlayerMethodsBuilder","A builder providing access to all methods supported on *player* resources. It is not used directly, but through the `Games` hub."],["PlayerName","An object representation of the individual components of the player's name. For some players, these fields may not be present.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerScore","This is a JSON template for a player score.   This type is not used in any activity, and only used as *part* of another schema.  "],["PlayerScoreListResponse","This is a JSON template for a list of score submission statuses.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * submit multiple scores (response)  "],["PlayerScoreResponse","This is a JSON template for a list of leaderboard entry resources.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * submit scores (response)  "],["PlayerScoreSubmissionList","This is a JSON template for a list of score submission requests   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * submit multiple scores (request)  "],["PushToken","This is a JSON template for a push token resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update pushtokens (request)  "],["PushTokenId","This is a JSON template for a push token ID resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * remove pushtokens (request)  "],["PushTokenIdIos","A push token ID for iOS devices.   This type is not used in any activity, and only used as *part* of another schema.  "],["PushtokenMethodsBuilder","A builder providing access to all methods supported on *pushtoken* resources. It is not used directly, but through the `Games` hub."],["PushtokenRemoveMethodBuilder","Removes a push token for the current user and application. Removing a non-existent push token will report success."],["PushtokenUpdateMethodBuilder","Registers a push token for the current user and application."],["Quest","This is a JSON template for a Quest resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * accept quests (response) * list quests (none)  "],["QuestAcceptMethodBuilder","Indicates that the currently authorized user will participate in the quest."],["QuestContribution","This is a JSON template for a Quest Criterion Contribution resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["QuestCriterion","This is a JSON template for a Quest Criterion resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["QuestListMethodBuilder","Get a list of quests for your application and the currently authenticated player."],["QuestListResponse","This is a JSON template for a list of quest objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list quests (response)  "],["QuestMethodsBuilder","A builder providing access to all methods supported on *quest* resources. It is not used directly, but through the `Games` hub."],["QuestMilestone","This is a JSON template for a Quest Milestone resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * claim quest milestones (none)  "],["QuestMilestoneClaimMethodBuilder","Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user."],["QuestMilestoneMethodsBuilder","A builder providing access to all methods supported on *questMilestone* resources. It is not used directly, but through the `Games` hub."],["RevisionCheckMethodBuilder","Checks whether the games client is out of date."],["RevisionCheckResponse","This is a JSON template for the result of checking a revision.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * check revisions (response)  "],["RevisionMethodsBuilder","A builder providing access to all methods supported on *revision* resources. It is not used directly, but through the `Games` hub."],["Room","This is a JSON template for a room resource object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * decline rooms (response) * leave rooms (response) * dismiss rooms (none) * list rooms (none) * create rooms (response) * get rooms (response) * join rooms (response) * report status rooms (none)  "],["RoomAutoMatchStatus","This is a JSON template for status of room automatching that is in progress.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomAutoMatchingCriteria","This is a JSON template for a room auto-match criteria object.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomClientAddress","This is a JSON template for the client address when setting up a room.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomCreateMethodBuilder","Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomCreateRequest","This is a JSON template for a room creation request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * create rooms (request)  "],["RoomDeclineMethodBuilder","Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomDismisMethodBuilder","Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomGetMethodBuilder","Get the data for a room."],["RoomJoinMethodBuilder","Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomJoinRequest","This is a JSON template for a join room request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * join rooms (request)  "],["RoomLeaveDiagnostics","This is a JSON template for room leave diagnostics.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomLeaveMethodBuilder","Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomLeaveRequest","This is a JSON template for a leave room request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * leave rooms (request)  "],["RoomList","This is a JSON template for a list of rooms.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list rooms (response)  "],["RoomListMethodBuilder","Returns invitations to join rooms."],["RoomMethodsBuilder","A builder providing access to all methods supported on *room* resources. It is not used directly, but through the `Games` hub."],["RoomModification","This is a JSON template for room modification metadata.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomP2PStatus","This is a JSON template for an update on the status of a peer in a room.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomP2PStatuses","This is a JSON template for an update on the status of peers in a room.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * report status rooms (request)  "],["RoomParticipant","This is a JSON template for a participant in a room.   This type is not used in any activity, and only used as *part* of another schema.  "],["RoomReportStatuMethodBuilder","Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomStatus","This is a JSON template for the status of a room that the player has joined.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * report status rooms (response)  "],["ScoreGetMethodBuilder","Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span. NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'."],["ScoreListMethodBuilder","Lists the scores in a leaderboard, starting from the top."],["ScoreListWindowMethodBuilder","Lists the scores in a leaderboard around (and including) a player's score."],["ScoreMethodsBuilder","A builder providing access to all methods supported on *score* resources. It is not used directly, but through the `Games` hub."],["ScoreSubmission","This is a JSON template for a request to submit a score to leaderboards.   This type is not used in any activity, and only used as *part* of another schema.  "],["ScoreSubmitMethodBuilder","Submits a score to the specified leaderboard."],["ScoreSubmitMultipleMethodBuilder","Submits multiple scores to leaderboards."],["Snapshot","This is a JSON template for an snapshot object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list snapshots (none) * get snapshots (response)  "],["SnapshotGetMethodBuilder","Retrieves the metadata for a given snapshot ID."],["SnapshotImage","This is a JSON template for an image of a snapshot.   This type is not used in any activity, and only used as *part* of another schema.  "],["SnapshotListMethodBuilder","Retrieves a list of snapshots created by your application for the player corresponding to the player ID."],["SnapshotListResponse","This is a JSON template for a list of snapshot objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list snapshots (response)  "],["SnapshotMethodsBuilder","A builder providing access to all methods supported on *snapshot* resources. It is not used directly, but through the `Games` hub."],["TurnBasedAutoMatchingCriteria","This is a JSON template for an turn-based auto-match criteria object.   This type is not used in any activity, and only used as *part* of another schema.  "],["TurnBasedMatch","This is a JSON template for a turn-based match resource object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * decline turn based matches (response) * leave turn based matches (response) * finish turn based matches (response) * take turn turn based matches (response) * create turn based matches (response) * join turn based matches (response) * leave turn turn based matches (response) * get turn based matches (response)  "],["TurnBasedMatchCreateRequest","This is a JSON template for a turn-based match creation request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * create turn based matches (request)  "],["TurnBasedMatchData","This is a JSON template for a turn-based match data object.   This type is not used in any activity, and only used as *part* of another schema.  "],["TurnBasedMatchDataRequest","This is a JSON template for sending a turn-based match data object.   This type is not used in any activity, and only used as *part* of another schema.  "],["TurnBasedMatchList","This is a JSON template for a list of turn-based matches.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list turn based matches (response)  "],["TurnBasedMatchModification","This is a JSON template for turn-based match modification metadata.   This type is not used in any activity, and only used as *part* of another schema.  "],["TurnBasedMatchParticipant","This is a JSON template for a participant in a turn-based match.   This type is not used in any activity, and only used as *part* of another schema.  "],["TurnBasedMatchRematch","This is a JSON template for a rematch response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * rematch turn based matches (response)  "],["TurnBasedMatchResults","This is a JSON template for a turn-based match results object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * finish turn based matches (request)  "],["TurnBasedMatchSync","This is a JSON template for a list of turn-based matches returned from a sync.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * sync turn based matches (response)  "],["TurnBasedMatchTurn","This is a JSON template for the object representing a turn.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * take turn turn based matches (request)  "],["TurnBasedMatcheCancelMethodBuilder","Cancel a turn-based match."],["TurnBasedMatcheCreateMethodBuilder","Create a turn-based match."],["TurnBasedMatcheDeclineMethodBuilder","Decline an invitation to play a turn-based match."],["TurnBasedMatcheDismisMethodBuilder","Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications."],["TurnBasedMatcheFinishMethodBuilder","Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state."],["TurnBasedMatcheGetMethodBuilder","Get the data for a turn-based match."],["TurnBasedMatcheJoinMethodBuilder","Join a turn-based match."],["TurnBasedMatcheLeaveMethodBuilder","Leave a turn-based match when it is not the current player's turn, without canceling the match."],["TurnBasedMatcheLeaveTurnMethodBuilder","Leave a turn-based match during the current player's turn, without canceling the match."],["TurnBasedMatcheListMethodBuilder","Returns turn-based matches the player is or was involved in."],["TurnBasedMatcheMethodsBuilder","A builder providing access to all methods supported on *turnBasedMatche* resources. It is not used directly, but through the `Games` hub."],["TurnBasedMatcheRematchMethodBuilder","Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn."],["TurnBasedMatcheSyncMethodBuilder","Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED."],["TurnBasedMatcheTakeTurnMethodBuilder","Commit the results of a player turn."]],"mod":[["cmn",""]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});