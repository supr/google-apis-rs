initSidebarItems({"struct":[["Account","JSON template for Analytics account entry."],["AccountChildLink","Child link for an account entry. Points to the list of web properties for this account."],["AccountPermissions","Permissions the user has for this account."],["AccountRef","JSON template for a linked account."],["AccountSummaries","An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary."],["AccountSummary","JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles."],["AccountTicket","JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile."],["Accounts","An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account."],["AdWordsAccount","JSON template for an AdWords account."],["Analytics","Central instance to access all Analytics related resource activities"],["AnalyticsDataimportDeleteUploadDataRequest","Request template for the delete upload data request."],["Column","JSON template for a metadata column."],["Columns","Lists columns (dimensions and metrics) for a particular report type."],["CustomDataSource","JSON template for an Analytics custom data source."],["CustomDataSourceChildLink","There is no detailed description."],["CustomDataSourceParentLink","Parent link for this custom data source. Points to the web property to which this custom data source belongs."],["CustomDataSources","Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source."],["CustomDimension","JSON template for Analytics Custom Dimension."],["CustomDimensionParentLink","Parent link for the custom dimension. Points to the property to which the custom dimension belongs."],["CustomDimensions","A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension."],["CustomMetric","JSON template for Analytics Custom Metric."],["CustomMetricParentLink","Parent link for the custom metric. Points to the property to which the custom metric belongs."],["CustomMetrics","A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric."],["DataGaGetCallBuilder","Returns Analytics data for a view (profile)."],["DataMcfGetCallBuilder","Returns Analytics Multi-Channel Funnels data for a view (profile)."],["DataMethodsBuilder","A builder providing access to all methods supported on *data* resources. It is not used directly, but through the `Analytics` hub."],["DataRealtimeGetCallBuilder","Returns real time data for a view (profile)."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["EntityAdWordsLink","JSON template for Analytics Entity AdWords Link."],["EntityAdWordsLinkEntity","Web property being linked."],["EntityAdWordsLinks","An entity AdWords link collection provides a list of GA-AdWords links Each resource in this collection corresponds to a single link."],["EntityUserLink","JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity."],["EntityUserLinkEntity","Entity for this link. It can be an account, a web property, or a view (profile)."],["EntityUserLinkPermissions","Permissions the user has for this entity."],["EntityUserLinks","An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link."],["Experiment","JSON template for Analytics experiment resource."],["ExperimentParentLink","Parent link for an experiment. Points to the view (profile) to which this experiment belongs."],["ExperimentVariations","Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING."],["Experiments","An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment."],["Filter","JSON template for an Analytics account filter."],["FilterAdvancedDetails","Details for the filter of the type ADVANCED."],["FilterExpression","JSON template for an Analytics filter expression."],["FilterLowercaseDetails","Details for the filter of the type LOWER."],["FilterParentLink","Parent link for this filter. Points to the account to which this filter belongs."],["FilterRef","JSON template for a profile filter link."],["FilterSearchAndReplaceDetails","Details for the filter of the type SEARCH_AND_REPLACE."],["FilterUppercaseDetails","Details for the filter of the type UPPER."],["Filters","A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter."],["GaData","Analytics data for a given view (profile)."],["GaDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request."],["GaDataDataTable","There is no detailed description."],["GaDataDataTableCols","There is no detailed description."],["GaDataDataTableRows","There is no detailed description."],["GaDataDataTableRowsC","There is no detailed description."],["GaDataProfileInfo","Information for the view (profile), for which the Analytics data was requested."],["GaDataQuery","Analytics data request query parameters."],["Goal","JSON template for Analytics goal resource."],["GoalEventDetails","Details for the goal of the type EVENT."],["GoalEventDetailsEventConditions","List of event conditions."],["GoalParentLink","Parent link for a goal. Points to the view (profile) to which this goal belongs."],["GoalUrlDestinationDetails","Details for the goal of the type URL_DESTINATION."],["GoalUrlDestinationDetailsSteps","List of steps configured for this goal funnel."],["GoalVisitNumPagesDetails","Details for the goal of the type VISIT_NUM_PAGES."],["GoalVisitTimeOnSiteDetails","Details for the goal of the type VISIT_TIME_ON_SITE."],["Goals","A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal."],["ManagementAccountListCallBuilder","Lists all accounts to which the user has access."],["ManagementAccountSummaryListCallBuilder","Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access."],["ManagementAccountUserLinkDeleteCallBuilder","Removes a user from the given account."],["ManagementAccountUserLinkInsertCallBuilder","Adds a new user to the given account."],["ManagementAccountUserLinkListCallBuilder","Lists account-user links for a given account."],["ManagementAccountUserLinkUpdateCallBuilder","Updates permissions for an existing user on the given account."],["ManagementCustomDataSourceListCallBuilder","List custom data sources to which the user has access."],["ManagementCustomDimensionGetCallBuilder","Get a custom dimension to which the user has access."],["ManagementCustomDimensionInsertCallBuilder","Create a new custom dimension."],["ManagementCustomDimensionListCallBuilder","Lists custom dimensions to which the user has access."],["ManagementCustomDimensionPatchCallBuilder","Updates an existing custom dimension. This method supports patch semantics."],["ManagementCustomDimensionUpdateCallBuilder","Updates an existing custom dimension."],["ManagementCustomMetricGetCallBuilder","Get a custom metric to which the user has access."],["ManagementCustomMetricInsertCallBuilder","Create a new custom metric."],["ManagementCustomMetricListCallBuilder","Lists custom metrics to which the user has access."],["ManagementCustomMetricPatchCallBuilder","Updates an existing custom metric. This method supports patch semantics."],["ManagementCustomMetricUpdateCallBuilder","Updates an existing custom metric."],["ManagementExperimentDeleteCallBuilder","Delete an experiment."],["ManagementExperimentGetCallBuilder","Returns an experiment to which the user has access."],["ManagementExperimentInsertCallBuilder","Create a new experiment."],["ManagementExperimentListCallBuilder","Lists experiments to which the user has access."],["ManagementExperimentPatchCallBuilder","Update an existing experiment. This method supports patch semantics."],["ManagementExperimentUpdateCallBuilder","Update an existing experiment."],["ManagementFilterDeleteCallBuilder","Delete a filter."],["ManagementFilterGetCallBuilder","Returns a filters to which the user has access."],["ManagementFilterInsertCallBuilder","Create a new filter."],["ManagementFilterListCallBuilder","Lists all filters for an account"],["ManagementFilterPatchCallBuilder","Updates an existing filter. This method supports patch semantics."],["ManagementFilterUpdateCallBuilder","Updates an existing filter."],["ManagementGoalGetCallBuilder","Gets a goal to which the user has access."],["ManagementGoalInsertCallBuilder","Create a new goal."],["ManagementGoalListCallBuilder","Lists goals to which the user has access."],["ManagementGoalPatchCallBuilder","Updates an existing view (profile). This method supports patch semantics."],["ManagementGoalUpdateCallBuilder","Updates an existing view (profile)."],["ManagementMethodsBuilder","A builder providing access to all methods supported on *management* resources. It is not used directly, but through the `Analytics` hub."],["ManagementProfileDeleteCallBuilder","Deletes a view (profile)."],["ManagementProfileFilterLinkDeleteCallBuilder","Delete a profile filter link."],["ManagementProfileFilterLinkGetCallBuilder","Returns a single profile filter link."],["ManagementProfileFilterLinkInsertCallBuilder","Create a new profile filter link."],["ManagementProfileFilterLinkListCallBuilder","Lists all profile filter links for a profile."],["ManagementProfileFilterLinkPatchCallBuilder","Update an existing profile filter link. This method supports patch semantics."],["ManagementProfileFilterLinkUpdateCallBuilder","Update an existing profile filter link."],["ManagementProfileGetCallBuilder","Gets a view (profile) to which the user has access."],["ManagementProfileInsertCallBuilder","Create a new view (profile)."],["ManagementProfileListCallBuilder","Lists views (profiles) to which the user has access."],["ManagementProfilePatchCallBuilder","Updates an existing view (profile). This method supports patch semantics."],["ManagementProfileUpdateCallBuilder","Updates an existing view (profile)."],["ManagementProfileUserLinkDeleteCallBuilder","Removes a user from the given view (profile)."],["ManagementProfileUserLinkInsertCallBuilder","Adds a new user to the given view (profile)."],["ManagementProfileUserLinkListCallBuilder","Lists profile-user links for a given view (profile)."],["ManagementProfileUserLinkUpdateCallBuilder","Updates permissions for an existing user on the given view (profile)."],["ManagementSegmentListCallBuilder","Lists segments to which the user has access."],["ManagementUnsampledReportGetCallBuilder","Returns a single unsampled report."],["ManagementUnsampledReportInsertCallBuilder","Create a new unsampled report."],["ManagementUnsampledReportListCallBuilder","Lists unsampled reports to which the user has access."],["ManagementUploadDeleteUploadDataCallBuilder","Delete data associated with a previous upload."],["ManagementUploadGetCallBuilder","List uploads to which the user has access."],["ManagementUploadListCallBuilder","List uploads to which the user has access."],["ManagementUploadUploadDataCallBuilder","Upload data for a custom data source."],["ManagementWebPropertyAdWordsLinkDeleteCallBuilder","Deletes a web property-AdWords link."],["ManagementWebPropertyAdWordsLinkGetCallBuilder","Returns a web property-AdWords link to which the user has access."],["ManagementWebPropertyAdWordsLinkInsertCallBuilder","Creates a webProperty-AdWords link."],["ManagementWebPropertyAdWordsLinkListCallBuilder","Lists webProperty-AdWords links for a given web property."],["ManagementWebPropertyAdWordsLinkPatchCallBuilder","Updates an existing webProperty-AdWords link. This method supports patch semantics."],["ManagementWebPropertyAdWordsLinkUpdateCallBuilder","Updates an existing webProperty-AdWords link."],["ManagementWebpropertyGetCallBuilder","Gets a web property to which the user has access."],["ManagementWebpropertyInsertCallBuilder","Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile."],["ManagementWebpropertyListCallBuilder","Lists web properties to which the user has access."],["ManagementWebpropertyPatchCallBuilder","Updates an existing web property. This method supports patch semantics."],["ManagementWebpropertyUpdateCallBuilder","Updates an existing web property."],["ManagementWebpropertyUserLinkDeleteCallBuilder","Removes a user from the given web property."],["ManagementWebpropertyUserLinkInsertCallBuilder","Adds a new user to the given web property."],["ManagementWebpropertyUserLinkListCallBuilder","Lists webProperty-user links for a given web property."],["ManagementWebpropertyUserLinkUpdateCallBuilder","Updates permissions for an existing user on the given web property."],["McfData","Multi-Channel Funnels data for a given view (profile)."],["McfDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request."],["McfDataProfileInfo","Information for the view (profile), for which the Analytics data was requested."],["McfDataQuery","Analytics data request query parameters."],["McfDataRows","A union object representing a dimension or metric value. Only one of \"primitiveValue\" or \"conversionPathValue\" attribute will be populated."],["McfDataRowsConversionPathValue","A conversion path dimension value, containing a list of interactions with their attributes."],["MetadataColumnListCallBuilder","Lists all columns for a report type"],["MetadataMethodsBuilder","A builder providing access to all methods supported on *metadata* resources. It is not used directly, but through the `Analytics` hub."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Profile","JSON template for an Analytics view (profile)."],["ProfileChildLink","Child link for this view (profile). Points to the list of goals for this view (profile)."],["ProfileFilterLink","JSON template for an Analytics profile filter link."],["ProfileFilterLinks","A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link."],["ProfileParentLink","Parent link for this view (profile). Points to the web property to which this view (profile) belongs."],["ProfilePermissions","Permissions the user has for this view (profile)."],["ProfileRef","JSON template for a linked view (profile)."],["ProfileSummary","JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile."],["Profiles","A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile)."],["ProvisioningCreateAccountTicketCallBuilder","Creates an account ticket."],["ProvisioningMethodsBuilder","A builder providing access to all methods supported on *provisioning* resources. It is not used directly, but through the `Analytics` hub."],["RealtimeData","Real time data for a given view (profile)."],["RealtimeDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request."],["RealtimeDataProfileInfo","Information for the view (profile), for which the real time data was requested."],["RealtimeDataQuery","Real time data request query parameters."],["Segment","JSON template for an Analytics segment."],["Segments","An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment."],["UnsampledReport","JSON template for Analytics unsampled report resource."],["UnsampledReportCloudStorageDownloadDetails","Download details for a file stored in Google Cloud Storage."],["UnsampledReportDriveDownloadDetails","Download details for a file stored in Google Drive."],["UnsampledReports","An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report."],["Upload","Metadata returned for an upload operation."],["Uploads","Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload."],["UserRef","JSON template for a user reference."],["WebPropertyRef","JSON template for a web property reference."],["WebPropertySummary","JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property."],["Webproperties","A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property."],["Webproperty","JSON template for an Analytics web property."],["WebpropertyChildLink","Child link for this web property. Points to the list of views (profiles) for this web property."],["WebpropertyParentLink","Parent link for this web property. Points to the account to which this web property belongs."],["WebpropertyPermissions","Permissions the user has for this web property."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]]});