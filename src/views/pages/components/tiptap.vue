<template>
    <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { EmojiPicker } from '@syncfusion/ej2-vue-richtexteditor';

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit,
                EmojiPicker
            ],
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>