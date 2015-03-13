initSidebarItems({"mod":[["cmn",""]],"struct":[["Coordinate","Central instance to access all Coordinate related resource activities"],["CustomField","Custom field.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomFieldDef","Custom field definition.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomFieldDefListMethodBuilder","Retrieves a list of custom field definitions for a team."],["CustomFieldDefListResponse","Collection of custom field definitions for a team.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.CustomFieldDefListMethodBuilder.html) (response)    "],["CustomFieldDefMethodsBuilder","A builder providing access to all methods supported on *customFieldDef* resources. It is not used directly, but through the `Coordinate` hub."],["CustomFields","Collection of custom fields.   This type is not used in any activity, and only used as *part* of another schema.  "],["EnumItemDef","Enum Item definition.   This type is not used in any activity, and only used as *part* of another schema.  "],["Job","A job.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [get](struct.JobGetMethodBuilder.html) (response) * [update](struct.JobUpdateMethodBuilder.html) (request|response) * [patch](struct.JobPatchMethodBuilder.html) (request|response) * [list](struct.JobListMethodBuilder.html) (none) * [insert](struct.JobInsertMethodBuilder.html) (request|response)    "],["JobChange","Change to a job. For example assigning the job to a different worker.   This type is not used in any activity, and only used as *part* of another schema.  "],["JobGetMethodBuilder","Retrieves a job, including all the changes made to the job."],["JobInsertMethodBuilder","Inserts a new job. Only the state field of the job should be set."],["JobListMethodBuilder","Retrieves jobs created or modified since the given timestamp."],["JobListResponse","Response from a List Jobs request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.JobListMethodBuilder.html) (response)    "],["JobMethodsBuilder","A builder providing access to all methods supported on *job* resources. It is not used directly, but through the `Coordinate` hub."],["JobPatchMethodBuilder","Updates a job. Fields that are set in the job state will be updated. This method supports patch semantics."],["JobState","Current state of a job.   This type is not used in any activity, and only used as *part* of another schema.  "],["JobUpdateMethodBuilder","Updates a job. Fields that are set in the job state will be updated."],["Location","Location of a job.   This type is not used in any activity, and only used as *part* of another schema.  "],["LocationListMethodBuilder","Retrieves a list of locations for a worker."],["LocationListResponse","Response from a List Locations request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.LocationListMethodBuilder.html) (response)    "],["LocationMethodsBuilder","A builder providing access to all methods supported on *location* resources. It is not used directly, but through the `Coordinate` hub."],["LocationRecord","Recorded location of a worker.   This type is not used in any activity, and only used as *part* of another schema.  "],["Schedule","Job schedule.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [update](struct.ScheduleUpdateMethodBuilder.html) (request|response) * [patch](struct.SchedulePatchMethodBuilder.html) (request|response) * [get](struct.ScheduleGetMethodBuilder.html) (response)    "],["ScheduleGetMethodBuilder","Retrieves the schedule for a job."],["ScheduleMethodsBuilder","A builder providing access to all methods supported on *schedule* resources. It is not used directly, but through the `Coordinate` hub."],["SchedulePatchMethodBuilder","Replaces the schedule of a job with the provided schedule. This method supports patch semantics."],["ScheduleUpdateMethodBuilder","Replaces the schedule of a job with the provided schedule."],["Team","A Coordinate team.   This type is not used in any activity, and only used as *part* of another schema.  "],["TeamListMethodBuilder","Retrieves a list of teams for a user."],["TeamListResponse","Response from a List Teams request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.TeamListMethodBuilder.html) (response)    "],["TeamMethodsBuilder","A builder providing access to all methods supported on *team* resources. It is not used directly, but through the `Coordinate` hub."],["TokenPagination","Pagination information.   This type is not used in any activity, and only used as *part* of another schema.  "],["Worker","A worker in a Coordinate team.   This type is not used in any activity, and only used as *part* of another schema.  "],["WorkerListMethodBuilder","Retrieves a list of workers in a team."],["WorkerListResponse","Response from a List Workers request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.WorkerListMethodBuilder.html) (response)    "],["WorkerMethodsBuilder","A builder providing access to all methods supported on *worker* resources. It is not used directly, but through the `Coordinate` hub."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an [authorization token](https://developers.google.com/youtube/v3/guides/authentication)."]]});