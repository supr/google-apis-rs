initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"struct":[["Bucket","A bucket."],["BucketAccessControl","An access-control entry."],["BucketAccessControlDeleteCall","Permanently deletes the ACL entry for the specified entity on the specified bucket."],["BucketAccessControlGetCall","Returns the ACL entry for the specified entity on the specified bucket."],["BucketAccessControlInsertCall","Creates a new ACL entry on the specified bucket."],["BucketAccessControlListCall","Retrieves ACL entries on the specified bucket."],["BucketAccessControlMethods","A builder providing access to all methods supported on *bucketAccessControl* resources. It is not used directly, but through the `Storage` hub."],["BucketAccessControlPatchCall","Updates an ACL entry on the specified bucket. This method supports patch semantics."],["BucketAccessControlProjectTeam","The project team associated with the entity, if any."],["BucketAccessControlUpdateCall","Updates an ACL entry on the specified bucket."],["BucketAccessControls","An access-control list."],["BucketCors","The bucket's Cross-Origin Resource Sharing (CORS) configuration."],["BucketDeleteCall","Permanently deletes an empty bucket."],["BucketGetCall","Returns metadata for the specified bucket."],["BucketInsertCall","Creates a new bucket."],["BucketLifecycle","The bucket's lifecycle configuration. See lifecycle management for more information."],["BucketLifecycleRule","A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken."],["BucketLifecycleRuleAction","The action to take."],["BucketLifecycleRuleCondition","The condition(s) under which the action will be taken."],["BucketListCall","Retrieves a list of buckets for a given project."],["BucketLogging","The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs."],["BucketMethods","A builder providing access to all methods supported on *bucket* resources. It is not used directly, but through the `Storage` hub."],["BucketOwner","The owner of the bucket. This is always the project team's owner group."],["BucketPatchCall","Updates a bucket. This method supports patch semantics."],["BucketUpdateCall","Updates a bucket."],["BucketVersioning","The bucket's versioning configuration."],["BucketWebsite","The bucket's website configuration."],["Buckets","A list of buckets."],["Channel","An notification channel used to watch for resource changes."],["ChannelMethods","A builder providing access to all methods supported on *channel* resources. It is not used directly, but through the `Storage` hub."],["ChannelStopCall","Stop watching resources through this channel"],["ComposeRequest","A Compose request."],["ComposeRequestSourceObjects","The list of source objects that will be concatenated into a single object."],["ComposeRequestSourceObjectsObjectPreconditions","Conditions that must be met for this operation to execute."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DefaultObjectAccessControlDeleteCall","Permanently deletes the default object ACL entry for the specified entity on the specified bucket."],["DefaultObjectAccessControlGetCall","Returns the default object ACL entry for the specified entity on the specified bucket."],["DefaultObjectAccessControlInsertCall","Creates a new default object ACL entry on the specified bucket."],["DefaultObjectAccessControlListCall","Retrieves default object ACL entries on the specified bucket."],["DefaultObjectAccessControlMethods","A builder providing access to all methods supported on *defaultObjectAccessControl* resources. It is not used directly, but through the `Storage` hub."],["DefaultObjectAccessControlPatchCall","Updates a default object ACL entry on the specified bucket. This method supports patch semantics."],["DefaultObjectAccessControlUpdateCall","Updates a default object ACL entry on the specified bucket."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Object","An object."],["ObjectAccessControl","An access-control entry."],["ObjectAccessControlDeleteCall","Permanently deletes the ACL entry for the specified entity on the specified object."],["ObjectAccessControlGetCall","Returns the ACL entry for the specified entity on the specified object."],["ObjectAccessControlInsertCall","Creates a new ACL entry on the specified object."],["ObjectAccessControlListCall","Retrieves ACL entries on the specified object."],["ObjectAccessControlMethods","A builder providing access to all methods supported on *objectAccessControl* resources. It is not used directly, but through the `Storage` hub."],["ObjectAccessControlPatchCall","Updates an ACL entry on the specified object. This method supports patch semantics."],["ObjectAccessControlProjectTeam","The project team associated with the entity, if any."],["ObjectAccessControlUpdateCall","Updates an ACL entry on the specified object."],["ObjectAccessControls","An access-control list."],["ObjectComposeCall","Concatenates a list of existing objects into a new object in the same bucket."],["ObjectCopyCall","Copies an object to a specified location. Optionally overrides metadata."],["ObjectDeleteCall","Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used."],["ObjectGetCall","Retrieves an object or its metadata."],["ObjectInsertCall","Stores a new object and metadata."],["ObjectListCall","Retrieves a list of objects matching the criteria."],["ObjectMethods","A builder providing access to all methods supported on *object* resources. It is not used directly, but through the `Storage` hub."],["ObjectOwner","The owner of the object. This will always be the uploader of the object."],["ObjectPatchCall","Updates an object's metadata. This method supports patch semantics."],["ObjectUpdateCall","Updates an object's metadata."],["ObjectWatchAllCall","Watch for changes on all objects in a bucket."],["Objects","A list of objects."],["Storage","Central instance to access all Storage related resource activities"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});