// DO NOT EDIT !
// This file was generated automatically from 'src/mako/lib.rs.mako'
// DO NOT EDIT !

//! This documentation was generated from *QPX Express* crate version *0.1.0+20140321*, where *20140321* is the exact revision of the *qpxExpress:v1* schema built by the [mako](http://www.makotemplates.org/) code generator *v0.1.0*.
//! 
//! Everything else about the *QPX Express* *v1* API can be found at the
//! [official documentation site](http://developers.google.com/qpx-express).
//! The original source code is [on github](https://github.com/Byron/google-apis-rs/tree/master/gen/qpxexpress1).
//! # Features
//! 
//! Handle the following *Resources* with ease from the central [hub](struct.QPXExpress.html) ... 
//! 
//! * trips
//!  * [*search*](struct.TripSearchCall.html)
//! 
//! 
//! 
//! 
//! Not what you are looking for ? Find all other Google APIs in their Rust [documentation index](../index.html).
//! 
//! # Structure of this Library
//! 
//! The API is structured into the following primary items:
//! 
//! * **[Hub](struct.QPXExpress.html)**
//!     * a central object to maintain state and allow accessing all *Activities*
//! * **[Resources](trait.Resource.html)**
//!     * primary types that you can apply *Activities* to
//!     * a collection of properties and *Parts*
//!     * **[Parts](trait.Part.html)**
//!         * a collection of properties
//!         * never directly used in *Activities*
//! * **[Activities](trait.CallBuilder.html)**
//!     * operations to apply to *Resources*
//! 
//! Generally speaking, you can invoke *Activities* like this:
//! 
//! ```Rust,ignore
//! let r = hub.resource().activity(...).doit()
//! ```
//! 
//! Or specifically ...
//! 
//! ```ignore
//! let r = hub.trips().search(...).doit()
//! ```
//! 
//! The `resource()` and `activity(...)` calls create [builders][builder-pattern]. The second one dealing with `Activities` 
//! supports various methods to configure the impending operation (not shown here). It is made such that all required arguments have to be 
//! specified right away (i.e. `(...)`), whereas all optional ones can be [build up][builder-pattern] as desired.
//! The `doit()` method performs the actual communication with the server and returns the respective result.
//! 
//! # Usage
//! 
//! ## Setting up your Project
//! 
//! To use this library, you would put the following lines into your `Cargo.toml` file:
//! 
//! ```toml
//! [dependencies]
//! google-qpxexpress1 = "*"
//! ```
//! 
//! ## A complete example
//! 
//! ```test_harness,no_run
//! extern crate hyper;
//! extern crate "yup-oauth2" as oauth2;
//! extern crate "google-qpxexpress1" as qpxexpress1;
//! use qpxexpress1::TripsSearchRequest;
//! use qpxexpress1::Result;
//! # #[test] fn egal() {
//! use std::default::Default;
//! use oauth2::{Authenticator, DefaultAuthenticatorDelegate, ApplicationSecret, MemoryStorage};
//! use qpxexpress1::QPXExpress;
//! 
//! // Get an ApplicationSecret instance by some means. It contains the `client_id` and 
//! // `client_secret`, among other things.
//! let secret: ApplicationSecret = Default::default();
//! // Instantiate the authenticator. It will choose a suitable authentication flow for you, 
//! // unless you replace  `None` with the desired Flow.
//! // Provide your own `AuthenticatorDelegate` to adjust the way it operates and get feedback about 
//! // what's going on. You probably want to bring in your own `TokenStorage` to persist tokens and
//! // retrieve them from storage.
//! let auth = Authenticator::new(&secret, DefaultAuthenticatorDelegate,
//!                               hyper::Client::new(),
//!                               <MemoryStorage as Default>::default(), None);
//! let mut hub = QPXExpress::new(hyper::Client::new(), auth);
//! // As the method needs a request, you would usually fill it with the desired information
//! // into the respective structure. Some of the parts shown here might not be applicable !
//! // Values shown here are possibly random and not representative !
//! let mut req: TripsSearchRequest = Default::default();
//! 
//! // You can configure optional parameters by calling the respective setters at will, and
//! // execute the final call using `doit()`.
//! // Values shown here are possibly random and not representative !
//! let result = hub.trips().search(&req)
//!              .doit();
//! 
//! match result {
//!     Result::HttpError(err) => println!("HTTPERROR: {:?}", err),
//!     Result::MissingAPIKey => println!("Auth: Missing API Key - used if there are no scopes"),
//!     Result::MissingToken => println!("OAuth2: Missing Token"),
//!     Result::Cancelled => println!("Operation cancelled by user"),
//!     Result::UploadSizeLimitExceeded(size, max_size) => println!("Upload size too big: {} of {}", size, max_size),
//!     Result::Failure(_) => println!("General Failure (hyper::client::Response doesn't print)"),
//!     Result::FieldClash(clashed_field) => println!("You added custom parameter which is part of builder: {:?}", clashed_field),
//!     Result::JsonDecodeError(err) => println!("Couldn't understand server reply - maybe API needs update: {:?}", err),
//!     Result::Success(_) => println!("Success (value doesn't print)"),
//! }
//! # }
//! ```
//! ## Handling Errors
//! 
//! All errors produced by the system are provided either as [Result](enum.Result.html) enumeration as return value of 
//! the doit() methods, or handed as possibly intermediate results to either the 
//! [Hub Delegate](trait.Delegate.html), or the [Authenticator Delegate](../yup-oauth2/trait.AuthenticatorDelegate.html).
//! 
//! When delegates handle errors or intermediate values, they may have a chance to instruct the system to retry. This 
//! makes the system potentially resilient to all kinds of errors.
//! 
//! ## Uploads and Downlods
//! If a method supports downloads, the response body, which is part of the [Result](enum.Result.html), should be
//! read by you to obtain the media.
//! If such a method also supports a [Response Result](trait.ResponseResult.html), it will return that by default.
//! You can see it as meta-data for the actual media. To trigger a media download, you will have to set up the builder by making
//! this call: `.param("alt", "media")`.
//! 
//! Methods supporting uploads can do so using up to 2 different protocols: 
//! *simple* and *resumable*. The distinctiveness of each is represented by customized 
//! `doit(...)` methods, which are then named `upload(...)` and `upload_resumable(...)` respectively.
//! 
//! ## Customization and Callbacks
//! 
//! You may alter the way an `doit()` method is called by providing a [delegate](trait.Delegate.html) to the 
//! [Method Builder](trait.CallBuilder.html) before making the final `doit()` call. 
//! Respective methods will be called to provide progress information, as well as determine whether the system should 
//! retry on failure.
//! 
//! The [delegate trait](trait.Delegate.html) is default-implemented, allowing you to customize it with minimal effort.
//! 
//! ## Optional Parts in Server-Requests
//! 
//! All structures provided by this library are made to be [enocodable](trait.RequestValue.html) and 
//! [decodable](trait.ResponseResult.html) via json. Optionals are used to indicate that partial requests are responses are valid.
//! Most optionals are are considered [Parts](trait.Part.html) which are identifyable by name, which will be sent to 
//! the server to indicate either the set parts of the request or the desired parts in the response.
//! 
//! ## Builder Arguments
//! 
//! Using [method builders](trait.CallBuilder.html), you are able to prepare an action call by repeatedly calling it's methods.
//! These will always take a single argument, for which the following statements are true.
//! 
//! * [PODs][wiki-pod] are handed by copy
//! * strings are passed as `&str`
//! * [request values](trait.RequestValue.html) are borrowed
//! 
//! Arguments will always be copied or cloned into the builder, to make them independent of their original life times.
//! 
//! [wiki-pod]: http://en.wikipedia.org/wiki/Plain_old_data_structure
//! [builder-pattern]: http://en.wikipedia.org/wiki/Builder_pattern
//! [google-go-api]: https://github.com/google/google-api-go-client
//! 
//! 
#![feature(core,io,thread_sleep)]
// Unused attributes happen thanks to defined, but unused structures
// We don't warn about this, as depending on the API, some data structures or facilities are never used.
// Instead of pre-determining this, we just disable the lint. It's manually tuned to not have any 
// unused imports in fully featured APIs. Same with unused_mut ... .
#![allow(unused_imports, unused_mut, dead_code)]
// Required for serde annotations
#![feature(custom_derive, custom_attribute, plugin)]
#![plugin(serde_macros)]

#[macro_use]
extern crate hyper;
extern crate serde;
extern crate "yup-oauth2" as oauth2;
extern crate mime;
extern crate url;

mod cmn;

use std::collections::HashMap;
use std::cell::RefCell;
use std::borrow::BorrowMut;
use std::default::Default;
use std::collections::BTreeMap;
use std::marker::PhantomData;
use serde::json;
use std::io;
use std::fs;
use std::thread::sleep;

pub use cmn::{MultiPartReader, ToParts, MethodInfo, Result, CallBuilder, Hub, ReadSeek, Part, ResponseResult, RequestValue, NestedType, Delegate, DefaultDelegate, ResourceMethodsBuilder, Resource, JsonServerError};


// ##############
// UTILITIES ###
// ############




// ########
// HUB ###
// ######

/// Central instance to access all QPXExpress related resource activities
///
/// # Examples
///
/// Instantiate a new hub
///
/// ```test_harness,no_run
/// extern crate hyper;
/// extern crate "yup-oauth2" as oauth2;
/// extern crate "google-qpxexpress1" as qpxexpress1;
/// use qpxexpress1::TripsSearchRequest;
/// use qpxexpress1::Result;
/// # #[test] fn egal() {
/// use std::default::Default;
/// use oauth2::{Authenticator, DefaultAuthenticatorDelegate, ApplicationSecret, MemoryStorage};
/// use qpxexpress1::QPXExpress;
/// 
/// // Get an ApplicationSecret instance by some means. It contains the `client_id` and 
/// // `client_secret`, among other things.
/// let secret: ApplicationSecret = Default::default();
/// // Instantiate the authenticator. It will choose a suitable authentication flow for you, 
/// // unless you replace  `None` with the desired Flow.
/// // Provide your own `AuthenticatorDelegate` to adjust the way it operates and get feedback about 
/// // what's going on. You probably want to bring in your own `TokenStorage` to persist tokens and
/// // retrieve them from storage.
/// let auth = Authenticator::new(&secret, DefaultAuthenticatorDelegate,
///                               hyper::Client::new(),
///                               <MemoryStorage as Default>::default(), None);
/// let mut hub = QPXExpress::new(hyper::Client::new(), auth);
/// // As the method needs a request, you would usually fill it with the desired information
/// // into the respective structure. Some of the parts shown here might not be applicable !
/// // Values shown here are possibly random and not representative !
/// let mut req: TripsSearchRequest = Default::default();
/// 
/// // You can configure optional parameters by calling the respective setters at will, and
/// // execute the final call using `doit()`.
/// // Values shown here are possibly random and not representative !
/// let result = hub.trips().search(&req)
///              .doit();
/// 
/// match result {
///     Result::HttpError(err) => println!("HTTPERROR: {:?}", err),
///     Result::MissingAPIKey => println!("Auth: Missing API Key - used if there are no scopes"),
///     Result::MissingToken => println!("OAuth2: Missing Token"),
///     Result::Cancelled => println!("Operation cancelled by user"),
///     Result::UploadSizeLimitExceeded(size, max_size) => println!("Upload size too big: {} of {}", size, max_size),
///     Result::Failure(_) => println!("General Failure (hyper::client::Response doesn't print)"),
///     Result::FieldClash(clashed_field) => println!("You added custom parameter which is part of builder: {:?}", clashed_field),
///     Result::JsonDecodeError(err) => println!("Couldn't understand server reply - maybe API needs update: {:?}", err),
///     Result::Success(_) => println!("Success (value doesn't print)"),
/// }
/// # }
/// ```
pub struct QPXExpress<C, NC, A> {
    client: RefCell<C>,
    auth: RefCell<A>,
    _user_agent: String,

    _m: PhantomData<NC>
}

impl<'a, C, NC, A> Hub for QPXExpress<C, NC, A> {}

impl<'a, C, NC, A> QPXExpress<C, NC, A>
    where  NC: hyper::net::NetworkConnector, C: BorrowMut<hyper::Client<NC>>, A: oauth2::GetToken {

    pub fn new(client: C, authenticator: A) -> QPXExpress<C, NC, A> {
        QPXExpress {
            client: RefCell::new(client),
            auth: RefCell::new(authenticator),
            _user_agent: "google-api-rust-client/0.1.0".to_string(),
            _m: PhantomData
        }
    }

    pub fn trips(&'a self) -> TripMethods<'a, C, NC, A> {
        TripMethods { hub: &self }
    }

    /// Set the user-agent header field to use in all requests to the server.
    /// It defaults to `google-api-rust-client/0.1.0`.
    ///
    /// Returns the previously set user-agent.
    pub fn user_agent(&mut self, agent_name: String) -> String {
        let prev = self._user_agent.clone();
        self._user_agent = agent_name;
        prev
    }
}


// ############
// SCHEMAS ###
// ##########
/// The number and type of passengers. Unfortunately the definition of an infant, child, adult, and senior citizen varies across carriers and reservation systems.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Serialize, Deserialize)]
pub struct PassengerCounts {
    /// The number of passengers that are infants travelling in the lap of an adult.    
    #[serde(alias="infantInLapCount")]
    pub infant_in_lap_count: i32,
    /// Identifies this as a passenger count object, representing the number of passengers. Value: the fixed string qpxexpress#passengerCounts.    
    pub kind: String,
    /// The number of passengers that are infants each assigned a seat.    
    #[serde(alias="infantInSeatCount")]
    pub infant_in_seat_count: i32,
    /// The number of passengers that are adults.    
    #[serde(alias="adultCount")]
    pub adult_count: i32,
    /// The number of passengers that are senior citizens.    
    #[serde(alias="seniorCount")]
    pub senior_count: i32,
    /// The number of passengers that are children.    
    #[serde(alias="childCount")]
    pub child_count: i32,
}

impl Part for PassengerCounts {}


/// The price of this segment.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct SegmentPricing {
    /// Identifies this as a segment pricing object, representing the price of this segment. Value: the fixed string qpxexpress#segmentPricing.    
    pub kind: String,
    /// A segment identifier unique within a single solution. It is used to refer to different parts of the same solution.    
    #[serde(alias="fareId")]
    pub fare_id: String,
    /// Details of the free baggage allowance on this segment.    
    #[serde(alias="freeBaggageOption")]
    pub free_baggage_option: Vec<FreeBaggageAllowance>,
    /// Unique identifier in the response of this segment.    
    #[serde(alias="segmentId")]
    pub segment_id: String,
}

impl Part for SegmentPricing {}


/// Information about a leg. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.)
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct LegInfo {
    /// The leg origin as a city and airport.    
    pub origin: String,
    /// The terminal the flight is scheduled to depart from.    
    #[serde(alias="originTerminal")]
    pub origin_terminal: String,
    /// The number of miles in this leg.    
    pub mileage: i32,
    /// Whether passenger information must be furnished to the United States Transportation Security Administration (TSA) prior to departure.    
    pub secure: bool,
    /// Duration of a connection following this leg, in minutes.    
    #[serde(alias="connectionDuration")]
    pub connection_duration: i32,
    /// The scheduled departure time of the leg, local to the point of departure.    
    #[serde(alias="departureTime")]
    pub departure_time: String,
    /// The aircraft (or bus, ferry, railcar, etc) travelling between the two points of this leg.    
    pub aircraft: String,
    /// In percent, the published on time performance on this leg.    
    #[serde(alias="onTimePerformance")]
    pub on_time_performance: i32,
    /// The scheduled time of arrival at the destination of the leg, local to the point of arrival.    
    #[serde(alias="arrivalTime")]
    pub arrival_time: String,
    /// The scheduled travelling time from the origin to the destination.    
    pub duration: i32,
    /// The leg destination as a city and airport.    
    pub destination: String,
    /// An identifier that uniquely identifies this leg in the solution.    
    pub id: String,
    /// Identifies this as a leg object. A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number. Value: the fixed string qpxexpress#legInfo.    
    pub kind: String,
    /// The terminal the flight is scheduled to arrive at.    
    #[serde(alias="destinationTerminal")]
    pub destination_terminal: String,
    /// Whether you have to change planes following this leg. Only applies to the next leg.    
    #[serde(alias="changePlane")]
    pub change_plane: bool,
    /// Department of Transportation disclosure information on the actual operator of a flight in a code share. (A code share refers to a marketing agreement between two carriers, where one carrier will list in its schedules (and take bookings for) flights that are actually operated by another carrier.)    
    #[serde(alias="operatingDisclosure")]
    pub operating_disclosure: String,
    /// A simple, general description of the meal(s) served on the flight, for example: "Hot meal".    
    pub meal: String,
}

impl Part for LegInfo {}


/// Complete information about a fare used in the solution to a low-fare search query. In the airline industry a fare is a price an airline charges for one-way travel between two points. A fare typically contains a carrier code, two city codes, a price, and a fare basis. (A fare basis is a one-to-eight character alphanumeric code used to identify a fare.)
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct FareInfo {
    /// no description provided    
    #[serde(alias="basisCode")]
    pub basis_code: String,
    /// The city code of the city the trip begins at.    
    pub origin: String,
    /// Identifies this as a fare object. Value: the fixed string qpxexpress#fareInfo.    
    pub kind: String,
    /// The carrier of the aircraft or other vehicle commuting between two points.    
    pub carrier: String,
    /// The city code of the city the trip ends at.    
    pub destination: String,
    /// A unique identifier of the fare.    
    pub id: String,
    /// Whether this is a private fare, for example one offered only to select customers rather than the general public.    
    pub private: bool,
}

impl Part for FareInfo {}


/// Details of a segment of a flight; a segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, would have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2), and DFW to OGG (legs 1 and 2).
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct SegmentInfo {
    /// Identifies this as a segment object. A segment is one or more consecutive legs on the same flight. For example a hypothetical flight ZZ001, from DFW to OGG, could have one segment with two legs: DFW to HNL (leg 1), HNL to OGG (leg 2). Value: the fixed string qpxexpress#segmentInfo.    
    pub kind: String,
    /// The number of seats available in this booking code on this segment.    
    #[serde(alias="bookingCodeCount")]
    pub booking_code_count: i32,
    /// The flight this is a segment of.    
    pub flight: FlightInfo,
    /// The legs composing this segment.    
    pub leg: Vec<LegInfo>,
    /// Whether the operation of this segment remains subject to government approval.    
    #[serde(alias="subjectToGovernmentApproval")]
    pub subject_to_government_approval: bool,
    /// In minutes, the duration of the connection following this segment.    
    #[serde(alias="connectionDuration")]
    pub connection_duration: i32,
    /// The booking code or class for this segment.    
    #[serde(alias="bookingCode")]
    pub booking_code: String,
    /// The duration of the flight segment in minutes.    
    pub duration: i32,
    /// An id uniquely identifying the segment in the solution.    
    pub id: String,
    /// The cabin booked for this segment.    
    pub cabin: String,
    /// The solution-based index of a segment in a married segment group. Married segments can only be booked together. For example, an airline might report a certain booking code as sold out from Boston to Pittsburgh, but as available as part of two married segments Boston to Chicago connecting through Pittsburgh. For example content of this field, consider the round-trip flight ZZ1 PHX-PHL ZZ2 PHL-CLT ZZ3 CLT-PHX. This has three segments, with the two outbound ones (ZZ1 ZZ2) married. In this case, the two outbound segments belong to married segment group 0, and the return segment belongs to married segment group 1.    
    #[serde(alias="marriedSegmentGroup")]
    pub married_segment_group: String,
}

impl Part for SegmentInfo {}


/// A QPX Express search request, which will yield one or more solutions.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Serialize)]
pub struct TripOptionsRequest {
    /// Counts for each passenger type in the request.    
    pub passengers: PassengerCounts,
    /// The slices that make up the itinerary of this trip. A slice represents a traveler's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using one slice, round-trips using two. An example of a one slice trip with three segments might be BOS-SYD, SYD-LAX, LAX-BOS if the traveler only stopped in SYD and LAX just long enough to change planes.    
    pub slice: Vec<SliceInput>,
    /// The number of solutions to return, maximum 500.    
    pub solutions: i32,
    /// Return only solutions with refundable fares.    
    pub refundable: bool,
    /// IATA country code representing the point of sale. This determines the "equivalent amount paid" currency for the ticket.    
    #[serde(alias="saleCountry")]
    pub sale_country: i64,
    /// Do not return solutions that cost more than this price. The alphabetical part of the price is in ISO 4217. The format, in regex, is [A-Z]{3}\d+(\.\d+)? Example: $102.07    
    #[serde(alias="maxPrice")]
    pub max_price: String,
}

impl Part for TripOptionsRequest {}


/// The make, model, and type of an aircraft.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct AircraftData {
    /// Identifies this as an aircraftData object. Value: the fixed string qpxexpress#aircraftData    
    pub kind: String,
    /// The aircraft code. For example, for a Boeing 777 the code would be 777.    
    pub code: String,
    /// The name of an aircraft, for example Boeing 777.    
    pub name: String,
}

impl Part for AircraftData {}


/// The price of one or more travel segments. The currency used to purchase tickets is usually determined by the sale/ticketing city or the sale/ticketing country, unless none are specified, in which case it defaults to that of the journey origin country.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct PricingInfo {
    /// The fare used to price one or more segments.    
    pub fare: Vec<FareInfo>,
    /// The horizontal fare calculation. This is a field on a ticket that displays all of the relevant items that go into the calculation of the fare.    
    #[serde(alias="fareCalculation")]
    pub fare_calculation: String,
    /// Identifies this as a pricing object, representing the price of one or more travel segments. Value: the fixed string qpxexpress#pricingInfo.    
    pub kind: String,
    /// The per-segment price and baggage information.    
    #[serde(alias="segmentPricing")]
    pub segment_pricing: Vec<SegmentPricing>,
    /// Total per-passenger price (fare and tax) in the sale or equivalent currency.    
    #[serde(alias="saleTotal")]
    pub sale_total: String,
    /// The passenger type code for this pricing. An alphanumeric code used by a carrier to restrict fares to certain categories of passenger. For instance, a fare might be valid only for senior citizens.    
    pub ptc: String,
    /// The number of passengers to which this price applies.    
    pub passengers: PassengerCounts,
    /// The taxes used to calculate the tax total per ticket.    
    pub tax: Vec<TaxInfo>,
    /// The total fare in the sale or equivalent currency.    
    #[serde(alias="saleFareTotal")]
    pub sale_fare_total: String,
    /// The total fare in the base fare currency (the currency of the country of origin). This element is only present when the sales currency and the currency of the country of commencement are different.    
    #[serde(alias="baseFareTotal")]
    pub base_fare_total: String,
    /// Whether the fares on this pricing are refundable.    
    pub refundable: bool,
    /// The taxes in the sale or equivalent currency.    
    #[serde(alias="saleTaxTotal")]
    pub sale_tax_total: String,
    /// The latest ticketing time for this pricing assuming the reservation occurs at ticketing time and there is no change in fares/rules. The time is local to the point of sale (POS).    
    #[serde(alias="latestTicketingTime")]
    pub latest_ticketing_time: String,
}

impl Part for PricingInfo {}


/// Two times in a single day defining a time range.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Serialize)]
pub struct TimeOfDayRange {
    /// The earliest time of day in HH:MM format.    
    #[serde(alias="earliestTime")]
    pub earliest_time: String,
    /// Identifies this as a time of day range object, representing two times in a single day defining a time range. Value: the fixed string qpxexpress#timeOfDayRange.    
    pub kind: String,
    /// The latest time of day in HH:MM format.    
    #[serde(alias="latestTime")]
    pub latest_time: String,
}

impl Part for TimeOfDayRange {}


/// An airport.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct AirportData {
    /// The city code an airport is located in. For example, for JFK airport, this is NYC.    
    pub city: String,
    /// Identifies this as an airport object. Value: the fixed string qpxexpress#airportData.    
    pub kind: String,
    /// An airport's code. For example, for Boston Logan airport, this is BOS.    
    pub code: String,
    /// The name of an airport. For example, for airport BOS the name is "Boston Logan International".    
    pub name: String,
}

impl Part for AirportData {}


/// Information about a carrier (ie. an airline, bus line, railroad, etc) that might be useful to display to an end-user.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct CarrierData {
    /// Identifies this as a kind of carrier (ie. an airline, bus line, railroad, etc). Value: the fixed string qpxexpress#carrierData.    
    pub kind: String,
    /// The IATA designator of a carrier (airline, etc). For example, for American Airlines, the code is AA.    
    pub code: String,
    /// The long, full name of a carrier. For example: American Airlines.    
    pub name: String,
}

impl Part for CarrierData {}


/// Tax data.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct TaxData {
    /// Identifies this as a tax data object, representing some tax. Value: the fixed string qpxexpress#taxData.    
    pub kind: String,
    /// An identifier uniquely identifying a tax in a response.    
    pub id: String,
    /// The name of a tax.    
    pub name: String,
}

impl Part for TaxData {}


/// Tax information.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct TaxInfo {
    /// Identifies this as a tax information object. Value: the fixed string qpxexpress#taxInfo.    
    pub kind: String,
    /// The code to enter in the ticket's tax box.    
    pub code: String,
    /// The price of the tax in the sales or equivalent currency.    
    #[serde(alias="salePrice")]
    pub sale_price: String,
    /// Whether this is a government charge or a carrier surcharge.    
    #[serde(alias="chargeType")]
    pub charge_type: String,
    /// For government charges, the country levying the charge.    
    pub country: String,
    /// Identifier uniquely identifying this tax in a response. Not present for unnamed carrier surcharges.    
    pub id: String,
}

impl Part for TaxInfo {}


/// A QPX Express search response.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct TripOptionsResponse {
    /// A list of priced itinerary solutions to the QPX Express query.    
    #[serde(alias="tripOption")]
    pub trip_option: Vec<TripOption>,
    /// Identifies this as a QPX Express trip response object, which consists of zero or more solutions. Value: the fixed string qpxexpress#tripOptions.    
    pub kind: String,
    /// Informational data global to list of solutions.    
    pub data: Data,
    /// An identifier uniquely identifying this response.    
    #[serde(alias="requestId")]
    pub request_id: String,
}

impl Part for TripOptionsResponse {}


/// A flight is a sequence of legs with the same airline carrier and flight number. (A leg is the smallest unit of travel, in the case of a flight a takeoff immediately followed by a landing at two set points on a particular carrier with a particular flight number.) The naive view is that a flight is scheduled travel of an aircraft between two points, with possibly intermediate stops, but carriers will frequently list flights that require a change of aircraft between legs.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct FlightInfo {
    /// no description provided    
    pub carrier: String,
    /// The flight number.    
    pub number: String,
}

impl Part for FlightInfo {}


/// A QPX Express search request.
/// 
/// # Activities
/// 
/// This type is used in activities, which are methods you may call on this type or where this type is involved in. 
/// The list links the activity name, along with information about where it is used (one of *request* and *response*).
/// 
/// * [search trips](struct.TripSearchCall.html) (request)
/// 
#[derive(Default, Clone, Debug, Serialize)]
pub struct TripsSearchRequest {
    /// A QPX Express search request. Required values are at least one adult or senior passenger, an origin, a destination, and a date.    
    pub request: Option<TripOptionsRequest>,
}

impl RequestValue for TripsSearchRequest {}


/// Criteria a desired slice must satisfy.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Serialize)]
pub struct SliceInput {
    /// Airport or city IATA designator of the origin.    
    pub origin: String,
    /// Identifies this as a slice input object, representing the criteria a desired slice must satisfy. Value: the fixed string qpxexpress#sliceInput.    
    pub kind: String,
    /// Slices with only the carriers in this alliance should be returned; do not use this field with permittedCarrier. Allowed values are ONEWORLD, SKYTEAM, and STAR.    
    pub alliance: String,
    /// Departure date in YYYY-MM-DD format.    
    pub date: String,
    /// Airport or city IATA designator of the destination.    
    pub destination: String,
    /// The maximum number of stops you are willing to accept in this slice.    
    #[serde(alias="maxStops")]
    pub max_stops: i32,
    /// Slices must depart in this time of day range, local to the point of departure.    
    #[serde(alias="permittedDepartureTime")]
    pub permitted_departure_time: TimeOfDayRange,
    /// A list of 2-letter IATA airline designators. Slices with only these carriers should be returned.    
    #[serde(alias="permittedCarrier")]
    pub permitted_carrier: Vec<String>,
    /// The longest connection between two legs, in minutes, you are willing to accept.    
    #[serde(alias="maxConnectionDuration")]
    pub max_connection_duration: i32,
    /// Prefer solutions that book in this cabin for this slice. Allowed values are COACH, PREMIUM_COACH, BUSINESS, and FIRST.    
    #[serde(alias="preferredCabin")]
    pub preferred_cabin: String,
    /// A list of 2-letter IATA airline designators. Exclude slices that use these carriers.    
    #[serde(alias="prohibitedCarrier")]
    pub prohibited_carrier: Vec<String>,
}

impl Part for SliceInput {}


/// A QPX Express search response.
/// 
/// # Activities
/// 
/// This type is used in activities, which are methods you may call on this type or where this type is involved in. 
/// The list links the activity name, along with information about where it is used (one of *request* and *response*).
/// 
/// * [search trips](struct.TripSearchCall.html) (response)
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct TripsSearchResponse {
    /// Identifies this as a QPX Express API search response resource. Value: the fixed string qpxExpress#tripsSearch.    
    pub kind: String,
    /// All possible solutions to the QPX Express search request.    
    pub trips: TripOptionsResponse,
}

impl ResponseResult for TripsSearchResponse {}


/// Information about an item of baggage.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct BagDescriptor {
    /// How many of this type of bag will be checked on this flight.    
    pub count: i32,
    /// The standard IATA subcode used to identify this optional service.    
    pub subcode: String,
    /// A description of the baggage.    
    pub description: Vec<String>,
    /// Identifies this as a baggage object. Value: the fixed string qpxexpress#bagDescriptor.    
    pub kind: String,
    /// Provides the commercial name for an optional service.    
    #[serde(alias="commercialName")]
    pub commercial_name: String,
}

impl Part for BagDescriptor {}


/// Information about a city that might be useful to an end-user; typically the city of an airport.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct CityData {
    /// The two-character country code of the country the city is located in. For example, US for the United States of America.    
    pub country: String,
    /// Identifies this as a city, typically with one or more airports. Value: the fixed string qpxexpress#cityData.    
    pub kind: String,
    /// The IATA character ID of a city. For example, for Boston this is BOS.    
    pub code: String,
    /// The full name of a city. An example would be: New York.    
    pub name: String,
}

impl Part for CityData {}


/// Information about a slice. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. For example, if a traveler specifies the following trip in a user interface:
/// | Origin | Destination | Departure Date | | BOS | LAX | March 10, 2007 | | LAX | SYD | March 17, 2007 | | SYD | BOS | March 22, 2007 |
/// then this is a three slice trip.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct SliceInfo {
    /// The duration of the slice in minutes.    
    pub duration: i32,
    /// Identifies this as a slice object. A slice represents a traveller's intent, the portion of a low-fare search corresponding to a traveler's request to get between two points. One-way journeys are generally expressed using 1 slice, round-trips using 2. Value: the fixed string qpxexpress#sliceInfo.    
    pub kind: String,
    /// The segment(s) constituting the slice.    
    pub segment: Vec<SegmentInfo>,
}

impl Part for SliceInfo {}


/// Trip information.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct TripOption {
    /// The total price for all passengers on the trip, in the form of a currency followed by an amount, e.g. USD253.35.    
    #[serde(alias="saleTotal")]
    pub sale_total: String,
    /// Identifies this as a trip information object. Value: the fixed string qpxexpress#tripOption.    
    pub kind: String,
    /// The slices that make up this trip's itinerary.    
    pub slice: Vec<SliceInfo>,
    /// Identifier uniquely identifying this trip in a response.    
    pub id: String,
    /// Per passenger pricing information.    
    pub pricing: Vec<PricingInfo>,
}

impl Part for TripOption {}


/// Detailed information about components found in the solutions of this response, including a trip's airport, city, taxes, airline, and aircraft.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct Data {
    /// The city that is either the origin or destination of part of a trip.    
    pub city: Vec<CityData>,
    /// Identifies this as QPX Express response resource, including a trip's airport, city, taxes, airline, and aircraft. Value: the fixed string qpxexpress#data.    
    pub kind: String,
    /// The airline carrier of the aircraft flying between an origin and destination. Allowed values are IATA carrier codes.    
    pub carrier: Vec<CarrierData>,
    /// The airport of an origin or destination.    
    pub airport: Vec<AirportData>,
    /// The taxes due for flying between an origin and a destination.    
    pub tax: Vec<TaxData>,
    /// The aircraft that is flying between an origin and destination.    
    pub aircraft: Vec<AircraftData>,
}

impl Part for Data {}


/// Information about free baggage allowed on one segment of a trip.
/// 
/// This type is not used in any activity, and only used as *part* of another schema.
/// 
#[derive(Default, Clone, Debug, Deserialize)]
pub struct FreeBaggageAllowance {
    /// The maximum number of kilos any one piece of baggage may weigh.    
    #[serde(alias="kilosPerPiece")]
    pub kilos_per_piece: i32,
    /// A representation of a type of bag, such as an ATPCo subcode, Commercial Name, or other description.    
    #[serde(alias="bagDescriptor")]
    pub bag_descriptor: Vec<BagDescriptor>,
    /// The number of pounds of free baggage allowed.    
    pub pounds: i32,
    /// The number of free pieces of baggage allowed.    
    pub pieces: i32,
    /// Identifies this as free baggage object, allowed on one segment of a trip. Value: the fixed string qpxexpress#freeBaggageAllowance.    
    pub kind: String,
    /// The maximum number of kilos all the free baggage together may weigh.    
    pub kilos: i32,
}

impl Part for FreeBaggageAllowance {}



// ###################
// MethodBuilders ###
// #################

/// A builder providing access to all methods supported on *trip* resources.
/// It is not used directly, but through the `QPXExpress` hub.
///
/// # Example
///
/// Instantiate a resource builder
///
/// ```test_harness,no_run
/// extern crate hyper;
/// extern crate "yup-oauth2" as oauth2;
/// extern crate "google-qpxexpress1" as qpxexpress1;
/// 
/// # #[test] fn egal() {
/// use std::default::Default;
/// use oauth2::{Authenticator, DefaultAuthenticatorDelegate, ApplicationSecret, MemoryStorage};
/// use qpxexpress1::QPXExpress;
/// 
/// let secret: ApplicationSecret = Default::default();
/// let auth = Authenticator::new(&secret, DefaultAuthenticatorDelegate,
///                               hyper::Client::new(),
///                               <MemoryStorage as Default>::default(), None);
/// let mut hub = QPXExpress::new(hyper::Client::new(), auth);
/// // Usually you wouldn't bind this to a variable, but keep calling *CallBuilders*
/// // like `search(...)`
/// // to build up your call.
/// let rb = hub.trips();
/// # }
/// ```
pub struct TripMethods<'a, C, NC, A>
    where C: 'a, NC: 'a, A: 'a {

    hub: &'a QPXExpress<C, NC, A>,
}

impl<'a, C, NC, A> ResourceMethodsBuilder for TripMethods<'a, C, NC, A> {}

impl<'a, C, NC, A> TripMethods<'a, C, NC, A> {
    
    /// Create a builder to help you perform the following task:
    ///
    /// Returns a list of flights.    
    pub fn search(&self, request: &TripsSearchRequest) -> TripSearchCall<'a, C, NC, A> {
        TripSearchCall {
            hub: self.hub,
            _request: request.clone(),
            _delegate: Default::default(),
            _additional_params: Default::default(),
        }
    }
}





// ###################
// CallBuilders   ###
// #################

/// Returns a list of flights.
///
/// A builder for the *search* method supported by a *trip* resource.
/// It is not used directly, but through a `TripMethods`.
///
/// # Example
///
/// Instantiate a resource method builder
///
/// ```test_harness,no_run
/// # extern crate hyper;
/// # extern crate "yup-oauth2" as oauth2;
/// # extern crate "google-qpxexpress1" as qpxexpress1;
/// use qpxexpress1::TripsSearchRequest;
/// # #[test] fn egal() {
/// # use std::default::Default;
/// # use oauth2::{Authenticator, DefaultAuthenticatorDelegate, ApplicationSecret, MemoryStorage};
/// # use qpxexpress1::QPXExpress;
/// 
/// # let secret: ApplicationSecret = Default::default();
/// # let auth = Authenticator::new(&secret, DefaultAuthenticatorDelegate,
/// #                               hyper::Client::new(),
/// #                               <MemoryStorage as Default>::default(), None);
/// # let mut hub = QPXExpress::new(hyper::Client::new(), auth);
/// // As the method needs a request, you would usually fill it with the desired information
/// // into the respective structure. Some of the parts shown here might not be applicable !
/// // Values shown here are possibly random and not representative !
/// let mut req: TripsSearchRequest = Default::default();
/// 
/// // You can configure optional parameters by calling the respective setters at will, and
/// // execute the final call using `doit()`.
/// // Values shown here are possibly random and not representative !
/// let result = hub.trips().search(&req)
///              .doit();
/// # }
/// ```
pub struct TripSearchCall<'a, C, NC, A>
    where C: 'a, NC: 'a, A: 'a {

    hub: &'a QPXExpress<C, NC, A>,
    _request: TripsSearchRequest,
    _delegate: Option<&'a mut Delegate>,
    _additional_params: HashMap<String, String>,
}

impl<'a, C, NC, A> CallBuilder for TripSearchCall<'a, C, NC, A> {}

impl<'a, C, NC, A> TripSearchCall<'a, C, NC, A> where NC: hyper::net::NetworkConnector, C: BorrowMut<hyper::Client<NC>>, A: oauth2::GetToken {


    /// Perform the operation you have build so far.
    pub fn doit(mut self) -> Result<(hyper::client::Response, TripsSearchResponse)> {
        use std::io::{Read, Seek};
        use hyper::header::{ContentType, ContentLength, Authorization, UserAgent, Location};
        let mut dd = DefaultDelegate;
        let mut dlg: &mut Delegate = match self._delegate {
            Some(d) => d,
            None => &mut dd
        };
        dlg.begin(MethodInfo { id: "qpxExpress.trips.search", 
                               http_method: hyper::method::Method::Post });
        let mut params: Vec<(&str, String)> = Vec::with_capacity((3 + self._additional_params.len()));
        for &field in ["alt"].iter() {
            if self._additional_params.contains_key(field) {
                dlg.finished(false);
                return Result::FieldClash(field);
            }
        }
        for (name, value) in self._additional_params.iter() {
            params.push((&name, value.clone()));
        }

        params.push(("alt", "json".to_string()));

        let mut url = "https://www.googleapis.com/qpxExpress/v1/trips/search".to_string();
        
        let mut key = self.hub.auth.borrow_mut().api_key();
        if key.is_none() {
            key = dlg.api_key();
        }
        match key {
            Some(value) => params.push(("key", value)),
            None => {
                dlg.finished(false);
                return Result::MissingAPIKey
            }
        }

        
        if params.len() > 0 {
            url.push('?');
            url.push_str(&url::form_urlencoded::serialize(params.iter().map(|t| (t.0, t.1.as_slice()))));
        }

        let mut json_mime_type = mime::Mime(mime::TopLevel::Application, mime::SubLevel::Json, Default::default());
        let mut request_value_reader = io::Cursor::new(json::to_vec(&self._request));
        let request_size = request_value_reader.seek(io::SeekFrom::End(0)).unwrap();
        request_value_reader.seek(io::SeekFrom::Start(0)).unwrap();


        loop {
            request_value_reader.seek(io::SeekFrom::Start(0)).unwrap();
            let mut req_result = {
                let mut client = &mut *self.hub.client.borrow_mut();
                let mut req = client.borrow_mut().request(hyper::method::Method::Post, url.as_slice())
                    .header(UserAgent(self.hub._user_agent.clone()))
                    .header(ContentType(json_mime_type.clone()))
                    .header(ContentLength(request_size as u64))
                    .body(&mut request_value_reader);

                dlg.pre_request();
                req.send()

            };

            match req_result {
                Err(err) => {
                    if let oauth2::Retry::After(d) = dlg.http_error(&err) {
                        sleep(d);
                        continue;
                    }
                    dlg.finished(false);
                    return Result::HttpError(err)
                }
                Ok(mut res) => {
                    if !res.status.is_success() {
                        let mut json_err = String::new();
                        res.read_to_string(&mut json_err).unwrap();
                        if let oauth2::Retry::After(d) = dlg.http_failure(&res, json::from_str(&json_err).ok()) {
                            sleep(d);
                            continue;
                        }
                        dlg.finished(false);
                        return Result::Failure(res)
                    }
                    let result_value = {
                        let mut json_response = String::new();
                        res.read_to_string(&mut json_response).unwrap();
                        match json::from_str(&json_response) {
                            Ok(decoded) => (res, decoded),
                            Err(err) => {
                                dlg.response_json_decode_error(&json_response, &err);
                                return Result::JsonDecodeError(err);
                            }
                        }
                    };

                    dlg.finished(true);
                    return Result::Success(result_value)
                }
            }
        }
    }


    /// Sets the *request* property to the given value.
    ///
    /// Even though the property as already been set when instantiating this call, 
    /// we provide this method for API completeness.
    /// 
    pub fn request(mut self, new_value: &TripsSearchRequest) -> TripSearchCall<'a, C, NC, A> {
        self._request = new_value.clone();
        self
    }
    /// Sets the *delegate* property to the given value.
    ///
    /// 
    /// The delegate implementation is consulted whenever there is an intermediate result, or if something goes wrong
    /// while executing the actual API request.
    /// 
    /// It should be used to handle progress information, and to implement a certain level of resilience.
    pub fn delegate(mut self, new_value: &'a mut Delegate) -> TripSearchCall<'a, C, NC, A> {
        self._delegate = Some(new_value);
        self
    }

    /// Set any additional parameter of the query string used in the request.
    /// It should be used to set parameters which are not yet available through their own 
    /// setters.
    ///
    /// Please note that this method must not be used to set any of the known paramters
    /// which have their own setter method. If done anyway, the request will fail.
    /// 
    /// # Additional Parameters
    ///
    /// * *quotaUser* (query-string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    /// * *oauth_token* (query-string) - OAuth 2.0 token for the current user.
    /// * *key* (query-string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    /// * *prettyPrint* (query-boolean) - Returns response with indentations and line breaks.
    /// * *userIp* (query-string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    /// * *fields* (query-string) - Selector specifying which fields to include in a partial response.
    /// * *alt* (query-string) - Data format for the response.
    pub fn param<T>(mut self, name: T, value: T) -> TripSearchCall<'a, C, NC, A>
                                                        where T: Str {
        self._additional_params.insert(name.as_slice().to_string(), value.as_slice().to_string());
        self
    }

}

