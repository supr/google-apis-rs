initSidebarItems({"enum":[["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"mod":[["cmn",""]],"macro":[["map!","This macro is advertised in the documentation, which is why we deliver it as well"]],"struct":[["AlignReadGroupSetsRequest","The read group set align request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * align readgroupsets (request)  "],["AlignReadGroupSetsResponse","The read group set align response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * align readgroupsets (response)  "],["Annotation","An annotation describes a region of reference genome. The value of an annotation may be one of several canonical types, supplemented by arbitrary info tags. A variant annotation is represented by one or more of these canonical types. An annotation is not inherently associated with a specific sample/individual (though a client could choose to use annotations in this way). Example canonical annotation types are 'Gene' and 'Variant'.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search annotations (none) * patch annotations (request|response) * create annotations (request|response) * delete annotations (none) * update annotations (request|response) * get annotations (response) * batch create annotations (none)  "],["AnnotationBatchCreateMethodBuilder","Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.     If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally."],["AnnotationCreateMethodBuilder","Creates a new annotation. Caller must have WRITE permission for the associated annotation set."],["AnnotationDeleteMethodBuilder","Deletes an annotation. Caller must have WRITE permission for the associated annotation set."],["AnnotationGetMethodBuilder","Gets an annotation. Caller must have READ permission for the associated annotation set."],["AnnotationMethodsBuilder","A builder providing access to all methods supported on *annotation* resources. It is not used directly, but through the `Genomics` hub."],["AnnotationPatchMethodBuilder","Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics."],["AnnotationSearchMethodBuilder","Searches for annotations which match the given criteria. Results are returned ordered by start position. Annotations which have matching start positions are ordered deterministically. Caller must have READ permission for the queried annotation sets."],["AnnotationSet","An annotation set is a logical grouping of annotations which share consistent type information and provenance. An example would be 'all genes from refseq', or 'all variant annotations from ClinVar'.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * update annotation sets (request|response) * create annotation sets (request|response) * patch annotation sets (request|response) * search annotation sets (none) * delete annotation sets (none) * get annotation sets (response)  "],["AnnotationSetCreateMethodBuilder","Creates a new annotation set. Caller must have WRITE permission for the associated dataset."],["AnnotationSetDeleteMethodBuilder","Deletes an annotation set. Caller must have WRITE permission for the associated annotation set."],["AnnotationSetGetMethodBuilder","Gets an annotation set. Caller must have READ permission for the associated dataset."],["AnnotationSetMethodsBuilder","A builder providing access to all methods supported on *annotationSet* resources. It is not used directly, but through the `Genomics` hub."],["AnnotationSetPatchMethodBuilder","Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics."],["AnnotationSetSearchMethodBuilder","Searches for annotation sets which match the given criteria. Results are returned in a deterministic order. Caller must have READ permission for the queried datasets."],["AnnotationSetUpdateMethodBuilder","Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset."],["AnnotationUpdateMethodBuilder","Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset."],["BatchAnnotationsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * batch create annotations (response)  "],["BatchAnnotationsResponseEntry","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["BatchAnnotationsResponseEntryStatus","   This type is not used in any activity, and only used as *part* of another schema.  "],["BatchCreateAnnotationsRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * batch create annotations (request)  "],["Call","A call represents the determination of genotype with respect to a particular variant. It may include associated information such as quality and phasing. For example, a call might assign a probability of 0.32 to the occurrence of a SNP named rs1234 in a call set with the name NA12345.   This type is not used in any activity, and only used as *part* of another schema.  "],["CallReadGroupSetsRequest","The read group set call request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * call readgroupsets (request)  "],["CallReadGroupSetsResponse","The read group set call response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * call readgroupsets (response)  "],["CallSet","A call set is a collection of variant calls, typically for one sample. It belongs to a variant set.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * create callsets (request|response) * patch callsets (request|response) * get callsets (response) * update callsets (request|response)  "],["CallsetCreateMethodBuilder","Creates a new call set."],["CallsetDeleteMethodBuilder","Deletes a call set."],["CallsetGetMethodBuilder","Gets a call set by ID."],["CallsetMethodsBuilder","A builder providing access to all methods supported on *callset* resources. It is not used directly, but through the `Genomics` hub."],["CallsetPatchMethodBuilder","Updates a call set. This method supports patch semantics."],["CallsetSearchMethodBuilder","Gets a list of call sets matching the criteria.   Implements GlobalAllianceApi.searchCallSets."],["CallsetUpdateMethodBuilder","Updates a call set."],["CigarUnit","A single CIGAR operation.   This type is not used in any activity, and only used as *part* of another schema.  "],["CoverageBucket","A bucket over which read coverage has been precomputed. A bucket corresponds to a specific range of the reference sequence.   This type is not used in any activity, and only used as *part* of another schema.  "],["Dataset","A Dataset is a collection of genomic data.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * delete datasets (none) * get datasets (response) * undelete datasets (response) * create datasets (request|response) * update datasets (request|response) * patch datasets (request|response) * list datasets (none)  "],["DatasetCreateMethodBuilder","Creates a new dataset."],["DatasetDeleteMethodBuilder","Deletes a dataset."],["DatasetGetMethodBuilder","Gets a dataset by ID."],["DatasetListMethodBuilder","Lists all datasets."],["DatasetMethodsBuilder","A builder providing access to all methods supported on *dataset* resources. It is not used directly, but through the `Genomics` hub."],["DatasetPatchMethodBuilder","Updates a dataset. This method supports patch semantics."],["DatasetUndeleteMethodBuilder","Undeletes a dataset by restoring a dataset which was deleted via this API. This operation is only possible for a week after the deletion occurred."],["DatasetUpdateMethodBuilder","Updates a dataset."],["ExperimentalCreateJobRequest","The job creation request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * jobs.create experimental (request)  "],["ExperimentalCreateJobResponse","The job creation response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * jobs.create experimental (response)  "],["ExperimentalJobCreateMethodBuilder","Creates and asynchronously runs an ad-hoc job. This is an experimental call and may be removed or changed at any time."],["ExperimentalMethodsBuilder","A builder providing access to all methods supported on *experimental* resources. It is not used directly, but through the `Genomics` hub."],["ExportReadGroupSetsRequest","The read group set export request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * export readgroupsets (request)  "],["ExportReadGroupSetsResponse","The read group set export response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * export readgroupsets (response)  "],["ExportVariantSetRequest","The variant data export request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * export variantsets (request)  "],["ExportVariantSetResponse","The variant data export response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * export variantsets (response)  "],["ExternalId","   This type is not used in any activity, and only used as *part* of another schema.  "],["FastqMetadata","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["Genomics","Central instance to access all Genomics related resource activities"],["ImportReadGroupSetsRequest","The read group set import request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * import readgroupsets (request)  "],["ImportReadGroupSetsResponse","The read group set import response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * import readgroupsets (response)  "],["ImportVariantsRequest","The variant data import request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * import variants variantsets (request)  "],["ImportVariantsResponse","The variant data import response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * import variants variantsets (response)  "],["Int32Value","Wrapper message for int32.   This type is not used in any activity, and only used as *part* of another schema.  "],["InterleavedFastqSource","Describes an interleaved FASTQ file source for alignment.   This type is not used in any activity, and only used as *part* of another schema.  "],["Job","A Job represents an ongoing process that can be monitored for status information.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * cancel jobs (none) * search jobs (none) * get jobs (response)  "],["JobCancelMethodBuilder","Cancels a job by ID. Note that it is possible for partial results to be generated and stored for cancelled jobs."],["JobGetMethodBuilder","Gets a job by ID."],["JobMethodsBuilder","A builder providing access to all methods supported on *job* resources. It is not used directly, but through the `Genomics` hub."],["JobRequest","A summary representation of the service request that spawned the job.   This type is not used in any activity, and only used as *part* of another schema.  "],["JobSearchMethodBuilder","Gets a list of jobs matching the criteria."],["LinearAlignment","A linear alignment can be represented by one CIGAR string. Describes the mapped position and local alignment of the read to the reference.   This type is not used in any activity, and only used as *part* of another schema.  "],["ListBasesResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * bases.list references (response)  "],["ListCoverageBucketsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * coveragebuckets.list readgroupsets (response)  "],["ListDatasetsResponse","The dataset list response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * list datasets (response)  "],["MergeVariantsRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * merge variants variantsets (request)  "],["Metadata","Metadata describes a single piece of variant call metadata. These data include a top level key and either a single value string (value) or a list of key-value pairs (info.) Value and info are mutually exclusive.   This type is not used in any activity, and only used as *part* of another schema.  "],["PairedFastqSource","Describes a paired-end FASTQ file source for alignment.   This type is not used in any activity, and only used as *part* of another schema.  "],["Position","An abstraction for referring to a genomic position, in relation to some already known reference. For now, represents a genomic position as a reference name, a base number on that reference (0-based), and a determination of forward or reverse strand.   This type is not used in any activity, and only used as *part* of another schema.  "],["QueryRange","A 0-based half-open genomic coordinate range for search requests.   This type is not used in any activity, and only used as *part* of another schema.  "],["Range","A 0-based half-open genomic coordinate range over a reference sequence.   This type is not used in any activity, and only used as *part* of another schema.  "],["RangePosition","A 0-based half-open genomic coordinate range over a reference sequence, for representing the position of a genomic resource.   This type is not used in any activity, and only used as *part* of another schema.  "],["Read","A read alignment describes a linear alignment of a string of DNA to a reference sequence, in addition to metadata about the fragment (the molecule of DNA sequenced) and the read (the bases which were read by the sequencer). A read is equivalent to a line in a SAM file. A read belongs to exactly one read group and exactly one read group set. Generating a reference-aligned sequence string When interacting with mapped reads, it's often useful to produce a string representing the local alignment of the read to reference. The following pseudocode demonstrates one way of doing this: out = \"\" offset = 0 for c in read.alignment.cigar { switch c.operation { case \"ALIGNMENT_MATCH\", \"SEQUENCE_MATCH\", \"SEQUENCE_MISMATCH\": out += read.alignedSequence[offset:offset+c.operationLength] offset += c.operationLength break case \"CLIP_SOFT\", \"INSERT\": offset += c.operationLength break case \"PAD\": out += repeat(\"*\", c.operationLength) break case \"DELETE\": out += repeat(\"-\", c.operationLength) break case \"SKIP\": out += repeat(\" \", c.operationLength) break case \"CLIP_HARD\": break } } return out Converting to SAM's CIGAR string The following pseudocode generates a SAM CIGAR string from the cigar field. Note that this is a lossy conversion (cigar.referenceSequence is lost). cigarMap = { \"ALIGNMENT_MATCH\": \"M\", \"INSERT\": \"I\", \"DELETE\": \"D\", \"SKIP\": \"N\", \"CLIP_SOFT\": \"S\", \"CLIP_HARD\": \"H\", \"PAD\": \"P\", \"SEQUENCE_MATCH\": \"=\", \"SEQUENCE_MISMATCH\": \"X\", } cigarStr = \"\" for c in read.alignment.cigar { cigarStr += c.operationLength + cigarMap[c.operation] } return cigarStr   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search reads (none)  "],["ReadGroup","A read group is all the data that's processed the same way by the sequencer.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReadGroupExperiment","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReadGroupProgram","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReadGroupSet","A read group set is a logical collection of read groups, which are collections of reads produced by a sequencer. A read group set typically models reads corresponding to one sample, sequenced one way, and aligned one way. - A read group set belongs to one dataset. - A read group belongs to one read group set. - A read belongs to one read group.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get readgroupsets (response) * patch readgroupsets (request|response) * update readgroupsets (request|response)  "],["ReadMethodsBuilder","A builder providing access to all methods supported on *read* resources. It is not used directly, but through the `Genomics` hub."],["ReadSearchMethodBuilder","Gets a list of reads for one or more read group sets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.   If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.   All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (reference sequence & position). Reads with equivalent genomic coordinates are returned in a deterministic order.   Implements GlobalAllianceApi.searchReads."],["ReadgroupsetAlignMethodBuilder","Aligns read data from existing read group sets or files from Google Cloud Storage. See the  alignment and variant calling documentation for more details."],["ReadgroupsetCallMethodBuilder","Calls variants on read data from existing read group sets or files from Google Cloud Storage. See the  alignment and variant calling documentation for more details."],["ReadgroupsetCoveragebucketListMethodBuilder","Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range.   Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set."],["ReadgroupsetDeleteMethodBuilder","Deletes a read group set."],["ReadgroupsetExportMethodBuilder","Exports read group sets to a BAM file in Google Cloud Storage.   Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. In particular, comments in the input file header will not be preserved, some custom tags will be converted to strings, and original reference sequence order is not necessarily preserved."],["ReadgroupsetGetMethodBuilder","Gets a read group set by ID."],["ReadgroupsetImportMethodBuilder","Creates read group sets by asynchronously importing the provided information.   Note that currently comments in the input file header are not imported and some custom tags will be converted to strings, rather than preserving tag types. The caller must have WRITE permissions to the dataset."],["ReadgroupsetMethodsBuilder","A builder providing access to all methods supported on *readgroupset* resources. It is not used directly, but through the `Genomics` hub."],["ReadgroupsetPatchMethodBuilder","Updates a read group set. This method supports patch semantics."],["ReadgroupsetSearchMethodBuilder","Searches for read group sets matching the criteria.   Implements GlobalAllianceApi.searchReadGroupSets."],["ReadgroupsetUpdateMethodBuilder","Updates a read group set."],["Reference","A reference is a canonical assembled DNA sequence, intended to act as a reference coordinate space for other genomic annotations. A single reference might represent the human chromosome 1 or mitochandrial DNA, for instance. A reference belongs to one or more reference sets.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * bases.list references (none) * search references (none) * get references (response)  "],["ReferenceBaseListMethodBuilder","Lists the bases in a reference, optionally restricted to a range.   Implements GlobalAllianceApi.getReferenceBases."],["ReferenceBound","ReferenceBound records an upper bound for the starting coordinate of variants in a particular reference.   This type is not used in any activity, and only used as *part* of another schema.  "],["ReferenceGetMethodBuilder","Gets a reference.   Implements GlobalAllianceApi.getReference."],["ReferenceMethodsBuilder","A builder providing access to all methods supported on *reference* resources. It is not used directly, but through the `Genomics` hub."],["ReferenceSearchMethodBuilder","Searches for references which match the given criteria.   Implements GlobalAllianceApi.searchReferences."],["ReferenceSet","A reference set is a set of references which typically comprise a reference assembly for a species, such as GRCh38 which is representative of the human genome. A reference set defines a common coordinate space for comparing reference-aligned experimental data. A reference set contains 1 or more references.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get referencesets (response)  "],["ReferencesetGetMethodBuilder","Gets a reference set.   Implements GlobalAllianceApi.getReferenceSet."],["ReferencesetMethodsBuilder","A builder providing access to all methods supported on *referenceset* resources. It is not used directly, but through the `Genomics` hub."],["ReferencesetSearchMethodBuilder","Searches for reference sets which match the given criteria.   Implements GlobalAllianceApi.searchReferenceSets."],["SearchAnnotationSetsRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search annotation sets (request)  "],["SearchAnnotationSetsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search annotation sets (response)  "],["SearchAnnotationsRequest","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search annotations (request)  "],["SearchAnnotationsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search annotations (response)  "],["SearchCallSetsRequest","The call set search request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search callsets (request)  "],["SearchCallSetsResponse","The call set search response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search callsets (response)  "],["SearchJobsRequest","The jobs search request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search jobs (request)  "],["SearchJobsResponse","The job search response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search jobs (response)  "],["SearchReadGroupSetsRequest","The read group set search request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search readgroupsets (request)  "],["SearchReadGroupSetsResponse","The read group set search response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search readgroupsets (response)  "],["SearchReadsRequest","The read search request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search reads (request)  "],["SearchReadsResponse","The read search response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search reads (response)  "],["SearchReferenceSetsRequest","   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search referencesets (request)  "],["SearchReferenceSetsResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search referencesets (response)  "],["SearchReferencesRequest","   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search references (request)  "],["SearchReferencesResponse","There is no detailed description.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search references (response)  "],["SearchVariantSetsRequest","The search variant sets request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search variantsets (request)  "],["SearchVariantSetsResponse","The search variant sets response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search variantsets (response)  "],["SearchVariantsRequest","The variant search request.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search variants (request)  "],["SearchVariantsResponse","The variant search response.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * search variants (response)  "],["Transcript","A transcript represents the assertion that a particular region of the reference genome may be transcribed as RNA.   This type is not used in any activity, and only used as *part* of another schema.  "],["TranscriptCodingSequence","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["TranscriptExon","There is no detailed description.   This type is not used in any activity, and only used as *part* of another schema.  "],["Variant","A variant represents a change in DNA sequence relative to a reference sequence. For example, a variant could represent a SNP or an insertion. Variants belong to a variant set. Each of the calls on a variant represent a determination of genotype with respect to that variant. For example, a call might assign probability of 0.32 to the occurrence of a SNP named rs1234 in a sample named NA12345. A call belongs to a call set, which contains related calls typically from one sample.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * get variants (response) * search variants (none) * update variants (request|response) * delete variants (none) * create variants (request|response)  "],["VariantAnnotation","A Variant annotation.   This type is not used in any activity, and only used as *part* of another schema.  "],["VariantAnnotationCondition","   This type is not used in any activity, and only used as *part* of another schema.  "],["VariantCreateMethodBuilder","Creates a new variant."],["VariantDeleteMethodBuilder","Deletes a variant."],["VariantGetMethodBuilder","Gets a variant by ID."],["VariantMethodsBuilder","A builder providing access to all methods supported on *variant* resources. It is not used directly, but through the `Genomics` hub."],["VariantSearchMethodBuilder","Gets a list of variants matching the criteria.   Implements GlobalAllianceApi.searchVariants."],["VariantSet","A variant set is a collection of call sets and variants. It contains summary statistics of those contents. A variant set belongs to a dataset.   # Activities   This type is used in activities, which are methods you may call on this type or where this type is involved in.  The list links the activity name, along with information about where it is used (one of *request* and *response*).   * patch variantsets (request|response) * get variantsets (response) * update variantsets (request|response)  "],["VariantUpdateMethodBuilder","Updates a variant's names and info fields. All other modifications are silently ignored. Returns the modified variant without its calls."],["VariantsetDeleteMethodBuilder","Deletes the contents of a variant set. The variant set object is not deleted."],["VariantsetExportMethodBuilder","Exports variant set data to an external destination."],["VariantsetGetMethodBuilder","Gets a variant set by ID."],["VariantsetImportVariantMethodBuilder","Creates variant data by asynchronously importing the provided information.   The variants for import will be merged with any existing data and each other according to the behavior of mergeVariants. In particular, this means for merged VCF variants that have conflicting INFO fields, some data will be arbitrarily discarded. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set."],["VariantsetMergeVariantMethodBuilder","Merges the given variants with existing variants. Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.   When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded."],["VariantsetMethodsBuilder","A builder providing access to all methods supported on *variantset* resources. It is not used directly, but through the `Genomics` hub."],["VariantsetPatchMethodBuilder","Updates a variant set's metadata. All other modifications are silently ignored. This method supports patch semantics."],["VariantsetSearchMethodBuilder","Returns a list of all variant sets matching search criteria.   Implements GlobalAllianceApi.searchVariantSets."],["VariantsetUpdateMethodBuilder","Updates a variant set's metadata. All other modifications are silently ignored."]]});