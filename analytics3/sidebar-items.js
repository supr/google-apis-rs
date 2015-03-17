initSidebarItems({"struct":[["Account","JSON template for Analytics account entry.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountChildLink","Child link for an account entry. Points to the list of web properties for this account.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountPermissions","Permissions the user has for this account.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountRef","JSON template for a linked account.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountSummaries","An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * account summaries.list management (response)  "],["AccountSummary","JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountTicket","JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * create account ticket provisioning (request|response)  "],["Accounts","An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * accounts.list management (response)  "],["AdWordsAccount","JSON template for an AdWords account.   This type is not used in any activity, and only used as *part* of another schema.  "],["Analytics","Central instance to access all Analytics related resource activities"],["AnalyticsDataimportDeleteUploadDataRequest","Request template for the delete upload data request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * uploads.delete upload data management (request)  "],["Column","JSON template for a metadata column.   This type is not used in any activity, and only used as *part* of another schema.  "],["Columns","Lists columns (dimensions and metrics) for a particular report type.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * columns.list metadata (response)  "],["CustomDataSource","JSON template for an Analytics custom data source.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomDataSourceChildLink","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomDataSourceParentLink","Parent link for this custom data source. Points to the web property to which this custom data source belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomDataSources","Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * custom data sources.list management (response)  "],["CustomDimension","JSON template for Analytics Custom Dimension.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * custom dimensions.insert management (request|response) * custom dimensions.patch management (request|response) * custom dimensions.update management (request|response) * custom dimensions.get management (response)  "],["CustomDimensionParentLink","Parent link for the custom dimension. Points to the property to which the custom dimension belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomDimensions","A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * custom dimensions.list management (response)  "],["CustomMetric","JSON template for Analytics Custom Metric.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * custom metrics.patch management (request|response) * custom metrics.insert management (request|response) * custom metrics.get management (response) * custom metrics.update management (request|response)  "],["CustomMetricParentLink","Parent link for the custom metric. Points to the property to which the custom metric belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomMetrics","A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * custom metrics.list management (response)  "],["DataGaGetMethodBuilder","Returns Analytics data for a view (profile)."],["DataMcfGetMethodBuilder","Returns Analytics Multi-Channel Funnels data for a view (profile)."],["DataMethodsBuilder","A builder providing access to all methods supported on *data* resources. It is not used directly, but through the `Analytics` hub."],["DataRealtimeGetMethodBuilder","Returns real time data for a view (profile)."],["EntityAdWordsLink","JSON template for Analytics Entity AdWords Link.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * web property ad words links.update management (request|response) * web property ad words links.patch management (request|response) * web property ad words links.insert management (request|response) * web property ad words links.get management (response)  "],["EntityAdWordsLinkEntity","Web property being linked.   This type is not used in any activity, and only used as *part* of another schema.  "],["EntityAdWordsLinks","An entity AdWords link collection provides a list of GA-AdWords links Each resource in this collection corresponds to a single link.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * web property ad words links.list management (response)  "],["EntityUserLink","JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * webproperty user links.insert management (request|response) * profile user links.insert management (request|response) * profile user links.update management (request|response) * account user links.update management (request|response) * webproperty user links.update management (request|response) * account user links.insert management (request|response)  "],["EntityUserLinkEntity","Entity for this link. It can be an account, a web property, or a view (profile).   This type is not used in any activity, and only used as *part* of another schema.  "],["EntityUserLinkPermissions","Permissions the user has for this entity.   This type is not used in any activity, and only used as *part* of another schema.  "],["EntityUserLinks","An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * account user links.list management (response) * webproperty user links.list management (response) * profile user links.list management (response)  "],["Experiment","JSON template for Analytics experiment resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * experiments.patch management (request|response) * experiments.insert management (request|response) * experiments.update management (request|response) * experiments.get management (response)  "],["ExperimentParentLink","Parent link for an experiment. Points to the view (profile) to which this experiment belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["ExperimentVariations","Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.   This type is not used in any activity, and only used as *part* of another schema.  "],["Experiments","An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * experiments.list management (response)  "],["Filter","JSON template for an Analytics account filter.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * filters.delete management (response) * filters.patch management (request|response) * filters.update management (request|response) * filters.get management (response) * filters.insert management (request|response)  "],["FilterAdvancedDetails","Details for the filter of the type ADVANCED.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterExpression","JSON template for an Analytics filter expression.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterLowercaseDetails","Details for the filter of the type LOWER.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterParentLink","Parent link for this filter. Points to the account to which this filter belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterRef","JSON template for a profile filter link.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterSearchAndReplaceDetails","Details for the filter of the type SEARCH_AND_REPLACE.   This type is not used in any activity, and only used as *part* of another schema.  "],["FilterUppercaseDetails","Details for the filter of the type UPPER.   This type is not used in any activity, and only used as *part* of another schema.  "],["Filters","A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * filters.list management (response)  "],["GaData","Analytics data for a given view (profile).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * ga.get data (response)  "],["GaDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataDataTable","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataDataTableCols","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataDataTableRows","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataDataTableRowsC","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataProfileInfo","Information for the view (profile), for which the Analytics data was requested.   This type is not used in any activity, and only used as *part* of another schema.  "],["GaDataQuery","Analytics data request query parameters.   This type is not used in any activity, and only used as *part* of another schema.  "],["Goal","JSON template for Analytics goal resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * goals.get management (response) * goals.update management (request|response) * goals.patch management (request|response) * goals.insert management (request|response)  "],["GoalEventDetails","Details for the goal of the type EVENT.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalEventDetailsEventConditions","List of event conditions.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalParentLink","Parent link for a goal. Points to the view (profile) to which this goal belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalUrlDestinationDetails","Details for the goal of the type URL_DESTINATION.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalUrlDestinationDetailsSteps","List of steps configured for this goal funnel.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalVisitNumPagesDetails","Details for the goal of the type VISIT_NUM_PAGES.   This type is not used in any activity, and only used as *part* of another schema.  "],["GoalVisitTimeOnSiteDetails","Details for the goal of the type VISIT_TIME_ON_SITE.   This type is not used in any activity, and only used as *part* of another schema.  "],["Goals","A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * goals.list management (response)  "],["ManagementAccountListMethodBuilder","Lists all accounts to which the user has access."],["ManagementAccountSummaryListMethodBuilder","Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access."],["ManagementAccountUserLinkDeleteMethodBuilder","Removes a user from the given account."],["ManagementAccountUserLinkInsertMethodBuilder","Adds a new user to the given account."],["ManagementAccountUserLinkListMethodBuilder","Lists account-user links for a given account."],["ManagementAccountUserLinkUpdateMethodBuilder","Updates permissions for an existing user on the given account."],["ManagementCustomDataSourceListMethodBuilder","List custom data sources to which the user has access."],["ManagementCustomDimensionGetMethodBuilder","Get a custom dimension to which the user has access."],["ManagementCustomDimensionInsertMethodBuilder","Create a new custom dimension."],["ManagementCustomDimensionListMethodBuilder","Lists custom dimensions to which the user has access."],["ManagementCustomDimensionPatchMethodBuilder","Updates an existing custom dimension. This method supports patch semantics."],["ManagementCustomDimensionUpdateMethodBuilder","Updates an existing custom dimension."],["ManagementCustomMetricGetMethodBuilder","Get a custom metric to which the user has access."],["ManagementCustomMetricInsertMethodBuilder","Create a new custom metric."],["ManagementCustomMetricListMethodBuilder","Lists custom metrics to which the user has access."],["ManagementCustomMetricPatchMethodBuilder","Updates an existing custom metric. This method supports patch semantics."],["ManagementCustomMetricUpdateMethodBuilder","Updates an existing custom metric."],["ManagementExperimentDeleteMethodBuilder","Delete an experiment."],["ManagementExperimentGetMethodBuilder","Returns an experiment to which the user has access."],["ManagementExperimentInsertMethodBuilder","Create a new experiment."],["ManagementExperimentListMethodBuilder","Lists experiments to which the user has access."],["ManagementExperimentPatchMethodBuilder","Update an existing experiment. This method supports patch semantics."],["ManagementExperimentUpdateMethodBuilder","Update an existing experiment."],["ManagementFilterDeleteMethodBuilder","Delete a filter."],["ManagementFilterGetMethodBuilder","Returns a filters to which the user has access."],["ManagementFilterInsertMethodBuilder","Create a new filter."],["ManagementFilterListMethodBuilder","Lists all filters for an account"],["ManagementFilterPatchMethodBuilder","Updates an existing filter. This method supports patch semantics."],["ManagementFilterUpdateMethodBuilder","Updates an existing filter."],["ManagementGoalGetMethodBuilder","Gets a goal to which the user has access."],["ManagementGoalInsertMethodBuilder","Create a new goal."],["ManagementGoalListMethodBuilder","Lists goals to which the user has access."],["ManagementGoalPatchMethodBuilder","Updates an existing view (profile). This method supports patch semantics."],["ManagementGoalUpdateMethodBuilder","Updates an existing view (profile)."],["ManagementMethodsBuilder","A builder providing access to all methods supported on *management* resources. It is not used directly, but through the `Analytics` hub."],["ManagementProfileDeleteMethodBuilder","Deletes a view (profile)."],["ManagementProfileFilterLinkDeleteMethodBuilder","Delete a profile filter link."],["ManagementProfileFilterLinkGetMethodBuilder","Returns a single profile filter link."],["ManagementProfileFilterLinkInsertMethodBuilder","Create a new profile filter link."],["ManagementProfileFilterLinkListMethodBuilder","Lists all profile filter links for a profile."],["ManagementProfileFilterLinkPatchMethodBuilder","Update an existing profile filter link. This method supports patch semantics."],["ManagementProfileFilterLinkUpdateMethodBuilder","Update an existing profile filter link."],["ManagementProfileGetMethodBuilder","Gets a view (profile) to which the user has access."],["ManagementProfileInsertMethodBuilder","Create a new view (profile)."],["ManagementProfileListMethodBuilder","Lists views (profiles) to which the user has access."],["ManagementProfilePatchMethodBuilder","Updates an existing view (profile). This method supports patch semantics."],["ManagementProfileUpdateMethodBuilder","Updates an existing view (profile)."],["ManagementProfileUserLinkDeleteMethodBuilder","Removes a user from the given view (profile)."],["ManagementProfileUserLinkInsertMethodBuilder","Adds a new user to the given view (profile)."],["ManagementProfileUserLinkListMethodBuilder","Lists profile-user links for a given view (profile)."],["ManagementProfileUserLinkUpdateMethodBuilder","Updates permissions for an existing user on the given view (profile)."],["ManagementSegmentListMethodBuilder","Lists segments to which the user has access."],["ManagementUnsampledReportGetMethodBuilder","Returns a single unsampled report."],["ManagementUnsampledReportInsertMethodBuilder","Create a new unsampled report."],["ManagementUnsampledReportListMethodBuilder","Lists unsampled reports to which the user has access."],["ManagementUploadDeleteUploadDataMethodBuilder","Delete data associated with a previous upload."],["ManagementUploadGetMethodBuilder","List uploads to which the user has access."],["ManagementUploadListMethodBuilder","List uploads to which the user has access."],["ManagementUploadUploadDataMethodBuilder","Upload data for a custom data source."],["ManagementWebPropertyAdWordsLinkDeleteMethodBuilder","Deletes a web property-AdWords link."],["ManagementWebPropertyAdWordsLinkGetMethodBuilder","Returns a web property-AdWords link to which the user has access."],["ManagementWebPropertyAdWordsLinkInsertMethodBuilder","Creates a webProperty-AdWords link."],["ManagementWebPropertyAdWordsLinkListMethodBuilder","Lists webProperty-AdWords links for a given web property."],["ManagementWebPropertyAdWordsLinkPatchMethodBuilder","Updates an existing webProperty-AdWords link. This method supports patch semantics."],["ManagementWebPropertyAdWordsLinkUpdateMethodBuilder","Updates an existing webProperty-AdWords link."],["ManagementWebpropertyGetMethodBuilder","Gets a web property to which the user has access."],["ManagementWebpropertyInsertMethodBuilder","Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile."],["ManagementWebpropertyListMethodBuilder","Lists web properties to which the user has access."],["ManagementWebpropertyPatchMethodBuilder","Updates an existing web property. This method supports patch semantics."],["ManagementWebpropertyUpdateMethodBuilder","Updates an existing web property."],["ManagementWebpropertyUserLinkDeleteMethodBuilder","Removes a user from the given web property."],["ManagementWebpropertyUserLinkInsertMethodBuilder","Adds a new user to the given web property."],["ManagementWebpropertyUserLinkListMethodBuilder","Lists webProperty-user links for a given web property."],["ManagementWebpropertyUserLinkUpdateMethodBuilder","Updates permissions for an existing user on the given web property."],["McfData","Multi-Channel Funnels data for a given view (profile).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * mcf.get data (response)  "],["McfDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.   This type is not used in any activity, and only used as *part* of another schema.  "],["McfDataProfileInfo","Information for the view (profile), for which the Analytics data was requested.   This type is not used in any activity, and only used as *part* of another schema.  "],["McfDataQuery","Analytics data request query parameters.   This type is not used in any activity, and only used as *part* of another schema.  "],["McfDataRows","A union object representing a dimension or metric value. Only one of \"primitiveValue\" or \"conversionPathValue\" attribute will be populated.   This type is not used in any activity, and only used as *part* of another schema.  "],["McfDataRowsConversionPathValue","A conversion path dimension value, containing a list of interactions with their attributes.   This type is not used in any activity, and only used as *part* of another schema.  "],["MetadataColumnListMethodBuilder","Lists all columns for a report type"],["MetadataMethodsBuilder","A builder providing access to all methods supported on *metadata* resources. It is not used directly, but through the `Analytics` hub."],["Profile","JSON template for an Analytics view (profile).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * profiles.insert management (request|response) * profiles.update management (request|response) * profiles.get management (response) * profiles.patch management (request|response)  "],["ProfileChildLink","Child link for this view (profile). Points to the list of goals for this view (profile).   This type is not used in any activity, and only used as *part* of another schema.  "],["ProfileFilterLink","JSON template for an Analytics profile filter link.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * profile filter links.update management (request|response) * profile filter links.get management (response) * profile filter links.insert management (request|response) * profile filter links.patch management (request|response)  "],["ProfileFilterLinks","A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * profile filter links.list management (response)  "],["ProfileParentLink","Parent link for this view (profile). Points to the web property to which this view (profile) belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["ProfilePermissions","Permissions the user has for this view (profile).   This type is not used in any activity, and only used as *part* of another schema.  "],["ProfileRef","JSON template for a linked view (profile).   This type is not used in any activity, and only used as *part* of another schema.  "],["ProfileSummary","JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.   This type is not used in any activity, and only used as *part* of another schema.  "],["Profiles","A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * profiles.list management (response)  "],["ProvisioningCreateAccountTicketMethodBuilder","Creates an account ticket."],["ProvisioningMethodsBuilder","A builder providing access to all methods supported on *provisioning* resources. It is not used directly, but through the `Analytics` hub."],["RealtimeData","Real time data for a given view (profile).   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * realtime.get data (response)  "],["RealtimeDataColumnHeaders","Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.   This type is not used in any activity, and only used as *part* of another schema.  "],["RealtimeDataProfileInfo","Information for the view (profile), for which the real time data was requested.   This type is not used in any activity, and only used as *part* of another schema.  "],["RealtimeDataQuery","Real time data request query parameters.   This type is not used in any activity, and only used as *part* of another schema.  "],["Segment","JSON template for an Analytics segment.   This type is not used in any activity, and only used as *part* of another schema.  "],["Segments","An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * segments.list management (response)  "],["UnsampledReport","JSON template for Analytics unsampled report resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * unsampled reports.insert management (request|response) * unsampled reports.get management (response)  "],["UnsampledReportCloudStorageDownloadDetails","Download details for a file stored in Google Cloud Storage.   This type is not used in any activity, and only used as *part* of another schema.  "],["UnsampledReportDriveDownloadDetails","Download details for a file stored in Google Drive.   This type is not used in any activity, and only used as *part* of another schema.  "],["UnsampledReports","An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * unsampled reports.list management (response)  "],["Upload","Metadata returned for an upload operation.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * uploads.get management (response) * uploads.upload data management (response)  "],["Uploads","Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * uploads.list management (response)  "],["UserRef","JSON template for a user reference.   This type is not used in any activity, and only used as *part* of another schema.  "],["WebPropertyRef","JSON template for a web property reference.   This type is not used in any activity, and only used as *part* of another schema.  "],["WebPropertySummary","JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.   This type is not used in any activity, and only used as *part* of another schema.  "],["Webproperties","A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * webproperties.list management (response)  "],["Webproperty","JSON template for an Analytics web property.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * webproperties.insert management (request|response) * webproperties.update management (request|response) * webproperties.get management (response) * webproperties.patch management (request|response)  "],["WebpropertyChildLink","Child link for this web property. Points to the list of views (profiles) for this web property.   This type is not used in any activity, and only used as *part* of another schema.  "],["WebpropertyParentLink","Parent link for this web property. Points to the account to which this web property belongs.   This type is not used in any activity, and only used as *part* of another schema.  "],["WebpropertyPermissions","Permissions the user has for this web property.   This type is not used in any activity, and only used as *part* of another schema.  "]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});