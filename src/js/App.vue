<template>
    <main id="main" class="col-12">
        <nav class="navbar navbar-expand navbar-dark bg-custom-green row">
            <a id="user-greeting" class="col-4 offset-2">Jobos</a>
        </nav>
        <div class="col-8 offset-2">
            <transition name="fade" mode="out-in" appear>
                <router-view class="col-12"></router-view>
            </transition>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'App',
    }
</script>