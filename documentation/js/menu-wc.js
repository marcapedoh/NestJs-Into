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
                                            'data-bs-target="#controllers-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' :
                                            'id="xs-controllers-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' :
                                        'id="xs-injectables-links-module-AppModule-a461c790b1cfabec3cb2180d3658049f987ed1689193a48b6255dcce409d5a917b13a8a352bac8fbfee887bfcc1172ad8da7cea376a9f7211bf5077ab01c2ae8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
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
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-415c058d7c3dc177fee3c94f7191aba0382b8ab9f7d2bfaee19fe7472ef07ad391784c712a14bc0810e3ddd924b690a0489457c0f49dbee94bafa0578e1eb2fc"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' : 'data-bs-target="#xs-controllers-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' :
                                            'id="xs-controllers-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' : 'data-bs-target="#xs-injectables-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' :
                                        'id="xs-injectables-links-module-PostModule-f062f74db883b45fd64f9acdc3a1aee8b0257d348dc8ebe5d4410bc7c83cdc90130091f340dd584c1023d0d4fd699d22ac04ac41cf4d58c3e87365ad3662f46e"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' :
                                            'id="xs-controllers-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' :
                                        'id="xs-injectables-links-module-TagsModule-feb07ea50182d07b8919185ff80e4bd6e9df3163f8cc86592776da74310e0e3292c1156d94fe8136fc80296547c73fa3d263bd41aeb96a736f7500147ac434b8"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' :
                                            'id="xs-controllers-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' :
                                        'id="xs-injectables-links-module-UsersModule-1f239ff4acb65e94387fb91eefd187605cb440fe183b78ab92e88a464acf9605c48ca280523a3ebe703e5e3e3c9cc6880497a8e065382e9bdde6b1ebe9588fae"' }>
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
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
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
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
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