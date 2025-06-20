const formattedDate = (date) => {
   const newDate = new Date(date).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
   })

   return newDate
}

export { formattedDate }