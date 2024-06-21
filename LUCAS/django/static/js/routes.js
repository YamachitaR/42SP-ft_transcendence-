import { renderPlayGame } from './views/playGameViews.js';
import { initPlayGame } from './dom/playGameDom.js';
import renderLogin from './views/loginViews.js';
import renderRegister from './views/registerViews.js';
import { domBtnLogin, domBtnCad, domBtn42 } from './dom/loginDom.js';
import { domBtnRegister, domBtnBackHome } from './dom/registerDom.js';
import { logout } from './dom/logoutDom.js';
import  renderProfileUser  from './views/userProfileViews.js';
import { renderUserInfo } from './dom/userProfileDom.js';

const routes = {
    '/login/': {
        template: renderLogin(),
        init: () => {
            domBtnLogin();
            domBtnCad();
            domBtn42();
            console.log('Login carregado');
        }
    },
    '/register/': {
        template: renderRegister(),
        init: () => {
            domBtnRegister();
            domBtnBackHome();
            console.log('Register carregado');
        }
    },
    '/logout/': {
        template: '',
        init: () => {
            logout();
        }
    },
	'/profile/': {
        template: renderProfileUser(),
        init: () => {
            renderUserInfo();
        }
    },
	'/playGame/': {
        template: renderPlayGame(),
        init: () => {
            initPlayGame();
        }
    },
    '/': {
        template: '<h1>Welcome to the Main Page</h1>',
        init: () => {
            console.log('Página principal carregada');
        }
    }
};

export default routes;