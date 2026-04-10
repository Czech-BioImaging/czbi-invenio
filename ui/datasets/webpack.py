from invenio_assets.webpack import WebpackThemeBundle

theme = WebpackThemeBundle(
    __name__,
    ".",
    default="semantic-ui",
    themes={
        "semantic-ui": dict(
            entry={
                "datasets_search": "./js/datasets/search/index.js",
                "datasets_deposit_form": "./js/datasets/forms/index.js",
#                "datasets_record_detail": "./js/datasets/details/index.js"
            },
            dependencies={
                "@ufchjh/czbi-ui_lib": "0.0.5"
            },
            devDependencies={},
            aliases={
                "@js/datasets": "./js/datasets",
                "@oarepo/ui-theme": "./js/oarepo_ui/forms/index.js",
            },
        )
    },
)
