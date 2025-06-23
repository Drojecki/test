function project(setModalId) {
  const singleProject = document.getElementsByClassName('projekt');
  
  Array.from(singleProject).forEach(element => {
      element.addEventListener('click', () => {
          const id = element.id;
          setModalId(id);
      });
  });
}

export default project;
