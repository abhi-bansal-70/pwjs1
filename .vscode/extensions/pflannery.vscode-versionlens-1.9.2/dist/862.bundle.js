"use strict";exports.id=862,exports.ids=[862],exports.modules={2502:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},8128:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(2502),exports),__exportStar(__webpack_require__(6903),exports),__exportStar(__webpack_require__(2041),exports)},6903:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.RequestLightClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),defaultHeaders={"user-agent":"vscode-versionlens (gitlab.com/versionlens/vscode-versionlens)"};exports.RequestLightClient=class{xhr;options;logger;constructor(xhr,options,logger){this.xhr=xhr,this.options=options,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("xhr",xhr),(0,guards_1.throwUndefinedOrNull)("options",options),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async request(method,baseUrl,query={},headers={}){const url=clients_1.UrlUtils.createUrl(baseUrl,query);try{const response=await this.xhr({url,type:method,headers:Object.assign({},headers,defaultHeaders),strictSSL:this.options.http.strictSSL});return{source:clients_1.ClientResponseSource.remote,status:response.status,data:response.responseText,rejected:!1}}catch(error){const errorResponse=error;throw{source:clients_1.ClientResponseSource.remote,status:errorResponse.status,data:errorResponse.responseText,rejected:!0}}}}},2041:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createJsonClient=exports.createHttpClient=void 0;const clients_1=__webpack_require__(6502),RequireLight=__importStar(__webpack_require__(6283)),requestLightClient_1=__webpack_require__(6903);function createHttpClient(options,logger){return new requestLightClient_1.RequestLightClient(RequireLight.xhr,options,logger)}exports.createHttpClient=createHttpClient,exports.createJsonClient=function(options,logger){return new clients_1.JsonHttpClient(createHttpClient(options,logger))}},7862:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(4898),exports),__exportStar(__webpack_require__(3521),exports),__exportStar(__webpack_require__(1108),exports),__exportStar(__webpack_require__(9361),exports)},4297:(__unused_webpack_module,exports)=>{var DubContributions;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DubContributions=void 0,function(DubContributions){DubContributions.Caching="dub.caching",DubContributions.Http="dub.http",DubContributions.DependencyProperties="dub.dependencyProperties",DubContributions.ApiUrl="dub.apiUrl",DubContributions.FilePatterns="dub.files",DubContributions.OnSaveChangesTask="dub.onSaveChanges",DubContributions.prereleaseTagFilter="dub.prereleaseTagFilter"}(DubContributions||(exports.DubContributions=DubContributions={}))},4898:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseSuggestions=exports.DubClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),packages_1=__webpack_require__(7074);function parseSuggestions(versionRange,releases,prereleases){const suggestions=(0,packages_1.createSuggestions)(versionRange,releases,prereleases),hasNoMatch=suggestions[0].name===packages_1.SuggestionStatusText.NoMatch,isTildeVersion="~"===versionRange.charAt(0);if(hasNoMatch&&isTildeVersion&&releases.length>0){const latestRelease=releases[releases.length-1];latestRelease===versionRange?(suggestions[0]=packages_1.SuggestionFactory.createMatchesLatestStatus(versionRange),suggestions.pop()):suggestions[1]=packages_1.SuggestionFactory.createLatestUpdateable(latestRelease)}return suggestions}exports.DubClient=class{config;jsonClient;logger;constructor(config,jsonClient,logger){this.config=config,this.jsonClient=jsonClient,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("config",config),(0,guards_1.throwUndefinedOrNull)("jsonClient",jsonClient),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async fetchPackage(request){const requestedPackage=request.dependency.package,semverSpec=packages_1.VersionUtils.parseSemver(requestedPackage.version),url=`${this.config.apiUrl}${encodeURIComponent(requestedPackage.name)}/info`;try{return await this.createRemotePackageDocument(url,request,semverSpec)}catch(error){const errorResponse=error;this.logger.debug("Caught exception from %s: %O",packages_1.PackageSourceType.Registry,errorResponse);const suggestion=packages_1.SuggestionFactory.createFromHttpStatus(errorResponse.status);if(null!=suggestion)return packages_1.ClientResponseFactory.create(packages_1.PackageSourceType.Registry,errorResponse,[suggestion]);throw errorResponse}}async createRemotePackageDocument(url,request,semverSpec){const requestedPackage=request.dependency.package,httpResponse=await this.jsonClient.request(clients_1.HttpClientRequestMethods.get,url,{minimize:"true"},{}),packageInfo=httpResponse.data,versionRange=semverSpec.rawVersion,resolved={name:requestedPackage.name,version:versionRange},responseStatus={source:httpResponse.source,status:httpResponse.status},rawVersions=packages_1.VersionUtils.extractVersionsFromMap(packageInfo.versions),{releases,prereleases}=packages_1.VersionUtils.splitReleasesFromArray(rawVersions,this.config.prereleaseTagFilter),suggestions=parseSuggestions(versionRange,releases,prereleases);return{source:packages_1.PackageSourceType.Registry,responseStatus,type:semverSpec.type,resolved,suggestions}}},exports.parseSuggestions=parseSuggestions},3521:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DubConfig=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),utils_1=__webpack_require__(7130),eDubContributions_1=__webpack_require__(4297),ctorParam=(0,utils_1.nameOf)();exports.DubConfig=class{config;caching;http;constructor(config,caching,http){this.config=config,this.caching=caching,this.http=http,(0,guards_1.throwUndefinedOrNull)(ctorParam.config,config),(0,guards_1.throwUndefinedOrNull)(ctorParam.caching,caching),(0,guards_1.throwUndefinedOrNull)(ctorParam.http,http)}get fileMatcher(){return{language:"json",scheme:"file",pattern:this.filePatterns,exclude:""}}get filePatterns(){return this.config.get(eDubContributions_1.DubContributions.FilePatterns)}get dependencyProperties(){return this.config.get(eDubContributions_1.DubContributions.DependencyProperties)}get apiUrl(){return clients_1.UrlUtils.ensureEndSlash(this.config.get(eDubContributions_1.DubContributions.ApiUrl))}get onSaveChangesTask(){return this.config.get(eDubContributions_1.DubContributions.OnSaveChangesTask)}get prereleaseTagFilter(){return this.config.get(eDubContributions_1.DubContributions.prereleaseTagFilter)}}},9361:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.configureContainer=void 0;const serviceUtils_1=__webpack_require__(5569);exports.configureContainer=async function(serviceProvider,services){return(0,serviceUtils_1.addCachingOptions)(services),(0,serviceUtils_1.addHttpOptions)(services),(0,serviceUtils_1.addDubConfig)(services),(0,serviceUtils_1.addJsonClient)(services),(0,serviceUtils_1.addDubClient)(services),(0,serviceUtils_1.addSuggestionProvider)(services),await services.buildChild("dub",serviceProvider)}},1108:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DubSuggestionProvider=void 0;const guards_1=__webpack_require__(6202),packages_1=__webpack_require__(7074),complexTypeHandlers={[packages_1.PackageDescriptorType.version]:packages_1.createVersionDescFromJsonNode,[packages_1.PackageDescriptorType.path]:packages_1.createPathDescFromJsonNode,repository:packages_1.createRepoDescFromJsonNode};exports.DubSuggestionProvider=class{client;config;logger;name="dub";constructor(client,config,logger){this.client=client,this.config=config,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("client",client),(0,guards_1.throwUndefinedOrNull)("config",config),(0,guards_1.throwUndefinedOrNull)("logger",logger)}parseDependencies(packagePath,packageText){const options={includePropNames:this.config.dependencyProperties,complexTypeHandlers},parsedPackages=(0,packages_1.parsePackagesJson)(packageText,options),packageDependencies=[];for(const packageDesc of parsedPackages)if(packageDesc.hasType(packages_1.PackageDescriptorType.version)){const nameDesc=packageDesc.getType(packages_1.PackageDescriptorType.name),versionDesc=packageDesc.getType(packages_1.PackageDescriptorType.version);packageDependencies.push(new packages_1.PackageDependency((0,packages_1.createPackageResource)(nameDesc.name,versionDesc.version,packagePath),nameDesc.nameRange,versionDesc.versionRange,packageDesc))}else;return packageDependencies}}},5569:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.addSuggestionProvider=exports.addDubClient=exports.addJsonClient=exports.addDubConfig=exports.addHttpOptions=exports.addCachingOptions=void 0;const caching_1=__webpack_require__(2304),http_1=__webpack_require__(5829),utils_1=__webpack_require__(7130),http_2=__webpack_require__(8128),eDubContributions_1=__webpack_require__(4297),dubClient_1=__webpack_require__(4898),dubConfig_1=__webpack_require__(3521),dubSuggestionProvider_1=__webpack_require__(1108);exports.addCachingOptions=function(services){services.addSingleton((0,utils_1.nameOf)().dubCachingOpts,(container=>new caching_1.CachingOptions(container.appConfig,eDubContributions_1.DubContributions.Caching,"caching")))},exports.addHttpOptions=function(services){services.addSingleton((0,utils_1.nameOf)().dubHttpOpts,(container=>new http_1.HttpOptions(container.appConfig,eDubContributions_1.DubContributions.Http,"http")))},exports.addDubConfig=function(services){services.addSingleton((0,utils_1.nameOf)().dubConfig,(container=>new dubConfig_1.DubConfig(container.appConfig,container.dubCachingOpts,container.dubHttpOpts)))},exports.addJsonClient=function(services){const serviceName=(0,utils_1.nameOf)().dubJsonClient;services.addSingleton(serviceName,(container=>(0,http_2.createJsonClient)({caching:container.dubCachingOpts,http:container.dubHttpOpts},container.logger.child({namespace:serviceName}))))},exports.addDubClient=function(services){const serviceName=(0,utils_1.nameOf)().dubClient;services.addSingleton(serviceName,(container=>new dubClient_1.DubClient(container.dubConfig,container.dubJsonClient,container.logger.child({namespace:serviceName}))))},exports.addSuggestionProvider=function(services){services.addScoped((0,utils_1.nameOf)().suggestionProvider,(container=>new dubSuggestionProvider_1.DubSuggestionProvider(container.dubClient,container.dubConfig,container.logger.child({namespace:"dubSuggestionProvider"}))))}}};
//# sourceMappingURL=862.bundle.js.map