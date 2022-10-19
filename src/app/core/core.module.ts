import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiKeyInterceptor } from '@core/interceptors/api-key.interceptor';
import { ApiUrlInterceptor } from '@core/interceptors/api-url.interceptor';
import { ApiRegionCodeInterceptor } from '@core/interceptors/api-region-code.interceptor';
import { ApiLanguageInterceptor } from '@core/interceptors/api-language.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiRegionCodeInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiLanguageInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
