import { defineComponent } from 'vue';

export default defineComponent({
    name: "BaseForm",

    props: {
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },
        
        loading: {
            required: false,
            type: Boolean,
            default: false
        },
    }
});