from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "bioset_search": "./js/bioset/search/index.js",
                "bioset_deposit_form": "./js/bioset/forms/index.js",
            },
            dependencies={},
            devDependencies={},
            aliases={
                "@js/bioset": "./js/bioset"
            },
        )
    },
)
