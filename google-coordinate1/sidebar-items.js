initSidebarItems({"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"struct":[["Coordinate","Central instance to access all Coordinate related resource activities"],["CustomField","Custom field."],["CustomFieldDef","Custom field definition."],["CustomFieldDefListCall","Retrieves a list of custom field definitions for a team."],["CustomFieldDefListResponse","Collection of custom field definitions for a team."],["CustomFieldDefMethods","A builder providing access to all methods supported on *customFieldDef* resources. It is not used directly, but through the `Coordinate` hub."],["CustomFields","Collection of custom fields."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["EnumItemDef","Enum Item definition."],["Job","A job."],["JobChange","Change to a job. For example assigning the job to a different worker."],["JobGetCall","Retrieves a job, including all the changes made to the job."],["JobInsertCall","Inserts a new job. Only the state field of the job should be set."],["JobListCall","Retrieves jobs created or modified since the given timestamp."],["JobListResponse","Response from a List Jobs request."],["JobMethods","A builder providing access to all methods supported on *job* resources. It is not used directly, but through the `Coordinate` hub."],["JobPatchCall","Updates a job. Fields that are set in the job state will be updated. This method supports patch semantics."],["JobState","Current state of a job."],["JobUpdateCall","Updates a job. Fields that are set in the job state will be updated."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Location","Location of a job."],["LocationListCall","Retrieves a list of locations for a worker."],["LocationListResponse","Response from a List Locations request."],["LocationMethods","A builder providing access to all methods supported on *location* resources. It is not used directly, but through the `Coordinate` hub."],["LocationRecord","Recorded location of a worker."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Schedule","Job schedule."],["ScheduleGetCall","Retrieves the schedule for a job."],["ScheduleMethods","A builder providing access to all methods supported on *schedule* resources. It is not used directly, but through the `Coordinate` hub."],["SchedulePatchCall","Replaces the schedule of a job with the provided schedule. This method supports patch semantics."],["ScheduleUpdateCall","Replaces the schedule of a job with the provided schedule."],["Team","A Coordinate team."],["TeamListCall","Retrieves a list of teams for a user."],["TeamListResponse","Response from a List Teams request."],["TeamMethods","A builder providing access to all methods supported on *team* resources. It is not used directly, but through the `Coordinate` hub."],["TokenPagination","Pagination information."],["Worker","A worker in a Coordinate team."],["WorkerListCall","Retrieves a list of workers in a team."],["WorkerListResponse","Response from a List Workers request."],["WorkerMethods","A builder providing access to all methods supported on *worker* resources. It is not used directly, but through the `Coordinate` hub."]]});