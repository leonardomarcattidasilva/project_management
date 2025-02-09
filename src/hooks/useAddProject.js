import { useRef } from "react";

const useAddProject = (onAddNewProject) => {
   const titleRef = useRef('')
   const descriptionRef = useRef('')
   const deadlineRef = useRef('')
   const modalRef = useRef()
   const handleSave = () => {
      const dataForm = {
         title: titleRef.current.value,
         description: descriptionRef.current.value,
         deadline: deadlineRef.current.value
      }

      if (dataForm.title.trim() == '' || dataForm.description.trim() == '' || dataForm.deadline.trim() == '') {
         modalRef.current.open()
         return null
      }

      onAddNewProject(dataForm)
      alert('Project Added!')

   }

   return { titleRef, descriptionRef, deadlineRef, modalRef, handleSave }
}

export default useAddProject