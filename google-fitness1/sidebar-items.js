initSidebarItems({"mod":[["cmn",""]],"struct":[["Application","See: google3/java/com/google/android/apps/heart/platform/api/Application.java   This type is not used in any activity, and only used as *part* of another schema.  "],["DataPoint","Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type.   A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type.   Data points always contain one value for each field of the data type.   This type is not used in any activity, and only used as *part* of another schema.  "],["DataSource","Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source.   The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type.   Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * data sources get users (response) * data sources update users (request|response) * data sources create users (request|response) * data sources patch users (request|response)  "],["DataType","See: google3/java/com/google/android/apps/heart/platform/api/DataType.java   This type is not used in any activity, and only used as *part* of another schema.  "],["DataTypeField","In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.).   This message is only instantiated in code and not used for wire comms or stored in any way.   This type is not used in any activity, and only used as *part* of another schema.  "],["Dataset","A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * data sources datasets patch users (request|response) * data sources datasets get users (response)  "],["Device","Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source.   The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including:   - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.   This type is not used in any activity, and only used as *part* of another schema.  "],["Fitness","Central instance to access all Fitness related resource activities"],["ListDataSourcesResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * data sources list users (response)  "],["ListSessionsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * sessions list users (response)  "],["Session","Sessions contain metadata, such as a user-friendly name and time interval information.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * sessions update users (request|response)  "],["UserDataSourceCreateMethodBuilder","Creates a new data source that is unique across all data sources belonging to this user. The data stream ID field can be omitted and will be generated by the server with the correct format. The data stream ID is an ordered combination of some fields from the data source. In addition to the data source fields reflected into the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types."],["UserDataSourceDatasetDeleteMethodBuilder","Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted."],["UserDataSourceDatasetGetMethodBuilder","Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time."],["UserDataSourceDatasetPatchMethodBuilder","Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics."],["UserDataSourceGetMethodBuilder","Returns a data source identified by a data stream ID."],["UserDataSourceListMethodBuilder","Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive: the user may have private data sources that are only visible to other developers or calls using other scopes."],["UserDataSourcePatchMethodBuilder","Updates a given data source. It is an error to modify the data source's data stream ID, data type, type, stream name or device information apart from the device version. Changing these fields would require a new unique data stream ID and separate data source.   Data sources are identified by their data stream ID. This method supports patch semantics."],["UserDataSourceUpdateMethodBuilder","Updates a given data source. It is an error to modify the data source's data stream ID, data type, type, stream name or device information apart from the device version. Changing these fields would require a new unique data stream ID and separate data source.   Data sources are identified by their data stream ID."],["UserMethodsBuilder","A builder providing access to all methods supported on *user* resources. It is not used directly, but through the `Fitness` hub."],["UserSessionDeleteMethodBuilder","Deletes a session specified by the given session ID."],["UserSessionListMethodBuilder","Lists sessions previously created."],["UserSessionUpdateMethodBuilder","Updates or insert a given session."],["Value","Holder object for the value of a single field in a data point.   A field value has a particular format and is only ever set to one of an integer or a floating point value.   This type is not used in any activity, and only used as *part* of another schema.  "]],"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]]});