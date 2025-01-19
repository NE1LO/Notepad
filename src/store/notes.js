import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
  }),


  actions: {
    addNote(note) {
      this.notes.push(note);
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },

  getters: {
    totalNotes: (state) => state.notes.length
  },
});