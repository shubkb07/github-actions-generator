import { createStore } from 'vuex';

export default createStore({
  state: {
    workflow: {
      name: 'CI',
      on: 'push',
      jobs: {},
    },
    elements: [], // Canvas elements
  },
  mutations: {
    SET_WORKFLOW_NAME(state, name) {
      state.workflow.name = name;
    },
    SET_WORKFLOW_ON(state, on) {
      state.workflow.on = on;
    },
    ADD_JOB(state, job) {
      state.workflow.jobs[job.id] = job.details;
    },
    ADD_ELEMENT(state, element) {
      state.elements.push(element);
    },
    UPDATE_ELEMENT_POSITION(state, { id, x, y }) {
      const element = state.elements.find(el => el.id === id);
      if (element) {
        element.x = x;
        element.y = y;
      }
    },
    REMOVE_ELEMENT(state, id) {
      state.elements = state.elements.filter(el => el.id !== id);
    },
  },
  actions: {
    setWorkflowName({ commit }, name) {
      commit('SET_WORKFLOW_NAME', name);
    },
    setWorkflowOn({ commit }, on) {
      commit('SET_WORKFLOW_ON', on);
    },
    addJob({ commit }, job) {
      commit('ADD_JOB', job);
    },
    addElement({ commit }, element) {
      commit('ADD_ELEMENT', element);
    },
    updateElementPosition({ commit }, payload) {
      commit('UPDATE_ELEMENT_POSITION', payload);
    },
    removeElement({ commit }, id) {
      commit('REMOVE_ELEMENT', id);
    },
  },
  getters: {
    getWorkflow: state => state.workflow,
    getElements: state => state.elements,
  },
  modules: {},
});
