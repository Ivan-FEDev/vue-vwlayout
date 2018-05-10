<template>
    <div>
        <div class="span">
            <span>{{ value }}</span>
        </div>
        <input class="field" v-model="value" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value: ""
            };
        }
    };
</script>

<style scoped>
    .span {
        width: 50px;
        font-size: 24px;
        color: red;
        background: burlywood;
    }

    .field {
        border: 1px solid #666;
        font-size: 20px;
    }

</style>
