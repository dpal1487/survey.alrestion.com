<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import ProjectLinkListItem from "./ProjectLinkListItem.vue";
import SupplierListModel from "./Modal/SupplierListModel.vue";
import CopyLinkButton from "../../../Components/CopyLinkButton.vue";
import utils from "../../../utils";
export default defineComponent({

    props: ["links"],
    data() {
        return {
            isLoading: false,
            isFullPage: true,
            isModalOpen: false,
            activeId: null,
        };
    },
    components: {
        Link,
        Loading,
        SupplierListModel,
        CopyLinkButton,
        ProjectLinkListItem,
    },
    methods: {
        async confirmDelete(index) {
            await utils.deleteIndexDialog(
                route("mapping.destroy", this.links[index].id),
                this.links,
                index
            );
        },
        showSupplierListModal(id) {
            this.isModalOpen = true;
            this.activeId = id;
        },
        hideSupplierListModal() {
            this.isModalOpen = false;
        },


    },
    created() { },
});
</script>
<template>
    <loading :active="isLoading" :can-cancel="true" :is-full-page="isFullPage"></loading>
    <SupplierListModel :show="isModalOpen" @hidemodal="hideSupplierListModal" :id="activeId" />
    <div class="card mb-5" v-for="(project_link, index) in links" :key="index">
        <ProjectLinkListItem :index="index" :project_link="project_link" @onSupplier="showSupplierListModal" @onDelete="confirmDelete" />
    </div>
</template>
