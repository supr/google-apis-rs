initSidebarItems({"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["InstanceGroupManager","An Instance Group Manager resource."],["InstanceGroupManagerAbandonInstanceCall","Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances."],["InstanceGroupManagerDeleteCall","Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group."],["InstanceGroupManagerDeleteInstanceCall","Deletes the specified instances. The instances are removed from the instance group and any target pools of which they are a member, then deleted. The targetSize of the instance group manager is reduced by the number of instances deleted."],["InstanceGroupManagerGetCall","Returns the specified Instance Group Manager resource."],["InstanceGroupManagerInsertCall","Creates an instance group manager, as well as the instance group and the specified number of instances."],["InstanceGroupManagerList","There is no detailed description."],["InstanceGroupManagerListCall","Retrieves the list of Instance Group Manager resources contained within the specified zone."],["InstanceGroupManagerMethods","A builder providing access to all methods supported on *instanceGroupManager* resources. It is not used directly, but through the `Replicapool` hub."],["InstanceGroupManagerRecreateInstanceCall","Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template."],["InstanceGroupManagerResizeCall","Resizes the managed instance group up or down. If resized up, new instances are created using the current instance template. If resized down, instances are removed in the order outlined in Resizing a managed instance group."],["InstanceGroupManagerSetInstanceTemplateCall","Sets the instance template to use when creating new instances in this group. Existing instances are not affected."],["InstanceGroupManagerSetTargetPoolCall","Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected."],["InstanceGroupManagersAbandonInstancesRequest","There is no detailed description."],["InstanceGroupManagersDeleteInstancesRequest","There is no detailed description."],["InstanceGroupManagersRecreateInstancesRequest","There is no detailed description."],["InstanceGroupManagersSetInstanceTemplateRequest","There is no detailed description."],["InstanceGroupManagersSetTargetPoolsRequest","There is no detailed description."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","An operation resource, used to manage asynchronous API requests."],["OperationError","[Output Only] If errors occurred during processing of this operation, this field will be populated."],["OperationErrorErrors","[Output Only] The array of errors encountered while processing this operation."],["OperationList","There is no detailed description."],["OperationWarnings","[Output Only] If there are issues with this operation, a warning is returned."],["OperationWarningsData","[Output only] Metadata for this warning in key:value format."],["Replicapool","Central instance to access all Replicapool related resource activities"],["ZoneOperationGetCall","Retrieves the specified zone-specific operation resource."],["ZoneOperationListCall","Retrieves the list of operation resources contained within the specified zone."],["ZoneOperationMethods","A builder providing access to all methods supported on *zoneOperation* resources. It is not used directly, but through the `Replicapool` hub."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});