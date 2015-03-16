initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"struct":[["Bucket","A bucket.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update buckets (request|response) * insert buckets (request|response) * delete buckets (none) * patch buckets (request|response) * list buckets (none) * get buckets (response)  "],["BucketAccessControl","An access-control entry.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list bucket access controls (none) * patch bucket access controls (request|response) * delete bucket access controls (none) * update bucket access controls (request|response) * get bucket access controls (response) * insert bucket access controls (request|response)  "],["BucketAccessControlDeleteMethodBuilder","Permanently deletes the ACL entry for the specified entity on the specified bucket."],["BucketAccessControlGetMethodBuilder","Returns the ACL entry for the specified entity on the specified bucket."],["BucketAccessControlInsertMethodBuilder","Creates a new ACL entry on the specified bucket."],["BucketAccessControlListMethodBuilder","Retrieves ACL entries on the specified bucket."],["BucketAccessControlMethodsBuilder","A builder providing access to all methods supported on *bucketAccessControl* resources. It is not used directly, but through the `Storage` hub."],["BucketAccessControlPatchMethodBuilder","Updates an ACL entry on the specified bucket. This method supports patch semantics."],["BucketAccessControlProjectTeam","The project team associated with the entity, if any.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketAccessControlUpdateMethodBuilder","Updates an ACL entry on the specified bucket."],["BucketAccessControls","An access-control list.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list bucket access controls (response)  "],["BucketCors","The bucket's Cross-Origin Resource Sharing (CORS) configuration.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketDeleteMethodBuilder","Permanently deletes an empty bucket."],["BucketGetMethodBuilder","Returns metadata for the specified bucket."],["BucketInsertMethodBuilder","Creates a new bucket."],["BucketLifecycle","The bucket's lifecycle configuration. See lifecycle management for more information.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketLifecycleRule","A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketLifecycleRuleAction","The action to take.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketLifecycleRuleCondition","The condition(s) under which the action will be taken.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketListMethodBuilder","Retrieves a list of buckets for a given project."],["BucketLogging","The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketMethodsBuilder","A builder providing access to all methods supported on *bucket* resources. It is not used directly, but through the `Storage` hub."],["BucketOwner","The owner of the bucket. This is always the project team's owner group.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketPatchMethodBuilder","Updates a bucket. This method supports patch semantics."],["BucketUpdateMethodBuilder","Updates a bucket."],["BucketVersioning","The bucket's versioning configuration.   This type is not used in any activity, and only used as *part* of another schema.  "],["BucketWebsite","The bucket's website configuration.   This type is not used in any activity, and only used as *part* of another schema.  "],["Buckets","A list of buckets.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list buckets (response)  "],["Channel","An notification channel used to watch for resource changes.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * stop channels (request) * watch all objects (request|response)  "],["ChannelMethodsBuilder","A builder providing access to all methods supported on *channel* resources. It is not used directly, but through the `Storage` hub."],["ChannelStopMethodBuilder","Stop watching resources through this channel"],["ComposeRequest","A Compose request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * compose objects (request)  "],["ComposeRequestSourceObjects","The list of source objects that will be concatenated into a single object.   This type is not used in any activity, and only used as *part* of another schema.  "],["ComposeRequestSourceObjectsObjectPreconditions","Conditions that must be met for this operation to execute.   This type is not used in any activity, and only used as *part* of another schema.  "],["DefaultObjectAccessControlDeleteMethodBuilder","Permanently deletes the default object ACL entry for the specified entity on the specified bucket."],["DefaultObjectAccessControlGetMethodBuilder","Returns the default object ACL entry for the specified entity on the specified bucket."],["DefaultObjectAccessControlInsertMethodBuilder","Creates a new default object ACL entry on the specified bucket."],["DefaultObjectAccessControlListMethodBuilder","Retrieves default object ACL entries on the specified bucket."],["DefaultObjectAccessControlMethodsBuilder","A builder providing access to all methods supported on *defaultObjectAccessControl* resources. It is not used directly, but through the `Storage` hub."],["DefaultObjectAccessControlPatchMethodBuilder","Updates a default object ACL entry on the specified bucket. This method supports patch semantics."],["DefaultObjectAccessControlUpdateMethodBuilder","Updates a default object ACL entry on the specified bucket."],["Object","An object.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list objects (none) * update objects (request|response) * copy objects (request|response) * watch all objects (none) * get objects (response) * insert objects (request|response) * compose objects (response) * delete objects (none) * patch objects (request|response)  "],["ObjectAccessControl","An access-control entry.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get object access controls (response) * patch default object access controls (request|response) * update object access controls (request|response) * list object access controls (none) * patch object access controls (request|response) * update default object access controls (request|response) * insert default object access controls (request|response) * insert object access controls (request|response) * delete object access controls (none) * get default object access controls (response)  "],["ObjectAccessControlDeleteMethodBuilder","Permanently deletes the ACL entry for the specified entity on the specified object."],["ObjectAccessControlGetMethodBuilder","Returns the ACL entry for the specified entity on the specified object."],["ObjectAccessControlInsertMethodBuilder","Creates a new ACL entry on the specified object."],["ObjectAccessControlListMethodBuilder","Retrieves ACL entries on the specified object."],["ObjectAccessControlMethodsBuilder","A builder providing access to all methods supported on *objectAccessControl* resources. It is not used directly, but through the `Storage` hub."],["ObjectAccessControlPatchMethodBuilder","Updates an ACL entry on the specified object. This method supports patch semantics."],["ObjectAccessControlProjectTeam","The project team associated with the entity, if any.   This type is not used in any activity, and only used as *part* of another schema.  "],["ObjectAccessControlUpdateMethodBuilder","Updates an ACL entry on the specified object."],["ObjectAccessControls","An access-control list.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list object access controls (response) * list default object access controls (response)  "],["ObjectComposeMethodBuilder","Concatenates a list of existing objects into a new object in the same bucket."],["ObjectCopyMethodBuilder","Copies an object to a specified location. Optionally overrides metadata."],["ObjectDeleteMethodBuilder","Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used."],["ObjectGetMethodBuilder","Retrieves an object or its metadata."],["ObjectInsertMethodBuilder","Stores a new object and metadata."],["ObjectListMethodBuilder","Retrieves a list of objects matching the criteria."],["ObjectMethodsBuilder","A builder providing access to all methods supported on *object* resources. It is not used directly, but through the `Storage` hub."],["ObjectOwner","The owner of the object. This will always be the uploader of the object.   This type is not used in any activity, and only used as *part* of another schema.  "],["ObjectPatchMethodBuilder","Updates an object's metadata. This method supports patch semantics."],["ObjectUpdateMethodBuilder","Updates an object's metadata."],["ObjectWatchAllMethodBuilder","Watch for changes on all objects in a bucket."],["Objects","A list of objects.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list objects (response)  "],["Storage","Central instance to access all Storage related resource activities"]],"mod":[["cmn",""]]});