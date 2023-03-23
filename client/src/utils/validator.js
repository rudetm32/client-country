
export default function validar({idCountry, nombre, dificultad, temporada, duracion}) {
  let errors={};

  if(idCountry.length === 0)
  errors.idCountry = `Debe ingresar al menos un país`;
  
  if(dificultad <= 0 || dificultad > 5) 
  errors.dificultad = `Debe selecionar un número entre  1 y 5`;
  
  if(!nombre || nombre==="" || nombre.length < 5)
  errors.nombre = `Nombre es requerido. Debe contener  al  menos 5 caracteres`;
  
  if(!/^([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/.test(duracion))
  errors.duracion = `Ingrese un formato válido: 00:00`;
  
  if(temporada !== "verano" && temporada !=="primavera"  && temporada !=="otoño" && temporada !=="invierno")
  errors.temporada = "Incluya una temporada válida: primavera, verano, otoño, invierno.";

return errors
}
