<template>
  <textarea id="editor1" name="editor1"></textarea>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  name: "CkEditor",
  props: ["content"],
  setup(props, { emit }) {
    const content = ref(props.content);
    let ckEditor;
    onMounted(() => {
      console.log("Mounted", content);
      ckEditor = window.CKEDITOR.replace("editor1");
      ckEditor.setData(content.value);
      ckEditor.on("change", () => {
        emit("sendContent", ckEditor.getData());
      });
    });
    watch(content, () => {
      console.log("Watch", content);
      if (content.value != ckEditor.getData()) {
        ckEditor.setData(content.value);
      }
    });
  },
};
</script>

<style></style>
