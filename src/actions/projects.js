export const addProject = (project) => {
  return {
    type: "ADD_PROJECT",
    project
  }
}

export const removeProject = (id) => {
  return {
    type: "REMOVE_PROJECT",
    id
  }
}

export const updateProject = (id, newData) => {
  return {
    type: 'UPDATE_PROJECT',
    id,
    newData
  }
}
