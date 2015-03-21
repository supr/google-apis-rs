initSidebarItems({"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["InstanceUpdate","Update of a single instance."],["InstanceUpdateError","Errors that occurred during the instance update."],["InstanceUpdateErrorErrors","[Output Only] The array of errors encountered while processing this operation."],["InstanceUpdateList","Response returned by ListInstanceUpdates method."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","An operation resource, used to manage asynchronous API requests."],["OperationError","[Output Only] If errors occurred during processing of this operation, this field will be populated."],["OperationErrorErrors","[Output Only] The array of errors encountered while processing this operation."],["OperationWarnings","There is no detailed description."],["OperationWarningsData","[Output only] Metadata for this warning in key:value format."],["Replicapoolupdater","Central instance to access all Replicapoolupdater related resource activities"],["RollingUpdate","The following represents a resource describing a single update (rollout) of a group of instances to the given template."],["RollingUpdateCancelCall","Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED."],["RollingUpdateError","[Output Only] Errors that occurred during rolling update."],["RollingUpdateErrorErrors","[Output Only] The array of errors encountered while processing this operation."],["RollingUpdateGetCall","Returns information about an update."],["RollingUpdateInsertCall","Inserts and starts a new update."],["RollingUpdateList","Response returned by List method."],["RollingUpdateListCall","Lists recent updates for a given managed instance group, in reverse chronological order and paginated format."],["RollingUpdateListInstanceUpdateCall","Lists the current status for each instance within a given update."],["RollingUpdateMethods","A builder providing access to all methods supported on *rollingUpdate* resources. It is not used directly, but through the `Replicapoolupdater` hub."],["RollingUpdatePauseCall","Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED."],["RollingUpdatePolicy","Parameters of the update process."],["RollingUpdateResumeCall","Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT."],["RollingUpdateRollbackCall","Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK."],["ZoneOperationGetCall","Retrieves the specified zone-specific operation resource."],["ZoneOperationMethods","A builder providing access to all methods supported on *zoneOperation* resources. It is not used directly, but through the `Replicapoolupdater` hub."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]]});