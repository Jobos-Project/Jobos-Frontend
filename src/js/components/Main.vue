<template>
    <div>
        <form @submit.prevent class="form-group form-inline content-wrap">
            <div class="btn-group col-12">
                <input type="text" class="form-control col-10 offset-1" v-model="settings.search" placeholder="Search...">
                <button type="button" class="btn btn-custom-green dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" @click.stop="settings.salary = !settings.salary" style="cursor: pointer;">
                        <input type="checkbox" id="salary" class="custom-checkbox" v-model="settings.salary"> only with salary
                    </li>
                </ul>
            </div>
        </form>
        <div>
            <article v-for="(vacancy, index) in sortJobs()" class="vacancy-item col-12">
                <header>
                    <router-link v-bind:to="`/${index}`" class="vacancy-title">{{ vacancy.title }}</router-link>
                    <p class="vacancy-company-name">Company: {{ vacancy.company }}</p>
                    <p class="vacancy-company-salary" v-if="parseFloat(vacancy.salary)">Salary: {{ vacancy.salary }}$</p>
                    <p class="vacancy-company-salary" v-else >Salary: uncertain</p>
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
                settings: {
                    search: '',
                    salary: false
                }
            }
        },
        computed: {
            ...mapState({
                jobs: state => state.jobs.vacancies
            })
        },
        methods: {
            search() {
                return this.jobs.filter(job => {
                    return job.title.toLowerCase().includes(this.settings.search.toLowerCase());
                });
            },
            sortBySalary(array = null) {
                if(array) {
                    return array.filter(el => !!(parseFloat(el.salary)));
                }
            },
            sortJobs() {
                if(this.settings.salary) {
                    return this.sortBySalary(this.search());
                }  else {
                    if(this.settings.search.length > 2) {
                        return this.search();
                    } else {
                        if(this.settings.salary) {
                            return this.sortBySalary(this.jobs);
                        } else {
                            return this.jobs;
                        }
                    }
                }
            }
        },
    }
</script>