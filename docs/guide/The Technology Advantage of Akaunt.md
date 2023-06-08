# The Technology Advantage of Akaunt

6.1 Behind the Scene
6.1.1 High Performance Data Engine:
Akaunt uses a recursive object oriented, flexi-field, flexi-length embedded database engine
giving a compact and fast performance. The in-built database engine also ensures that you do not
need to install or understand any third party database like most other applications. Akaunt is
completely maintenance free without any administration required from your side. The perform-
ance is reflected with most of the reports coming up instantly. Overall you get a smooth experi-
ence with a lower cost of ownership.
6.1.2 Data Reliability and automatic recovery
Akaunt provides a high level of reliability of data with several technologies built into it. Your
data does not get corrupted even if there is a sudden machine shutdown or network breakdown or
power cut. This is ensured using the concept of transaction atomicity?? which is supported by the
object oriented storage. Akaunt uses data integrity checks intensively to detect any change to
your data by external means. Any corruption happening in this way will be instantly detected as
the program operates the data with a timely warning to you. Besides providing a warning,
Akaunt provides you a unique capability to recover from most corruptions by allowing you to
simply rewrite the data. The corrupted data is then discarded and you can continue with normal
operations, at the most re-entering the corrupted transactions or masters only.
6.2 Internet & Data exchange
6.2.1 HTTP-XML based data interchange
Akaunt uses a recursive object oriented data structure which can naturally and easily be
expressed as XML. Akaunt can export your data in XML format and can also import data
coming in XML format. This is a fundamental capability of the program and can be easily used to
extract data for third party applications or to pump in data from third party applications as long as
it is compliant with the schema of a voucher or master.
The process can be automated since Akaunt can run as an HTTP (Hyper text transfer
protocol) server and can process requests for import or export in HTTP-XML to this server from
other applications. Even third party web applications written in ASP, PHP, Java etc. can talk to
your Akaunt running as an HTTP server and provide real-time information or remote data
input. The third party application can send a request to Akaunt to get any report in XML or
even in HTML formats. Even new reports can be added by defining them in TDL (Tally Definition
Language). In the same way, a master or a voucher can be created in XML and sent to Tally.ERP
9 server as an HTTP-XML request and will be processed and stored by Akaunt.
This capability has been used to provide the synchronisation capability (explained in this
document later) which allows data to be replicated, exchange between multiple Akaunt
instances running at same or different locations just by configuring the same.

6.3 ODBC - Open Database Connectivity
6.3.1 ODBC data access
Akaunt provides an ODBC (Open database connectivity) driver natively which allows other
applications like MS-Excel (which can use an ODBC data source) to directly pick up data from
Akaunt running as an ODBC server. This data is again real-time data and can be refreshed
by such applications any time as long as Akaunt is running. You can pick and choose the
available information and design your own reports in tools like Excel. The type of data available
on ODBC from Akaunt can be extended using TDL (Tally definition Language).
ODBC compliance allows other programs to use data from Akaunt directly.

Automatic data replication/exchange with synchronisation
Ability to synchronise data across multiple offices
Synchronisation process in Akaunt helps you to transfer data between two or more locations.
For instance, Synchronisation can be done both ways for the Head office of a company and its
Branch office situated in two different locations.

6.5 Security Management
6.5.1 Data Security
Akaunt use of data integrity checks ensures that no external change to your data can affect it.
It uses a binary encoding format of storage to prevent devious grouping of information. It also
offers access to your database thru an ODBC layer, which is fully activated.
User-defined Security Levels
Akaunt offers you high levels of security. You can define multiple levels of security as per
requirements and authorize users with individual passwords and rights to access specific func-
tionality only. User with Administrator level password will have full access to all features and will
set access controls for other users.

Akaunt Audit
Akaunt audit feature provides you with Administrator rights; a capability for you to check the
accuracy and correctness of the entries made by authorized users. It allows you to alter the
entries if required. Once you audit the entries, Akaunt displays for you all altered entries with
the user's name who altered the entry, the date and time of alteration. The audit trail is also
available in the day book where the administrator can view the alterations made.

:::tip
The Administrator can once again audit the entries that have been altered
after verifying the same.
:::

6.8 Administration and Manageability
6.8.1 Simple and Rapid Installation
Akaunt has a simple menu driven installation procedure. At the time of installation you can
install the program files on any drive (i.e. if the hard disk has partitions) or specify a directory for
installation. You can also specify the location of the data directory. It only take about 30 MB in total
including the option to install all languages supported by Akaunt

Removal of data into separate company
Akaunt allows you to maintain a company for any number of financial years. Once the books
of accounts are completed for previous financial years and if you wish you could split the
company data into multiple companies as per financial periods required. Akaunt therefore
offers a feature to split your company data. You can specify the date from which the company has
to be split and Akaunt will split the company to form two companies as per periods specified.
Once the data has been split, the closing balance of the first period (first company) becomes
opening balance for the next period (second company).

Multi- Directory for Company Management:
You can create multiple directories in your system to store Akaunt data. Specify the path in
Akaunt to access the data directly in these directories.

Extensibility (TDL - Tally Definition Language)
The most powerful and important technical capability which is available in Akaunt is the Tally
Definition Language (TDL). This is a rapid business application development language using
which Akaunt itself has been developed. Almost anything in Akaunt can be altered, cus-
tomized, extended using this language. New reports can be easily written or existing ones altered
using this language and added on to Akaunt just by adding them to the INI file. All reports
written in TDL will automatically become available in HTML, XML format along with capability to
print them, mail them, publish them and so on. Our partners provide you the services for
extending Akaunt and even ready-made extensions are available from them.
This language capability is built into all the editions of the product and you have to just get the
specific extensions done as required for your business. The language is easy to learn and we
provide the necessary courses and tools just in case you want to do it yourself!!!

Others
Print Preview:
Before printing any report you would ideally like to view the content and format of reports /
Invoices / Vouchers. Akaunt offers you a facility to preview the report before printing or
mailing. This is the print preview option.

Unlimited Multi-User support:
You can install a Multi-user Version (Gold) of Akaunt on a network having any number of
machines (computers) working with different operating systems like NT, Win 95, 98, Win 2000; on
a single subnet. Akaunt works on any kind of network (i.e. NT, Novell, Peer-Peer N/W etc).
The protocol required is TCP/IP.
Concurrent Access of a Company Data by Multiple Akaunt Silver Installations:
Many businesses using two or more licenses of Akaunt on their Local Area Network (LAN)
would like to access the common data. This was not possible in the earlier versions of Akaunt
within a LAN. If one of your users was accessing the data of a company, then the other user on
the LAN would not be able to access the database of the same company. The database would be
rendered inaccessible.
Now Akaunt comes with an enhanced feature, wherein more than one Akaunt Silver
license user can access the data of a single company concurrently on a LAN (within a single sub-
net).

Internal Backup / Restore
Akaunt has in-built user friendly features of backup and restore. You can take a backup in the
local hard disk or any external media. Akaunt provides you with the capability to take backup
of one or more companies or all companies in a single directory.

Import / Export of Data
Akaunt allows you to import data from as well as export data to other software. You can
import and export in ASCII, Excel and XML formats. XML is now the most widely used format of
exporting data in the world. Any type of transactions can be exported to other software after
suitably altering their current structures to accept Akaunt data. The reverse is also possible if
you write a small TDL program to accept data from other software. The data that is imported into
Akaunt can be in either XML or DBF formats.

Export Akaunt Reports to MS Excel
Akaunt now comes with the functionality wherein all reports can be exported to Microsoft
Excel spreadsheet. This feature enables you to export any report generated by Akaunt into
Excel.

Graphical Analysis of Data
Pictorials like graphs convey better information than just numbers. Akaunt also provides you
feature for graphical (Bar graph) analysis of data. You can do a graphical analysis of reports like
Sales register, Purchase register, Ledgers, Funds flow, Cash flow, Item registers etc. This helps
you to analyse the financial data fully. Akaunt's graphical analysis provides for month wise
graphs and compares them with any other period. This feature helps you to locate quickly the
high and low periods (variations) in a financial year.

Concurrent Multi-lingual Capability
With Akaunt, you can maintain your accounts in any Indian language, view them in another
language, and print them in a third language, with greater speed and power than ever before! You
can perform all these actions concurrently and without much effort. Akaunt ensures that you
are able to transact business across the length and breadth of India in any language provided by
Akaunt without any barriers. Some important aspects of this functionality are:

Tally.NET
Tally.NET is an enabling framework which establishes a connection through which the remote
user can access the Client's data without copying / transferring the data. In other words, the
remote user can access the company data, provided the Company is open and connected on
Tally.NET.
Using Tally.NET features, the user can create remote users (ids), authorize & authenticate them
for accessing the connected (available) companies. The remote users can be mapped to a partic-
ular user and assigned security controls based upon their security levels (viz., Tax Auditor /
Administrator, Data Entry etc.). The remote user can further create sub-ids under him to assign
tasks based on their security levels.
The user making the company available and a person accessing the data behave as clients to
Tally.NET, thereby rendering a secure exchange system.
Tally.NET Features
Tally.NET is a default feature available in the product and provides a host of capabilities.
- Register and Connect companies from Akaunt
- Create and maintain Remote Users
- Remote access of data by any user (including BAP users)
- Remote availability of Auditors' Edition of Tally License
- Synchronization of data (via Tally.NET)

New Licensing Mechanism
Akaunt brings a simple and more user-friendly Licensing mechanism, which addresses many
of the licensing activities for any user from a single window (screen). Besides, allowing activation
of Single User (Silver) and Multi User (Gold) license, it also extends features for multi-site Licens-
ing. The new licensing process provides the user with the flexibility and compatibility to manage
multiple license running at different locations/ sites centrally in a secured environment.
Site Licensing
A new concept known as Site Licensing is introduced from Akaunt. A site refers to a location
comprising of a single Akaunt License or multiple Akaunt licenses linked to it. The site
licensing may be broadly classified into two viz., Single Site and Multi-Site
Single Site : means a single instance of Akaunt (Silver or Gold) is active at a time on a
single machine under a given account.
Multi Site: means more than one instance of Akaunt (Silver or Gold) license are active
on different machines (may be at different locations) under a single account com-prising
of the same or different serial numbers.
6.15 Control Centre
Akaunt provides a powerful feature named Control Centre to its users, which works as an
interface between the user and Akaunt installed at different sites, it enables the user to
centrally configure and administer Site/User belonging to an account.
The features of the Control Centre are as follows:
Manage Licenses
Central Configuration
Manage Users
Manage Company Profile
Manage Accounts (using My Tally.NET Accounts)
Change Passwords
Jobs and Recruitments
Activity History
With the help of Control Centre, you will be able to
Create users with predefined Security levels
Centrally Configure & manage your Akaunt
Surrender, Confirm or Reject activation of a Site
Maintain Account related information
124The Technology Advantage of Akaunt
Manage Licenses and Activity History
Manage Jobs and Recruitments
Create users with predefined Security levels
Using the Control Centre feature, the Account Administrator can create users and map them to a
predefined security level and authorise them to access a Site/Location linked to that Account. And
further the system administrator can also create Remote users and allow / disallow them to
remotely access the data.
The predefined security levels in Akaunt are:
Owner
Site Administrator
Tally.NET User
Tally.NET Auditor
Standard User
Centrally Configure and manage your Akaunt
The Control Centre provides the flexiblity to make changes to product configurations in the
Tally.ini (Configuration file) and apply them to immediate effect without restarting the application.
The following master configurations set can be made from the Control Centre
Add/Modify the Tally.ini parameters
Assign TDL’s to a site or all the sites under an Account
Permit or Deny changes to the local configurations
The master configurations set created is applied initially to the Account centrally which is inherited
by the site(s) on updation of license, based on the site level permissions by the Account Adminis-
trator.
Surrender, Confirm or Reject activation of a Site
The Account Administrator is authorised to surrender, confirm a site license or Reject the request
received on activation from another site.
Maintain Account related information
Allows you to maintain information about the organisation. Based on the requirements, the
Account Administrator can merge multiple accounts into one or split an account into multiple
account for easy and better management.

6.16 Support Centre
Akaunt provides a new capability to its users known as Support Centre, wherein a user can
directly post his support queries on the functional and technical aspects of the Product. Using
Support Centre feature, the user can view all the support queries reported via Support Centre and
also through other modes viz., Email, Chat, Calls, etc.
The Support Centre features facilitates viewing queries for a activated license alongwith the
Status i.e., Closed / Pending and Ticket Summary. The report is viewed based on Date, Status
and Location and so on.
Faster reach for help and support
The Support Centre feature makes it easy and convenient to reach out to Akaunt service
partner and Tally-support team for any product help and support, by click of a button from within
the product.
Access solutions to your problems any time
This feature facilitates instant reference to the solutions provided for your queries at any point of
time.
Avoid repeated explanations
Availability of information on the issues, interactions and resolutions, to Tally Service Partners and
Tally Support Team, largely reduces the possibilities of repeated explanations on the issues/
support queries and thereby ensures quality help and support.
Track your issues on real-time basis
The Support Centre makes available the status of your queries including the full chain of interac-
tions irrespective of the mode of communication. i.e., if you have posted a query onto the Support
Centre feature in Akaunt and then interacted over phone, even in such cases, the complete
discussion will be available to you.
Access issues of any Location/Site
In Multi-site License, using the Support Centre feature you can view details of issues of any
location /site from any of your Location(s).
Reach out to your nearest Service Partner instantly
You can search for a service partner and post your queries instantly.
Access your Support Centre remotely from any Akaunt
The Support Centre feature can also be accessed remotely from any Akaunt from anywhere,
as an authorised Tally.NET user.

Auditor’s Edition of Akaunt
Akaunt offers a special Auditors' Edition of Akaunt, which provides auditing and compli-
ance capabilities exclusively for Chartered Accountants. The Audit capabilities provided in
Auditors' Edition are available by default, regardless of Tally.NET subscription. Using Tally.NET
features, Akaunt provides the capability to Chartered Accountants to Audit in following
scenarios :
Audit at CA's office by accessing local data
Audit at Client's place by accessing local data
Audit at his place by accessing Client's data remotely
