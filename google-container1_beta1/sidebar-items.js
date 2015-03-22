initSidebarItems({"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"struct":[["Cluster","There is no detailed description."],["Container","Central instance to access all Container related resource activities"],["CreateClusterRequest","There is no detailed description."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListAggregatedClustersResponse","There is no detailed description."],["ListAggregatedOperationsResponse","There is no detailed description."],["ListClustersResponse","There is no detailed description."],["ListOperationsResponse","There is no detailed description."],["MasterAuth","There is no detailed description."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NodeConfig","There is no detailed description."],["Operation","Defines the operation resource. All fields are output only."],["ProjectClusterListCall","Lists all clusters owned by a project across all zones."],["ProjectMethods","A builder providing access to all methods supported on *project* resources. It is not used directly, but through the `Container` hub."],["ProjectOperationListCall","Lists all operations in a project, across all zones."],["ProjectZoneClusterCreateCall","Creates a cluster, consisting of the specified number and type of Google Compute Engine instances, plus a Kubernetes master instance."],["ProjectZoneClusterDeleteCall","Deletes the cluster, including the Kubernetes master and all worker nodes."],["ProjectZoneClusterGetCall","Gets a specific cluster."],["ProjectZoneClusterListCall","Lists all clusters owned by a project in the specified zone."],["ProjectZoneOperationGetCall","Gets the specified operation."],["ProjectZoneOperationListCall","Lists all operations in a project in a specific zone."],["ServiceAccount","A Compute Engine service account."]]});