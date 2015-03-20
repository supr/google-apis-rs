initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"enum":[["Result","A universal result type used as return for all action method results."]],"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DoubleClickBidManager","Central instance to access all DoubleClickBidManager related resource activities"],["DownloadLineItemsRequest","Request to fetch stored line items."],["DownloadLineItemsResponse","Download line items response."],["FilterPair","Filter used to match traffic data in your report."],["LineitemDownloadlineitemCallBuilder","Retrieves line items in CSV format."],["LineitemMethodsBuilder","A builder providing access to all methods supported on *lineitem* resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["LineitemUploadlineitemCallBuilder","Uploads line items in CSV format."],["ListQueriesResponse","List queries response."],["ListReportsResponse","List reports response."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Parameters","Parameters of a query or report."],["Query","Represents a query."],["QueryCreatequeryCallBuilder","Creates a query."],["QueryDeletequeryCallBuilder","Deletes a stored query as well as the associated stored reports."],["QueryGetqueryCallBuilder","Retrieves a stored query."],["QueryListqueryCallBuilder","Retrieves stored queries."],["QueryMetadata","Query metadata."],["QueryMethodsBuilder","A builder providing access to all methods supported on *query* resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["QueryRunqueryCallBuilder","Runs a stored query to generate a report."],["QuerySchedule","Information on how frequently and when to run a query."],["Report","Represents a report."],["ReportFailure","An explanation of a report failure."],["ReportKey","Key used to identify a report."],["ReportListreportCallBuilder","Retrieves stored reports."],["ReportMetadata","Report metadata."],["ReportMethodsBuilder","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["ReportStatus","Report status."],["RowStatus","Represents the upload status of a row in the request."],["RunQueryRequest","Request to run a stored query to generate a report."],["UploadLineItemsRequest","Request to upload line items."],["UploadLineItemsResponse","Upload line items response."],["UploadStatus","Represents the status of upload."]]});