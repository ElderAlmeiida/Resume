import Tree from './tree.js'

const menu = [


{id:1,name:`Formação`,parent:null},
{id:2,name:`<h2 id="list-content">Ensino Medio</h2> <h4 id="list-content">Colegio Status - 2015</h4> `,parent:1},
{id:3,name:`<h2 id="list-content">Ensino Superior</h2> <h4 id="list-content">Sistemas de informação</h4> <p>Rede Uniftc - em formação </p>`,parent:1},
{id:4,name:` Experiência`,parent:null},
{id:5,name:`<h4>Web Desing</h4> <p>Andrade Multicompras 2019-2022</p> <br> <h4>Vendedor</h4> <p>Andrade Multicompras 2018-2022</p>`,parent:4},
{id:6,name:`Cursos`,parent:null},
{id:7,name:`<h4 id="list-content" >Montagem e Manutenção</h3> <p>Microlins</p> `,parent:6}

]

Tree(menu)