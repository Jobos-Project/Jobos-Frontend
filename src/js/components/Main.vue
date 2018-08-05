<template>
    <div>
        <form @submit.prevent="search" class="form-group form-inline content-wrap">
            <input type="text" class="form-control col-8 offset-1" placeholder="Search...">
            <input type="submit" class="btn btn-custom-green col-2 disabled" value="Search">
        </form>
        <div>
            <article v-for="vacancy in jobs" class="vacancy-item col-12">
                <header>
                    <router-link v-bind:to="vacancy.title" class="vacancy-title" data-toggle="modal" data-target="#exampleModalLong">{{ vacancy.title }}</router-link>
                    <p class="vacancy-company-name">Company: {{ vacancy.company }}</p>
                    <p class="vacancy-company-salary">Salary: {{ vacancy.salary }}$</p>
                    <a v-bind:href="vacancy.url" class="vacancy-company-original-link">Original</a>
                </header>
            </article>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Main",
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                jobs: state => state.jobs.vacancies
            })
        },
        methods: {
            search() {
                console.log('Поиск!');
            }
        }
    }
</script>