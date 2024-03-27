/* global module */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-dangle": ["error", "only-multiline"],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "curly": ["error", "multi-line", "consistent"],
        "eol-last": "error",
        "func-call-spacing": "error",
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "indent": ["error", 4],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-extra-semi": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-redeclare": ["error", {builtinGlobals: false}],
        "no-trailing-spaces": "error",
        "no-unused-vars": "off",
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", {consistent: true, multiline: true}],
        "object-curly-spacing": ["error", "never"],
        "operator-linebreak": ["error", "after"],
        "quote-props": ["error", "consistent-as-needed"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-curly-spacing": ["error", "never"],
        "unicode-bom": "error",
    },
    globals: {
        //script.js
        gradioApp: "readonly",
        executeCallbacks: "readonly",
        onAfterUiUpdate: "readonly",
        onOptionsChanged: "readonly",
        onUiLoaded: "readonly",
        onUiUpdate: "readonly",
        uiCurrentTab: "writable",
        uiElementInSight: "readonly",
        uiElementIsVisible: "readonly",
        //ui.js
        opts: "writable",
        all_gallery_buttons: "readonly",
        selected_gallery_button: "readonly",
        selected_gallery_index: "readonly",
        switch_to_txt2img: "readonly",
        switch_to_img2img_tab: "readonly",
        switch_to_img2img: "readonly",
        switch_to_sketch: "readonly",
        switch_to_inpaint: "readonly",
        switch_to_inpaint_sketch: "readonly",
        switch_to_extras: "readonly",
        get_tab_index: "readonly",
        create_submit_args: "readonly",
        restart_reload: "readonly",
        updateInput: "readonly",
        onEdit: "readonly",
        //extraNetworks.js
        requestGet: "readonly",
        popup: "readonly",
        // from python
        localization: "readonly",
        // progrssbar.js
        randomId: "readonly",
        requestProgress: "readonly",
        // imageviewer.js
        modalPrevImage: "readonly",
        modalNextImage: "readonly",
        // localStorage.js
        localSet: "readonly",
        localGet: "readonly",
        localRemove: "readonly",
        // resizeHandle.js
        setupResizeHandle: "writable"
    }
};
