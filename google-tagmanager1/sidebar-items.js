initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"struct":[["Account","Represents a Google Tag Manager Account."],["AccountAccess","Defines the Google Tag Manager Account access permissions."],["AccountContainerCreateCall","Creates a Container."],["AccountContainerDeleteCall","Deletes a Container."],["AccountContainerGetCall","Gets a Container."],["AccountContainerListCall","Lists all Containers that belongs to a GTM Account."],["AccountContainerMacroCreateCall","Creates a GTM Macro."],["AccountContainerMacroDeleteCall","Deletes a GTM Macro."],["AccountContainerMacroGetCall","Gets a GTM Macro."],["AccountContainerMacroListCall","Lists all GTM Macros of a Container."],["AccountContainerMacroUpdateCall","Updates a GTM Macro."],["AccountContainerRuleCreateCall","Creates a GTM Rule."],["AccountContainerRuleDeleteCall","Deletes a GTM Rule."],["AccountContainerRuleGetCall","Gets a GTM Rule."],["AccountContainerRuleListCall","Lists all GTM Rules of a Container."],["AccountContainerRuleUpdateCall","Updates a GTM Rule."],["AccountContainerTagCreateCall","Creates a GTM Tag."],["AccountContainerTagDeleteCall","Deletes a GTM Tag."],["AccountContainerTagGetCall","Gets a GTM Tag."],["AccountContainerTagListCall","Lists all GTM Tags of a Container."],["AccountContainerTagUpdateCall","Updates a GTM Tag."],["AccountContainerTriggerCreateCall","Creates a GTM Trigger."],["AccountContainerTriggerDeleteCall","Deletes a GTM Trigger."],["AccountContainerTriggerGetCall","Gets a GTM Trigger."],["AccountContainerTriggerListCall","Lists all GTM Triggers of a Container."],["AccountContainerTriggerUpdateCall","Updates a GTM Trigger."],["AccountContainerUpdateCall","Updates a Container."],["AccountContainerVariableCreateCall","Creates a GTM Variable."],["AccountContainerVariableDeleteCall","Deletes a GTM Variable."],["AccountContainerVariableGetCall","Gets a GTM Variable."],["AccountContainerVariableListCall","Lists all GTM Variables of a Container."],["AccountContainerVariableUpdateCall","Updates a GTM Variable."],["AccountContainerVersionCreateCall","Creates a Container Version."],["AccountContainerVersionDeleteCall","Deletes a Container Version."],["AccountContainerVersionGetCall","Gets a Container Version."],["AccountContainerVersionListCall","Lists all Container Versions of a GTM Container."],["AccountContainerVersionPublishCall","Publishes a Container Version."],["AccountContainerVersionRestoreCall","Restores a Container Version. This will overwrite the container's current configuration (including its macros, rules and tags). The operation will not have any effect on the version that is being served (i.e. the published version)."],["AccountContainerVersionUndeleteCall","Undeletes a Container Version."],["AccountContainerVersionUpdateCall","Updates a Container Version."],["AccountGetCall","Gets a GTM Account."],["AccountListCall","Lists all GTM Accounts that a user has access to."],["AccountMethods","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `TagManager` hub."],["AccountPermissionCreateCall","Creates a user's Account & Container Permissions."],["AccountPermissionDeleteCall","Removes a user from the account, revoking access to it and all of its containers."],["AccountPermissionGetCall","Gets a user's Account & Container Permissions."],["AccountPermissionListCall","List all users that have access to the account along with Account and Container Permissions granted to each of them."],["AccountPermissionUpdateCall","Updates a user's Account & Container Permissions."],["AccountUpdateCall","Updates a GTM Account."],["Condition","Represents a predicate."],["Container","Represents a Google Tag Manager Container."],["ContainerAccess","Defines the Google Tag Manager Container access permissions."],["ContainerVersion","Represents a Google Tag Manager Container Version."],["ContainerVersionHeader","Represents a Google Tag Manager Container Version Header."],["CreateContainerVersionRequestVersionOptions","Options for new container versions."],["CreateContainerVersionResponse","Create container versions response."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListAccountUsersResponse","List AccountUsers Response."],["ListAccountsResponse","List Accounts Response."],["ListContainerVersionsResponse","List container versions response."],["ListContainersResponse","List Containers Response."],["ListMacrosResponse","List Macros Response."],["ListRulesResponse","List Rules Response."],["ListTagsResponse","List Tags Response."],["ListTriggersResponse","List triggers response."],["ListVariablesResponse","List Variables Response."],["Macro","Represents a Google Tag Manager Macro."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Parameter","Represents a Google Tag Manager Parameter."],["PublishContainerVersionResponse","Publish container version response."],["Rule","Represents a Google Tag Manager Rule."],["Tag","Represents a Google Tag Manager Tag."],["TagManager","Central instance to access all TagManager related resource activities"],["Trigger","Represents a Google Tag Manager Trigger"],["UserAccess","Represents a user's permissions to an account and its container."],["Variable","Represents a Google Tag Manager Variable."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});