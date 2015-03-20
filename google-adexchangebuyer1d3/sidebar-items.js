initSidebarItems({"struct":[["Account","Configuration data for an Ad Exchange buyer account."],["AccountBidderLocation","Your bidder locations that have distinct URLs."],["AccountGetCallBuilder","Gets one account by ID."],["AccountListCallBuilder","Retrieves the authenticated user's list of accounts."],["AccountMethodsBuilder","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["AccountPatchCallBuilder","Updates an existing account. This method supports patch semantics."],["AccountUpdateCallBuilder","Updates an existing account."],["AccountsList","An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account."],["AdExchangeBuyer","Central instance to access all AdExchangeBuyer related resource activities"],["BillingInfo","The configuration data for an Ad Exchange billing info."],["BillingInfoGetCallBuilder","Returns the billing information for one account specified by account ID."],["BillingInfoList","A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info."],["BillingInfoListCallBuilder","Retrieves a list of billing information for all accounts of the authenticated user."],["BillingInfoMethodsBuilder","A builder providing access to all methods supported on *billingInfo* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["Budget","The configuration data for Ad Exchange RTB - Budget API."],["BudgetGetCallBuilder","Returns the budget information for the adgroup specified by the accountId and billingId."],["BudgetMethodsBuilder","A builder providing access to all methods supported on *budget* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["BudgetPatchCallBuilder","Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics."],["BudgetUpdateCallBuilder","Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request."],["Creative","A creative and its classification data."],["CreativeCorrections","Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests."],["CreativeDisapprovalReasons","The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests."],["CreativeFilteringReasons","The filtering reasons for the creative. If this feature is not enabled, please ask your technical account manager. Read-only. This field should not be set in requests."],["CreativeFilteringReasonsReasons","The filtering reasons."],["CreativeGetCallBuilder","Gets the status for a single creative. A creative will be available 30-40 minutes after submission."],["CreativeInsertCallBuilder","Submit a new creative."],["CreativeListCallBuilder","Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission."],["CreativeMethodsBuilder","A builder providing access to all methods supported on *creative* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["CreativesList","The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DirectDeal","The configuration data for an Ad Exchange direct deal."],["DirectDealGetCallBuilder","Gets one direct deal by ID."],["DirectDealListCallBuilder","Retrieves the authenticated user's list of direct deals."],["DirectDealMethodsBuilder","A builder providing access to all methods supported on *directDeal* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["DirectDealsList","A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["PerformanceReport","The configuration data for an Ad Exchange performance report list."],["PerformanceReportList","The configuration data for an Ad Exchange performance report list. https://sites.google.com/a/google.com/adx-integration/Home/engineering/binary-releases/rtb-api-release https://cs.corp.google.com/#piper///depot/google3/contentads/adx/tools/rtb_api/adxrtb.py"],["PerformanceReportListCallBuilder","Retrieves the authenticated user's list of performance metrics."],["PerformanceReportMethodsBuilder","A builder providing access to all methods supported on *performanceReport* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["PretargetingConfig","There is no detailed description."],["PretargetingConfigDeleteCallBuilder","Deletes an existing pretargeting config."],["PretargetingConfigDimensions","Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions."],["PretargetingConfigExcludedPlacements","Requests containing any of these placements will not match."],["PretargetingConfigGetCallBuilder","Gets a specific pretargeting configuration"],["PretargetingConfigInsertCallBuilder","Inserts a new pretargeting configuration."],["PretargetingConfigList","There is no detailed description."],["PretargetingConfigListCallBuilder","Retrieves a list of the authenticated user's pretargeting configurations."],["PretargetingConfigMethodsBuilder","A builder providing access to all methods supported on *pretargetingConfig* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["PretargetingConfigPatchCallBuilder","Updates an existing pretargeting config. This method supports patch semantics."],["PretargetingConfigPlacements","Requests containing any of these placements will match."],["PretargetingConfigUpdateCallBuilder","Updates an existing pretargeting config."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]]});