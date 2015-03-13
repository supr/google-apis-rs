initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an [authorization token](https://developers.google.com/youtube/v3/guides/authentication)."]],"struct":[["Account","Represents a Google Tag Manager Account.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.list](struct.AccountContainerListMethodBuilder.html) (none) * [permissions.list](struct.AccountPermissionListMethodBuilder.html) (none) * [containers.versions.undelete](struct.AccountContainerVersionUndeleteMethodBuilder.html) (none) * [permissions.create](struct.AccountPermissionCreateMethodBuilder.html) (none) * [permissions.delete](struct.AccountPermissionDeleteMethodBuilder.html) (none) * [containers.get](struct.AccountContainerGetMethodBuilder.html) (none) * [containers.versions.list](struct.AccountContainerVersionListMethodBuilder.html) (none) * [containers.triggers.update](struct.AccountContainerTriggerUpdateMethodBuilder.html) (none) * [containers.triggers.get](struct.AccountContainerTriggerGetMethodBuilder.html) (none) * [containers.delete](struct.AccountContainerDeleteMethodBuilder.html) (none) * [containers.create](struct.AccountContainerCreateMethodBuilder.html) (none) * [containers.tags.delete](struct.AccountContainerTagDeleteMethodBuilder.html) (none) * [containers.rules.update](struct.AccountContainerRuleUpdateMethodBuilder.html) (none) * [containers.rules.delete](struct.AccountContainerRuleDeleteMethodBuilder.html) (none) * [containers.tags.list](struct.AccountContainerTagListMethodBuilder.html) (none) * [containers.versions.publish](struct.AccountContainerVersionPublishMethodBuilder.html) (none) * [containers.tags.create](struct.AccountContainerTagCreateMethodBuilder.html) (none) * [containers.triggers.list](struct.AccountContainerTriggerListMethodBuilder.html) (none) * [containers.versions.delete](struct.AccountContainerVersionDeleteMethodBuilder.html) (none) * [update](struct.AccountUpdateMethodBuilder.html) (request|response) * [containers.macros.delete](struct.AccountContainerMacroDeleteMethodBuilder.html) (none) * [containers.versions.create](struct.AccountContainerVersionCreateMethodBuilder.html) (none) * [permissions.get](struct.AccountPermissionGetMethodBuilder.html) (none) * [containers.rules.create](struct.AccountContainerRuleCreateMethodBuilder.html) (none) * [containers.versions.restore](struct.AccountContainerVersionRestoreMethodBuilder.html) (none) * [containers.rules.get](struct.AccountContainerRuleGetMethodBuilder.html) (none) * [containers.variables.create](struct.AccountContainerVariableCreateMethodBuilder.html) (none) * [containers.variables.list](struct.AccountContainerVariableListMethodBuilder.html) (none) * [containers.macros.create](struct.AccountContainerMacroCreateMethodBuilder.html) (none) * [containers.tags.get](struct.AccountContainerTagGetMethodBuilder.html) (none) * [containers.variables.get](struct.AccountContainerVariableGetMethodBuilder.html) (none) * [containers.triggers.delete](struct.AccountContainerTriggerDeleteMethodBuilder.html) (none) * [containers.macros.list](struct.AccountContainerMacroListMethodBuilder.html) (none) * [containers.triggers.create](struct.AccountContainerTriggerCreateMethodBuilder.html) (none) * [containers.macros.update](struct.AccountContainerMacroUpdateMethodBuilder.html) (none) * [list](struct.AccountListMethodBuilder.html) (none) * [permissions.update](struct.AccountPermissionUpdateMethodBuilder.html) (none) * [containers.variables.delete](struct.AccountContainerVariableDeleteMethodBuilder.html) (none) * [get](struct.AccountGetMethodBuilder.html) (response) * [containers.update](struct.AccountContainerUpdateMethodBuilder.html) (none) * [containers.rules.list](struct.AccountContainerRuleListMethodBuilder.html) (none) * [containers.tags.update](struct.AccountContainerTagUpdateMethodBuilder.html) (none) * [containers.macros.get](struct.AccountContainerMacroGetMethodBuilder.html) (none) * [containers.versions.update](struct.AccountContainerVersionUpdateMethodBuilder.html) (none) * [containers.variables.update](struct.AccountContainerVariableUpdateMethodBuilder.html) (none) * [containers.versions.get](struct.AccountContainerVersionGetMethodBuilder.html) (none)    "],["AccountAccess","Defines the Google Tag Manager Account access permissions.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountContainerCreateMethodBuilder","Creates a Container."],["AccountContainerDeleteMethodBuilder","Deletes a Container."],["AccountContainerGetMethodBuilder","Gets a Container."],["AccountContainerListMethodBuilder","Lists all Containers that belongs to a GTM Account."],["AccountContainerMacroCreateMethodBuilder","Creates a GTM Macro."],["AccountContainerMacroDeleteMethodBuilder","Deletes a GTM Macro."],["AccountContainerMacroGetMethodBuilder","Gets a GTM Macro."],["AccountContainerMacroListMethodBuilder","Lists all GTM Macros of a Container."],["AccountContainerMacroUpdateMethodBuilder","Updates a GTM Macro."],["AccountContainerRuleCreateMethodBuilder","Creates a GTM Rule."],["AccountContainerRuleDeleteMethodBuilder","Deletes a GTM Rule."],["AccountContainerRuleGetMethodBuilder","Gets a GTM Rule."],["AccountContainerRuleListMethodBuilder","Lists all GTM Rules of a Container."],["AccountContainerRuleUpdateMethodBuilder","Updates a GTM Rule."],["AccountContainerTagCreateMethodBuilder","Creates a GTM Tag."],["AccountContainerTagDeleteMethodBuilder","Deletes a GTM Tag."],["AccountContainerTagGetMethodBuilder","Gets a GTM Tag."],["AccountContainerTagListMethodBuilder","Lists all GTM Tags of a Container."],["AccountContainerTagUpdateMethodBuilder","Updates a GTM Tag."],["AccountContainerTriggerCreateMethodBuilder","Creates a GTM Trigger."],["AccountContainerTriggerDeleteMethodBuilder","Deletes a GTM Trigger."],["AccountContainerTriggerGetMethodBuilder","Gets a GTM Trigger."],["AccountContainerTriggerListMethodBuilder","Lists all GTM Triggers of a Container."],["AccountContainerTriggerUpdateMethodBuilder","Updates a GTM Trigger."],["AccountContainerUpdateMethodBuilder","Updates a Container."],["AccountContainerVariableCreateMethodBuilder","Creates a GTM Variable."],["AccountContainerVariableDeleteMethodBuilder","Deletes a GTM Variable."],["AccountContainerVariableGetMethodBuilder","Gets a GTM Variable."],["AccountContainerVariableListMethodBuilder","Lists all GTM Variables of a Container."],["AccountContainerVariableUpdateMethodBuilder","Updates a GTM Variable."],["AccountContainerVersionCreateMethodBuilder","Creates a Container Version."],["AccountContainerVersionDeleteMethodBuilder","Deletes a Container Version."],["AccountContainerVersionGetMethodBuilder","Gets a Container Version."],["AccountContainerVersionListMethodBuilder","Lists all Container Versions of a GTM Container."],["AccountContainerVersionPublishMethodBuilder","Publishes a Container Version."],["AccountContainerVersionRestoreMethodBuilder","Restores a Container Version. This will overwrite the container's current configuration (including its macros, rules and tags). The operation will not have any effect on the version that is being served (i.e. the published version)."],["AccountContainerVersionUndeleteMethodBuilder","Undeletes a Container Version."],["AccountContainerVersionUpdateMethodBuilder","Updates a Container Version."],["AccountGetMethodBuilder","Gets a GTM Account."],["AccountListMethodBuilder","Lists all GTM Accounts that a user has access to."],["AccountMethodsBuilder","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `TagManager` hub."],["AccountPermissionCreateMethodBuilder","Creates a user's Account & Container Permissions."],["AccountPermissionDeleteMethodBuilder","Removes a user from the account, revoking access to it and all of its containers."],["AccountPermissionGetMethodBuilder","Gets a user's Account & Container Permissions."],["AccountPermissionListMethodBuilder","List all users that have access to the account along with Account and Container Permissions granted to each of them."],["AccountPermissionUpdateMethodBuilder","Updates a user's Account & Container Permissions."],["AccountUpdateMethodBuilder","Updates a GTM Account."],["Condition","Represents a predicate.   This type is not used in any activity, and only used as *part* of another schema.  "],["Container","Represents a Google Tag Manager Container.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.update](struct.AccountContainerUpdateMethodBuilder.html) (request|response) * [containers.create](struct.AccountContainerCreateMethodBuilder.html) (request|response) * [containers.get](struct.AccountContainerGetMethodBuilder.html) (response)    "],["ContainerAccess","Defines the Google Tag Manager Container access permissions.   This type is not used in any activity, and only used as *part* of another schema.  "],["ContainerVersion","Represents a Google Tag Manager Container Version.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.versions.update](struct.AccountContainerVersionUpdateMethodBuilder.html) (request|response) * [containers.versions.get](struct.AccountContainerVersionGetMethodBuilder.html) (response) * [containers.versions.undelete](struct.AccountContainerVersionUndeleteMethodBuilder.html) (response) * [containers.versions.restore](struct.AccountContainerVersionRestoreMethodBuilder.html) (response)    "],["ContainerVersionHeader","Represents a Google Tag Manager Container Version Header.   This type is not used in any activity, and only used as *part* of another schema.  "],["CreateContainerVersionRequestVersionOptions","Options for new container versions.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.versions.create](struct.AccountContainerVersionCreateMethodBuilder.html) (request)    "],["CreateContainerVersionResponse","Create container versions response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.versions.create](struct.AccountContainerVersionCreateMethodBuilder.html) (response)    "],["ListAccountUsersResponse","List AccountUsers Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [permissions.list](struct.AccountPermissionListMethodBuilder.html) (response)    "],["ListAccountsResponse","List Accounts Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [list](struct.AccountListMethodBuilder.html) (response)    "],["ListContainerVersionsResponse","List container versions response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.versions.list](struct.AccountContainerVersionListMethodBuilder.html) (response)    "],["ListContainersResponse","List Containers Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.list](struct.AccountContainerListMethodBuilder.html) (response)    "],["ListMacrosResponse","List Macros Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.macros.list](struct.AccountContainerMacroListMethodBuilder.html) (response)    "],["ListRulesResponse","List Rules Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.rules.list](struct.AccountContainerRuleListMethodBuilder.html) (response)    "],["ListTagsResponse","List Tags Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.tags.list](struct.AccountContainerTagListMethodBuilder.html) (response)    "],["ListTriggersResponse","List triggers response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.triggers.list](struct.AccountContainerTriggerListMethodBuilder.html) (response)    "],["ListVariablesResponse","List Variables Response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.variables.list](struct.AccountContainerVariableListMethodBuilder.html) (response)    "],["Macro","Represents a Google Tag Manager Macro.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.macros.create](struct.AccountContainerMacroCreateMethodBuilder.html) (request|response) * [containers.macros.get](struct.AccountContainerMacroGetMethodBuilder.html) (response) * [containers.macros.update](struct.AccountContainerMacroUpdateMethodBuilder.html) (request|response)    "],["Parameter","Represents a Google Tag Manager Parameter.   This type is not used in any activity, and only used as *part* of another schema.  "],["PublishContainerVersionResponse","Publish container version response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.versions.publish](struct.AccountContainerVersionPublishMethodBuilder.html) (response)    "],["Rule","Represents a Google Tag Manager Rule.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.rules.get](struct.AccountContainerRuleGetMethodBuilder.html) (response) * [containers.rules.create](struct.AccountContainerRuleCreateMethodBuilder.html) (request|response) * [containers.rules.update](struct.AccountContainerRuleUpdateMethodBuilder.html) (request|response)    "],["Tag","Represents a Google Tag Manager Tag.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.tags.update](struct.AccountContainerTagUpdateMethodBuilder.html) (request|response) * [containers.tags.get](struct.AccountContainerTagGetMethodBuilder.html) (response) * [containers.tags.create](struct.AccountContainerTagCreateMethodBuilder.html) (request|response)    "],["TagManager","Central instance to access all TagManager related resource activities"],["Trigger","Represents a Google Tag Manager Trigger   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.triggers.update](struct.AccountContainerTriggerUpdateMethodBuilder.html) (request|response) * [containers.triggers.get](struct.AccountContainerTriggerGetMethodBuilder.html) (response) * [containers.triggers.create](struct.AccountContainerTriggerCreateMethodBuilder.html) (request|response)    "],["UserAccess","Represents a user's permissions to an account and its container.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [permissions.get](struct.AccountPermissionGetMethodBuilder.html) (response) * [permissions.create](struct.AccountPermissionCreateMethodBuilder.html) (request|response) * [permissions.update](struct.AccountPermissionUpdateMethodBuilder.html) (request|response)    "],["Variable","Represents a Google Tag Manager Variable.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [containers.variables.create](struct.AccountContainerVariableCreateMethodBuilder.html) (request|response) * [containers.variables.update](struct.AccountContainerVariableUpdateMethodBuilder.html) (request|response) * [containers.variables.get](struct.AccountContainerVariableGetMethodBuilder.html) (response)    "]],"mod":[["cmn",""]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});