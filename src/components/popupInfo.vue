<template>
  <div class="modal popup">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" aria-label="Close" @click="hideModal"></button>
        </div>
        <slot>

        </slot>
        <div class="modal-footer justify-content-start ">
          <p class="fs-4">Дополнительная информация</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'popup-info',
    methods: {
        hideModal() {
            this.$emit('hideModal')
        }
    }
}
</script>

<style lang="scss" scoped>
.popup {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
}
</style>