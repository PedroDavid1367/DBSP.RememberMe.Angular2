import { provide }                             from "@angular/core";  
import { OidcTokenManagerService }             from "./common.services/oidc-token-manager.service"
import { HttpExtendedService }                 from "./common.services/http-extended.service"

let $ = require("jquery");

export const APP_PROVIDERS = [
  provide("BASE_URL", { useValue: "http://localhost:7338/" }),  // RememberMe REST API Application
  provide("$", { useValue: $ }),
  OidcTokenManagerService,
  HttpExtendedService  // Used until a proper interceptor has been implemented 
];

