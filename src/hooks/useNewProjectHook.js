import { useRef, useState } from "react"

const useNewProjectHook = (addProject) => {
   const [status, setStatus] = useState(false)
   const dialogRef = useRef()
   const titleRef = useRef('')
   const dateRef = useRef('')
   const descriptionRef = useRef('')

   const handleSave = () => {
      const title = titleRef.current.value
      const date = dateRef.current.value
      const description = descriptionRef.current.value
      if (title.trim() == '' || date.trim() == '' || description.trim() == '') {
         setStatus(false)
         dialogRef.current.open()
         return null
      }

      addProject({ title, date, description })
      titleRef.current.value = ''
      dateRef.current.value = ''
      descriptionRef.current.value = ''
      setStatus(true)
      dialogRef.current.open()
   }

   return { handleSave, titleRef, dateRef, descriptionRef, dialogRef, status }
}

export default useNewProjectHook