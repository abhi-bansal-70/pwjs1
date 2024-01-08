"use strict";exports.id=444,exports.ids=[444],exports.modules={2502:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},8128:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(2502),exports),__exportStar(__webpack_require__(6903),exports),__exportStar(__webpack_require__(2041),exports)},6903:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.RequestLightClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),defaultHeaders={"user-agent":"vscode-versionlens (gitlab.com/versionlens/vscode-versionlens)"};exports.RequestLightClient=class{xhr;options;logger;constructor(xhr,options,logger){this.xhr=xhr,this.options=options,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("xhr",xhr),(0,guards_1.throwUndefinedOrNull)("options",options),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async request(method,baseUrl,query={},headers={}){const url=clients_1.UrlUtils.createUrl(baseUrl,query);try{const response=await this.xhr({url,type:method,headers:Object.assign({},headers,defaultHeaders),strictSSL:this.options.http.strictSSL});return{source:clients_1.ClientResponseSource.remote,status:response.status,data:response.responseText,rejected:!1}}catch(error){const errorResponse=error;throw{source:clients_1.ClientResponseSource.remote,status:errorResponse.status,data:errorResponse.responseText,rejected:!0}}}}},2041:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createJsonClient=exports.createHttpClient=void 0;const clients_1=__webpack_require__(6502),RequireLight=__importStar(__webpack_require__(6283)),requestLightClient_1=__webpack_require__(6903);function createHttpClient(options,logger){return new requestLightClient_1.RequestLightClient(RequireLight.xhr,options,logger)}exports.createHttpClient=createHttpClient,exports.createJsonClient=function(options,logger){return new clients_1.JsonHttpClient(createHttpClient(options,logger))}},6421:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},7422:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(6421),exports),__exportStar(__webpack_require__(1493),exports),__exportStar(__webpack_require__(9398),exports)},1493:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.PromiseSpawnClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502);exports.PromiseSpawnClient=class{promiseSpawnFn;processCache;cachingOptions;logger;constructor(promiseSpawnFn,processCache,cachingOptions,logger){this.promiseSpawnFn=promiseSpawnFn,this.processCache=processCache,this.cachingOptions=cachingOptions,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("promiseSpawnFn",promiseSpawnFn),(0,guards_1.throwUndefinedOrNull)("processCache",processCache),(0,guards_1.throwUndefinedOrNull)("cachingOptions",cachingOptions),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async request(cmd,args,cwd){const cacheKey=`${cmd} ${args.join(" ")}`;this.logger.silly("executing %s",cacheKey);try{let source=clients_1.ClientResponseSource.cache;const result=await this.processCache.getOrCreate(cacheKey,(async()=>(source=clients_1.ClientResponseSource.cli,await this.promiseSpawnFn(cmd,args,{cwd,stdioString:!0}))),this.cachingOptions.duration);return this.logger.debug("command result from %s - '%s'",source,cacheKey),{data:result.stdout,source,status:result.code,rejected:!1}}catch(error){throw{data:error.message,source:clients_1.ClientResponseSource.cli,status:error.code,rejected:!0}}}}},9398:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createProcessClient=void 0;const promise_spawn_1=__importDefault(__webpack_require__(8162)),promiseSpawnClient_1=__webpack_require__(1493);exports.createProcessClient=function(processCache,cachingOpts,logger){return new promiseSpawnClient_1.PromiseSpawnClient(promise_spawn_1.default,processCache,cachingOpts,logger)}},9444:function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(4356),exports),__exportStar(__webpack_require__(2190),exports),__exportStar(__webpack_require__(4381),exports),__exportStar(__webpack_require__(3950),exports),__exportStar(__webpack_require__(2185),exports),__exportStar(__webpack_require__(517),exports),__exportStar(__webpack_require__(4234),exports),__exportStar(__webpack_require__(5146),exports),__exportStar(__webpack_require__(3751),exports),__exportStar(__webpack_require__(7830),exports),__exportStar(__webpack_require__(1010),exports),__exportStar(__webpack_require__(7846),exports),__exportStar(__webpack_require__(4256),exports),__exportStar(__webpack_require__(2930),exports)},4356:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotNetCli=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),utils_1=__webpack_require__(7130);class DotNetCli{config;processClient;logger;static command="dotnet";static fetchSourceArgs=["nuget","list","source","--format","short"];constructor(config,processClient,logger){this.config=config,this.processClient=processClient,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("config",config),(0,guards_1.throwUndefinedOrNull)("processClient",processClient),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async fetchSources(cwd){this.logger.debug("executing %s '%s'",DotNetCli.command,DotNetCli.fetchSourceArgs.join(" "));try{const result=await this.processClient.request(DotNetCli.command,DotNetCli.fetchSourceArgs,cwd),{data}=result;if(data.indexOf("error")>-1)return Promise.reject(result);if(0===data.length||-1===data.indexOf("E"))return[];const splitChar=data.indexOf(utils_1.CrLf)>0?utils_1.CrLf:utils_1.Lf;let lines=data.split(splitChar);""===lines[lines.length-1]&&lines.pop();const sources=function(lines){return lines.map((function(line){const enabled="E"===line.substring(0,1),machineWide="M"===line.substring(1,2),offset=machineWide?3:2,url=line.substring(offset);return{enabled,machineWide,url,protocol:clients_1.UrlUtils.getProtocolFromUrl(url)}}))}(lines).filter((s=>s.enabled)),combinedSources=[...this.config.nuget.sources.map((function(url){const protocol=clients_1.UrlUtils.getProtocolFromUrl(url);return{enabled:!0,machineWide:protocol===clients_1.UrlUtils.RegistryProtocols.file,url,protocol}})),...sources];return this.logger.debug("package sources found: %s",combinedSources.map((x=>x.url))),combinedSources}catch(error){return this.logger.error("failed to get package sources: %s",error),this.logger.info("using fallback source: %s",this.config.fallbackNugetSource),[{enabled:!0,machineWide:!1,protocol:clients_1.UrlUtils.RegistryProtocols.https,url:this.config.fallbackNugetSource}]}}}exports.DotNetCli=DotNetCli},2190:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.NuGetPackageClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),packages_1=__webpack_require__(7074),parseVersionSpec_1=__webpack_require__(2930);exports.NuGetPackageClient=class{config;jsonClient;logger;constructor(config,jsonClient,logger){this.config=config,this.jsonClient=jsonClient,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("config",config),(0,guards_1.throwUndefinedOrNull)("jsonClient",jsonClient),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async fetchPackage(request){const urls=request.clientData.serviceUrls,autoCompleteUrl=urls[request.attempt];try{return await this.createRemotePackageDocument(autoCompleteUrl,request)}catch(error){const errorResponse=error;if(this.logger.debug("request failed for '%s' from '%s': %O",request.dependency.package.name,autoCompleteUrl,errorResponse),request.attempt++,404===errorResponse.status&&request.attempt<urls.length)return this.logger.debug("attempting to fetch '%s' from '%s'",request.dependency.package.name,urls[request.attempt]),this.fetchPackage(request);const suggestion=packages_1.SuggestionFactory.createFromHttpStatus(errorResponse.status);return null!=suggestion?packages_1.ClientResponseFactory.create(packages_1.PackageSourceType.Registry,errorResponse,[suggestion]):Promise.reject(errorResponse)}}async createRemotePackageDocument(url,request){const requestedPackage=request.dependency.package,packageUrl=clients_1.UrlUtils.ensureEndSlash(url)+`${requestedPackage.name.toLowerCase()}/index.json`,httpResponse=await this.jsonClient.request(clients_1.HttpClientRequestMethods.get,packageUrl,{},{}),{data}=httpResponse,source=packages_1.PackageSourceType.Registry,packageInfo=data,responseStatus={source:httpResponse.source,status:httpResponse.status},dotnetSpec=(0,parseVersionSpec_1.parseVersionSpec)(requestedPackage.version);if(dotnetSpec.spec&&dotnetSpec.spec.hasFourSegments)return packages_1.ClientResponseFactory.create(packages_1.PackageSourceType.Registry,httpResponse,[]);const rawVersions=packages_1.VersionUtils.filterSemverVersions(packageInfo.versions),{releases,prereleases}=packages_1.VersionUtils.splitReleasesFromArray(rawVersions,this.config.prereleaseTagFilter);if(null===dotnetSpec.type)return packages_1.ClientResponseFactory.createNoMatch(source,packages_1.PackageVersionType.Version,packages_1.ClientResponseFactory.createResponseStatus(httpResponse.source,404),releases.length>0?releases[releases.length-1]:null);const versionRange=dotnetSpec.resolvedVersion,resolved={name:requestedPackage.name,version:versionRange},suggestions=(0,packages_1.createSuggestions)(versionRange,releases,prereleases);return{source,responseStatus,type:dotnetSpec.type,resolved,suggestions}}}},4381:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.NuGetResourceClient=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502);exports.NuGetResourceClient=class{jsonClient;logger;constructor(jsonClient,logger){this.jsonClient=jsonClient,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("jsonClient",jsonClient),(0,guards_1.throwUndefinedOrNull)("logger",logger)}async fetchResource(source){const query={},headers={};this.logger.debug("Requesting PackageBaseAddressService from %s",source.url);try{const response=await this.jsonClient.request(clients_1.HttpClientRequestMethods.get,source.url,query,headers),foundPackageBaseAddressServices=response.data.resources.filter((res=>res["@type"].indexOf("PackageBaseAddress")>-1))[0]["@id"];return this.logger.debug("Resolved PackageBaseAddressService endpoint: %O",foundPackageBaseAddressServices),foundPackageBaseAddressServices}catch(error){const responseError=error;return this.logger.error("Could not resolve nuget service index. %O",responseError),""}}}},3950:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},6384:(__unused_webpack_module,exports)=>{var DotNetContributions;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotNetContributions=void 0,function(DotNetContributions){DotNetContributions.Caching="dotnet.caching",DotNetContributions.Http="dotnet.http",DotNetContributions.Nuget="dotnet.nuget",DotNetContributions.DependencyProperties="dotnet.dependencyProperties",DotNetContributions.FilePatterns="dotnet.files",DotNetContributions.OnSaveChangesTask="dotnet.onSaveChanges",DotNetContributions.PrereleaseTagFilter="dotnet.prereleaseTagFilter"}(DotNetContributions||(exports.DotNetContributions=DotNetContributions={}))},8617:(__unused_webpack_module,exports)=>{var NugetContributions;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NugetContributions=void 0,function(NugetContributions){NugetContributions.Sources="sources"}(NugetContributions||(exports.NugetContributions=NugetContributions={}))},2185:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},517:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},4234:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotNetConfig=void 0;const guards_1=__webpack_require__(6202),utils_1=__webpack_require__(7130),eDotNetContributions_1=__webpack_require__(6384),ctorParam=(0,utils_1.nameOf)();exports.DotNetConfig=class{config;caching;http;constructor(config,caching,http,nugetOptions){this.config=config,this.caching=caching,this.http=http,(0,guards_1.throwUndefinedOrNull)(ctorParam.config,config),(0,guards_1.throwUndefinedOrNull)(ctorParam.caching,caching),(0,guards_1.throwUndefinedOrNull)(ctorParam.http,http),(0,guards_1.throwUndefinedOrNull)(ctorParam.nuget,nugetOptions),this.nuget=nugetOptions}nuget;get fileMatcher(){return{language:"xml",scheme:"file",pattern:this.filePatterns,exclude:"**/{obj,bin}/**"}}get filePatterns(){return this.config.get(eDotNetContributions_1.DotNetContributions.FilePatterns)}get dependencyProperties(){return this.config.get(eDotNetContributions_1.DotNetContributions.DependencyProperties)}get fallbackNugetSource(){return"https://api.nuget.org/v3/index.json"}get onSaveChangesTask(){return this.config.get(eDotNetContributions_1.DotNetContributions.OnSaveChangesTask)}get prereleaseTagFilter(){return this.config.get(eDotNetContributions_1.DotNetContributions.PrereleaseTagFilter)}}},5146:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.configureContainer=void 0;const serviceUtils_1=__webpack_require__(7013);exports.configureContainer=async function(serviceProvider,services){return(0,serviceUtils_1.addCachingOptions)(services),(0,serviceUtils_1.addNugetOptions)(services),(0,serviceUtils_1.addHttpOptions)(services),(0,serviceUtils_1.addDotNetConfig)(services),(0,serviceUtils_1.addProcessClient)(services),(0,serviceUtils_1.addCliClient)(services),(0,serviceUtils_1.addJsonClient)(services),(0,serviceUtils_1.addNuGetPackageClient)(services),(0,serviceUtils_1.addNuGetResourceClient)(services),(0,serviceUtils_1.addSuggestionProvider)(services),await services.buildChild("dotnet",serviceProvider)}},3751:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotNetSuggestionProvider=void 0;const guards_1=__webpack_require__(6202),clients_1=__webpack_require__(6502),packages_1=__webpack_require__(7074),dotnetParser_1=__webpack_require__(1010),dotnetReplaceVersion_1=__webpack_require__(4256);exports.DotNetSuggestionProvider=class{client;dotnetClient;nugetResClient;config;logger;name="dotnet";constructor(client,dotnetClient,nugetResClient,config,logger){this.client=client,this.dotnetClient=dotnetClient,this.nugetResClient=nugetResClient,this.config=config,this.logger=logger,(0,guards_1.throwUndefinedOrNull)("client",client),(0,guards_1.throwUndefinedOrNull)("dotnetClient",dotnetClient),(0,guards_1.throwUndefinedOrNull)("nugetResClient",nugetResClient),(0,guards_1.throwUndefinedOrNull)("config",config),(0,guards_1.throwUndefinedOrNull)("logger",logger)}suggestionReplaceFn=dotnetReplaceVersion_1.dotnetReplaceVersion;parseDependencies(packagePath,packageText){return(0,dotnetParser_1.parseDotNetPackagesXml)(packageText,this.config.dependencyProperties).filter((x=>x.hasType(packages_1.PackageDescriptorType.version))).map((packageDesc=>{const nameDesc=packageDesc.getType(packages_1.PackageDescriptorType.name),versionDesc=packageDesc.getType(packages_1.PackageDescriptorType.version);return new packages_1.PackageDependency((0,packages_1.createPackageResource)(nameDesc.name,versionDesc.version,packagePath),nameDesc.nameRange,versionDesc.versionRange,packageDesc)}))}async preFetchSuggestions(projectPath,packagePath){this.config.nuget.defrost();const promised=(await this.dotnetClient.fetchSources(packagePath)).filter((s=>s.protocol===clients_1.UrlUtils.RegistryProtocols.https||s.protocol===clients_1.UrlUtils.RegistryProtocols.http)).map((remoteSource=>this.nugetResClient.fetchResource(remoteSource))),serviceUrls=(await Promise.all(promised)).filter((url=>url.length>0));return 0===serviceUrls.length?(this.logger.error("Could not resolve any nuget service urls"),null):{serviceUrls}}}},7830:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.NugetOptions=void 0;const configuration_1=__webpack_require__(605),eNugetContributions_1=__webpack_require__(8617);class NugetOptions extends configuration_1.Options{constructor(config,section){super(config,section)}get sources(){return this.get(eNugetContributions_1.NugetContributions.Sources)}}exports.NugetOptions=NugetOptions},1010:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.parsePackageNodes=exports.parseDotNetPackagesXml=void 0;const packages_1=__webpack_require__(7074),dotnetParserTypeFactory_1=__webpack_require__(7846);function parsePackageNodes(doc,includePropNames){const matchedDependencies=[],includeNodes=includePropNames.map((n=>doc.findExactPaths(n))).flat();for(const node of includeNodes){const packageDesc=new packages_1.PackageDescriptor,nameDesc="Sdk"===node.name?(0,dotnetParserTypeFactory_1.createSdkNameDescFromXmlAttr)(node):(0,dotnetParserTypeFactory_1.createNameDescFromXmlAttr)(node);if(!nameDesc)continue;const versionDesc=(0,dotnetParserTypeFactory_1.createVersionDescFromXmlAttr)(node)||(0,dotnetParserTypeFactory_1.createBlankVersionDescFromXmlAttr)(node);versionDesc&&(packageDesc.addType(nameDesc),packageDesc.addType(versionDesc),matchedDependencies.push(packageDesc))}return matchedDependencies}exports.parseDotNetPackagesXml=function(xml,includePropertyNames){if(0===includePropertyNames.length)return[];const document=new packages_1.XmlDoc;return document.parse(xml),document.errors.length>0?[]:parsePackageNodes(document,includePropertyNames)},exports.parsePackageNodes=parsePackageNodes},7846:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBlankVersionDescFromXmlAttr=exports.createVersionDescFromXmlAttr=exports.createSdkNameDescFromXmlAttr=exports.createNameDescFromXmlAttr=exports.noVersionAttr=void 0;const packages_1=__webpack_require__(7074);exports.noVersionAttr=">=*.*.*",exports.createNameDescFromXmlAttr=function(node){const includeAttr=node.attributes.include||node.attributes.update;if(!includeAttr)return;const nameRange={start:node.tagOpenStart,end:node.tagOpenStart};return{type:packages_1.PackageDescriptorType.name,name:includeAttr.value,nameRange}},exports.createSdkNameDescFromXmlAttr=function(node){const nameAttr=node.attributes.name;if(!nameAttr)return;const nameRange={start:node.tagOpenStart,end:node.tagOpenStart};return{type:packages_1.PackageDescriptorType.name,name:nameAttr.value,nameRange}},exports.createVersionDescFromXmlAttr=function(keyNode){const versionAttr=keyNode.attributes.version||keyNode.attributes.versionoverride;if(!versionAttr)return;const versionRange={start:versionAttr.start,end:versionAttr.end};return{type:packages_1.PackageDescriptorType.version,version:versionAttr.value,versionRange}},exports.createBlankVersionDescFromXmlAttr=function(node){const versionRange={start:node.tagCloseStart,end:node.tagCloseStart};return{type:packages_1.PackageDescriptorType.version,version:exports.noVersionAttr,versionRange}}},7013:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.addSuggestionProvider=exports.addNuGetResourceClient=exports.addNuGetPackageClient=exports.addJsonClient=exports.addCliClient=exports.addProcessClient=exports.addDotNetConfig=exports.addNugetOptions=exports.addHttpOptions=exports.addCachingOptions=void 0;const caching_1=__webpack_require__(2304),http_1=__webpack_require__(5829),utils_1=__webpack_require__(7130),http_2=__webpack_require__(8128),process_1=__webpack_require__(7422),dotnetCli_1=__webpack_require__(4356),nugetPackageClient_1=__webpack_require__(2190),nugetResourceClient_1=__webpack_require__(4381),eDotNetContributions_1=__webpack_require__(6384),dotnetConfig_1=__webpack_require__(4234),dotnetSuggestionProvider_1=__webpack_require__(3751),nugetOptions_1=__webpack_require__(7830);exports.addCachingOptions=function(services){services.addSingleton((0,utils_1.nameOf)().dotnetCachingOpts,(container=>new caching_1.CachingOptions(container.appConfig,eDotNetContributions_1.DotNetContributions.Caching,"caching")))},exports.addHttpOptions=function(services){services.addSingleton((0,utils_1.nameOf)().dotnetHttpOpts,(container=>new http_1.HttpOptions(container.appConfig,eDotNetContributions_1.DotNetContributions.Http,"http")))},exports.addNugetOptions=function(services){services.addSingleton((0,utils_1.nameOf)().nugetOpts,(container=>new nugetOptions_1.NugetOptions(container.appConfig,eDotNetContributions_1.DotNetContributions.Nuget)))},exports.addDotNetConfig=function(services){services.addSingleton((0,utils_1.nameOf)().dotnetConfig,(container=>new dotnetConfig_1.DotNetConfig(container.appConfig,container.dotnetCachingOpts,container.dotnetHttpOpts,container.nugetOpts)))},exports.addProcessClient=function(services){const serviceName=(0,utils_1.nameOf)().dotnetProcess;services.addSingleton(serviceName,(container=>(0,process_1.createProcessClient)(container.processesCache,container.dotnetCachingOpts,container.logger.child({namespace:serviceName}))))},exports.addCliClient=function(services){const serviceName=(0,utils_1.nameOf)().dotnetCli;services.addSingleton(serviceName,(container=>new dotnetCli_1.DotNetCli(container.dotnetConfig,container.dotnetProcess,container.logger.child({namespace:serviceName}))))},exports.addJsonClient=function(services){const serviceName=(0,utils_1.nameOf)().dotnetJsonClient;services.addSingleton(serviceName,(container=>(0,http_2.createJsonClient)({caching:container.dotnetCachingOpts,http:container.dotnetHttpOpts},container.logger.child({namespace:serviceName}))))},exports.addNuGetPackageClient=function(services){const serviceName=(0,utils_1.nameOf)().nugetClient;services.addSingleton(serviceName,(container=>new nugetPackageClient_1.NuGetPackageClient(container.dotnetConfig,container.dotnetJsonClient,container.logger.child({namespace:serviceName}))))},exports.addNuGetResourceClient=function(services){const serviceName=(0,utils_1.nameOf)().nugetResClient;services.addSingleton(serviceName,(container=>new nugetResourceClient_1.NuGetResourceClient(container.dotnetJsonClient,container.logger.child({namespace:serviceName}))))},exports.addSuggestionProvider=function(services){services.addScoped((0,utils_1.nameOf)().suggestionProvider,(container=>new dotnetSuggestionProvider_1.DotNetSuggestionProvider(container.nugetClient,container.dotnetCli,container.nugetResClient,container.dotnetConfig,container.logger.child({namespace:"dotnetSuggestionProvider"}))))}},4256:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.dotnetReplaceVersion=void 0;const packages_1=__webpack_require__(7074),dotnetParserTypeFactory_1=__webpack_require__(7846);exports.dotnetReplaceVersion=function(suggestionUpdate,newVersion){return(0,packages_1.defaultReplaceFn)(suggestionUpdate,suggestionUpdate.parsedVersion===dotnetParserTypeFactory_1.noVersionAttr?`Version="${newVersion}" `:newVersion)}},2930:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseVersionSpec=void 0;const packages_1=__webpack_require__(7074),semver_1=__importDefault(__webpack_require__(912));function buildVersionSpec(value){let formattedValue=function(value){if(!value||-1!==value.indexOf("[")||-1!==value.indexOf("(")||-1!==value.indexOf(",")||-1!==value.indexOf(")")||-1!==value.indexOf("]")||-1!==value.indexOf("*"))return value;let dotCount=0;for(let i=0;i<value.length;i++){const c=value[i];if("."===c)dotCount++;else if(isNaN(parseInt(c)))return value}let fmtValue="";if(0===dotCount)fmtValue=value+".0.0";else{if(1!==dotCount)return value;fmtValue=value+".0"}return fmtValue}(value.trim());if(!formattedValue)return null;if(semver_1.default.parse(formattedValue,{includePrerelease:!0}))return{version:formattedValue,isMinInclusive:!0,isMaxInclusive:!0,hasFourSegments:!1};try{const parsedNodeRange=semver_1.default.validRange(formattedValue,{includePrerelease:!0});if(parsedNodeRange)return{version:parsedNodeRange,isMinInclusive:!0,isMaxInclusive:!0,hasFourSegments:!1}}catch{}if(formattedValue.length<3)return null;const versionSpec={},first=formattedValue[0];if("["===first)versionSpec.isMinInclusive=!0;else{if("("!==first)return packages_1.VersionUtils.isFourSegmentedVersion(formattedValue)?{hasFourSegments:!0}:null;versionSpec.isMinInclusive=!1}const last=formattedValue[formattedValue.length-1];"]"===last?versionSpec.isMaxInclusive=!0:")"===last&&(versionSpec.isMaxInclusive=!1),formattedValue=formattedValue.substr(1,formattedValue.length-2);const parts=formattedValue.split(",");if(parts.length>2)return null;if(parts.every((x=>!x)))return null;const minVersion=parts[0],maxVersion=2==parts.length?parts[1]:parts[0];if(minVersion){const parsedVersion=buildVersionSpec(minVersion);if(!parsedVersion)return null;versionSpec.minVersionSpec=parsedVersion,versionSpec.hasFourSegments=parsedVersion.hasFourSegments}if(maxVersion){const parsedVersion=buildVersionSpec(maxVersion);if(!parsedVersion)return null;versionSpec.maxVersionSpec=parsedVersion,versionSpec.hasFourSegments=parsedVersion.hasFourSegments}return versionSpec}exports.parseVersionSpec=function(rawVersion){const spec=buildVersionSpec(rawVersion);let version,isValidVersion=!1,isValidRange=!1;if(spec&&!spec.hasFourSegments){const{valid,validRange}=semver_1.default;version=function(versionSpec){if(versionSpec.version&&versionSpec.isMinInclusive&&versionSpec.isMaxInclusive)return versionSpec.version;if(versionSpec.minVersionSpec&&versionSpec.maxVersionSpec&&versionSpec.minVersionSpec.version===versionSpec.maxVersionSpec.version&&versionSpec.isMinInclusive&&versionSpec.isMaxInclusive)return versionSpec.minVersionSpec.version;let rangeBuilder="";versionSpec.minVersionSpec&&(rangeBuilder+=">",versionSpec.isMinInclusive&&(rangeBuilder+="="),rangeBuilder+=versionSpec.minVersionSpec.version);versionSpec.maxVersionSpec&&(rangeBuilder+=rangeBuilder.length>0?" ":"",rangeBuilder+="<",versionSpec.isMaxInclusive&&(rangeBuilder+="="),rangeBuilder+=versionSpec.maxVersionSpec.version);return rangeBuilder}(spec),isValidVersion=valid(version,packages_1.VersionUtils.loosePrereleases),isValidRange=!isValidVersion&&null!==validRange(version,packages_1.VersionUtils.loosePrereleases)}return{type:isValidVersion?packages_1.PackageVersionType.Version:isValidRange?packages_1.PackageVersionType.Range:null,rawVersion,resolvedVersion:spec?version:"",spec}}}};
//# sourceMappingURL=444.bundle.js.map