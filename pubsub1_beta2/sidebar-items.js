initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]],"struct":[["AcknowledgeRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.acknowledge projects (request)  "],["Empty","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.acknowledge projects (response) * subscriptions.modify push config projects (response) * subscriptions.delete projects (response) * topics.delete projects (response) * subscriptions.modify ack deadline projects (response)  "],["ListSubscriptionsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.list projects (response)  "],["ListTopicSubscriptionsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * topics.subscriptions.list projects (response)  "],["ListTopicsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * topics.list projects (response)  "],["ModifyAckDeadlineRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.modify ack deadline projects (request)  "],["ModifyPushConfigRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.modify push config projects (request)  "],["ProjectMethodsBuilder","A builder providing access to all methods supported on *project* resources. It is not used directly, but through the `Pubsub` hub."],["ProjectSubscriptionAcknowledgeMethodBuilder","Acknowledges the messages associated with the ack tokens in the AcknowledgeRequest. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error."],["ProjectSubscriptionCreateMethodBuilder","Creates a subscription to a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic."],["ProjectSubscriptionDeleteMethodBuilder","Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified."],["ProjectSubscriptionGetMethodBuilder","Gets the configuration details of a subscription."],["ProjectSubscriptionListMethodBuilder","Lists matching subscriptions."],["ProjectSubscriptionModifyAckDeadlineMethodBuilder","Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted."],["ProjectSubscriptionModifyPushConfigMethodBuilder","Modifies the PushConfig for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty PushConfig) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the PushConfig."],["ProjectSubscriptionPullMethodBuilder","Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return UNAVAILABLE if there are too many concurrent pull requests pending for the given subscription."],["ProjectTopicCreateMethodBuilder","Creates the given topic with the given name."],["ProjectTopicDeleteMethodBuilder","Deletes the topic with the given name. All subscriptions to this topic are detached from the topic. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions."],["ProjectTopicGetMethodBuilder","Gets the configuration of a topic."],["ProjectTopicListMethodBuilder","Lists matching topics."],["ProjectTopicPublishMethodBuilder","Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist."],["ProjectTopicSubscriptionListMethodBuilder","Lists the name of the subscriptions for this topic."],["PublishRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * topics.publish projects (request)  "],["PublishResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * topics.publish projects (response)  "],["Pubsub","Central instance to access all Pubsub related resource activities"],["PubsubMessage","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["PullRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.pull projects (request)  "],["PullResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.pull projects (response)  "],["PushConfig","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReceivedMessage","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["Subscription","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * subscriptions.create projects (request|response) * subscriptions.get projects (response)  "],["Topic","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * topics.create projects (request|response) * topics.get projects (response)  "]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});