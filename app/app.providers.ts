import { provide }                             from "@angular/core";  
import { OidcTokenManagerService }             from "./common.services/oidc-token-manager.service";
import { HttpExtendedService }                 from "./common.services/http-extended.service";
import { AutoLinkerService }                   from "./common.services/auto-linker.service";

let $ = require("jquery");

export const APP_PROVIDERS = [
  //provide("BASE_URL", { useValue: "http://localhost:7338/" }),  // RememberMe REST API Application (development)
  provide("BASE_URL", { useValue: "http://localhost:8887/" }),  // RememberMe REST API Application (production)
  provide("$", { useValue: $ }),
  OidcTokenManagerService,
  AutoLinkerService,
  HttpExtendedService  // Used until a proper interceptor has been implemented 
];

