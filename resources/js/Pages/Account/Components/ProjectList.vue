<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
    props: ["projects", "status", 'action'],
    data() {
        return {
            isLoading: false,
            fullPage: true
        };
    },
    components: {
        Link,
        Head,
    },

});
</script>
<template>
    <tr v-for="(project, index) in projects" :key="index">
        <td>
            <!--begin::Title-->
            <Link :href="`/project/${project.id}`" class="text-gray-800 text-hover-primary fs-5 fw-bold mb-1">{{
                project.project_id }}</Link>
            <!--end::Title-->
        </td>
        <td>{{ project.project_name }}</td>
        <td v-if="!route().current('client.projects')">{{ project.client.display_name }}</td>
        <td>{{ project.project_type }}</td>
        <!-- <td>{{ project }}</td> -->
        <td>{{ project?.report?.total_click }}</td>
        <td>{{ project?.report?.total_complete }}</td>
        <td>{{ project?.report?.total_quotafull }}</td>
        <td>{{ project?.report?.total_terminate }}</td>
        <td>{{ project?.report?.total_incomplete }}</td>
        <td>{{ project?.report?.total_ir }} </td>
        <td>{{ project?.created_at }}</td>
        <td>
            <span class="badge bg-success">{{ project.status }}</span>
        </td>
    </tr>
</template>