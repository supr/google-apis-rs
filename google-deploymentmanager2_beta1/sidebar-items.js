initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Deployment","There is no detailed description."],["DeploymentDeleteCall","Deletes a deployment and all of the resources in the deployment."],["DeploymentGetCall","Gets information about a specific deployment."],["DeploymentInsertCall","Creates a deployment and all of the resources described by the deployment manifest."],["DeploymentListCall","Lists all deployments for a given project."],["DeploymentMethods","A builder providing access to all methods supported on *deployment* resources. It is not used directly, but through the `Deploymentmanager` hub."],["Deploymentmanager","Central instance to access all Deploymentmanager related resource activities"],["DeploymentsListResponse","A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Manifest","There is no detailed description."],["ManifestGetCall","Gets information about a specific manifest."],["ManifestListCall","Lists all manifests for a given deployment."],["ManifestMethods","A builder providing access to all methods supported on *manifest* resources. It is not used directly, but through the `Deploymentmanager` hub."],["ManifestsListResponse","A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","An operation resource, used to manage asynchronous API requests."],["OperationError","[Output Only] If errors occurred during processing of this operation, this field will be populated."],["OperationErrorErrors","The array of errors encountered while processing this operation."],["OperationGetCall","Gets information about a specific Operation."],["OperationListCall","Lists all Operations for a project."],["OperationMethods","A builder providing access to all methods supported on *operation* resources. It is not used directly, but through the `Deploymentmanager` hub."],["OperationWarnings","[Output Only] If warning messages generated during processing of this operation, this field will be populated."],["OperationWarningsData","Metadata for this warning in 'key: value' format."],["OperationsListResponse","A response containing a partial list of operations and a page token used to build the next request if the request has been truncated."],["ResourceGetCall","Gets information about a single resource."],["ResourceListCall","Lists all resources in a given deployment."],["ResourceMethods","A builder providing access to all methods supported on *resource* resources. It is not used directly, but through the `Deploymentmanager` hub."],["ResourceType","There is no detailed description."],["ResourcesListResponse","A response containing a partial list of resources and a page token used to build the next request if the request has been truncated."],["Type","A type supported by Deployment Manager."],["TypeListCall","Lists all Types for Deployment Manager."],["TypeMethods","A builder providing access to all methods supported on *type* resources. It is not used directly, but through the `Deploymentmanager` hub."],["TypesListResponse","A response that returns all Types supported by Deployment Manager"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});