# Mobile Practice web-app

## Scripts

| Script                |Purpose                                           |
|-----------------------|--------------------------------------------------|
|`yarn start`           |Starts the development environment                |
|`yarn storybook`       |Starts the component development environment      |
|`yarn build`           |Builds the production application                 |
|`yarn create-user`     |Creates a user and displays credentials in console|
|`yarn test-automation` |Runs UI automation tests using Puppeteer          |

## Releasing

First, please ensure you have installed `git-flow-avh`.

If this is your first release, start by running:
```bash
$ git flow init

# Options
Which branch should be used for bringing forth production releases?
Branch name for production releases: [] master

Which branch should be used for integration of the "next release"?
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? [] v
```

Then, run (with the desired release version):
```bash
$ git flow release start [x.x.x]
```

Next, open your `package.json` and change the version. Save that, and commit it with the message "Bump version".

Finally, run `git flow release finish`.
- Accept the first commit message.
- Use `Release v[x.x.x]` for the second.
- Accept the third commit message.

Finally, run:
```bash
$ git push origin master develop
```

## Build the Electron app (Windows)

Open the `electron` directory, place the certificate in that directory (with the extension `.pfx`), and then open PowerShell (to that directory).

Run the below commands in PowerShell.

***Important**: You must use single quotes if your password contains `` ` `` or `$`, you must use single quotes (`'`) when setting your environment variables.*

```PowerShell
# \mobilep-web\electron

# Set environment variables
$env:CSC_KEY_PASSWORD='password'
$env:CSC_LINK='.\certificate-name.pfx'

# With Yarn
yarn
yarn build-win

# Or with NPM
npm install
npm run build-win
```

## Project documentation

This project is based on Facebook's CRA boilerplate: [CRA documentation](docs/CRA.md).
Please see the contribution guide for project standards: [Contributing](docs/CONTRIBUTING.md).
