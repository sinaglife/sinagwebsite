
const linksObj = {
  ["espiritualidad"]: "/blog/the-rocks",
  ["kokedama"]: "/blog/my-second-post",
  ["cuidado de tu ser"]: "/blog/leo",
  ["mala"]: "/blog/posttest",
  ["guia de tallas"]: "/tallas"
}

export const getLinkTo = (param) => (
  linksObj[param]
)