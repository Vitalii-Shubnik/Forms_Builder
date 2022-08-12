import { TestBed } from '@angular/core/testing';

import { ContentApplicationJsonInterceptor } from './content-application-json.interceptor';

describe('ContentApplicationJsonInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContentApplicationJsonInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContentApplicationJsonInterceptor = TestBed.inject(ContentApplicationJsonInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
