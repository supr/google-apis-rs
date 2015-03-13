initSidebarItems({"mod":[["cmn",""]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"struct":[["AntennaCharacteristics","Antenna characteristics provide additional information, such as the antenna height, antenna type, etc. Whether antenna characteristics must be provided in a request depends on the device type and regulatory domain.   This type is not used in any activity, and only used as *part* of another schema.  "],["DatabaseSpec","This message contains the name and URI of a database.   This type is not used in any activity, and only used as *part* of another schema.  "],["DbUpdateSpec","This message is provided by the database to notify devices of an upcoming change to the database URI.   This type is not used in any activity, and only used as *part* of another schema.  "],["DeviceCapabilities","Device capabilities provide additional information that may be used by a device to provide additional information to the database that may help it to determine available spectrum. If the database does not support device capabilities it will ignore the parameter altogether.   This type is not used in any activity, and only used as *part* of another schema.  "],["DeviceDescriptor","The device descriptor contains parameters that identify the specific device, such as its manufacturer serial number, regulatory-specific identifier (e.g., FCC ID), and any other device characteristics required by regulatory domains.   This type is not used in any activity, and only used as *part* of another schema.  "],["DeviceOwner","This parameter contains device-owner information required as part of device registration. The regulatory domains may require additional parameters.   All contact information must be expressed using the structure defined by the vCard format specification. Only the contact fields of vCard are supported:   - fn: Full name of an individual  - org: Name of the organization  - adr: Address fields  - tel: Telephone numbers  - email: Email addresses     Note that the vCard specification defines maximum lengths for each field.   This type is not used in any activity, and only used as *part* of another schema.  "],["DeviceValidity","The device validity element describes whether a particular device is valid to operate in the regulatory domain.   This type is not used in any activity, and only used as *part* of another schema.  "],["EventTime","The start and stop times of an event. This is used to indicate the time period for which a spectrum profile is valid.   Both times are expressed using the format, YYYY-MM-DDThh:mm:ssZ, as defined in RFC3339. The times must be expressed using UTC.   This type is not used in any activity, and only used as *part* of another schema.  "],["FrequencyRange","A specific range of frequencies together with the associated maximum power level and channel identifier.   This type is not used in any activity, and only used as *part* of another schema.  "],["GeoLocation","This parameter is used to specify the geolocation of the device.   This type is not used in any activity, and only used as *part* of another schema.  "],["GeoLocationEllipse","A \"point\" with uncertainty is represented using the Ellipse shape.   This type is not used in any activity, and only used as *part* of another schema.  "],["GeoLocationPoint","A single geolocation on the globe.   This type is not used in any activity, and only used as *part* of another schema.  "],["GeoLocationPolygon","A region is represented using the polygonal shape.   This type is not used in any activity, and only used as *part* of another schema.  "],["GeoSpectrumSchedule","The schedule of spectrum profiles available at a particular geolocation.   This type is not used in any activity, and only used as *part* of another schema.  "],["PawGetSpectrumBatchMethodBuilder","The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error."],["PawGetSpectrumMethodBuilder","Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database."],["PawInitMethodBuilder","Initializes the connection between a white space device and the database."],["PawMethodsBuilder","A builder providing access to all methods supported on *paw* resources. It is not used directly, but through the `Spectrum` hub."],["PawNotifySpectrumUseMethodBuilder","Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error."],["PawRegisterMethodBuilder","The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error."],["PawVerifyDeviceMethodBuilder","Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error."],["PawsGetSpectrumBatchRequest","The request message for a batch available spectrum query protocol.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [getSpectrumBatch](struct.PawGetSpectrumBatchMethodBuilder.html) (request)    "],["PawsGetSpectrumBatchResponse","The response message for the batch available spectrum query contains a schedule of available spectrum for the device at multiple locations.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [getSpectrumBatch](struct.PawGetSpectrumBatchMethodBuilder.html) (response)    "],["PawsGetSpectrumRequest","The request message for the available spectrum query protocol which must include the device's geolocation.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [getSpectrum](struct.PawGetSpectrumMethodBuilder.html) (request)    "],["PawsGetSpectrumResponse","The response message for the available spectrum query which contains a schedule of available spectrum for the device.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [getSpectrum](struct.PawGetSpectrumMethodBuilder.html) (response)    "],["PawsInitRequest","The initialization request message allows the master device to initiate exchange of capabilities with the database.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [init](struct.PawInitMethodBuilder.html) (request)    "],["PawsInitResponse","The initialization response message communicates database parameters to the requesting device.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [init](struct.PawInitMethodBuilder.html) (response)    "],["PawsNotifySpectrumUseRequest","The spectrum-use notification message which must contain the geolocation of the Device and parameters required by the regulatory domain.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [notifySpectrumUse](struct.PawNotifySpectrumUseMethodBuilder.html) (request)    "],["PawsNotifySpectrumUseResponse","An empty response to the notification.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [notifySpectrumUse](struct.PawNotifySpectrumUseMethodBuilder.html) (response)    "],["PawsRegisterRequest","The registration request message contains the required registration parameters.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [register](struct.PawRegisterMethodBuilder.html) (request)    "],["PawsRegisterResponse","The registration response message simply acknowledges receipt of the request and is otherwise empty.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [register](struct.PawRegisterMethodBuilder.html) (response)    "],["PawsVerifyDeviceRequest","The device validation request message.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [verifyDevice](struct.PawVerifyDeviceMethodBuilder.html) (request)    "],["PawsVerifyDeviceResponse","The device validation response message.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * [verifyDevice](struct.PawVerifyDeviceMethodBuilder.html) (response)    "],["RulesetInfo","This contains parameters for the ruleset of a regulatory domain that is communicated using the initialization and available-spectrum processes.   This type is not used in any activity, and only used as *part* of another schema.  "],["Spectrum","Central instance to access all Spectrum related resource activities"],["SpectrumMessage","Available spectrum can be logically characterized by a list of frequency ranges and permissible power levels for each range.   This type is not used in any activity, and only used as *part* of another schema.  "],["SpectrumSchedule","The spectrum schedule element combines an event time with spectrum profile to define a time period in which the profile is valid.   This type is not used in any activity, and only used as *part* of another schema.  "],["Vcard","A vCard-in-JSON message that contains only the fields needed for PAWS: - fn: Full name of an individual  - org: Name of the organization  - adr: Address fields  - tel: Telephone numbers  - email: Email addresses   This type is not used in any activity, and only used as *part* of another schema.  "],["VcardAddress","The structure used to represent a street address.   This type is not used in any activity, and only used as *part* of another schema.  "],["VcardTelephone","The structure used to represent a telephone number.   This type is not used in any activity, and only used as *part* of another schema.  "],["VcardTypedText","The structure used to represent an organization and an email address.   This type is not used in any activity, and only used as *part* of another schema.  "]]});