(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(e,n,i){"use strict";i.r(n);var a=i(40),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"versioning-software"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#versioning-software"}},[e._v("#")]),e._v(" Versioning Software")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Software upgrade versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.\nWithin a given version number category (major, minor), these numbers are generally assigned in increasing order and correspond to new developments in\nthe software. At a fine-grained level, revision control is often used for keeping track of incrementally different versions of information, whether or\nnot this information is computer software.")])]),e._v(" "),i("li",[i("p",[e._v("Given a version number "),i("strong",[e._v("MAJOR.MINOR.PATCH")]),e._v(", increment the:")])])]),e._v(" "),i("blockquote",[i("p",[e._v("MAJOR version when you make incompatible API changes, MINOR version when you add functionality in a backwards-compatible manner, and PATCH version when you make backwards-compatible bug fixes.")])]),e._v(" "),i("p",[e._v("Additional labels for prerelease and build metadata are available as extensions to the "),i("strong",[e._v("MAJOR.MINOR.PATCH")]),e._v(" format.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Consider a version format of X.Y.Z (Major.Minor.Patch). Bug fixes not affecting the API increment the patch version, backwards compatible API\nadditions/changes increment the minor version, and backwards incompatible API changes increment the major version.")])]),e._v(" "),i("li",[i("p",[e._v("I call this system “Semantic Versioning.” Under this scheme, version numbers and the way they change convey meaning about the underlying code and what\nhas been modified from one version to the next.")])]),e._v(" "),i("li",[i("p",[e._v("Let’s put that into context with some concrete examples. At the time of writing:")]),e._v(" "),i("ul",[i("li",[e._v("Firefox is at version "),i("code",[e._v("57.0.4")]),e._v(". That means that it’s on the fourth patch to its 57th major release.")]),e._v(" "),i("li",[e._v("Google Chrome is at version "),i("code",[e._v("63.0.3239")]),e._v(". That shows that it’s on the 3,239th patch to version 63.")]),e._v(" "),i("li",[e._v("Mac Mail is at version "),i("code",[e._v("11.2")]),e._v(". That means that it’s on the second minor update to version 11.")])])])]),e._v(" "),i("h2",{attrs:{id:"specification-semver"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification-semver"}},[e._v("#")]),e._v(" Specification (SemVer)")]),e._v(" "),i("p",[e._v("The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are\nto be interpreted as described in "),i("a",{attrs:{href:"https://tools.ietf.org/html/rfc2119",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 2119"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Software using Semantic Versioning MUST declare a public API. This API could be declared in the code itself or exist strictly in documentation.\nHowever it is done, it SHOULD be precise and comprehensive.")])]),e._v(" "),i("li",[i("p",[e._v("A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes. X is the major\nversion, Y is the minor version, and Z is the patch version. Each element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.")])]),e._v(" "),i("li",[i("p",[e._v("Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version.")])]),e._v(" "),i("li",[i("p",[e._v("Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.")])]),e._v(" "),i("li",[i("p",[e._v("Version 1.0.0 defines the public API. The way in which the version number is incremented after this release is dependent on this public API and\nhow it changes.")])]),e._v(" "),i("li",[i("p",[e._v("Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal\nchange that fixes incorrect behavior.")])]),e._v(" "),i("li",[i("p",[e._v("Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented\nif any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within\nthe private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.")])]),e._v(" "),i("li",[i("p",[e._v("Major version X (X.y.z | X > 0) MUST be incremented if any backwards incompatible changes are introduced to the public API. It MAY also include minor\nand patch level changes. Patch and minor version MUST be reset to 0 when major version is incremented.")])]),e._v(" "),i("li",[i("p",[e._v("A pre-release version MAY be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version. Identifiers\nMUST comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading zeroes.\nPre-release versions have a lower precedence than the associated normal version. A pre-release version indicates that the version is unstable and might\nnot satisfy the intended compatibility requirements as denoted by its associated normal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,\n1.0.0-x.7.z.92.")])]),e._v(" "),i("li",[i("p",[e._v("Build metadata MAY be denoted by appending a plus sign and a series of dot separated identifiers immediately following the patch or pre-release version.\nIdentifiers MUST comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be ignored when\ndetermining version precedence. Thus two versions that differ only in the build metadata, have the same precedence. Examples: 1.0.0-alpha+001,\n1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.")])]),e._v(" "),i("li",[i("p",[e._v("Precedence refers to how versions are compared to each other when ordered. Precedence MUST be calculated by separating the version into major, minor,\npatch and pre-release identifiers in that order (Build metadata does not figure into precedence). Precedence is determined by the first difference when\ncomparing each of these identifiers from left to right as follows: Major, minor, and patch versions are always compared numerically. Example:\n1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. When major, minor, and patch are equal, a pre-release version has lower precedence than a normal version. Example:\n1.0.0-alpha < 1.0.0. Precedence for two pre-release versions with the same major, minor, and patch version MUST be determined by comparing each dot\nseparated identifier from left to right until a difference is found as follows: identifiers consisting of only digits are compared numerically and\nidentifiers with letters or hyphens are compared lexically in ASCII sort order. Numeric identifiers always have lower precedence than non-numeric\nidentifiers. A larger set of pre-release fields has a higher precedence than a smaller set, if all of the preceding identifiers are equal. Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.")])])]),e._v(" "),i("h2",{attrs:{id:"tips-for-versioning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-versioning"}},[e._v("#")]),e._v(" Tips for versioning")]),e._v(" "),i("ul",[i("li",[e._v("Communicate clearly to your users")]),e._v(" "),i("li",[e._v("Have an open release schedule (that changes gradually)")]),e._v(" "),i("li",[e._v("Be consistent and predictable")]),e._v(" "),i("li",[e._v("Communicate changes regularly and transparently")]),e._v(" "),i("li",[e._v("Get user feedback")])]),e._v(" "),i("h2",{attrs:{id:"faq"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("How should I deal with revisions in the "),i("strong",[e._v("0.y.z")]),e._v(" initial development phase?")]),e._v(" "),i("p",[e._v("The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.")])]),e._v(" "),i("li",[i("p",[e._v("How do I know when to release "),i("strong",[e._v("1.0.0")]),e._v("?")]),e._v(" "),i("p",[e._v("If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backward compatibility, you should probably already be 1.0.0.")])])]),e._v(" "),i("h2",{attrs:{id:"reference"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Software_versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software versioning"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://blog.codeship.com/best-practices-when-versioning-a-release/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Best Practice"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);