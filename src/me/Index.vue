<template>
  <KView class="page toast js_show">
    <p style="margin-top:160px;text-align:center">这个..小王也在努力正在开发中...</p>
  </KView>
</template>

<script>

export default {
    data() {
        return {
            successTips: false,
            loadingToast: false,
        }
    },
    methods: {
        successShow() {
            this.successTips = true
        },
        loadingShow() {
            this.loadingToast = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.loadingToast = false
            }, 1000)
        }

    }
}
</script>
