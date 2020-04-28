<template>
    <div>
<form action="">
    id <input type="number" min="1" name="id">
    <br/>
    Название <input type="text" name="name">
    <br/>
    Год выпуска <input type="number" name="yearOfRelease">
    <br/>
    <input type="submit" value="Сохрнить">
</form>
    </div>
</template>

<script>
    export default {
        name:"addFilm"
    }
</script>

<style lang="scss" scoped>

</style>