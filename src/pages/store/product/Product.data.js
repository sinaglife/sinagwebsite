

export const getLinkTo = (categoryArray) => {

  if(categoryArray.includes("espiritualidad")){
    return {
      title: "Espiritualidad",
      url: "/blog/espiritualidad"
    }
  }else if(categoryArray.includes("kokedama")){
    return {
      title: "kokedama",
      url: "/blog/kokedama"
    }
  }else if(categoryArray.includes("cuidado de tu ser")){
    return {
      title: "Cuidado de tu ser",
      url: "/blog/roller-facial-natural"
    }
  }else if(categoryArray.includes("mala")){
    return {
      title: "Japamala",
      url: "/blog/japamala"
    }
  }else if(categoryArray.includes("codigos sagrados")){
    return {
      title: "Codigos sagrados",
      url: "/blog/codigos-sagrados"
    }
  }else {
    if(!categoryArray.includes("complementos")){
      return {
        title: "Guia de tallas",
        url: "/tallas"
      }
    }else{
      return null
    }
  }

}
