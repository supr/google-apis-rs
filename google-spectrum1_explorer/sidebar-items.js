initSidebarItems({"enum":[["Result","A universal result type used as return for all action method results."]],"struct":[["AntennaCharacteristics","Antenna characteristics provide additional information, such as the antenna height, antenna type, etc. Whether antenna characteristics must be provided in a request depends on the device type and regulatory domain."],["DatabaseSpec","This message contains the name and URI of a database."],["DbUpdateSpec","This message is provided by the database to notify devices of an upcoming change to the database URI."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeviceCapabilities","Device capabilities provide additional information that may be used by a device to provide additional information to the database that may help it to determine available spectrum. If the database does not support device capabilities it will ignore the parameter altogether."],["DeviceDescriptor","The device descriptor contains parameters that identify the specific device, such as its manufacturer serial number, regulatory-specific identifier (e.g., FCC ID), and any other device characteristics required by regulatory domains."],["DeviceOwner","This parameter contains device-owner information required as part of device registration. The regulatory domains may require additional parameters."],["DeviceValidity","The device validity element describes whether a particular device is valid to operate in the regulatory domain."],["EventTime","The start and stop times of an event. This is used to indicate the time period for which a spectrum profile is valid."],["FrequencyRange","A specific range of frequencies together with the associated maximum power level and channel identifier."],["GeoLocation","This parameter is used to specify the geolocation of the device."],["GeoLocationEllipse","A \"point\" with uncertainty is represented using the Ellipse shape."],["GeoLocationPoint","A single geolocation on the globe."],["GeoLocationPolygon","A region is represented using the polygonal shape."],["GeoSpectrumSchedule","The schedule of spectrum profiles available at a particular geolocation."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["PawGetSpectrumBatchCall","The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error."],["PawGetSpectrumCall","Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database."],["PawInitCall","Initializes the connection between a white space device and the database."],["PawMethods","A builder providing access to all methods supported on *paw* resources. It is not used directly, but through the `Spectrum` hub."],["PawNotifySpectrumUseCall","Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error."],["PawRegisterCall","The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error."],["PawVerifyDeviceCall","Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error."],["PawsGetSpectrumBatchRequest","The request message for a batch available spectrum query protocol."],["PawsGetSpectrumBatchResponse","The response message for the batch available spectrum query contains a schedule of available spectrum for the device at multiple locations."],["PawsGetSpectrumRequest","The request message for the available spectrum query protocol which must include the device's geolocation."],["PawsGetSpectrumResponse","The response message for the available spectrum query which contains a schedule of available spectrum for the device."],["PawsInitRequest","The initialization request message allows the master device to initiate exchange of capabilities with the database."],["PawsInitResponse","The initialization response message communicates database parameters to the requesting device."],["PawsNotifySpectrumUseRequest","The spectrum-use notification message which must contain the geolocation of the Device and parameters required by the regulatory domain."],["PawsNotifySpectrumUseResponse","An empty response to the notification."],["PawsRegisterRequest","The registration request message contains the required registration parameters."],["PawsRegisterResponse","The registration response message simply acknowledges receipt of the request and is otherwise empty."],["PawsVerifyDeviceRequest","The device validation request message."],["PawsVerifyDeviceResponse","The device validation response message."],["RulesetInfo","This contains parameters for the ruleset of a regulatory domain that is communicated using the initialization and available-spectrum processes."],["Spectrum","Central instance to access all Spectrum related resource activities"],["SpectrumMessage","Available spectrum can be logically characterized by a list of frequency ranges and permissible power levels for each range."],["SpectrumSchedule","The spectrum schedule element combines an event time with spectrum profile to define a time period in which the profile is valid."],["Vcard","A vCard-in-JSON message that contains only the fields needed for PAWS: - fn: Full name of an individual  - org: Name of the organization  - adr: Address fields  - tel: Telephone numbers  - email: Email addresses"],["VcardAddress","The structure used to represent a street address."],["VcardTelephone","The structure used to represent a telephone number."],["VcardTypedText","The structure used to represent an organization and an email address."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]]});