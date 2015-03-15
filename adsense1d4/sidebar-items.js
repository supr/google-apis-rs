initSidebarItems({"struct":[["Account","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * adunits.list accounts (none) * customchannels.list accounts (none) * adunits.customchannels.list accounts (none) * alerts.delete accounts (none) * savedadstyles.get accounts (none) * reports.generate accounts (none) * list accounts (none) * adclients.list accounts (none) * reports.saved.generate accounts (none) * adunits.get accounts (none) * alerts.list accounts (none) * savedadstyles.list accounts (none) * customchannels.get accounts (none) * get accounts (response) * customchannels.adunits.list accounts (none) * payments.list accounts (none) * adunits.get ad code accounts (none) * reports.saved.list accounts (none) * urlchannels.list accounts (none)  "],["AccountAdclientListMethodBuilder","List all ad clients in the specified account."],["AccountAdunitCustomchannelListMethodBuilder","List all custom channels which the specified ad unit belongs to."],["AccountAdunitGetAdCodeMethodBuilder","Get ad code for the specified ad unit."],["AccountAdunitGetMethodBuilder","Gets the specified ad unit in the specified ad client for the specified account."],["AccountAdunitListMethodBuilder","List all ad units in the specified ad client for the specified account."],["AccountAlertDeleteMethodBuilder","Dismiss (delete) the specified alert from the specified publisher AdSense account."],["AccountAlertListMethodBuilder","List the alerts for the specified AdSense account."],["AccountCustomchannelAdunitListMethodBuilder","List all ad units in the specified custom channel."],["AccountCustomchannelGetMethodBuilder","Get the specified custom channel from the specified ad client for the specified account."],["AccountCustomchannelListMethodBuilder","List all custom channels in the specified ad client for the specified account."],["AccountGetMethodBuilder","Get information about the selected AdSense account."],["AccountListMethodBuilder","List all accounts available to this AdSense account."],["AccountMethodsBuilder","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `AdSense` hub."],["AccountPaymentListMethodBuilder","List the payments for the specified AdSense account."],["AccountReportGenerateMethodBuilder","Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter."],["AccountReportSavedGenerateMethodBuilder","Generate an AdSense report based on the saved report ID sent in the query parameters."],["AccountReportSavedListMethodBuilder","List all saved reports in the specified AdSense account."],["AccountSavedadstyleGetMethodBuilder","List a specific saved ad style for the specified account."],["AccountSavedadstyleListMethodBuilder","List all saved ad styles in the specified account."],["AccountUrlchannelListMethodBuilder","List all URL channels in the specified ad client for the specified account."],["Accounts","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list accounts (response)  "],["AdClient","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdClients","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list adclients (response) * adclients.list accounts (response)  "],["AdCode","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * adunits.get ad code accounts (response) * get ad code adunits (response)  "],["AdSense","Central instance to access all AdSense related resource activities"],["AdStyle","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdStyleColors","The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdStyleFont","The font which is included in the style.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdUnit","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get adunits (response) * adunits.get accounts (response)  "],["AdUnitContentAdsSettings","Settings specific to content ads (AFC) and highend mobile content ads (AFMC).   This type is not used in any activity, and only used as *part* of another schema.  "],["AdUnitContentAdsSettingsBackupOption","The backup option to be used in instances where no ad is available.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdUnitFeedAdsSettings","Settings specific to feed ads (AFF).   This type is not used in any activity, and only used as *part* of another schema.  "],["AdUnitMobileContentAdsSettings","Settings specific to WAP mobile content ads (AFMC).   This type is not used in any activity, and only used as *part* of another schema.  "],["AdUnits","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * adunits.list accounts (response) * list adunits (response) * customchannels.adunits.list accounts (response) * adunits.list customchannels (response)  "],["AdclientListMethodBuilder","List all ad clients in this AdSense account."],["AdclientMethodsBuilder","A builder providing access to all methods supported on *adclient* resources. It is not used directly, but through the `AdSense` hub."],["AdsenseReportsGenerateResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * saved.generate reports (response) * reports.generate accounts (response) * reports.saved.generate accounts (response) * generate reports (response)  "],["AdsenseReportsGenerateResponseHeaders","The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.   This type is not used in any activity, and only used as *part* of another schema.  "],["AdunitCustomchannelListMethodBuilder","List all custom channels which the specified ad unit belongs to."],["AdunitGetAdCodeMethodBuilder","Get ad code for the specified ad unit."],["AdunitGetMethodBuilder","Gets the specified ad unit in the specified ad client."],["AdunitListMethodBuilder","List all ad units in the specified ad client for this AdSense account."],["AdunitMethodsBuilder","A builder providing access to all methods supported on *adunit* resources. It is not used directly, but through the `AdSense` hub."],["Alert","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list alerts (none) * delete alerts (none)  "],["AlertDeleteMethodBuilder","Dismiss (delete) the specified alert from the publisher's AdSense account."],["AlertListMethodBuilder","List the alerts for this AdSense account."],["AlertMethodsBuilder","A builder providing access to all methods supported on *alert* resources. It is not used directly, but through the `AdSense` hub."],["Alerts","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * alerts.list accounts (response) * list alerts (response)  "],["CustomChannel","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * customchannels.get accounts (response) * get customchannels (response)  "],["CustomChannelTargetingInfo","The targeting information of this custom channel, if activated.   This type is not used in any activity, and only used as *part* of another schema.  "],["CustomChannels","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * customchannels.list accounts (response) * customchannels.list adunits (response) * adunits.customchannels.list accounts (response) * list customchannels (response)  "],["CustomchannelAdunitListMethodBuilder","List all ad units in the specified custom channel."],["CustomchannelGetMethodBuilder","Get the specified custom channel from the specified ad client."],["CustomchannelListMethodBuilder","List all custom channels in the specified ad client for this AdSense account."],["CustomchannelMethodsBuilder","A builder providing access to all methods supported on *customchannel* resources. It is not used directly, but through the `AdSense` hub."],["Metadata","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * metrics.list metadata (response) * dimensions.list metadata (response)  "],["MetadataDimensionListMethodBuilder","List the metadata for the dimensions available to this AdSense account."],["MetadataMethodsBuilder","A builder providing access to all methods supported on *metadata* resources. It is not used directly, but through the `AdSense` hub."],["MetadataMetricListMethodBuilder","List the metadata for the metrics available to this AdSense account."],["Payment","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list payments (none)  "],["PaymentListMethodBuilder","List the payments for this AdSense account."],["PaymentMethodsBuilder","A builder providing access to all methods supported on *payment* resources. It is not used directly, but through the `AdSense` hub."],["Payments","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * payments.list accounts (response) * list payments (response)  "],["ReportGenerateMethodBuilder","Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter."],["ReportMethodsBuilder","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `AdSense` hub."],["ReportSavedGenerateMethodBuilder","Generate an AdSense report based on the saved report ID sent in the query parameters."],["ReportSavedListMethodBuilder","List all saved reports in this AdSense account."],["ReportingMetadataEntry","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["SavedAdStyle","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get savedadstyles (response) * savedadstyles.get accounts (response)  "],["SavedAdStyles","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * savedadstyles.list accounts (response) * list savedadstyles (response)  "],["SavedReport","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["SavedReports","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * saved.list reports (response) * reports.saved.list accounts (response)  "],["SavedadstyleGetMethodBuilder","Get a specific saved ad style from the user's account."],["SavedadstyleListMethodBuilder","List all saved ad styles in the user's account."],["SavedadstyleMethodsBuilder","A builder providing access to all methods supported on *savedadstyle* resources. It is not used directly, but through the `AdSense` hub."],["UrlChannel","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["UrlChannels","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list urlchannels (response) * urlchannels.list accounts (response)  "],["UrlchannelListMethodBuilder","List all URL channels in the specified ad client for this AdSense account."],["UrlchannelMethodsBuilder","A builder providing access to all methods supported on *urlchannel* resources. It is not used directly, but through the `AdSense` hub."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]]});