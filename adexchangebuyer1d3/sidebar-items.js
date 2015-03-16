initSidebarItems({"mod":[["cmn",""]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["Account","Configuration data for an Ad Exchange buyer account.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update accounts (request|response) * get accounts (response) * list accounts (none) * patch accounts (request|response)  "],["AccountBidderLocation","Your bidder locations that have distinct URLs.   This type is not used in any activity, and only used as *part* of another schema.  "],["AccountGetMethodBuilder","Gets one account by ID."],["AccountListMethodBuilder","Retrieves the authenticated user's list of accounts."],["AccountMethodsBuilder","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["AccountPatchMethodBuilder","Updates an existing account. This method supports patch semantics."],["AccountUpdateMethodBuilder","Updates an existing account."],["AccountsList","An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list accounts (response)  "],["AdExchangeBuyer","Central instance to access all AdExchangeBuyer related resource activities"],["BillingInfo","The configuration data for an Ad Exchange billing info.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get billing info (response)  "],["BillingInfoGetMethodBuilder","Returns the billing information for one account specified by account ID."],["BillingInfoList","A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list billing info (response)  "],["BillingInfoListMethodBuilder","Retrieves a list of billing information for all accounts of the authenticated user."],["BillingInfoMethodsBuilder","A builder providing access to all methods supported on *billingInfo* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["Budget","The configuration data for Ad Exchange RTB - Budget API.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * patch budget (request|response) * update budget (request|response) * get budget (response)  "],["BudgetGetMethodBuilder","Returns the budget information for the adgroup specified by the accountId and billingId."],["BudgetMethodsBuilder","A builder providing access to all methods supported on *budget* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["BudgetPatchMethodBuilder","Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics."],["BudgetUpdateMethodBuilder","Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request."],["Creative","A creative and its classification data.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * insert creatives (request|response) * list creatives (none) * get creatives (response)  "],["CreativeCorrections","Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.   This type is not used in any activity, and only used as *part* of another schema.  "],["CreativeDisapprovalReasons","The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests.   This type is not used in any activity, and only used as *part* of another schema.  "],["CreativeFilteringReasons","The filtering reasons for the creative. If this feature is not enabled, please ask your technical account manager. Read-only. This field should not be set in requests.   This type is not used in any activity, and only used as *part* of another schema.  "],["CreativeFilteringReasonsReasons","The filtering reasons.   This type is not used in any activity, and only used as *part* of another schema.  "],["CreativeGetMethodBuilder","Gets the status for a single creative. A creative will be available 30-40 minutes after submission."],["CreativeInsertMethodBuilder","Submit a new creative."],["CreativeListMethodBuilder","Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission."],["CreativeMethodsBuilder","A builder providing access to all methods supported on *creative* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["CreativesList","The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list creatives (response)  "],["DirectDeal","The configuration data for an Ad Exchange direct deal.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get direct deals (response) * list direct deals (none)  "],["DirectDealGetMethodBuilder","Gets one direct deal by ID."],["DirectDealListMethodBuilder","Retrieves the authenticated user's list of direct deals."],["DirectDealMethodsBuilder","A builder providing access to all methods supported on *directDeal* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["DirectDealsList","A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list direct deals (response)  "],["PerformanceReport","The configuration data for an Ad Exchange performance report list.   This type is not used in any activity, and only used as *part* of another schema.  "],["PerformanceReportList","The configuration data for an Ad Exchange performance report list. https://sites.google.com/a/google.com/adx-integration/Home/engineering/binary-releases/rtb-api-release https://cs.corp.google.com/#piper///depot/google3/contentads/adx/tools/rtb_api/adxrtb.py   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list performance report (response)  "],["PerformanceReportListMethodBuilder","Retrieves the authenticated user's list of performance metrics."],["PerformanceReportMethodsBuilder","A builder providing access to all methods supported on *performanceReport* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["PretargetingConfig","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * insert pretargeting config (request|response) * patch pretargeting config (request|response) * get pretargeting config (response) * update pretargeting config (request|response)  "],["PretargetingConfigDeleteMethodBuilder","Deletes an existing pretargeting config."],["PretargetingConfigDimensions","Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.   This type is not used in any activity, and only used as *part* of another schema.  "],["PretargetingConfigExcludedPlacements","Requests containing any of these placements will not match.   This type is not used in any activity, and only used as *part* of another schema.  "],["PretargetingConfigGetMethodBuilder","Gets a specific pretargeting configuration"],["PretargetingConfigInsertMethodBuilder","Inserts a new pretargeting configuration."],["PretargetingConfigList","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list pretargeting config (response)  "],["PretargetingConfigListMethodBuilder","Retrieves a list of the authenticated user's pretargeting configurations."],["PretargetingConfigMethodsBuilder","A builder providing access to all methods supported on *pretargetingConfig* resources. It is not used directly, but through the `AdExchangeBuyer` hub."],["PretargetingConfigPatchMethodBuilder","Updates an existing pretargeting config. This method supports patch semantics."],["PretargetingConfigPlacements","Requests containing any of these placements will match.   This type is not used in any activity, and only used as *part* of another schema.  "],["PretargetingConfigUpdateMethodBuilder","Updates an existing pretargeting config."]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});