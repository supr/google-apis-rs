initSidebarItems({"struct":[["ApplicationSecret","Represents either 'installed' or 'web' applications in a json secrets file. See `ConsoleApplicationSecret` for more information"],["Authenticator","A generalized authenticator which will keep tokens valid and store them."],["ConsoleApplicationSecret","A type to facilitate reading and writing the json secret file as returned by the google developer console"],["DefaultAuthenticatorDelegate","Uses all default implementations by AuthenticatorDelegate, and makes the trait's implementation usable in the first place."],["DeviceFlow","Implements the Oauth2 Device Flow It operates in two steps: * obtain a code to show to the user * (repeatedly) poll for the user to authenticate your application"],["MemoryStorage","A storage that remembers values for one session only."],["NullStorage","A storage that remembers nothing."],["PollInformation","Contains state of pending authentication requests"],["RefreshFlow","Implements the Outh2 Refresh Token Flow."],["Scheme","A scheme for use in `hyper::header::Authorization`"],["Token","Represents a token as returned by OAuth2 servers."]],"trait":[["AuthenticatorDelegate","A partially implemented trait to interact with the `Authenticator`"],["GetToken","A provider for authorization tokens, yielding tokens valid for a given scope. The `api_key()` method is an alternative in case there are no scopes or if no user is involved."],["TokenStorage","Implements a specialised storage to set and retrieve `Token` instances. The `scope_hash` represents the signature of the scopes for which the given token should be stored or retrieved."]],"enum":[["FlowType","All known authentication types, for suitable constants"],["PollResult","Encapsulates all possible results of a `poll_token(...)` operation"],["RefreshResult","All possible outcomes of the refresh flow"],["Retry","A utility type to indicate how operations DeviceFlowHelper operations should be retried"],["TokenType","Represents all implemented token types"]]});