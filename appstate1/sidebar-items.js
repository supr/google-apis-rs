initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]],"struct":[["AppState","Central instance to access all AppState related resource activities"],["GetResponse","This is a JSON template for an app state resource.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get states (response)  "],["ListResponse","This is a JSON template to convert a list-response for app state.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list states (response)  "],["StateClearMethodBuilder","Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch."],["StateDeleteMethodBuilder","Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption."],["StateGetMethodBuilder","Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned."],["StateListMethodBuilder","Lists all the states keys, and optionally the state data."],["StateMethodsBuilder","A builder providing access to all methods supported on *state* resources. It is not used directly, but through the `AppState` hub."],["StateUpdateMethodBuilder","Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB."],["UpdateRequest","This is a JSON template for a requests which update app state   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update states (request)  "],["WriteResult","This is a JSON template for an app state write result.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * clear states (response) * update states (response)  "]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]]});