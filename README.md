# Professional Docs

Project to manage and generate resume PDFs from html files.

- [Setup](#setup)
- [How to Generate PDFs](#usage)
- [Commit Convention Rules](#commit)
- [Reference](#reference)


## <a id="setup"></a> Setup

Installation setup.

1. Install nodejs according to **package.json** engine requirements.
1. Install dependencies by running: `npm i`.


## <a id="usage"></a> How to Generate PDFs

Make changes to **resume.html**, partial files, and dependent JSON data files located in `./data` & `./partials`. Then, run `npm build` command to generate PDFs based on above file.

You can see all generated PDFs in the `./dist` directory.


## <a id="commit"></a> Commit Convention Rules

Structure of commit messages
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example commit message:
```
git commit -m "feat(component): add ix-btn component"
git commit -m "fix(util): fix xhr logic issue with network.save"
git commit -m "style: add commit convention type/scope rules"
```

Example breaking change commit message:
```
git commit -m "feat(component): change api for ix-btn component

BREAKING CHANGE: `extends` key in config file is now used for extending other config files"
```

### Major, Minor, Patch

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
1. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
1. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning).

### Types

Commit messages must be one of the following:

    build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    docs: Documentation only changes
    feat: A new feature
    fix: A bug fix
    perf: A code change that improves performance
    refactor: A code change that neither fixes a bug nor adds a feature
    style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    test: Adding missing tests or correcting existing tests


## <a id="reference"></a> Reference
1. [conventional commit website](https://www.conventionalcommits.org/en/v1.0.0/)
1. [standard-version](https://github.com/conventional-changelog/standard-version#readme)
1. [changelog config](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md)
