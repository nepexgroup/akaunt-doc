(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{351:function(e,t,a){e.exports=a.p+"assets/img/branching-model.f3ecc3cf.png"},362:function(e,t,a){"use strict";a.r(t);var n=a(40),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"git-branching-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-branching-model"}},[e._v("#")]),e._v(" Git Branching Model")]),e._v(" "),n("p",[n("img",{attrs:{src:a(351),alt:"Branching model"}})]),e._v(" "),n("h2",{attrs:{id:"main-branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#main-branches"}},[e._v("#")]),e._v(" Main branches")]),e._v(" "),n("p",[e._v("At the core, the development model is greatly inspired by existing models out there. The central repo holds two main branches with an infinite lifetime:")]),e._v(" "),n("ul",[n("li",[e._v("master")]),e._v(" "),n("li",[e._v("develop")])]),e._v(" "),n("h4",{attrs:{id:"key-concept"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-concept"}},[e._v("#")]),e._v(" Key concept")]),e._v(" "),n("ul",[n("li",[e._v("Parallel to the "),n("strong",[e._v("master")]),e._v(" branch, another branch exists called "),n("strong",[e._v("develop")]),e._v(".")]),e._v(" "),n("li",[e._v("consider "),n("strong",[e._v("origin/master")]),e._v(" to be the main branch where the source code of HEAD always reflects a "),n("em",[e._v("production-ready")]),e._v(" state.")]),e._v(" "),n("li",[e._v("We consider "),n("strong",[e._v("origin/develop")]),e._v(" to be the main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. Some would call this the "),n("strong",[e._v("“integration branch”")]),e._v(". This is where any automatic nightly builds are built from.")]),e._v(" "),n("li",[e._v("When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number. How this is done in detail will be discussed further on.")]),e._v(" "),n("li",[e._v("Therefore, each time when changes are merged back into master, this is a new production release by definition. We tend to be very strict at this, so that theoretically, we could use a Git hook script to automatically build and roll-out our software to our production servers everytime there was a commit on master.")])]),e._v(" "),n("h2",{attrs:{id:"supporting-branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supporting-branches"}},[e._v("#")]),e._v(" Supporting branches")]),e._v(" "),n("p",[e._v("Next to the main branches master and develop, our development model uses a variety of supporting branches to aid parallel development between team members,\nease tracking of features, prepare for production releases and to assist in quickly fixing live production problems. Unlike the main branches, these\nbranches always have a limited life time, since they will be removed eventually.")]),e._v(" "),n("ul",[n("li",[e._v("Feature branches")]),e._v(" "),n("li",[e._v("Release branches")]),e._v(" "),n("li",[e._v("HotFix branches")])]),e._v(" "),n("h4",{attrs:{id:"key-concept-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-concept-2"}},[e._v("#")]),e._v(" Key concept")]),e._v(" "),n("ul",[n("li",[e._v("Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets.")])]),e._v(" "),n("h3",{attrs:{id:"feature-branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feature-branches"}},[e._v("#")]),e._v(" Feature branches")]),e._v(" "),n("ul",[n("li",[e._v("Feature branches (or sometimes called topic branches) are used to develop new features for the upcoming or a distant future release. When starting\ndevelopment of a feature, the target release in which this feature will be incorporated may well be unknown at that point. The essence of a feature branch\nis that it exists as long as the feature is in development, but will eventually be merged back into develop (to definitely add the new feature to the\nupcoming release) or discarded (in case of a disappointing experiment).")]),e._v(" "),n("li",[e._v("Feature branches typically exist in developer repos only, not in origin.")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Creating a feature branch")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b myfeature develop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Switched to a new branch "myfeature"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Incorporating a finished feature on develop")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout develop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to branch 'develop'")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff myfeature\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Updating ea1b82a..05e9557")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#(Summary of changes)")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -d myfeature\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deleted branch myfeature (was 05e9557).")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin develop\n")])])]),n("ul",[n("li",[n("code",[e._v("--no-ff")]),e._v(" flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing\ninformation about the historical existence of a feature branch and groups together all commits that together added the feature")])]),e._v(" "),n("h3",{attrs:{id:"release-branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#release-branches"}},[e._v("#")]),e._v(" Release branches")]),e._v(" "),n("ul",[n("li",[e._v("Release branches support preparation of a new production release. They allow for last-minute dotting of i’s and crossing t’s. Furthermore, they allow\nfor minor bug fixes and preparing meta-data for a release (version number, build dates, etc.).")]),e._v(" "),n("li",[e._v("The key moment to branch off a new release branch from "),n("strong",[e._v("develop")]),e._v(" is when develop (almost) reflects the desired state of the new release.")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Creating a release branch")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Release branches are created from the develop branch. For example, say version 1.1.5 is the current production release and we have a big release coming ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# up. The state of develop is ready for the “next release” and we have decided that this will become version 1.2 (rather than 1.1.6 or 2.0). So we branch ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# off and give the release branch a name reflecting the new version number:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b release-1.2 develop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Switched to a new branch "release-1.2"')]),e._v("\n$ ./bump-version.sh "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Files modified successfully, version bumped to 1.2.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -a -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bumped version number to 1.2"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# [release-1.2 74d9424] Bumped version number to 1.2")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 1 files changed, 1 insertions(+), 1 deletions(-)")]),e._v("\n")])])]),n("ul",[n("li",[e._v("After creating a new branch and switching to it, we bump the version number. Here, bump-version.sh is a fictional shell script that changes some files\nin the working copy to reflect the new version. (This can of course be a manual change—the point being that some files change.) Then, the bumped version\nnumber is committed.")]),e._v(" "),n("li",[e._v("This new branch may exist there for a while, until the release may be rolled out definitely. During that time, bug fixes may be applied in this branch\n(rather than on the develop branch). Adding large new features here is strictly prohibited. They must be merged into develop, and therefore, wait for the\nnext big release.")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Finishing a release branch")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# When the state of the release branch is ready to become a real release, some actions ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# need to be carried out. First, the release branch is merged into ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# master (since every commit on master is a new release by definition, remember). Next, ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# that commit on master must be tagged for easy future reference to ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this historical version. Finally, the changes made on the release branch need to be ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# merged back into develop, so that future releases also contain these ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bug fixes.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to branch 'master'")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff release-1.2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Merge made by recursive.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (Summary of changes)")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -a "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To keep the changes made in the release branch, we need to merge those back into ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# develop, though. In Git:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout develop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to branch 'develop'")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff release-1.2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Merge made by recursive.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (Summary of changes)")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This step may well lead to a merge conflict (probably even, since we have changed ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the version number). If so, fix it and commit.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Now we are really done and the release branch may be removed, since we don’t need it ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# anymore:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -d release-1.2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deleted branch release-1.2 (was ff452fe).")]),e._v("\n")])])]),n("h3",{attrs:{id:"hotfix-branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hotfix-branches"}},[e._v("#")]),e._v(" Hotfix branches")]),e._v(" "),n("ul",[n("li",[e._v("Hotfix branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned.\nThey arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version\nmust be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.")]),e._v(" "),n("li",[e._v("The essence is that work of team members (on the develop branch) can continue, while another person is preparing a quick production fix.")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Creating the hotfix branch")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Hotfix branches are created from the master branch. For example, say version 1.2 is ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the current production release running live and causing troubles due to a severe bug. ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# But changes on develop are yet unstable. We may then branch off a hotfix branch and ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start fixing the problem:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b hotfix-1.2.1 master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Switched to a new branch "hotfix-1.2.1"')]),e._v("\n$ ./bump-version.sh "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v(".1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Files modified successfully, version bumped to 1.2.1.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -a -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Bumped version number to 1.2.1"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# [hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 1 files changed, 1 insertions(+), 1 deletions(-)")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Don’t forget to bump the version number after branching off!")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Then, fix the bug and commit the fix in one or more separate commits.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Fixed severe production problem"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# [hotfix-1.2.1 abbe5d6] Fixed severe production problem")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 5 files changed, 32 insertions(+), 17 deletions(-)")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Finishing a hotfix branch")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# When finished, the bugfix needs to be merged back into master, but also needs to be ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# merged back into develop, in order to safeguard that the bugfix is included in the ")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# next release as well. This is completely similar to how release branches are finished.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# First, update master and tag the release.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to branch 'master'")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff hotfix-1.2.1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Merge made by recursive.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (Summary of changes)")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -a "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v(".1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Next, include the bugfix in develop, too:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout develop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to branch 'develop'")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff hotfix-1.2.1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Merge made by recursive.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# (Summary of changes)")]),e._v("\n")])])]),n("ul",[n("li",[e._v("The one exception to the rule here is that, "),n("strong",[e._v("when a release branch currently exists, the hotfix changes need to be merged into that release\nbranch, instead of develop")]),e._v(". Back-merging the bugfix into the release branch will eventually result in the bugfix being merged into develop too,\nwhen the release branch is finished. (If work in develop immediately requires this bugfix and cannot wait for the release branch to be finished,\nyou may safely merge the bugfix into develop now already as well.)")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Finally, remove the temporary branch:")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -d hotfix-1.2.1\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deleted branch hotfix-1.2.1 (was abbe5d6).")]),e._v("\n")])])]),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("While there is nothing really shocking new to this branching model, the “big picture” figure that this post began with has turned out to be\ntremendously useful in our projects. It forms an elegant mental model that is easy to comprehend and allows team members to develop a shared\nunderstanding of the branching and releasing processes.")]),e._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A successful Git branching model"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);