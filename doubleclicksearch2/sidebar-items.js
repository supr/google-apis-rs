initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]],"struct":[["Availability","A message containing availability data relevant to DoubleClick Search.   This type is not used in any activity, and only used as *part* of another schema.  "],["Conversion","A conversion containing data relevant to DoubleClick Search.   This type is not used in any activity, and only used as *part* of another schema.  "],["ConversionGetMethodBuilder","Retrieves a list of conversions from a DoubleClick Search engine account."],["ConversionInsertMethodBuilder","Inserts a batch of new conversions into DoubleClick Search."],["ConversionList","A list of conversions.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * insert conversion (request|response) * get conversion (response) * patch conversion (request|response) * update conversion (request|response)  "],["ConversionMethodsBuilder","A builder providing access to all methods supported on *conversion* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["ConversionPatchMethodBuilder","Updates a batch of conversions in DoubleClick Search. This method supports patch semantics."],["ConversionUpdateAvailabilityMethodBuilder","Updates the availabilities of a batch of floodlight activities in DoubleClick Search."],["ConversionUpdateMethodBuilder","Updates a batch of conversions in DoubleClick Search."],["CustomDimension","A message containing the custome dimension.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomMetric","A message containing the custome metric.   This type is not used in any activity, and only used as *part* of another schema.  "],["Doubleclicksearch","Central instance to access all Doubleclicksearch related resource activities"],["Report","A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * generate reports (response) * get file reports (none) * get reports (response) * request reports (response)  "],["ReportApiColumnSpec","A request object used to create a DoubleClick Search report.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportFiles","Asynchronous report only. Contains a list of generated report files once the report has succesfully completed.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportGenerateMethodBuilder","Generates and returns a report immediately."],["ReportGetFileMethodBuilder","Downloads a report file."],["ReportGetMethodBuilder","Polls for the status of a report request."],["ReportMethodsBuilder","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["ReportRequest","A request object used to create a DoubleClick Search report.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * generate reports (request) * request reports (request)  "],["ReportRequestFilters","A list of filters to be applied to the report.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportRequestMethodBuilder","Inserts a report request into the reporting system."],["ReportRequestOrderBy","Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportRequestReportScope","The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportRequestTimeRange","If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReportRow","A row in a DoubleClick Search report.   This type is not used in any activity, and only used as *part* of another schema.  "],["SavedColumn","A saved column   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list saved columns (none)  "],["SavedColumnList","A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list saved columns (response)  "],["SavedColumnListMethodBuilder","Retrieve the list of saved columns for a specified advertiser."],["SavedColumnMethodsBuilder","A builder providing access to all methods supported on *savedColumn* resources. It is not used directly, but through the `Doubleclicksearch` hub."],["UpdateAvailabilityRequest","The request to update availability.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update availability conversion (request)  "],["UpdateAvailabilityResponse","The response to a update availability request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update availability conversion (response)  "]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});