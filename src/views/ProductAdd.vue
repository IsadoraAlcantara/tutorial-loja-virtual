<script setup>
import { useCategoryStore } from '@/stores/category'
import { onMounted, ref } from 'vue'
import ModalAddCategory from '../components/ModalAddCategory.vue'
const categoryStore = useCategoryStore()

const showModal = ref(false)
const previewImage = ref('')
const file = ref(null)

const uploadImage = (e) => {
  file.value = e.target.files[0]
  previewImage.value = URL.createObjectURL(e.target.files[0])
}

onMounted(async () => {
    await categoryStore.getCategories()
})
</script>
<template>
  <h1>Adicionar Produto</h1>
  <form @submit.prevent="" class="form">
    <div class="row-form">
      <label for="title">Título</label>
      <input type="text" id="title" />
    </div>
    <div class="row-form">
      <label for="description">Descrição</label>
      <input type="text" id="description" />
    </div>
    <div class="row-from">
      <label for="category">Categoria</label>
      <select id="category">
        <option value="" disabled>Selecione uma categoria</option>
      </select>
      <button class="btn-icon" @click="showModal = true">+</button>
    </div>
    <div class="row-form">
      <label for="image">Imagem</label>
      <div class="row">
        <input type="file" id="image" @change="uploadImage" />
        <img v-if="previewImage" :src="previewImage" class="previewImage" alt="preview" />
      </div>
    </div>
    <div class="row-form">
      <label for="price">Preço</label>
      <input type="number" id="price" />
    </div>
    <div class="row-form">
      <label for="stock">Estoque</label>
      <input type="number" id="stock" />
    </div>
  </form>
  <ModalAddCategory v-if="showModal" @close="showModal = false" />
</template>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;
}

.row-form {
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  max-width: 400px;
}

.form button.btn-send {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  width: 200px;
}

.form button.btn-icon {
  background-color: #0a2668;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 0.3rem;
  font-size: 1rem;
  cursor: pointer;
}

.previewImage {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #0a2668;
  padding: 0.1rem;
}
</style>
