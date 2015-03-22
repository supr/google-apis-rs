initSidebarItems({"struct":[["CloudMonitoring","Central instance to access all CloudMonitoring related resource activities"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeleteMetricDescriptorResponse","The response of cloudmonitoring.metricDescriptors.delete."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListMetricDescriptorsRequest","The request of cloudmonitoring.metricDescriptors.list."],["ListMetricDescriptorsResponse","The response of cloudmonitoring.metricDescriptors.list."],["ListTimeseriesDescriptorsRequest","The request of cloudmonitoring.timeseriesDescriptors.list"],["ListTimeseriesDescriptorsResponse","The response of cloudmonitoring.timeseriesDescriptors.list"],["ListTimeseriesRequest","The request of cloudmonitoring.timeseries.list"],["ListTimeseriesResponse","The response of cloudmonitoring.timeseries.list"],["MethodInfo","Contains information about an API request."],["MetricDescriptor","A metricDescriptor defines the name, label keys, and data type of a particular metric."],["MetricDescriptorCreateCall","Create a new metric."],["MetricDescriptorDeleteCall","Delete an existing metric."],["MetricDescriptorLabelDescriptor","A label in a metric is a description of this metric, including the key of this description (what the description is), and the value for this description."],["MetricDescriptorListCall","List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken."],["MetricDescriptorMethods","A builder providing access to all methods supported on *metricDescriptor* resources. It is not used directly, but through the `CloudMonitoring` hub."],["MetricDescriptorTypeDescriptor","A type in a metric contains information about how the metric is collected and what its data points look like."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Point","Point is a single point in a time series. It consists of a start time, an end time, and a value."],["PointDistribution","Distribution data point value type. When writing distribution points, try to be consistent with the boundaries of your buckets. If you must modify the bucket boundaries, then do so by merging, partitioning, or appending rather than skewing them."],["PointDistributionBucket","The histogram's bucket. Buckets that form the histogram of a distribution value. If the upper bound of a bucket, say U1, does not equal the lower bound of the next bucket, say L2, this means that there is no event in [U1, L2)."],["PointDistributionOverflowBucket","The overflow bucket is a special bucket that does not have the upperBound field; it includes all of the events that are no less than its lower bound."],["PointDistributionUnderflowBucket","The underflow bucket is a special bucket that does not have the lowerBound field; it includes all of the events that are less than its upper bound."],["Timeseries","The monitoring data is organized as metrics and stored as data points that are recorded over time. Each data point represents information like the CPU utilization of your virtual machine. A historical record of these data points is called a time series."],["TimeseriesDescriptor","TimeseriesDescriptor identifies a single time series."],["TimeseriesDescriptorListCall","List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken."],["TimeseriesDescriptorMethods","A builder providing access to all methods supported on *timeseriesDescriptor* resources. It is not used directly, but through the `CloudMonitoring` hub."],["TimeseriesPoint","When writing time series, TimeseriesPoint should be used instead of Timeseries, to enforce single point for each time series in the timeseries.write request."],["TimeseryListCall","List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken."],["TimeseryMethods","A builder providing access to all methods supported on *timesery* resources. It is not used directly, but through the `CloudMonitoring` hub."],["TimeseryWriteCall","Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time."],["WriteTimeseriesRequest","The request of cloudmonitoring.timeseries.write"],["WriteTimeseriesResponse","The response of cloudmonitoring.timeseries.write"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]]});