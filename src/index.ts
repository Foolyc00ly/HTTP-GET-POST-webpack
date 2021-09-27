import '../assets/style.css';
import{obtenerChiste,obtenerUsuarios,getUser as CRUD} from './config';
import{init as initChistes} from './components/chistes-pages.component';
import{init as initUsers} from './components/usuarios-page.component';
initChistes();
initUsers();
obtenerChiste().then(console.log)
obtenerUsuarios().then(console.log)
CRUD(1).then(console.log)