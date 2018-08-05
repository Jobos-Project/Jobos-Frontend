<template>
    <article class="col-12 content-wrap vacancy clearfix">
        <header class="vacancy-header">
            <h6>{{ vacancy.title }}</h6>
            <p>Тип контракта: {{ vacancy.contract_type }}</p>
            <p>Время: {{ vacancy.contract_time }}</p>
            <p>Локация: {{ vacancy.location }}</p>
        </header>
        <div class="dropdown-divider"></div>
        <div class="vacancy-content">
            <div>
                <h5>Описание</h5>
                <p>{{ vacancy.description }}</p>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <button class="btn btn-custom-green float-left" @click="back">Назад</button>
        <button class="btn btn-custom-green float-right disabled">Откликнуться</button>
    </article>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Vacancy",
        data() {
            return {
                vacancy: {}
            }
        },
        methods: {
            back() {
                this.$router.push('/');
            },
        },
        computed: {
            ...mapState({
                jobs: state => state.jobs.vacancies
            })
        },
        created() {
            this.vacancy = this.jobs.find(el => el.title === this.$route.params.id);
        }
    }
</script>