## Git workflow

We use Gitflow.

Production code goes in `master`.
Development code goes in `develop`.
New features should be in feature branches  `feature/[feature-name]`.
Hotfixes should be in `hotfix/[bug-name]`.

#### Commits

Commits should be named `[verb] feature/bug`.

Some examples:
```
Fix video playback issue in Safari
Add new icon for settings
Refactor authentication logic
```

#### New feature process

Checkout and ensure develop is up-to-date
`git checkout develop` && `git pull --rebase`

Create a new feature branch
`git checkout -b feature/new-amazing-feature`

#### Keeping the branch up-to-date
If develop is updated while feature branch is being worked on, rebase from the current develop branch.

1. `git checkout feature/new-amazing-feature`

2. `git pull --rebase origin develop`

Force push the feature branch back to GitHub (once all conflicts are resolved and tests run successfully).
`git push --force`

#### When feature is complete
Once the feature branch is complete and has been rebased onto develop, create a Pull Request (PR) in GitHub and have code reviewed.

Once review is complete, merge into `develop` there should be no conflicts due to rebasing.

## Deploying

#### Deploying development & staging

To deploy a feature or bug branch to development or staging push your branch to either `deploy/development` or `deploy/staging`. e.g.

```
# To development
git checkout feature/my-amazing-feature
git push origin feature/my-amazing-feature:deploy/development
```

```
# To staging
git checkout feature/my-amazing-feature
git push origin feature/my-amazing-feature:deploy/staging
```

You do not need to push your branch changes to GitHub before running this command.

#### Deploying to production

Once you have created a PR in GitHub and your branch has been merged into `master` you can push master to `deploy/production`. e.g.

```
# To production
git checkout master
git fetch && git pull --rebase
git push origin master:deploy/production
```

Only ever push to `deploy/production` from `master`. Never `--force` push to `deploy/production`, if you have to something is wrong and needs to be fixed first.
