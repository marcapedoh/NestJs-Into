'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' :
                                            'id="xs-controllers-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' :
                                        'id="xs-injectables-links-module-AppModule-4ed4972b0c5dc78e1480fdf4a529eb899f1697684857e118dfe2aa6b87bdbc3532c9e6e30210c29973a021b12c7db3c0bc26cf39b2960a579569e75e20691466"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' :
                                            'id="xs-controllers-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' :
                                        'id="xs-injectables-links-module-AuthModule-f229be3b51b15aeee1c466721c72e9bbd834e7a9151e04e32e492973bc48fb740b981992af857f810a0d09ce7a30ea0a00743c89dbbf5583d1d4d7cd59c957e3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' : 'data-bs-target="#xs-controllers-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' :
                                            'id="xs-controllers-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' : 'data-bs-target="#xs-injectables-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' :
                                        'id="xs-injectables-links-module-PostModule-971f80e9501febb9f96d585446136e28b17f087019eebbee199a613e9e6cf02eec5d747454091b9bc7dfdb41a89b8d95cf3dcd33b253bb3bbfbed7334b510dfa"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' :
                                            'id="xs-controllers-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' :
                                        'id="xs-injectables-links-module-UsersModule-2a69e7a70fac3451447cf995f1345d8fcfd4d320f0f130e44965787a749c3f8bbebffa5cef057006f080923b7ded0951fca0fd0736e4e7ad26202d5f8e57c65f"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});