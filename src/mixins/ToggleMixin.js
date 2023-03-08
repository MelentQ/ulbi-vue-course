export default {
    props: {
        isShown: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}