initSidebarItems({"struct":[["Account","There is no detailed description."],["AccountAdclientListCall","List all ad clients in the specified account."],["AccountAdunitCustomchannelListCall","List all custom channels which the specified ad unit belongs to."],["AccountAdunitGetAdCodeCall","Get ad code for the specified ad unit."],["AccountAdunitGetCall","Gets the specified ad unit in the specified ad client for the specified account."],["AccountAdunitListCall","List all ad units in the specified ad client for the specified account."],["AccountAlertDeleteCall","Dismiss (delete) the specified alert from the specified publisher AdSense account."],["AccountAlertListCall","List the alerts for the specified AdSense account."],["AccountCustomchannelAdunitListCall","List all ad units in the specified custom channel."],["AccountCustomchannelGetCall","Get the specified custom channel from the specified ad client for the specified account."],["AccountCustomchannelListCall","List all custom channels in the specified ad client for the specified account."],["AccountGetCall","Get information about the selected AdSense account."],["AccountListCall","List all accounts available to this AdSense account."],["AccountMethods","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `AdSense` hub."],["AccountPaymentListCall","List the payments for the specified AdSense account."],["AccountReportGenerateCall","Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter."],["AccountReportSavedGenerateCall","Generate an AdSense report based on the saved report ID sent in the query parameters."],["AccountReportSavedListCall","List all saved reports in the specified AdSense account."],["AccountSavedadstyleGetCall","List a specific saved ad style for the specified account."],["AccountSavedadstyleListCall","List all saved ad styles in the specified account."],["AccountUrlchannelListCall","List all URL channels in the specified ad client for the specified account."],["Accounts","There is no detailed description."],["AdClient","There is no detailed description."],["AdClients","There is no detailed description."],["AdCode","There is no detailed description."],["AdSense","Central instance to access all AdSense related resource activities"],["AdStyle","There is no detailed description."],["AdStyleColors","The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash."],["AdStyleFont","The font which is included in the style."],["AdUnit","There is no detailed description."],["AdUnitContentAdsSettings","Settings specific to content ads (AFC) and highend mobile content ads (AFMC)."],["AdUnitContentAdsSettingsBackupOption","The backup option to be used in instances where no ad is available."],["AdUnitFeedAdsSettings","Settings specific to feed ads (AFF)."],["AdUnitMobileContentAdsSettings","Settings specific to WAP mobile content ads (AFMC)."],["AdUnits","There is no detailed description."],["AdclientListCall","List all ad clients in this AdSense account."],["AdclientMethods","A builder providing access to all methods supported on *adclient* resources. It is not used directly, but through the `AdSense` hub."],["AdsenseReportsGenerateResponse","There is no detailed description."],["AdsenseReportsGenerateResponseHeaders","The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request."],["AdunitCustomchannelListCall","List all custom channels which the specified ad unit belongs to."],["AdunitGetAdCodeCall","Get ad code for the specified ad unit."],["AdunitGetCall","Gets the specified ad unit in the specified ad client."],["AdunitListCall","List all ad units in the specified ad client for this AdSense account."],["AdunitMethods","A builder providing access to all methods supported on *adunit* resources. It is not used directly, but through the `AdSense` hub."],["Alert","There is no detailed description."],["AlertDeleteCall","Dismiss (delete) the specified alert from the publisher's AdSense account."],["AlertListCall","List the alerts for this AdSense account."],["AlertMethods","A builder providing access to all methods supported on *alert* resources. It is not used directly, but through the `AdSense` hub."],["Alerts","There is no detailed description."],["CustomChannel","There is no detailed description."],["CustomChannelTargetingInfo","The targeting information of this custom channel, if activated."],["CustomChannels","There is no detailed description."],["CustomchannelAdunitListCall","List all ad units in the specified custom channel."],["CustomchannelGetCall","Get the specified custom channel from the specified ad client."],["CustomchannelListCall","List all custom channels in the specified ad client for this AdSense account."],["CustomchannelMethods","A builder providing access to all methods supported on *customchannel* resources. It is not used directly, but through the `AdSense` hub."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Metadata","There is no detailed description."],["MetadataDimensionListCall","List the metadata for the dimensions available to this AdSense account."],["MetadataMethods","A builder providing access to all methods supported on *metadata* resources. It is not used directly, but through the `AdSense` hub."],["MetadataMetricListCall","List the metadata for the metrics available to this AdSense account."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Payment","There is no detailed description."],["PaymentListCall","List the payments for this AdSense account."],["PaymentMethods","A builder providing access to all methods supported on *payment* resources. It is not used directly, but through the `AdSense` hub."],["Payments","There is no detailed description."],["ReportGenerateCall","Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter."],["ReportMethods","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `AdSense` hub."],["ReportSavedGenerateCall","Generate an AdSense report based on the saved report ID sent in the query parameters."],["ReportSavedListCall","List all saved reports in this AdSense account."],["ReportingMetadataEntry","There is no detailed description."],["SavedAdStyle","There is no detailed description."],["SavedAdStyles","There is no detailed description."],["SavedReport","There is no detailed description."],["SavedReports","There is no detailed description."],["SavedadstyleGetCall","Get a specific saved ad style from the user's account."],["SavedadstyleListCall","List all saved ad styles in the user's account."],["SavedadstyleMethods","A builder providing access to all methods supported on *savedadstyle* resources. It is not used directly, but through the `AdSense` hub."],["UrlChannel","There is no detailed description."],["UrlChannels","There is no detailed description."],["UrlchannelListCall","List all URL channels in the specified ad client for this AdSense account."],["UrlchannelMethods","A builder providing access to all methods supported on *urlchannel* resources. It is not used directly, but through the `AdSense` hub."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]]});