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
                                            'data-bs-target="#controllers-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' :
                                            'id="xs-controllers-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' :
                                        'id="xs-injectables-links-module-AppModule-0152e0cbab27e04e67d03084e727d899414f063f9d6e73d9b0f90ab1d43f42404b2845ca7556f7f7bd06e31331863272f9b16063513a1958394ab05315dc45cb"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' :
                                            'id="xs-controllers-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' :
                                        'id="xs-injectables-links-module-AuthModule-106c2c6ac400fe2af21c244e4c8411484d89b0846154ef395b81096aedcc04da5f7d48e1b0f0caf69b8a4c6f0f4e56b53c97d3d8afb926138355c2d8504e2714"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
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
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-b5ee8593f36b549bf53f93647d38c525215759935e401145b7c3a1a8d7d9badec5dd63917fabfaa270e36a163f7f380bce90211772a92a0f7b4565721b77fd02"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-b5ee8593f36b549bf53f93647d38c525215759935e401145b7c3a1a8d7d9badec5dd63917fabfaa270e36a163f7f380bce90211772a92a0f7b4565721b77fd02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-b5ee8593f36b549bf53f93647d38c525215759935e401145b7c3a1a8d7d9badec5dd63917fabfaa270e36a163f7f380bce90211772a92a0f7b4565721b77fd02"' :
                                        'id="xs-injectables-links-module-PaginationModule-b5ee8593f36b549bf53f93647d38c525215759935e401145b7c3a1a8d7d9badec5dd63917fabfaa270e36a163f7f380bce90211772a92a0f7b4565721b77fd02"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' : 'data-bs-target="#xs-controllers-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' :
                                            'id="xs-controllers-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' : 'data-bs-target="#xs-injectables-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' :
                                        'id="xs-injectables-links-module-PostModule-cb6a9004617ad457d066c36679413278851842b7beb8c57012342264f2d3762af29380d813b901d72eac2445449fdda26445260b071efb978c6982aa13db365c"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' :
                                            'id="xs-controllers-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' :
                                        'id="xs-injectables-links-module-UsersModule-a302d275d53c3921b29ad74ad493b35b75f68f538cd34fe01d7a9292fe9a35bf365b0b6a1514ee2d27ea22ef948b1abfe44085903cf193d041a4ba4aedf1df6b"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserCreateManyProvider</a>
                                        </li>
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
                                <a href="classes/CreateManyUsersDTO.html" data-type="entity-link" >CreateManyUsersDTO</a>
                            </li>
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
                                <a href="classes/GetPostBaseDto.html" data-type="entity-link" >GetPostBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostDto.html" data-type="entity-link" >GetPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
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
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserProvider.html" data-type="entity-link" >CreateUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" >FindOneUserByEmailProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationProvider.html" data-type="entity-link" >PaginationProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInProvider.html" data-type="entity-link" >SignInProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserCreateManyProvider.html" data-type="entity-link" >UserCreateManyProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
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
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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