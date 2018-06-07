/*******************************************************************************
    Copyright (c) 2018, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for vue component methods

import Vue from 'vue';

new Vue({
    data: {
        prop1: '',
        prop3: 0,
        prop4: false
    },
    computed: {
        prop2: function () {
            if (typeof this.foo() == "number") return;  // alarm
        }
    },
    methods: {
        foo: function() {
            return true;
        }
    },
    watch: {
        prop2: function () {
            if (typeof this.foo() == "number") return;  // alarm
        },
        prop3: {
            handler: function () {
                if (typeof this.foo() == "number") return;  // alarm
            }
        },
        prop4: [
            function () {
                if (typeof this.foo() == "number") return;  // alarm
            },
            {
                handler: function () {
                    if (typeof this.foo() == "number") return;  // alarm
                }
            }
        ]
    },
    components: {
        componentA: {  // local component
            methods: {
                foo: function() {
                    if (typeof this.bar() == "number") return;  // alarm
                },
                bar: function() {
                    return true;
                }
            }
        },
        componentB: {  // local component
            components: {
                componentC: {  // local component
                    methods: {
                        foo: function() {
                            if (typeof this.bar() == "number") return;  // alarm
                        },
                        bar: function() {
                            return true;
                        }
                    }
                }
            }
        }
    }
});
