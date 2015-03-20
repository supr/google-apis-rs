initSidebarItems({"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["SiteAddCallBuilder","Adds a site to the set of the user's sites in Webmaster Tools."],["SiteDeleteCallBuilder","Removes a site from the set of the user's Webmaster Tools sites."],["SiteGetCallBuilder","Retrieves information about specific site."],["SiteListCallBuilder","Lists your Webmaster Tools sites."],["SiteMethodsBuilder","A builder providing access to all methods supported on *site* resources. It is not used directly, but through the `Webmasters` hub."],["SitemapDeleteCallBuilder","Deletes a sitemap from this site."],["SitemapGetCallBuilder","Retrieves information about a specific sitemap."],["SitemapListCallBuilder","Lists sitemaps uploaded to the site."],["SitemapMethodsBuilder","A builder providing access to all methods supported on *sitemap* resources. It is not used directly, but through the `Webmasters` hub."],["SitemapSubmitCallBuilder","Submits a sitemap for a site."],["SitemapsListResponse","List of sitemaps."],["SitesListResponse","List of sites with access level information."],["UrlCrawlErrorCount","An entry in a URL crawl errors time series."],["UrlCrawlErrorCountsPerType","Number of errors per day for a specific error type (defined by platform and category)."],["UrlCrawlErrorsCountsQueryResponse","A time series of the number of URL crawl errors per error category and platform."],["UrlCrawlErrorsSample","There is no detailed description."],["UrlCrawlErrorsSamplesListResponse","List of crawl error samples."],["UrlSampleDetails","Additional details about the URL, set only when calling get()."],["UrlcrawlerrorscountMethodsBuilder","A builder providing access to all methods supported on *urlcrawlerrorscount* resources. It is not used directly, but through the `Webmasters` hub."],["UrlcrawlerrorscountQueryCallBuilder","Retrieves a time series of the number of URL crawl errors per error category and platform."],["UrlcrawlerrorssampleGetCallBuilder","Retrieves details about crawl errors for a site's sample URL."],["UrlcrawlerrorssampleListCallBuilder","Lists a site's sample URLs for the specified crawl error category and platform."],["UrlcrawlerrorssampleMarkAsFixedCallBuilder","Marks the provided site's sample URL as fixed, and removes it from the samples list."],["UrlcrawlerrorssampleMethodsBuilder","A builder providing access to all methods supported on *urlcrawlerrorssample* resources. It is not used directly, but through the `Webmasters` hub."],["Webmasters","Central instance to access all Webmasters related resource activities"],["WmxSite","Access level information for a Webmaster Tools site."],["WmxSitemap","There is no detailed description."],["WmxSitemapContent","Information about the various content types in the sitemap."]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]]});