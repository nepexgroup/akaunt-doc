# Versioning Software
- Software upgrade versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software. 
Within a given version number category (major, minor), these numbers are generally assigned in increasing order and correspond to new developments in 
the software. At a fine-grained level, revision control is often used for keeping track of incrementally different versions of information, whether or 
not this information is computer software.

- Given a version number **MAJOR.MINOR.PATCH**, increment the:

> MAJOR version when you make incompatible API changes, MINOR version when you add functionality in a backwards-compatible manner, and PATCH version when you make backwards-compatible bug fixes.

Additional labels for prerelease and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

- Consider a version format of X.Y.Z (Major.Minor.Patch). Bug fixes not affecting the API increment the patch version, backwards compatible API 
additions/changes increment the minor version, and backwards incompatible API changes increment the major version.

- I call this system “Semantic Versioning.” Under this scheme, version numbers and the way they change convey meaning about the underlying code and what 
has been modified from one version to the next.

- Let’s put that into context with some concrete examples. At the time of writing:

    - Firefox is at version `57.0.4`. That means that it’s on the fourth patch to its 57th major release.
    - Google Chrome is at version `63.0.3239`. That shows that it’s on the 3,239th patch to version 63.
    - Mac Mail is at version `11.2`. That means that it’s on the second minor update to version 11.

## Specification (SemVer)
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are 
to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

- Software using Semantic Versioning MUST declare a public API. This API could be declared in the code itself or exist strictly in documentation. 
However it is done, it SHOULD be precise and comprehensive.

- A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes. X is the major 
version, Y is the minor version, and Z is the patch version. Each element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.

- Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version.

- Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.

- Version 1.0.0 defines the public API. The way in which the version number is incremented after this release is dependent on this public API and 
how it changes.

- Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal 
change that fixes incorrect behavior.

- Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented 
if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within 
the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

- Major version X (X.y.z | X > 0) MUST be incremented if any backwards incompatible changes are introduced to the public API. It MAY also include minor 
and patch level changes. Patch and minor version MUST be reset to 0 when major version is incremented.

- A pre-release version MAY be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version. Identifiers
 MUST comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading zeroes. 
 Pre-release versions have a lower precedence than the associated normal version. A pre-release version indicates that the version is unstable and might 
 not satisfy the intended compatibility requirements as denoted by its associated normal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 
 1.0.0-x.7.z.92.

- Build metadata MAY be denoted by appending a plus sign and a series of dot separated identifiers immediately following the patch or pre-release version.
 Identifiers MUST comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be ignored when 
 determining version precedence. Thus two versions that differ only in the build metadata, have the same precedence. Examples: 1.0.0-alpha+001, 
 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

- Precedence refers to how versions are compared to each other when ordered. Precedence MUST be calculated by separating the version into major, minor, 
patch and pre-release identifiers in that order (Build metadata does not figure into precedence). Precedence is determined by the first difference when 
comparing each of these identifiers from left to right as follows: Major, minor, and patch versions are always compared numerically. Example: 
1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. When major, minor, and patch are equal, a pre-release version has lower precedence than a normal version. Example: 
1.0.0-alpha < 1.0.0. Precedence for two pre-release versions with the same major, minor, and patch version MUST be determined by comparing each dot 
separated identifier from left to right until a difference is found as follows: identifiers consisting of only digits are compared numerically and 
identifiers with letters or hyphens are compared lexically in ASCII sort order. Numeric identifiers always have lower precedence than non-numeric 
identifiers. A larger set of pre-release fields has a higher precedence than a smaller set, if all of the preceding identifiers are equal. Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


## Tips for versioning
- Communicate clearly to your users
- Have an open release schedule (that changes gradually)
- Be consistent and predictable
- Communicate changes regularly and transparently
- Get user feedback

## FAQ
1. How should I deal with revisions in the **0.y.z** initial development phase?
    
    The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

2. How do I know when to release **1.0.0**?

    If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backward compatibility, you should probably already be 1.0.0.

## Reference
- [Software versioning](https://en.wikipedia.org/wiki/Software_versioning)
- [Semantic Versioning](https://semver.org/)
- [Best Practice](https://blog.codeship.com/best-practices-when-versioning-a-release/)
