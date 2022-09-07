// {
//   id: 0,
//   name: '',
//   icon: '',
//   gif: '',
//   tecFocus: '',
//   listTec: [''],
//   projectGroup: false,
//   infGroup: [''],
//   repository: '',
//   description: '',
// },

import iconDOM from '../images/jsDom.png'
import gifDOM from '../images/giphy.gif'

const projectList = [
  {
    id: 'PixelsArt',
    name: 'Project pixels art',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'DOM',
    listTec: ['html', 'js', 'DOM'],
    projectGroup: false,
    infGroup: [''],
    repository: 'ajust',
    description:
      'página web que contém uma paleta de cores que poderá ser utilizada para criar desenhos em pixels'
  },
  {
    id: 'ShoppingCart',
    name: 'Shopping cart',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'JSON',
    listTec: ['html', 'js', 'DOM', 'JSON'],
    projectGroup: false,
    infGroup: [''],
    repository: 'ajust',
    description: 'Página web de E-commerce, projeto focado na utilização de API.'
  }
]

export default projectList