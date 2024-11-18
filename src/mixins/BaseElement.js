export default {
    props: {
        name: {
            required: true,
            type: [String, Number],
        },
        onBeforeCreate: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onCreated: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onBeforeMount: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onMounted: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onBeforeUpdate: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onUpdated: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onBeforeUnmount: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
        onUnmounted: {
            required: false,
            type: [Function],
            default: null,
            private: true,
        },
    },
    beforeCreate() {
        this.$emit("beforeCreate");
    },
    created() {
        this.$emit("created");
    },
    beforeMount() {
        this.$emit("beforeMount");
    },
    mounted() {
        this.$emit("mounted");
    },
    beforeUpdate() {
        this.$emit("beforeUpdate");
    },
    updated() {
        this.$emit("updated");
    },
    beforeUnmount() {
        this.$emit("beforeUnmount");
    },
    unmounted() {
        this.$emit("unmounted");
    },
}