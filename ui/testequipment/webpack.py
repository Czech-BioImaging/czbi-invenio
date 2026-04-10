from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "testequipment_search": "./js/testequipment/search/index.js",
                "testequipment_deposit_form": "./js/testequipment/forms/index.js",
            },
            dependencies={},
            devDependencies={},
            aliases={
                "@js/testequipment": "./js/testequipment"
            },
        )
    },
)
