import Router from './modules/router/router.js';
import Todo from "./components/todo/todo.component.js";
import Example from "./components/example/example.component.js";
import Item from "./components/todo/item/item.component.js";
import NotFound from "./components/notFound/notFound.component.js";
import Main from "./components/main/main.component.js";

const router = new Router('.app');

router
    .use('/', Main)
    .use('/example', Example)
    .use('/todo', Todo)
    .use('/item/:index', Item)
    .use('/404', NotFound)
    .start();

window.router = router;


