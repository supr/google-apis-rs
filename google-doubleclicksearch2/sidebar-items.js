initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"struct":[["Availability","A message containing availability data relevant to DoubleClick Search."],["Conversion","A conversion containing data relevant to DoubleClick Search."],["ConversionGetCallBuilder","Retrieves a list of conversions from a DoubleClick Search engine account."],["ConversionInsertCallBuilder","Inserts a batch of new conversions into DoubleClick Search."],["ConversionList","A list of conversions."],["ConversionMethodsBuilder","A builder providing access to all methods supported on *conversion* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["ConversionPatchCallBuilder","Updates a batch of conversions in DoubleClick Search. This method supports patch semantics."],["ConversionUpdateAvailabilityCallBuilder","Updates the availabilities of a batch of floodlight activities in DoubleClick Search."],["ConversionUpdateCallBuilder","Updates a batch of conversions in DoubleClick Search."],["CustomDimension","A message containing the custome dimension."],["CustomMetric","A message containing the custome metric."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Doubleclicksearch","Central instance to access all Doubleclicksearch related resource activities"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Report","A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files."],["ReportApiColumnSpec","A request object used to create a DoubleClick Search report."],["ReportFiles","Asynchronous report only. Contains a list of generated report files once the report has succesfully completed."],["ReportGenerateCallBuilder","Generates and returns a report immediately."],["ReportGetCallBuilder","Polls for the status of a report request."],["ReportGetFileCallBuilder","Downloads a report file."],["ReportMethodsBuilder","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["ReportRequest","A request object used to create a DoubleClick Search report."],["ReportRequestCallBuilder","Inserts a report request into the reporting system."],["ReportRequestFilters","A list of filters to be applied to the report."],["ReportRequestOrderBy","Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows."],["ReportRequestReportScope","The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required."],["ReportRequestTimeRange","If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range."],["ReportRow","A row in a DoubleClick Search report."],["SavedColumn","A saved column"],["SavedColumnList","A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list."],["SavedColumnListCallBuilder","Retrieve the list of saved columns for a specified advertiser."],["SavedColumnMethodsBuilder","A builder providing access to all methods supported on *savedColumn* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["UpdateAvailabilityRequest","The request to update availability."],["UpdateAvailabilityResponse","The response to a update availability request."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});