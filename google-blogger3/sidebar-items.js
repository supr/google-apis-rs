initSidebarItems({"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResourceMethodsBuilder","Identifies types for building methods of a particular resource type"],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"enum":[["Result","A universal result type used as return for all action method results."],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["Blog","There is no detailed description."],["BlogGetByUrlCall","Retrieve a Blog by URL."],["BlogGetCall","Gets one blog by ID."],["BlogList","There is no detailed description."],["BlogListByUserCall","Retrieves a list of blogs, possibly filtered."],["BlogLocale","The locale this Blog is set to."],["BlogMethods","A builder providing access to all methods supported on *blog* resources. It is not used directly, but through the `Blogger` hub."],["BlogPages","The container of pages in this blog."],["BlogPerUserInfo","There is no detailed description."],["BlogPosts","The container of posts in this blog."],["BlogUserInfo","There is no detailed description."],["BlogUserInfoGetCall","Gets one blog and user info pair by blogId and userId."],["BlogUserInfoMethods","A builder providing access to all methods supported on *blogUserInfo* resources. It is not used directly, but through the `Blogger` hub."],["Blogger","Central instance to access all Blogger related resource activities"],["Comment","There is no detailed description."],["CommentApproveCall","Marks a comment as not spam."],["CommentAuthor","The author of this Comment."],["CommentAuthorImage","The comment creator's avatar."],["CommentBlog","Data about the blog containing this comment."],["CommentDeleteCall","Delete a comment by ID."],["CommentGetCall","Gets one comment by ID."],["CommentInReplyTo","Data about the comment this is in reply to."],["CommentList","There is no detailed description."],["CommentListByBlogCall","Retrieves the comments for a blog, across all posts, possibly filtered."],["CommentListCall","Retrieves the comments for a post, possibly filtered."],["CommentMarkAsSpamCall","Marks a comment as spam."],["CommentMethods","A builder providing access to all methods supported on *comment* resources. It is not used directly, but through the `Blogger` hub."],["CommentPost","Data about the post containing this comment."],["CommentRemoveContentCall","Removes the content of a comment."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Page","There is no detailed description."],["PageAuthor","The author of this Page."],["PageAuthorImage","The page author's avatar."],["PageBlog","Data about the blog containing this Page."],["PageDeleteCall","Delete a page by ID."],["PageGetCall","Gets one blog page by ID."],["PageInsertCall","Add a page."],["PageList","There is no detailed description."],["PageListCall","Retrieves the pages for a blog, optionally including non-LIVE statuses."],["PageMethods","A builder providing access to all methods supported on *page* resources. It is not used directly, but through the `Blogger` hub."],["PagePatchCall","Update a page. This method supports patch semantics."],["PagePublishCall","Publishes a draft page."],["PageRevertCall","Revert a published or scheduled page to draft state."],["PageUpdateCall","Update a page."],["PageViewGetCall","Retrieve pageview stats for a Blog."],["PageViewMethods","A builder providing access to all methods supported on *pageView* resources. It is not used directly, but through the `Blogger` hub."],["Pageviews","There is no detailed description."],["PageviewsCounts","The container of posts in this blog."],["Post","There is no detailed description."],["PostAuthor","The author of this Post."],["PostAuthorImage","The Post author's avatar."],["PostBlog","Data about the blog containing this Post."],["PostDeleteCall","Delete a post by ID."],["PostGetByPathCall","Retrieve a Post by Path."],["PostGetCall","Get a post by ID."],["PostImages","Display image for the Post."],["PostInsertCall","Add a post."],["PostList","There is no detailed description."],["PostListCall","Retrieves a list of posts, possibly filtered."],["PostLocation","The location for geotagged posts."],["PostMethods","A builder providing access to all methods supported on *post* resources. It is not used directly, but through the `Blogger` hub."],["PostPatchCall","Update a post. This method supports patch semantics."],["PostPerUserInfo","There is no detailed description."],["PostPublishCall","Publishes a draft post, optionally at the specific time of the given publishDate parameter."],["PostReplies","The container of comments on this Post."],["PostRevertCall","Revert a published or scheduled post to draft state."],["PostSearchCall","Search for a post."],["PostUpdateCall","Update a post."],["PostUserInfo","There is no detailed description."],["PostUserInfoGetCall","Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights, specific to the user."],["PostUserInfoListCall","Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access rights, specific to the user."],["PostUserInfoMethods","A builder providing access to all methods supported on *postUserInfo* resources. It is not used directly, but through the `Blogger` hub."],["PostUserInfosList","There is no detailed description."],["User","There is no detailed description."],["UserBlogs","The container of blogs for this user."],["UserGetCall","Gets one user by ID."],["UserLocale","This user's locale"],["UserMethods","A builder providing access to all methods supported on *user* resources. It is not used directly, but through the `Blogger` hub."]]});