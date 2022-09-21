import Tree from './tree.js'

const menu = [


{id:1,name:`Formação`,parent:null},
{id:2,name:"Ensino-Medio",parent:1},
{id:3,name:"Ensino-Superior",parent:1},
{id:4,name:` Experiência`,parent:null},
{id:5,name:"experiencia1",parent:4},
{id:6,name:`Cursos`,parent:null},
{id:7,name:"cursus1",parent:6}

]

Tree(menu)