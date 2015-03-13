initSidebarItems({"struct":[["InstanceUpdate","Update of a single instance.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceUpdateError","Errors that occurred during the instance update.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceUpdateErrorErrors","[Output Only] The array of errors encountered while processing this operation.   This type is not used in any activity, and only used as *part* of another schema.  "],["InstanceUpdateList","Response returned by ListInstanceUpdates method.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [listInstanceUpdates](struct.RollingUpdateListInstanceUpdateMethodBuilder.html) (response)    "],["Operation","An operation resource, used to manage asynchronous API requests.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [pause](struct.RollingUpdatePauseMethodBuilder.html) (response) * [get](struct.ZoneOperationGetMethodBuilder.html) (response) * [rollback](struct.RollingUpdateRollbackMethodBuilder.html) (response) * [resume](struct.RollingUpdateResumeMethodBuilder.html) (response) * [insert](struct.RollingUpdateInsertMethodBuilder.html) (response) * [cancel](struct.RollingUpdateCancelMethodBuilder.html) (response)    "],["OperationError","[Output Only] If errors occurred during processing of this operation, this field will be populated.   This type is not used in any activity, and only used as *part* of another schema.  "],["OperationErrorErrors","[Output Only] The array of errors encountered while processing this operation.   This type is not used in any activity, and only used as *part* of another schema.  "],["OperationWarnings","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["OperationWarningsData","[Output only] Metadata for this warning in key:value format.   This type is not used in any activity, and only used as *part* of another schema.  "],["Replicapoolupdater","Central instance to access all Replicapoolupdater related resource activities"],["RollingUpdate","The following represents a resource describing a single update (rollout) of a group of instances to the given template.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [pause](struct.RollingUpdatePauseMethodBuilder.html) (none) * [rollback](struct.RollingUpdateRollbackMethodBuilder.html) (none) * [get](struct.RollingUpdateGetMethodBuilder.html) (response) * [resume](struct.RollingUpdateResumeMethodBuilder.html) (none) * [list](struct.RollingUpdateListMethodBuilder.html) (none) * [insert](struct.RollingUpdateInsertMethodBuilder.html) (request) * [listInstanceUpdates](struct.RollingUpdateListInstanceUpdateMethodBuilder.html) (none) * [cancel](struct.RollingUpdateCancelMethodBuilder.html) (none)    "],["RollingUpdateCancelMethodBuilder","Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED."],["RollingUpdateError","[Output Only] Errors that occurred during rolling update.   This type is not used in any activity, and only used as *part* of another schema.  "],["RollingUpdateErrorErrors","[Output Only] The array of errors encountered while processing this operation.   This type is not used in any activity, and only used as *part* of another schema.  "],["RollingUpdateGetMethodBuilder","Returns information about an update."],["RollingUpdateInsertMethodBuilder","Inserts and starts a new update."],["RollingUpdateList","Response returned by List method.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.RollingUpdateListMethodBuilder.html) (response)    "],["RollingUpdateListInstanceUpdateMethodBuilder","Lists the current status for each instance within a given update."],["RollingUpdateListMethodBuilder","Lists recent updates for a given managed instance group, in reverse chronological order and paginated format."],["RollingUpdateMethodsBuilder","A builder providing access to all methods supported on *rollingUpdate* resources. It is not used directly, but through the `Replicapoolupdater` hub."],["RollingUpdatePauseMethodBuilder","Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED."],["RollingUpdatePolicy","Parameters of the update process.   This type is not used in any activity, and only used as *part* of another schema.  "],["RollingUpdateResumeMethodBuilder","Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT."],["RollingUpdateRollbackMethodBuilder","Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK."],["ZoneOperationGetMethodBuilder","Retrieves the specified zone-specific operation resource."],["ZoneOperationMethodsBuilder","A builder providing access to all methods supported on *zoneOperation* resources. It is not used directly, but through the `Replicapoolupdater` hub."]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an [authorization token](https://developers.google.com/youtube/v3/guides/authentication)."]],"mod":[["cmn",""]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});