import { 
    defineComponent, onBeforeMount, 
    onMounted, onBeforeUpdate, onUpdated, 
    onBeforeUnmount, onUnmounted 
} from 'vue';

export default defineComponent({
    name: "BaseElement",

    data(){
        return {
            roundedStyles: {
                none: "",
                default: "rounded",
                md: "rounded-md",
                full: "rounded-full"   
            } as Record<string, string>
        }
    },

    props: {
        name: {
            required: false,
            type: [String, Number],
        },
        onBeforeCreate: {
            required: false,
            type: Function,
            default: null,
        },
        onCreated: {
            required: false,
            type: Function,
            default: null,
        },
        onBeforeMount: {
            required: false,
            type: Function,
            default: null,
        },
        onMounted: {
            required: false,
            type: Function,
            default: null,
        },
        onBeforeUpdate: {
            required: false,
            type: Function,
            default: null,
        },
        onUpdated: {
            required: false,
            type: Function,
            default: null,
        },
        onBeforeUnmount: {
            required: false,
            type: Function,
            default: null,
        },
        onUnmounted: {
            required: false,
            type: Function,
            default: null,
        },
    },

    setup(props, { emit }) {
        const emitLifecycleEvent = (eventName: string, callback: Function | null) => {
            if (callback) callback();
            emit(eventName);
        };

        //onBeforeCreate(() => emitLifecycleEvent("beforeCreate", props.onBeforeCreate));
        //onCreated(() => emitLifecycleEvent("created", props.onCreated));
        onBeforeMount(() => emitLifecycleEvent("beforeMount", props.onBeforeMount));
        onMounted(() => emitLifecycleEvent("mounted", props.onMounted));
        onBeforeUpdate(() => emitLifecycleEvent("beforeUpdate", props.onBeforeUpdate));
        onUpdated(() => emitLifecycleEvent("updated", props.onUpdated));
        onBeforeUnmount(() => emitLifecycleEvent("beforeUnmount", props.onBeforeUnmount));
        onUnmounted(() => emitLifecycleEvent("unmounted", props.onUnmounted));

        return {};
    },
});
