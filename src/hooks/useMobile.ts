import {onMounted, onUnmounted, ref} from "vue";

const useMobile = () => {
    const isMobile = ref(false)

    const handleResize = () => {
        isMobile.value = window.innerWidth < 768
    };

    onMounted(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })

    return isMobile
}

export default useMobile