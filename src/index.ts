import '../assets/style.css';
import{obtenerChiste,obtenerUsuarios} from './config';
import * as CRUD from './config/http-provider-crud.component';
import{init as initChistes} from './components/chistes-pages.component';
import{init as initUsers} from './components/usuarios-page.component';
initChistes();
initUsers();
obtenerChiste().then(console.log);
obtenerUsuarios().then(console.log);
CRUD.getUser(1).then(console.log);
CRUD.crearUsuario({
    name:'Brad',
    job:'Ingeniero de Sistemas'
}).then(console.log);
CRUD.actualizarUsuario(1,{
    name:'Mía',
    job:'Cantante-Diseñadora-Ilustradora'
}).then(console.log);
CRUD.borrarUsuario(2).then(console.log)