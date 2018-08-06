<template>
    <article class="col-12 content-wrap vacancy clearfix">
        <header class="vacancy-header">
            <h6>{{ vacancy.title }}</h6>
            <div class="dropdown-divider"></div>
            <p class="vacancy-company-contract-type">Contract type: {{ vacancy.contract_type }}</p>
            <p class="vacancy-company-contract-time">Time: {{ vacancy.contract_time }}</p>
            <p class="vacancy-company-location">Location: {{ vacancy.location }}</p>
        </header>
        <div class="dropdown-divider"></div>
        <div class="vacancy-content">
            <div>
                <h5>Description</h5>
                <p>{{ vacancy.description }}</p>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <button class="btn btn-custom-green float-left" @click="back">Back</button>
        <button class="btn btn-custom-green float-right disabled">Respond</button>
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
            this.vacancy = this.jobs[this.$route.params.id];
        }
    }
</script>