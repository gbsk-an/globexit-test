<template>
    <b-card class="card-item">
        <b-card-text class="fs-4 fw-weight-bold">
            {{user.name}}        
        </b-card-text>
        <b-card-text class="text-secondary">
            <b-icon-phone />
            {{user.phone}}       
        </b-card-text>
        <b-card-text class="text-secondary">
            <b-icon-envelope />
            <span class="text-decoration-underline ms-2">{{user.email}}</span>     
        </b-card-text>
        <b-button @click="showInfo" variant="primary">Show info</b-button>
    </b-card>
    <popupInfo 
        v-if="isInfoVisible"
        @hideModal="hideInfoPopup"
    >
    <div class="modal-body">
        <h2 class="modal-title">{{user.name}}</h2>
        <p>Номер: {{user.phone}}</p>
        <p>Почта: {{user.email}}</p>
        <p>Дата Приема: {{user.hire_date}}</p>
        <p>Должность: {{user.position_name}}</p>
        <p>Подразделение: {{user.department}}</p>
    </div>
    </popupInfo>
</template>

<script>
import popupInfo from '@/components/popupInfo.vue'
export default {
    name: 'card-item',
    components: {
        popupInfo
    },
    props: {
        user: {
            type: Object, 
            required: true
        }
    },
    data(){
        return {
            isInfoVisible: false
        }
    },
    methods: {
        showInfo() {
            this.isInfoVisible = true
        },
        hideInfoPopup() {
            this.isInfoVisible = false
        }
    },
}
</script>

<style lang="scss" scoped>
.card-item {
    width: 350px;
}
</style>