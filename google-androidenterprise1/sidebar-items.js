initSidebarItems({"struct":[["AndroidEnterprise","Central instance to access all AndroidEnterprise related resource activities"],["AppRestrictionsSchema","Represents the list of app restrictions available to be pre-configured for the product."],["AppRestrictionsSchemaRestriction","A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied."],["AppRestrictionsSchemaRestrictionRestrictionValue","A typed value for the restriction."],["Collection","A collection resource defines a named set of apps that is visible to a set of users in the Google Play Store app running on those users' managed devices. Those users can then install any of those apps if they wish (which will trigger creation of install and entitlement resources). A user cannot install an app on a managed device unless the app is listed in at least one collection that is visible to that user."],["CollectionDeleteCall","Deletes a collection."],["CollectionGetCall","Retrieves the details of a collection."],["CollectionInsertCall","Creates a new collection."],["CollectionListCall","Retrieves the IDs of all the collections for an enterprise."],["CollectionMethods","A builder providing access to all methods supported on *collection* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["CollectionPatchCall","Updates a collection. This method supports patch semantics."],["CollectionUpdateCall","Updates a collection."],["CollectionViewersListResponse","The user resources for the collection."],["CollectionsListResponse","The collection resources for the enterprise."],["CollectionviewerDeleteCall","Removes the user from the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection."],["CollectionviewerGetCall","Retrieves the ID of the user if they have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection."],["CollectionviewerListCall","Retrieves the IDs of the users who have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection."],["CollectionviewerMethods","A builder providing access to all methods supported on *collectionviewer* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["CollectionviewerPatchCall","Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection. This method supports patch semantics."],["CollectionviewerUpdateCall","Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Device","A device resource represents a mobile device managed by the MDM and belonging to a specific enterprise user."],["DeviceGetCall","Retrieves the details of a device."],["DeviceGetStateCall","Retrieves whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services."],["DeviceListCall","Retrieves the IDs of all of a user's devices."],["DeviceMethods","A builder providing access to all methods supported on *device* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["DeviceSetStateCall","Sets whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services."],["DeviceState","The state of a user's device, as accessed by the getState and setState methods on device resources."],["DevicesListResponse","The device resources for the user."],["Enterprise","An enterprise resource represents a binding between an organisation and their MDM."],["EnterpriseAccount","A service account that can be used to authenticate as the enterprise to API calls that require such authentication."],["EnterpriseDeleteCall","Deletes the binding between the MDM and enterprise. This is now deprecated; use this to unenroll customers that were previously enrolled with the 'insert' call, then enroll them again with the 'enroll' call."],["EnterpriseEnrollCall","Enrolls an enterprise with the calling MDM."],["EnterpriseGetCall","Retrieves the name and domain of an enterprise."],["EnterpriseInsertCall","Establishes the binding between the MDM and an enterprise. This is now deprecated; use enroll instead."],["EnterpriseListCall","Looks up an enterprise by domain name."],["EnterpriseMethods","A builder providing access to all methods supported on *enterprise* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["EnterpriseSetAccountCall","Set the account that will be used to authenticate to the API as the enterprise."],["EnterpriseUnenrollCall","Unenrolls an enterprise from the calling MDM."],["EnterprisesListResponse","The matching enterprise resources."],["Entitlement","The existence of an entitlement resource means that a user has the right to use a particular app on any of their devices. This might be because the app is free or because they have been allocated a license to the app from a group license purchased by the enterprise."],["EntitlementDeleteCall","Removes an entitlement to an app for a user and uninstalls it."],["EntitlementGetCall","Retrieves details of an entitlement."],["EntitlementListCall","List of all entitlements for the specified user. Only the ID is set."],["EntitlementMethods","A builder providing access to all methods supported on *entitlement* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["EntitlementPatchCall","Adds or updates an entitlement to an app for a user. This method supports patch semantics."],["EntitlementUpdateCall","Adds or updates an entitlement to an app for a user."],["EntitlementsListResponse","The entitlement resources for the user."],["GroupLicense","A group license object indicates a product that an enterprise admin has approved for use in the enterprise. The product may be free or paid. For free products, a group license object is created in these cases: if the enterprise admin approves a product in Google Play, if the product is added to a collection, or if an entitlement for the product is created for a user via the API. For paid products, a group license object is only created as part of the first bulk purchase of that product in Google Play done by the enterprise admin."],["GroupLicenseUsersListResponse","The user resources for the group license."],["GroupLicensesListResponse","The grouplicense resources for the enterprise."],["GrouplicenseGetCall","Retrieves details of an enterprise's group license for a product."],["GrouplicenseListCall","Retrieves IDs of all products for which the enterprise has a group license."],["GrouplicenseMethods","A builder providing access to all methods supported on *grouplicense* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["GrouplicenseuserListCall","Retrieves the IDs of the users who have been granted entitlements under the license."],["GrouplicenseuserMethods","A builder providing access to all methods supported on *grouplicenseuser* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["Install","The existence of an install resource indicates that an app is installed on a particular device (or that an install is pending)."],["InstallDeleteCall","Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed."],["InstallGetCall","Retrieves details of an installation of an app on a device."],["InstallListCall","Retrieves the details of all apps installed on the specified device."],["InstallMethods","A builder providing access to all methods supported on *install* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["InstallPatchCall","Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary. This method supports patch semantics."],["InstallUpdateCall","Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary."],["InstallsListResponse","The install resources for the device."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Permission","A permission represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created."],["PermissionGetCall","Retrieves details of an Android app permission for display to an enterprise admin."],["PermissionMethods","A builder providing access to all methods supported on *permission* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["Product","A product represents an app in the Google Play Store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.)"],["ProductGetAppRestrictionsSchemaCall","Retrieves the schema defining app restrictions configurable for this product. All products have a schema, but this may be empty if no app restrictions are defined."],["ProductGetCall","Retrieves details of a product for display to an enterprise admin."],["ProductGetPermissionCall","Retrieves the Android app permissions required by this app."],["ProductMethods","A builder providing access to all methods supported on *product* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["ProductPermission","A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin."],["ProductPermissions","Information about the permissions required by a specific app and whether they have been accepted by the enterprise."],["ProductUpdatePermissionCall","Updates the set of Android app permissions for this app that have been accepted by the enterprise."],["User","A user resource represents an individual user within the enterprise's domain."],["UserGenerateTokenCall","Generates a token (activation code) to allow this user to configure their work account in the Android Setup Wizard. Revokes any previously generated token."],["UserGetCall","Retrieves a user's details."],["UserListCall","Looks up a user by email address."],["UserMethods","A builder providing access to all methods supported on *user* resources. It is not used directly, but through the `AndroidEnterprise` hub."],["UserRevokeTokenCall","Revokes a previously generated token (activation code) for the user."],["UserToken","A UserToken is used by a user when setting up a managed device or profile with their work account on a device. When the user enters their email address and token (activation code) the appropriate MDM app can be automatically downloaded."],["UsersListResponse","The matching user resources."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});